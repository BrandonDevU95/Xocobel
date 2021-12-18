<?php
header("Content-Type: text/html;charset=utf-8");
$name = $_POST['name'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$postalCode = $_POST['postalCode'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$rfc = $_POST['rfc'];

$destinatario = "facturacion@xocobel.com";
$asunto = "Factura" . " " . $rfc;

$carta = "Nombre: $name \n";
$carta .= "Dirección: $address \n";
$carta .= "Ciudad: $city \n";
$carta .= "Estado: $state \n";
$carta .= "Codigo Postal: $postalCode \n";
$carta .= "Teléfono: $phone \n";
$carta .= "Correo: $email \n";
$carta .= "RFC: $rfc";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
?>