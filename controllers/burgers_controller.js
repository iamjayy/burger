const express = require("express");
const burger = require("../models/burger");

var router = express.router();

//get router
router.get("/", function(req, res){
    burge.selectAll(function(data){
        var handleBarObj = {
            burgers: data
        };
        console.log(handleBarObj);
        res.render("index", handleBarObj);
    });

    //post router
    router.post("/api/burgers", function(req, res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
                res.json({ id: result.insertId });
            }
        )
    });

    //router put
    router.put("/api/burgers/:id", function(req, res){
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.updateOne({ devoured: req.body.devoured }, condition, function(result){
            if ((result, changedRows === 0)){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    //delete
    router.deleteOne(condition, function(req, res){
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function(result){
            if((result, changed === 0 )){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

});

module.exports = router;