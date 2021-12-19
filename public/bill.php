<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

$destinatario = "facturacion@xocobel.com";
$asunto = "Factura" . " " . $data->rfc;

$carta = "Nombre: $data->name \n";
$carta .= "Dirección: $data->address \n";
$carta .= "Ciudad: $data->city \n";
$carta .= "Estado: $data->state \n";
$carta .= "Codigo Postal: $data->postalCode \n";
$carta .= "Teléfono: $data->phone \n";
$carta .= "Correo: $data->email \n";
$carta .= "RFC: $data->rfc \n";
$carta .= "ID Pago: $data->idPayment \n";
$carta .= "Total: $data->totalPayment";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
?>