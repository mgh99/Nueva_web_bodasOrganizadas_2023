// Muestra el modal automáticamente después de un retraso de 2 segundos
setTimeout(function () {
    $("#myModal").fadeIn();
}, 2000);


function hideModal() {
    $("#myModal").fadeOut();
}
setTimeout(function () {
    hideModal();
}, 4000);

/*
// Cuando se hace clic en el botón de cierre, se oculta el modal
$(".close").on("click", function () {
    $("#myModal").fadeOut();
});

// Cuando se hace clic fuera del modal, se oculta el modal
$(window).on("click", function (event) {
    if (event.target == document.getElementById("myModal")) {
        $("#myModal").fadeOut();
    }
});

// Cuando se hace clic en el botón "Aceptar", se oculta el modal
// Cuando se hace clic en el botón "Aceptar", se oculta el modal
$("#aceptar").on("click", function() {
  // Se establece la cookie con un tiempo de expiración de 365 días
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "cookies_aceptadas=true;" + expires + ";path=/";

  // Cierra el modal
  $("#myModal").modal('hide');
});

// Cuando se hace clic en el botón "Rechazar", se oculta el modal y se redirige al usuario a una página diferente
$("#rechazar").on("click", function () {
    $("#myModal").fadeOut();
    window.location.href = "https://www.bodasorganizadas.es/";
});*/



