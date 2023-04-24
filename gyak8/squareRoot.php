<?php

print_r($_GET);
print_r($_POST);
print_r($_POST['number'] ?? NULL);

$errors = [];
$number = $_GET['number'] ?? $_POST['number'];

if ($number == NULL || $number == '') {
    $errors[] = "Please provide a number";
} else if (!is_numeric($number)) {
    $errors[] = $number . " is not number!";
}

$squareRoot = NULL;
if (count($errors) == 0) {
    $squareRoot = sqrt($number);
}

?>

Number: <?= $number ?>
<br>
<?php if ($squareRoot != NULL): ?>
    SQRT: <?= $squareRoot ?>
<?php endif; ?>

<?php foreach($errors as $error): ?>
    <div style="color: red"><?= $error ?></div>
<?php endforeach; ?>
