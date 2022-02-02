const subtract = (a, b) => a - b

function add(a , b) {

  // Convert both the integers to string
  var s1 = a.toString();
  var s2 = b.toString();

  // Concatenate both strings
  var s = s1 + s2;

  // Convert the concatenated string
  // to integer
  var c = parseInt(s);

  // return the formed integer
  return c;
}
module.exports = {
    add,
    subtract,
} 
