import asyncHandler from 'express-async-handler';
import Stock from '../models/Stock.js';

//@desc    Create New Stock Item
//@route   POST /addNewItem
//@access  PRIVATE

const addNewStockItem = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { itemName } = req.body;

  const stock = await Stock.create({
    itemName: itemName,
  });

  if (stock) {
    res.status(201).json({
      _id: stock._id,
      itemName: stock.itemName,
    });
  } else {
    res.status(400);
    throw new Error('invalid Stock data');
  }
});

//@desc    saves current stock level of a single stock supply
//@route   PUT /updateStockLvl
//@access  PRIVATE

const updateStockLvl = asyncHandler(async (req, res) => {
  // console.log(req);
  console.log(req.body);
  console.log(`API DB: ${JSON.parse(req.body)}`);

  const { itemName, stockLvl } = req.body;
  const stock = await Stock.findOne({ itemName });

  if (stock) {
    const prevStockLvl = stock.stockLvl;
    stock.stockLvl = stockLvl;

    const updatedStockLvl = await stock.save();

    res.status(201).json({
      status: 'Stock Level Updated',
      Item: updatedStockLvl.itemName,
      lvl: `updated from ${prevStockLvl} to ${updateStockLvl.stockLvl}`,
    });
  } else {
    res.status(400);
    throw new Error('Item not found');
  }
});

export { updateStockLvl, addNewStockItem };
