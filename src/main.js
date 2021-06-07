$(document).ready(function(){
  $('#triangle-checker-form').submit(function(event){
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    let myTriangle = new Triangle(length1, length2, length3);
    var result = myTriangle.checkType();
    $('#response').append('<p>' + result + '</p>');
  });
  
});