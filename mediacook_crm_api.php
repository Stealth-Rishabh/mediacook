<?php
// Retrieve the form data from POST
$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$phone = $_POST['contact-phone'];
$company = $_POST['contact-company'];
$subject = $_POST['contact-subject'];
$message = $_POST['contact-message'];
$query = "<b>Company: </b>" . $company . "<br><b>Subject: </b>" . $subject . "<br><b>Message: </b>" . $message;
$referrer = $_POST['referrer_name'];
$keyword = $_POST['keyword'];
$source = $_POST['source'];
$orderid = $_POST['orderid'];
$sitename = $_POST['sitename'];
$campaign_url = $_POST['campaign_url'];
$campaign_name = $_POST['campaign_name'];
$network = $_POST['network'];

// Check if required fields are filled
if (!empty($name) && !empty($email) && !empty($phone)) {

	$uniFields = array(
		'name' => urlencode($name),
		'phone' => urlencode($phone),
		'email' => urlencode($email),
		'query' => urlencode($query),
		'http_referer' => urlencode($referrer),
		'search_keyword' => urlencode($keyword),
		'campaign_url' => urlencode($campaign_url),
		'campaign_name' => urlencode($campaign_name),
		'network' => urlencode($network),
		'source' => urlencode($source),
		'ORDERID' => urlencode($orderid),
		'SITENAME' => urlencode($sitename)
	);

	// Prepare the query string
	$uni_fields_string = '';
	foreach ($uniFields as $key => $value) {
		$uni_fields_string .= $key . '=' . $value . '&';
	}
	$uni_fields_string = rtrim($uni_fields_string, '&');

	// CRM URL
	$uniUrl = 'https://crm.stealthdigital.in/lp/index';

	// Initialize cURL
	$post = curl_init();
	curl_setopt($post, CURLOPT_URL, $uniUrl);
	curl_setopt($post, CURLOPT_POST, count($uniFields));
	curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
	curl_setopt($post, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
	$content = curl_exec($post);
	curl_close($post);

	// Redirect to thank you page
	header("Location: thankyou.html");
	exit;
} else {
	// Redirect to form page with error
	header("Location: index.html");
	exit;
}
?>
