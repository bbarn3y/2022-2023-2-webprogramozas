<?php
declare(strict_types=1)
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

Hi there!
<?php echo '<br>Dynamic hi there!' ?>
<?= '<br>Short hi there!' ?>

<?php
$bool = true;
$int = 4;
$float = 4.2;
$string = "szöveg";
$array = ["text1", "text2"];
$callable = function() {};

echo "szöveg1" . "szöveg2";
echo 5 + 10;
echo '<br>';
echo 5 <=> 3;
echo '<br>';
echo 9 ?? NULL ?? 3;
echo NULL ?? NULL ?? 3;
echo 1 ? 2 : 0;
echo 1 ?: 0; // 1 ? 1 : 0

echo "<br> gettype(bool):" . gettype(true);
echo "<br> gettype(int):" . gettype(7);
echo "<br> gettype(float):" . gettype(7.2);
echo "<br> gettype(string):" . gettype("7.2");
echo "<br> gettype(array):" . gettype(["asd", "asd"]);
echo "<br> gettype(callable):" . gettype($callable);
echo "<br> is_callable(callable):" . is_callable($callable);
?>

<?php
function even(array $tomb): array {
    $result = [];
    foreach($tomb as $number) {
        if ($number % 2 == 0) {
            // $result[] = $number;
            array_push($result, $number);
        }
    }
    return $result;
}

function filter(array $tomb, callable $func): array {
    $result = [];
    foreach($tomb as $number) {
        if ($func($number)) {
            // $result[] = $number;
            array_push($result, $number);
        }
    }
    return $result;
}

$numbers = [-2, -19, 43, 7, 9, 3, 5, 6, 22];

$evenNumbers = even($numbers);

$oddNumbers = filter($numbers, function($num) {
    return $num % 2 == 1;
});

$negativeNumbers = array_filter($numbers, function($n) {
    return $n < 0;
});
?>

<ul>
    <?php foreach($evenNumbers as $evenNumber): ?>
    <li>
        <?= $evenNumber ?>
    </li>
    <?php endforeach; ?>
</ul>

<?php
    print_r($oddNumbers);
    print_r($negativeNumbers);
?>

<?php
$settings = [
    1 => [
        'name' => 'Theme',
        'type' => 'radio',
        'options' => [
            "dark" => false,
            "light" => true
        ]
    ],
    2 => [
        'name' => 'Mode',
        'type' => 'checkbox',
        'options' => [
            'mode1' => true,
            'mode2' => false,
            'mode3' => true
        ]
    ]
];
?>

<h3>Category</h3>
<input type="radio" name="way" value="a" /> A
<input type="radio" name="way" value="b" checked /> B

<?php foreach($settings as $id => $setting): ?>
    <h3><?= $setting['name'] ?></h3>
    <?php foreach($setting['options'] as $option => $checked): ?>
        <input type="<?= $setting['type'] ?>"
               name="<?= $setting['name'] ?>"
               value="<?= $option ?>"
               <?= $checked ? 'checked' : '' ?> />
            <?= $option ?>
    <?php endforeach; ?>
<?php endforeach; ?>

<!-- Env -->
<?php
print_r(getenv("PATH"));
?>

<!-- $_GET -->
<?php
$backgroundColor = $_GET['color'] ?? 'white';
?>

<style>
    html {
        background-color: <?= $backgroundColor ?>;
    }
</style>

<a href="http://localhost:8000?color=green">Green</a>
<a href="http://localhost:8000?color=black">Black</a>

<!-- Form -->
<form method="GET" action="squareRoot.php">
    <label for="number" title="number"></label>
    <input name="number" type="text" />
    <button type="submit">Calculate square root</button>
</form>

</body>
</html>

