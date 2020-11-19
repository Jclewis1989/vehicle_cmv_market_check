const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors')

//allow OPTIONS on all resources
app.options('*', cors())

// EJS templaing engine
app.set('view engine', 'ejs');

// Body Parser for complex forms
app.use(bodyParser({
    urlencoded: true
}))

// Declare routes
let ROUTE_CLIENT = require('./server/routes/clients');
let ROUTE_ADMIN = require('./server/routes/admins');
let ROUTE_VUE = require('./server/routes/vue');
let GRAPH_QL = require('./server/routes/graph');
let DB = require('./server/routes/db');

// Use declared route(s)
app.use(ROUTE_CLIENT);
app.use(ROUTE_ADMIN);
app.use(ROUTE_VUE);
app.use(GRAPH_QL);
app.use(DB);

// /client/src/ is to render server side view folder correctly
app.use(express.static(path.join(__dirname + '/client/src/')));

// /server/html/ is to render vue app correctly
// Order is important otherwise app inherites / redirect
app.use(express.static(__dirname + '/server/public/'));
app.get(/.*/), (req, res) => res.sendFile(__dirname + './server/public/index.html');



// Error pages and renders
// These status codes will generate the respective ejs pages for a better user experience
app.use(function(req, res, next){
  if(res.status(404)) {
     return  res.render('../server/views/server_error_codes/bad-request');
  }

  if(res.status(403)) {
      return res.render('../server/views/server_error_codes/forbidden');
  }

  if(res.status(500)) {
      return res.render('../server/views/server_error_codes/internal');
  }

  if(res.status(408)) {
      return res.render('../server/views/server_error_codes/not-found');
  }

  if(res.status(400)) {
      return res.render('../server/views/server_error_codes/timeout');
  }
})

// Listen on port
app.listen(process.env.PORT || port, function() {
    console.log("Listening on port " + port);
})