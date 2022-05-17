//import deliverymodel from 'server/models/deliverymodel.js';
let Delivery = require('../models/deliverymodel');
const router = require("express").Router();
const con = require('../connections/Dbconnection')
const { v4: uuidv4 } = require('uuid');
const { stat } = require("fs");
const Dbconnection = require("../connections/Dbconnection");
const { MigrationHubConfig } = require('aws-sdk');
const { assert } = require('console');
//const mongoose = require('mongodb');
const mongoose = require('mongoose');
//var uri = 'mongodb+srv://neil:<database123>@cluster0.evxed.mongodb.net/?retryWrites=true&w=majority';
//var uri = 'mongodb+srv://neil:database123@cluster0.evxed.mongodb.net/?retryWrites=true&w=majority';

router.post("/deliveryAddress/customer", function (req, resp) {

console.log("Inside the API ",  req.body)

item = new Delivery({
    robotname: "moose",
    coordinate : req.body.coordinate,
    order_id : req.body.order_id,
    duration: 10,
    deliveryStatus: "OPEN"
    
})
item.save((err, doc) => {
    if (!err) {

        console.log("Added Successfully")
        resp.status(200).send("Done")

    }
    else {

        console.log('Error during record insertion : ' + err);
        resp.status(201).send("Done")
    } 

    });

},

router.post("/deliveryAddress/customer/:id", function (req, resp) {

    const { addressLine1, addressLine2, city, state, country, pincode, addressName, save } = req.body;
    const customerId = req.params.id;
    const addressId = uuidv4();
   // console.log(req.body)

    const query = "INSERT INTO address(AddressId,Address1,Address2,City,State,PinCode,Country) VALUES(?,?,?,?,?,?,?)";
    con.query(query, [addressId, addressLine1, addressLine2, city, state, country, pincode], async (err, results, fields) => {
        if (err) {
            console.log(err);
            resp.status(500).send({ error: 'Unknown internal server error' });
        } else {
            if (save) {
                const query = "INSERT INTO deliveryaddress(CustomerId,AddressId,SavaAsName) VALUES(?,?,?)";
                con.query(query, [customerId, addressId, addressName], async (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        resp.status(500).send({ error: 'Unknown internal server error' });
                    } else {
                        resp.send({ AddressId: addressId });
                    }
                });
            }else{
                resp.send({ AddressId: addressId });
            }
        }
    })
}));

router.get("/deliveryAddress/customer/:id", function (req, res) {
    const customerId = req.params.id;
    console.log(customerId)
    const query = "SELECT * FROM address as a INNER JOIN deliveryaddress as d on a.AddressId = d.AddressId where d.CustomerId = ?";
    con.query(query, [customerId], (err, results, fields) => {
        res.status(200).send(results);

        if(err){
            console.log(err)
        }
    })
});

module.exports = router;