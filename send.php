<?php

$userName = $_POST['userName']
$userEmail = $_POST['userEmail']
$userPhone = $_POST['userPhone']
echo 'Привет,' . $name;

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  //Server settings
  $mail->SMTPDebug = 0;                      // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'levaartemov@gmail.com';                     // SMTP username
  $mail->Password   = '***';                               // SMTP password
  $mail->SMTPSecure = 'ssl';         													// Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
  $mail->setFrom('levaartemov@gmail.com', 'Лев');
  $mail->addAddress('Thairus83@yandex.ru');           // Add a recipient чужой мэйл
      
    // Content
$mail->isHTML(true);                                         // Set email format to HTML
$mail->Subject = 'Новая заявка с сайта';
$mail->Body    = "Имя пользователя: ${userName}, номер телефона пользователя: ${userPhone}. Электронная почта пользователя: ${userEmail}";

$mail->send();
header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
