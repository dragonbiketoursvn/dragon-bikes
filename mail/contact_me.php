<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// // Create the email and send the message //
// $to = 'dragonbiketoursvn@gmail.com';
// $email_subject = "Dragon Bike Tours Contact Form:  $name";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@dragonbiketours.com\n"; 
// $headers .= "Reply-To: $email_address";
// mail($to,$email_subject,$email_body,$headers);
// return true;


require "../vendor/PHPMailer-master/src/PHPMailer.php";
require "../vendor/PHPMailer-master/src/Exception.php";
require "../vendor/PHPMailer-master/src/SMTP.php";

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
$mail->addReplyTo($email_address, $name);
// $mail->isHTML(true);
$mail->Subject = "Dragon Bike Tours Contact Form:  $name";
// $mail->Body = 'hello';
$mail->Body = "You have received a new message from your website contact form.
\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

if (!$mail->send()) {

  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Heronymous Douche!';
}

?>
