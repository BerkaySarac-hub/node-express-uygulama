const express = require('express');
const productRouter = require("./routes/products")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require("dotenv/config")
const app = express();
const isLoggedin = true;



mongoose.connect(`mongodb+srv://berkaysarac:${process.env.DB_PASSWORD}@cluster0.b4vzs.mongodb.net/?retryWrites=true&w=majority`, (e) => {
    if (e) {
        console.log("an error accured us");
    } else {
        console.log("we are connected database succesfully");
    }
});
app.get("/", (req, res, next) => {
    res.send("main page");
})
app.use("/products", productRouter)
app.use(bodyParser.json())
    // app.use((req, res, next) => {
    //     if (!isLoggedin) {
    //         console.log(req.body);
    //         res.send("you must be logged in to view this page")
    //     } else {
    //         next();
    //     }
    // })


// const products = [
//     { id: "string", title: "string", description: "string", prices: "number" }
// ]

// Fetch product
// Create product
// Update product
// Delete product


app.listen(3000, (error) => {
    if (error) {
        console.log("an error has arrived :", error);
    }
    console.log("server running on port 3000");
})