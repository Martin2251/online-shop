const express = require ("express");
const cors = require("cors");
const products = require("./products");
const mongoose = require("mongoose");
const register = require("./routes/register")



const app = express();

require("dotenv").config()


app.use(express.json());
app.use(cors());

app.use("/api/register", register);

app.get("/", (req, res) => {
    res.send("Welcome to our online shop API")
});

app.get("/products", (req, res) => {
    res.send(products);
})

const port = process.env.PORT || 8000
const uri = process.env.DB_URI

app.listen(port, console.log(`Server running on port ${port}`))

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then (() => console.log("MongoDb successful"))
.catch((err ) => console.log("Mongo DB connection failed", err.message));