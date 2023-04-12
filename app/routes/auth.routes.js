module.exports = app => {

    var express = require("express");
    var router = express.Router();

    const auth = require("../controllers/auth.controller.js");
  
    router.post('/auth/login', auth.Login);

    app.use('/api', router);

};