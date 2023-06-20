
// exports is an object
// module.exports.getDay = function getDay() {

exports.getDay = function () {
  let today = new Date();

  let dayObj = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", dayObj);
}

exports.getDay = function () {
  let today = new Date();

  let dayObj = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // let day = today.toLocaleDateString("en-US", dayObj);
  // return day;

  return today.toLocaleDateString("en-US", dayObj);
}

