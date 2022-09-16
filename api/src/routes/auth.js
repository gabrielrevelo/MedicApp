const express = require('express');
const router = express.Router();
const controllerAuth = require("../controllers/controller.auth");

/* Auth */

router.post('/signin' , controllerAuth.signIn )
// router.post("/google",  controllerAuth.google);
router.post("/google",  controllerAuth.logGoogle);

// router.get("/", controllerAdmins.getAll);
// router.post("/",  controllerAdmins.createAdmin);
// router.get("/:id", controllerAdmins.getAdmin);
// router.patch("/:id", controllerAdmins.pathAdmin);


module.exports = router;