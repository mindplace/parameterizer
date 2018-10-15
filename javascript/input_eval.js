function evalCode() {
  var worker = new Worker(URL.createObjectURL(new Blob(['()()'])));

  worker.onmessage = function(e) {
    var result = false;
    try {
      var codeValue = eval("(" + document.getElementById('code-input').value + ")");
      result = (typeof codeValue === 'object') ? codeValue : false;
    } catch {
      false;
    }
    return result;
  };

  var result = worker.onmessage();
  worker.terminate();
  return result;
};
