import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  stockLvl: {
    type: Number,
    required: true,
    default: 0,
  },
  lastChecked: {
    type: Date,
    default: Date.now,
  },
});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;
