const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 
const app = express(); 

app.use(express.json()); 
const port = process.env.PORT || 8000;

const uri = process.env.ATLAS_URI; 
mongoose.connect("mongodb+srv://SafaKaragoz:bca2024@digital-carnival.0thond0.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});
mongoose.connection.once('open', () => { 
    console.log("MongoDB database connection established successfully");
})

// const loginRouter = require("./routes/login");
// const dashboardRouter = require("./routes/dashboard");
 

// app.use('/login', loginRouter);
// app.use('/dashboard', dashboardRouter);


app.listen(port, () => {
    console.log("Server running on port 3001...");
});