<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PhpMailer/Exception.php';
require 'PhpMailer/PHPMailer.php';
require 'PhpMailer/SMTP.php';
$nombre=$_POST["Nombre"];
$correo=$_POST["Correo"];
$telefono=$_POST["Telefono"];
$mensaje=$_POST["Mensaje"];
$contenido="Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono ".$telefono."\nMensaje: ".$mensaje;
$mail = new PHPMailer(true);
echo json_encode('Correcto');
try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'jonathanandresvaldezllivisaca@gmail.com';                     // SMTP username
    $mail->Password   = 'patan2703';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('jonathanandresvaldezllivisaca@gmail.com', 'Jonnathan');
    $mail->addAddress('wwwjonava@hotmail.com ', 'Joe User');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Asunto muy importante';
    $mail->Body    = ''.$contenido;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'El mensaje se envio correctamente';
} catch (Exception $e) {
    echo "Hubo un error al enviar tu comentario: {$mail->ErrorInfo}";
}