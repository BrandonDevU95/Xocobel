<?php
header("Content-Type: text/html;charset=utf-8");
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['content'];

$destinatario = "contacto@xocobel.com";
$asunto = "Contacto" . " " . $subject;
$carta = "De: $name \n";
$carta .= "Correo: $email \n";
$carta .= "Telefono: $phone \n";
$carta .= "Asunto: $subject \n";
$carta .= "Mensaje: $message";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
?>