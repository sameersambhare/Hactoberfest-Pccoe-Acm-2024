const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path=require('path')
app.use(express.json());
app.use(cors());
app.use(require("./routes/authentication"));
app.use(express.static(path.join(__dirname,"/frontend/build")))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"/frontend/build/index.html"))
})
app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
