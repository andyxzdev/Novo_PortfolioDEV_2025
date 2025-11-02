<?php
// ========================
// CORS dinâmico
// ========================
$allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Credentials: true");
}

header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ========================
// Carrega variáveis do .env
// ========================
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// ========================
// Função para enviar e-mail
// ========================
function enviar_email($data) {
    $mail = new PHPMailer(true);

    try {
        // Configurações SMTP
        $mail->isSMTP();
        $mail->Host       = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['SMTP_USER'];
        $mail->Password   = $_ENV['SMTP_PASS'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = intval($_ENV['SMTP_PORT']);

        // Remetente e destinatário
        $mail->setFrom($_ENV['SMTP_USER'], 'Formulário de Contato');
        $mail->addAddress($_ENV['EMAIL_TO']);

        // addReplyTo precisa de e-mail válido → agora usamos "email"
        if (!empty($data['email'])) {
            $mail->addReplyTo($data['email'], $data['nome']);
        }

        // Conteúdo
        $mail->isHTML(false);
        $mail->Subject = "Novo contato via formulário";
        $mail->Body    = "Nome: " . $data['nome'] . "\n" .
                         "Projeto: " . $data['tipoProjeto'] . "\n" .
                         "Whatsapp: " . $data['whatsapp'] . "\n" .
                         "Mensagem:\n" . $data['mensagem'];

        $mail->send();
        return ["message" => "Mensagem enviada com sucesso"];
    } catch (Exception $e) {
        http_response_code(500);
        return ["error" => "Erro ao enviar email: {$mail->ErrorInfo}"];
    }
}

// ========================
// Lê o JSON enviado pelo React
// ========================
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos"]);
    exit;
}

$response = enviar_email($input);

header("Content-Type: application/json; charset=UTF-8");
echo json_encode($response);
