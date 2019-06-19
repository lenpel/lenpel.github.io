<?php

// if the url field is empty, but the message field isn't
if(isset($_POST['url']) && $_POST['url'] == '' && $_POST['message'] != ''){

	// my email address here
	$youremail = 'lba_2@yahoo.com';

	$body = "Submitted from my portfolio page:
	Name:  $_POST[name]
	E-Mail: $_POST[email]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack my form).
	// Otherwise send from my email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Contact Form', $body, $headers );

}

// otherwise, let the spammer think that they got their message through

// uncomment these lines to redirect instead of displaying HTML
//header('Location: http://www.mysite.com/thankyou.html');
//exit('Redirecting you to http://www.mysite.com/thankyou.html');

?>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>Thanks!</title>
    <meta charset="utf-8">
</head>
<body>

<h1>Thanks</h1>
<p>We'll get back to you as soon as possible.</p>

</body>
</html>
