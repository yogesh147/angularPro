let express = require('express');
let bodyParser = require('body-parser');
let mongo = require("mongoose");
let db = mongo.connect("mongodb://localhost:27017/angular_pro", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});

let app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

let Schema = mongo.Schema;

let Address = new Schema({
  id: String,
  street: String,
  houseNo: String,
  city: String,
  state: String,
  country: String,
  latLong: String
}, {
  versionKey: false
});

let UsersSchema = new Schema({
  id: String,
  userId: String,
  name: String,
  rollNo: String,
  grade: String,
  salary: Number,
  age: Number,
  address: Address,
  phoneNos: [String]
}, {
  versionKey: false
});

let model = mongo.model('users', UsersSchema, 'testUser');

app.post("/api/SaveUser", function (req, res) {
  let mod = new model(req.body);
  if (req.body.mode == "Save") {
    mod.save(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "Record has been Inserted..!!"
        });
      }
    });
  } else {
    model.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        address: req.body.address
      },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            data: "Record has been Updated..!!"
          });
        }
      });
  }
})

app.post("/api/deleteUser", function (req, res) {
  model.remove({
    name: req.body.name
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted..!!"
      });
    }
  });
})

app.get("/api/getUser", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})

app.get("/api/getUserById", function (req, res) {
  model.findById({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted..!!"
      });
    }
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
