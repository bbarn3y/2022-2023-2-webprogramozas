<?php
$personsFile = fopen("persons.json", "r");

$personsAsString = fread($personsFile, filesize("persons.json"));
// echo $personsAsString;

$parsedPersons = json_decode($personsAsString, true);
print_r($parsedPersons);

fclose($personsFile);

?>

<?php
$adultPersons = array_filter($parsedPersons, fn($person) => $person['age'] >= 18);
?>
<ul>
<?php
foreach ($adultPersons as $adultPerson):
?>
<li>
    <?= $adultPerson['name'] ?>
</li>
<?php
endforeach;
?>
</ul>

<?php
$adultPersonsCSVFile = fopen("adult_persons.csv", "w");
fwrite($adultPersonsCSVFile, 'name,age,sex' . PHP_EOL);
foreach($adultPersons as $adultPerson) {
    fwrite($adultPersonsCSVFile, $adultPerson['name'] . ',' . $adultPerson['age'] . ',' . $adultPerson['sex'] . PHP_EOL);
}
fclose($adultPersonsCSVFile);
?>
