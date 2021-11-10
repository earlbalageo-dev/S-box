import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import validateRegisterInput from '../utils/validateRegisterInput.js';
import { getInitials } from '../utils/other.js';

//@desc    Regiser a new User
//@route   POST /register
//@access  PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { isValid, errors } = validateRegisterInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('Email has already been used');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Something went wrong in our part, please try again');
  }
});

//@desc    Login user
//@route   POST /login
//@access  PUBLIC

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const { _id, firstName, lastName, initials, email } = user;
    res.json({
      _id,
      firstName,
      lastName,
      initials,
      email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});

export { registerUser, loginUser };
