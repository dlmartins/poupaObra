<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
$EmailTo = "poupaobra.br@gmail.com";
$Subject = "PoupaObra - mensagem de " . $name;
 
// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Mensagem: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if (!$success) {
    $error = error_get_last();
    echo "Erro ao enviar a mensagem. Detalhes do erro: " . $error['message'];
} else {
    echo "Mensagem enviada com sucesso!";
}
 
?>