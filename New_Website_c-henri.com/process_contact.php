<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $FirstName = $_POST["FirstName"];
    $LastName = $_POST["LastName"];
    $Email = $_POST["Email"];
    $PhoneNumber = $_POST["PhoneNumber"];
    $Message = $_POST["Message"];

    $to = "henri@c-henri.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Compose the email message
    $email_message = "Name: $FirstName $LastName\n";
    $email_message .= "Email: $Email\n";
    $email_message .= "Phone Number: $PhoneNumber\n\n";
    $email_message .= "Message:\n$Message";
    

    // Send the email
    mail($to, $subject, $email_message, $headers);

    // Redirect to thankyou page
    header("Location: index.html");
    exit;
} else {
    // Handle non-POST requests or direct access to the script.
    echo "Error submitting form!";
}