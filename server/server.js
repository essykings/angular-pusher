const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
const app = express();
const Pusher = require('pusher');

const pusher = new Pusher({

    appId: '218115',
    key: '3afb3d291f27c90d58ec',
    secret: '92dedad4a7e0e9c4885e',
    cluster: 'mt1',
    encrypted: true
});

// define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

// Define routes
app.get('/', (req, res) => {
  res.send('pusher working');
});



app.get("/add/:claps",function(req, res) {
    console.log(req.params);
    pusher.trigger("my_channel", "new-event", {
      claps : `${req.params.claps}`
    });
});




app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on port ${port}`));





// const cors = require("cors");
// const Pusher = require("pusher");
// const express = require("express");
// const bodyParser = require("body-parser");
// const multipart = require("connect-multiparty");

// // ------------------------------
// // Create express app
// // ------------------------------

// const app = express();

// // ------------------------------
// // Load the middlewares
// // ------------------------------

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // ------------------------------
// // Load Middlewares
// // ------------------------------

// const multipartMiddleware = multipart();
// const pusher = new Pusher({
//   appId: '612441',
//   key: 'ad2078b5383bbfae7383',
//   secret: '69ae19c765a54dbe4981',
//   cluster: 'mt1',
//   encrypted: true
// });
// // -------------------------------
// // Create app routes
// // -------------------------------

// app.get("/update/:likes", multipartMiddleware, function(req, res) {
//     console.log(req.params.likes);

//     console.log(`${process.env.PUSHER_APP_ID}`);
//     // -------------------------------
//     // Trigger pusher event
//     // ------------------------------
//     pusher.trigger("events-channel", "new-like", {
//       likes : `${req.params.likes}`
//     });
// });

// // -------------------------------
// // Assign port
// // -------------------------------

// app.listen("3120");
// console.log("Listening on localhost:3120");


