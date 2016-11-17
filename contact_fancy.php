<?php

if(empty($_POST['submit']))
{
  echo "Form is not submitted";
  exit;
}

if(empty($_POST["name"]) ||
empty($_POST["email"]))
{
  echo "Please fill the form";
  exit;
}

$name = $_POST["name"];
$email = $_POST["email"];

mail ( 'allison.christman@appliedis.com' , 'Contact Form' , 'Here is my information: Name: $name, Email: $email');

header('Location: thank-you.html');
 ?>
