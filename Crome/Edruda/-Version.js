function Decode(string, start) {
  let howlong = string.length;
  let chars = string;
  var done = start;
  do {
  var projid = projid + chars[done];
  var done = done + 1;
  } while(chars[done] != "}")
console.log(projid)
}
Decode({"id":996391847}, 7)
