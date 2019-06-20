const connection = require("../config/connection");

// create empty arry
// fill loop with ?
//return arry to string
function createQmarks(num){
    var arr = [];
    for (var i = 0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
}

// create a helper that will translate the string to sql query
function translateSql(obj){
    var arr = [];
    for (var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, db){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res){
            if(err) {throw err}
            cb(res);
        });
    },

    insertOne: function(table, cols, wals, cb){
        var dbQuery = "INSERT INTO " + 
                        table + 
                        " (" + cols.toString() + 
                        ") " + "VALUES (" + createQmarks(vals.length) +
                         ") ";
                    
     console.log(dbQuery);
     connection.query(dbQuery, vals, function(err, res){
         if (err) throw err;
         cb(res);
     });
    },

    updateOne: function(table, objColVals, condition, db){
        var dbQuery = "UPDATE " + 
                        table + 
                        " SET " + 
                        translateSql(objColVals) + 
                        " WHERE " 
                        + condition;

                        console.log(dbQuery);
                        connection.query(dbQuery, vals, function(err, res){
                            if (err) throw err;
                            cb(res);
                        });
                       }, 
    
    deleteOne: function(table, condition, cb){
        var query = "DELETE FROM " + table + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res){
            if (err) throw err;
            cb(res);
        });
    }
                   
    
};