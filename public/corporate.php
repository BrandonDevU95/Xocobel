<?php
header("Content-Type: text/html;charset=utf-8");
$name = $_POST['name'];
$email = $_POST['email'];
$organization = $_POST['organization'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$budget = $_POST['budget'];
$people = $_POST['people'];
$date = $_POST['date'];
$message = $_POST['message'];

$destinatario = "contacto@xocobel.com";
$asunto = "Presupuesto para" . " " . $subject;
$carta = "De: $name \n";
$carta .= "Correo: $email \n";
$carta .= "Organización: $organization \n";
$carta .= "Teléfono: $phone \n";
$carta .= "Presupuesto: $budget \n";
$carta .= "Personas: $people \n";
$carta .= "Fecha: $date \n";
$carta .= "Mensaje: $message";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
?>