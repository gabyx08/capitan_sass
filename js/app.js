var cargarPagina = function(){
  cargarAlumnas();
};
var cargarAlumnas = function(){
  $.getJSON("http://laboratoria.cuadra.co:9339/api/v1/students/",function(response){
    mostrarAlumnas(response);
  });
};

var mostrarAlumnas = function(alumnas){
  alumnas.forEach(function(alumna){
   var $ol = $("#alumnas");
   var $li = $("<li/>");
   var $checkbox = $("<input/>",{"type":"checkbox"});
   $li.text(alumna.name + " " + alumna.pLastName + " " + alumna.mLastName);
   $li.append($checkbox);
   $ol.append($li);
 });
};

$(document).ready(cargarPagina);
