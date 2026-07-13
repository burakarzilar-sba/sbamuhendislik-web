<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://sbamuhendislik.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Geçersiz istek.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Form verisi okunamadı.']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$subject = trim($data['subject'] ?? 'Web Sitesi İletişim Formu');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Zorunlu alanlar eksik.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'E-posta adresi geçersiz.']);
    exit;
}

// Basit spam koruması: çok uzun mesajları engeller.
if (mb_strlen($message, 'UTF-8') > 5000 || mb_strlen($name, 'UTF-8') > 120) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Form içeriği çok uzun.']);
    exit;
}

$to = 'info@sbamuhendislik.com';
$mailSubject = 'SBA Web Formu: ' . preg_replace('/[\r\n]+/', ' ', $subject);
$body = "Web sitesinden yeni mesaj geldi:\n\n";
$body .= "Ad Soyad: {$name}\n";
$body .= "E-posta: {$email}\n";
$body .= "Telefon: {$phone}\n";
$body .= "Konu: {$subject}\n\n";
$body .= "Mesaj:\n{$message}\n\n";
$body .= "Gönderim zamanı: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: SBA Web Formu <no-reply@sbamuhendislik.com>';
$headers[] = 'Reply-To: ' . mb_encode_mimeheader($name, 'UTF-8') . " <{$email}>";
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = mail($to, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail gönderilemedi.']);
    exit;
}

echo json_encode(['success' => true]);
