<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

$json = json_decode(file_get_contents('php://input'), true);

$json['variables-que-envie-desde-react-native']; 

$hotelSelected = $json['hotelSelected']; 
$dateInSelected = $json['dateInSelected']; 
$dateOutSelected = $json['dateOutSelected']; 
$tipoSelected = $json['tipoSelected']; 
$cantidadSelected = $json['cantidadSelected']; 
$correo1 = $json['correo1']; 
$correo2 = 'info@hotelintegracion.com';
try {
    //Server settings

    //Recipients
    $mail->setFrom(' info@hotelintegracion.com', 'Hotel Integracion');
    $mail->addAddress($correo1);
    $mail->addCC($correo2);

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Reserva Hotel Integracion';
    $mail->Body    = 'test';
    $mail->AltBody = 'test';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>