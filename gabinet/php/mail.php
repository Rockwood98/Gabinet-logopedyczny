<?php
$to      = 'zofia.charemska@onet.poczta.pl';
$name    = $_POST['name'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$subject = 'Nowy email dla Logos od ' . $name . ' ' . $phone . ' (' .$email. ')' ;
$message = $_POST['message'];
$headers = 'From: ' . $name . ' ' . $phone . ' (' .$email. ')' ; 
$headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";

mail($to, $subject, $message, $headers);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
 echo '<script language="javascript">';
echo 'alert("Wiadomość została wysłana!")';
echo '</script>';
echo "<script> window.location = \"../contact.html\" </script>";
  exit;
} else {
 echo '<script language="javascript">';
echo 'alert("Nie udało się wysłać wiadomości")';
echo '</script>';
echo "<script> window.location = \"../contact.html\" </script>";
  exit;
}
?>		