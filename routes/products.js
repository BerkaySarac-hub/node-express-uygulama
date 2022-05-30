const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
const Product = require("../models/Product")
const app = express();
// app.use(bodyParser.json())
router.get("/", (req, res) => {
    console.log(req.body, "1");
    res.send("You have been producted");
})

router.get("/:id", (req, res, next) => {
    console.log(req.body, "2");
    res.send(`fetch products : ${req.params.id}`)
})
router.post("/", (req, res) => {
    console.log("3. middleware çalıştı");
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    product.save();
    res.json(product)
    console.log(product);
})
router.put("/:id", (req, res) => {
    console.log(req.body, "4");
    res.send(`update product ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    console.log(req.body, "5");
    res.send(`Delete product ${req.params.id}`)
})

module.exports = router;