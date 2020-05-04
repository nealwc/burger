const express = require("express");

const router = experss.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

    })

});

module.exports = router;