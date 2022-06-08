<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$company = $_POST['company'];
	$city = $_POST['city'];
	$street = $_POST['street'];
	$zipcode = $_POST['zipcode'];
	$nip = $_POST['nip'];
	$cart = $_POST['cartInput'];
	$orderId = $_POST['orderId'];
	
	$mail = new PHPMailer();
	
	$mail->SMTPDebug = 3;
	$mail->isSMTP();
	$mail->Host = "poczta60314.wer.pl";
	$mail->SMTPAuth = true;
	$mail->Username = "formularz@statica.pl";
	$mail->Password = "8*2zV4N-&wRbhcXy%3u";
	$mail->SMTPSecure = "tls";
	$mail->Port = 587;

	$mail->From = "formularz@statica.pl";
	$mail->FromName = "Statica";
	$mail->AddReplyTo('poczta@statica.pl', 'mailing');
	$mail->addAddress('dudziak@statica.pl', 'Statica');

	$mail->Subject = "Zamówienie";
	$mail->isHTML(true);
	$mail->CharSet = 'UTF-8';   
	$mail->Body = '<b>E-mail:</b> '.$email.'<br>'.
	'<b>Imię:</b> '.$name.'<br>'.
	'<b>Nazwisko:</b> '.$surname.'<br><br>'.
	'<b>Id zamówienia:</b> '.$orderId.'<br>'.
	'<b>Zamówienie:</b> '.$cart.'<br><br>'.
	'<b>Dane firmy</b><br>'.
	'<b>Nazwa firmy:</b> '.$company.'<br>'.
	'<b>Miasto:</b> '.$city.'<br>'.
	'<b>Ulica:</b> '.$street.'<br>'.
	'<b>Kod pocztowy:</b> '.$zipcode.'<br>'.
	'<b>Nip:</b> '.$nip.'<br>';
	

	if($mail->Send()){                      
		echo 'E-mail został wysłany';
	}else{           
		echo 'E-mail nie mógł zostać wysłany';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	}
?>