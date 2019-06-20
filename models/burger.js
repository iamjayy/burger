const orm = require("../config/orm");

//create variable and export
//call back orm
var burger ={
    selectAll: function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });
    },

    insertOne: function(cb, cols, vals){
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
        },

        updateOne: function(cb, condition, objColVals){
            orm.selectAll("burgers", condition, objColVals, function(res){
                cb(res);
            });
            },

            deleteOne: function(cb, condition){
                orm.selectAll("burgers", condition, function(res){
                    cb(res);
                });
                }

}

module.exports = burger;