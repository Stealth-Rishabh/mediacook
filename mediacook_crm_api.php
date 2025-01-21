<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins for development
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header('Content-Type: application/json');

try {
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

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        throw new Exception('Name, email, and phone are required fields');
    }

    // Prepare data for CRM in the exact format that works
    $uniFields = array(
        'name' => urlencode($name),
        'phone' => urlencode($phone),
        'email' => urlencode($email),
        'company' => urlencode($company),
        'subject' => urlencode($subject),
        'query' => urlencode($message),
        'service' => urlencode($service),
        'http_referer' => urlencode($referrer),
        'source' => urlencode($source),
        'ORDERID' => urlencode($orderid),
        'SITENAME' => urlencode($sitename)
    );

    // Build query string
    $uni_fields_string = '';
    foreach ($uniFields as $key => $value) {
        $uni_fields_string .= $key . '=' . $value . '&';
    }
    $uni_fields_string = rtrim($uni_fields_string, '&');

    // Make the CRM request
    $post = curl_init();
    curl_setopt($post, CURLOPT_URL, 'https://crm.stealthdigital.in/lp/index');
    curl_setopt($post, CURLOPT_POST, count($uniFields));
    curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
    curl_setopt($post, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
    
    $content = curl_exec($post);
    $httpCode = curl_getinfo($post, CURLINFO_HTTP_CODE);
    
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response: " . $content);

    curl_close($post);

    // Return JSON response for the React app
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'response' => $content
    ]);

} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
