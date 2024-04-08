function Decode(string, start) {
  let howlong = string.length;
  let chars = string;
  var done = start;
  do {
  var projid = projid + chars.charAt(done);
  var done = done + 1;
  } while(chars.charAt(done) != "}")
  console.log(projid)
}
Decode({"id":996391847}, 7)
