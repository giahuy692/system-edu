const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const morgan = require('morgan');
const route = require('./routes');


// Database
const database = require('./config/database');
database.connect();

// EJS
app.set("view engine","ejs");
app.set("views", path.join(__dirname,'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
})