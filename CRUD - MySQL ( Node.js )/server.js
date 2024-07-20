/* const express = require('express');
//const colors = require("color");      //basically yeh bas command line ke output ko colors dene ke lea use hta hai.
const morgan = require("morgan");       //basically it tells about the PORT, konse PORT pe server run ho rha hai.
const mySqlPool = require('./config/db');


// rest object
const app = express();

// middlewaves
app.use(morgan("dev"));
// app.use(express.json());

//routers
app.use('/students', require("./routes/studentRoutes"))

app.get(("/test"), (request, response) => {
    response.status(200).send("Hello this is properly running !")
});

//port
const PORT = 8083

//listen
// app.listen(PORT, () => {
//     console.log("server running !")
// });

//conditiona Listen
mySqlPool.query('SELECT 1').then( () => {
    console.log("MySQL is connected !")

    app.listen(PORT, () =>{
        console.log("Server is running !")
    });
}).catch((error)=>{
    console.log(error);
});

// ******************************** GPT OTHER SIMPLE METHOD *******************************

// const express = require('express');
// const morgan = require('morgan');
// const studentsRoutes = require("./routes/studentRoutes"); // make sure the path is correct

// const app = express();

// // middlewares
// app.use(morgan('dev'));
// // app.use(express.json());

// // routers
// app.use('/students', studentsRoutes); // Mount the student router

// app.get('/test', (request, response) => {
//     response.status(200).send("Test route is working!");
// });

// // Start the server
// const PORT = process.env.PORT || 8083;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

*/

//****************************************************************************************
//****************************************************************************************
//****************************************************************************************

const express = require('express');
const morgan = require('morgan');
//const studentsRoutes = require('../routes/studentRouters'); // Make sure the path is correct

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routers
// app.use('/students', studentsRoutes);
app.use('/students', require("./routes/studentRoutes"))
// app.use('/students', students)

app.get('/test', (req, res) => {
  res.status(200).send('Test route is working!');
});

// Start the server
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
