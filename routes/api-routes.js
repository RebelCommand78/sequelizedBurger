
const db = require("../models");

module.exports = function(app) {

    //Get route for getting all of the burgers
    app.get("/index", function(req, res) {
        db.Burger.findAll({})
            .then(function(data) {

                const hbsObject = {
                    foobar: data
                };

                res.render("index", hbsObject);
            });
    });


    app.post("/index", function(req, res) {

        db.Burger.create({
            burger_name: req.body.name,
        }).then(function() {

            res.redirect("/index");

        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/index");
        });
    });

    app.delete("/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/index");
        });
    });
};