<?php

require "./vendor/PHPMailer-master/src/PHPMailer.php";
require "./vendor/PHPMailer-master/src/Exception.php";
require "./vendor/PHPMailer-master/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'mail.saigonbikerentals.com';
$mail->SMTPAuth = true;
$mail->Username = 'patrick@saigonbikerentals.com';
$mail->Password = 'n1FaZ!Sz#)vB';
$mail->SMTPSecure = 'tls';
$mail->Port = 26;

$mail->setFrom('patrick@saigonbikerentals.com');
$mail->addAddress('dragonbiketoursvn@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'Rental Agreement';
$mail->Body = 'hello';
// $mail->addAttachment(WRITEPATH . 'uploads/images/1635835163_27218a1fdb467e958310.png');

if (!$mail->send()) {

  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Pensiaurus Rex!';
}

// echo 'Cockus and Pockus!';

