<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


	$name = $_POST['name'];
	$email = $_POST['email'];
	$topic = $_POST['topic'];
	$msg = $_POST['msg'];
	
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

	$mail->Subject = "Kontakt ze strony statica.pl";
	$mail->isHTML(true);
	$mail->CharSet = 'UTF-8';   
	$mail->Body = '<b>Email:</b> '.$email.'<br>'.
	'<b>Imię:</b> '.$name.'<br>'.
	'<b>Temat:</b> '.$topic.'<br>'.
	'<b>Wiadomość:</b> '.$msg.'<br>';
	

	if($mail->Send()){                      
		echo 'E-mail został wysłany';
	}else{           
		echo 'E-mail nie mógł zostać wysłany';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	}
?>  