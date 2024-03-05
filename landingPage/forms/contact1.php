$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = "poupaobra.br@gmail.com";
$subject = "PoupaObra - mensagem de " . $name;
$email_content = "Name: $name\nEmail: $email\nMensagem: $message";
$headers = "From: $email";

if (mail($to, $subject, $email_content, $headers)) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro: Favor tentar novamente.";
}