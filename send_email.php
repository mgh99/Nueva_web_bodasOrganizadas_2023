<?php
if(isset($_POST['submit'])){
    $to = "marygonzalezherrero@gmail.com"; // Correo electrónico de destino
    $from = $_POST['Email']; // Correo electrónico del remitente
    $name = $_POST['Name']; // Nombre del remitente
    $subject = "Nuevo mensaje de contacto"; // Asunto del correo electrónico
    $message = "Nombre: ".$name."\nCorreo electrónico: ".$from."\nMensaje: ".$_POST['Message']; // Cuerpo del correo electrónico
    
    $headers = "From:" . $from; // Encabezados del correo electrónico
    
    // Enviar correo electrónico utilizando la función mail de PHP
    if(mail($to,$subject,$message,$headers)){
        echo "Mensaje enviado con éxito.";
    }else{
        echo "Error al enviar el mensaje. Inténtalo de nuevo más tarde.";
    }
}
?>
