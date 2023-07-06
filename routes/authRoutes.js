// const express = require("express");
// const { testController } = require("../controllers/testController");

// //router object
// const router = express.Router();

// //routes
// router.get("/", testController);

// //export
// module.exports = router;

const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes || post
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);



//GET CURRENT USER || GET
router.get('/current-user', authMiddleware, currentUserController);

//export
module.exports = router;