import express from 'express';

const router = express.Router();

import { addNewStockItem, updateStockLvl } from '../api/inventoryController.js';

router.route('/addNewItem').post(addNewStockItem);
router.put('/updateStockLvl', updateStockLvl);

export default router;
