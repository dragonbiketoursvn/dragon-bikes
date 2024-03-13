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

// Tour case
$tour = "";
$peopleCount = "";
$tourDate = "";
if(empty($_POST['tour'])) {
   $tour = strip_tags(htmlspecialchars($_POST['tour']));
}
if(empty($_POST['peopleCount'])) {
   $peopleCount = strip_tags(htmlspecialchars($_POST['peopleCount']));
}
if(empty($_POST['tourDate'])) {
   $tourDate = strip_tags(htmlspecialchars($_POST['tourDate']));
}

// Create the email and send the message //
$to = 'dragonbiketoursvn@gmail.com';

// this is for normal contact form
$email_subject = "Dragon Bike Tours Contact Form:  $name";


// this is for the Tour form (subject to show that it's a tour request)
if(!empty($tour)) {
   $email_subject = "Dragon Bike Tours Tour Form:  $name";
}

// this is for normal contact form
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

if(!empty($tour)) {
// a tour form has been filled
$email_body = "You have received a new message tour request from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nTour: $tour\n\nDesired Tour Date: $tourDate\n\Number of people: $peopleCount\n\nMessage:\n$message";
}

$headers = "From: noreply@dragonbiketours.com\n"; 
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);


return true;
?>
