function toParamString(input) {
  if (typeof input !== false && input !== undefined) {
    var queryParamString = $.param(input);
    return "?" + queryParamString;
  }
};

$(document).ready(function(){
  var output = $("div[name='object-output']");

  $("button#submit-code").on("click", function(e){
    var codeResult = evalCode();
    $(output).text(toParamString(codeResult));
  });

  $("button#clear-code").on("click", function(e){
    $("#code-input").val("");
    $(output).text("");
  });
});
