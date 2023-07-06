const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController }
 = require('../controllers/inventoryController');

const router = express.Router();

//routes
//Add inventory || post
router.post('/create-inventory', authMiddleware, createInventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController);

//GET ALL RECENT BLOOD RECORDS
router.get('/get-recent-inventory', authMiddleware, getRecentInventoryController);

//post hospital blood records
router.post("/get-inventory", authMiddleware, getInventoryHospitalController)

//GET DONAR RECCORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organisation records
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

//get organisation records
router.get("/get-organisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);
module.exports = router;

