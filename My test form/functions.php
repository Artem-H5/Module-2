<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/libs/PHPMailer/Exception.php";
require __DIR__ . "/libs/PHPMailer/PHPMailer.php";
require __DIR__ . "/libs/PHPMailer/SMTP.php";

function validation($data)
{
    $errors = [];

    if (empty($data["name"])) {
        $errors["name"] = "is-invalid";
    }
    if (empty($data["email"])) {
        $errors["email"] = "is-invalid";
    }
    if (empty($data["tel"])) {
        $errors["tel"] = "is-invalid";
    }
    if (empty($data["text"])) {
        $errors["text"] = "is-invalid";
    }

    return $errors;
}

function send($name, $email, $tel, $text)
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "formphp3@gmail.com";
    $mail->Password = "wbxgarsjfwcnhrpf";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom("formphp3@gmail.com", 'Test');
    $mail->addAddress("formphp3@gmail.com", 'Artem');

    $mail->isHTML(true);
    $mail->Subject = "Flight to: $text";
    $mail->Body = "Name: $name<br>E-mail: $email<br>Phone: $tel";

    try {
        $mail->send();
        ?>
        <div class="alert alert-success" role="alert">
            Message sent
        </div>
        <?php
    } catch (Exception $exception) {
        ?>
        <div class="alert alert-danger" role="alert">
            <?= $exception->getMessage() ?>
        </div>
        <?php
    }
}