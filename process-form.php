<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $full_name = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "henri@c-henri.com";

    // Email subject and body
    $email_subject = "Contact Form Submission: " . $subject;
    $email_body = "
    You have received a new message from the contact form on your website.

    Full Name: $full_name
    Email: $email
    Subject: $subject

    Message:
    $message
    ";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<p>Thank you for contacting us! We will get back to you soon.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }

        // Redirect back to home page
        header("Location: index.html");
        exit;
    } else {
        // Handle non-POST requests or direct access to the script.
        echo "Error submitting form!";
    
}
?>