let a = 10;
debugger;
function parent() {
  debugger;
  let b = 20;
  function child() {
    debugger;
    return 20 + 10;
  }
  return child();
}
parent();
debugger;