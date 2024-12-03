const express = require("express");
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://root:root@cluster0.9vlh4jj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI)
  .then(()=>{
    console.log("db connected");
  })
  .catch((ex)=>console.log(ex));

const routes = require("./routes/Routes")

const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/",routes);


app.listen(PORT, () => {
  console.log("Server listening at port =>", PORT);
});
