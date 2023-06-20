const express = require("express"); // express is a node.js framework used to create web applications and API's
const bodyParser = require("body-parser"); // body-parser is used to parse the data from the form
const date = require(__dirname + "/date.js");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


// ejs is a template engine that lets you generate HTML markup with plain JavaScript
app.set('view engine', 'ejs'); // this code is used to set ejs as the view engine
// view engine is used to render the html files
// app.use and app.set are used to set up the view engine
// ejs stands for embedded javascript  

app.get("/", function (req, res) { // app.get is used to get the response from the server
  // res.send("hello world");

  // var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let today = new Date();
  // var CurrentDay = dayArr[today.getDay()];
  // var CurrentTime = today.getHours();
  // var CurrentMin = today.getMinutes();
  // res.render("list", { day: CurrentDay });

  // var CurrentDay = dayArr[today.getDay()];
  // var CurrentTime = today.getHours();
  // var CurrentMin = today.getMinutes();
  // res.render("list", { day: CurrentDay });


  let day = date.getDay();  //? when you run this you get date with day
  // let day = date.OnlyDay(); //! when you run this you only get day name in string

  let year = today.getFullYear();
  res.render('list', { kindOfday: day, newItemArr: Items, year: year });
});

let Items = [];
app.post("/", (req, res) => {
  item = req.body.itemData;
  if (item !== "") {
    Items.push(item);
  }

  res.redirect("/");
});


app.listen(3000, () => { // this is a callback function 
  // app.listen is used to start the server
  console.log(
    "Server started on port 3000"
  );
});