const express = require("express");
const cors = require("cors");

const app = express();

var whitelist = [
    "*",
  ];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if ( whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {
        origin: true
        }
    } else {
        corsOptions = {
        origin: false
        }
    }
    callback(null, corsOptions);
}

app.use(cors(corsOptionsDelegate));

app.use(express.json({ limit: '10mb' }));

app.use(express.urlencoded({ extended: true }));

require("./app/routes/auth.routes.js")(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});