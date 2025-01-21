<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept");
    header("HTTP/1.1 200 OK");
    exit();
}

// Set response headers for actual request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit();
}

try {
    // Get POST data
    $name = $_POST['contact-name'] ?? '';
    $email = $_POST['contact-email'] ?? '';
    $phone = $_POST['contact-phone'] ?? '';
    $company = $_POST['contact-company'] ?? '';
    $subject = $_POST['contact-subject'] ?? '';
    $message = $_POST['contact-message'] ?? '';
    $referrer = $_POST['referrer_name'] ?? '';
    $orderid = $_POST['orderid'] ?? '1043';
    $sitename = $_POST['sitename'] ?? 'Mediacook2024';

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        throw new Exception('Name, email, and phone are required fields');
    }

    // Prepare data for CRM
    $uniFields = array(
        'name' => urlencode($name),
        'phone' => urlencode($phone),
        'email' => urlencode($email),
        'company' => urlencode($company),
        'subject' => urlencode($subject),
        'query' => urlencode($message),
        'http_referer' => urlencode($referrer),
        'ORDERID' => urlencode($orderid),
        'SITENAME' => urlencode($sitename)
    );

    // Build query string
    $uni_fields_string = http_build_query($uniFields);

    // Initialize cURL
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => 'https://crm.stealthdigital.in/lp/index',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $uni_fields_string,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => false, // Only for development
        CURLOPT_SSL_VERIFYHOST => false  // Only for development
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        throw new Exception('Curl error: ' . curl_error($ch));
    }
    
    curl_close($ch);

    // Log the response
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response: " . $response);

    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'response' => $response
    ]);

} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
