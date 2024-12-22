import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDb from "./config/db.js"

dotenv.config()
const app = express()
connectDb()

//middleware
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send({
    message: " Welcome to Ecommerce App",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server running on ${port}`.green);
});
