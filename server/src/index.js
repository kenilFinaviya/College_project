require("./dbconnect/connection")
const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

var corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(express.json())

const userRouter = require("./router/userRouter")
const productRouter = require("./router/productRoute")
const paymentRoute = require("./router/paymentRoute")
const contactRoute = require("./router/contactRoute")
const OrderRoute = require("./router/OrderRoute")

app.use(userRouter);
app.use(productRouter);
app.use(paymentRoute);
app.use(contactRoute);
app.use(OrderRoute);




app.listen(5000)
