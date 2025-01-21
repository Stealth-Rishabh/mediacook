<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header('Content-Type: application/json');

try {
    // Debug log of received data
    error_log("Received POST data: " . print_r($_POST, true));

    // Get POST data
    $name = $_POST['contact-name'] ?? '';
    $email = $_POST['contact-email'] ?? '';
    $phone = $_POST['contact-phone'] ?? '';
    $company = $_POST['contact-company'] ?? '';
    $subject = $_POST['contact-subject'] ?? '';
    $message = $_POST['contact-message'] ?? '';
    $service = $_POST['contact-service'] ?? '';
    $referrer = $_POST['referrer_name'] ?? '';
    $orderid = $_POST['orderid'] ?? '1043';
    $sitename = $_POST['sitename'] ?? 'Mediacook2024';
    $source = $_POST['source'] ?? 'website';

    // Debug log of processed data
    error_log("Processed data: " . print_r([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'company' => $company,
        'subject' => $subject,
        'message' => $message,
        'service' => $service
    ], true));

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
        'query' => urlencode($message),    // Note: message is sent as 'query'
        'service' => urlencode($service),
        'http_referer' => urlencode($referrer),
        'source' => urlencode($source),
        'ORDERID' => urlencode($orderid),
        'SITENAME' => urlencode($sitename)
    );

    // Debug log of CRM data
    error_log("Data being sent to CRM: " . print_r($uniFields, true));

    // Build query string
    $uni_fields_string = http_build_query($uniFields);

    // Make the CRM request
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => 'https://crm.stealthdigital.in/lp/index',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $uni_fields_string,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_SSL_VERIFYHOST => false
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Debug log of CRM response
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response: " . $response);

    if (curl_errno($ch)) {
        throw new Exception('Curl error: ' . curl_error($ch));
    }
    
    curl_close($ch);

    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'response' => $response,
        'debug' => [
            'received_data' => $_POST,
            'processed_data' => $uniFields
        ]
    ]);

} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
