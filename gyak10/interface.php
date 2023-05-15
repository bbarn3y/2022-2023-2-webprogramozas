<?php

interface PersonsAPI {
    function getPersons(): array;
    function getPersonsOverAge(int $age): array;
}

abstract class PersonsFromWhatever implements PersonsAPI {
    abstract function getPersons(): array;

    function getPersonsOverAge(int $age): array
    {
        $result = [];
        foreach($this->getPersons() as $person) {
            if ($person['age'] >= $age) {
                $result[] = $person;
            }
        }
        return $result;
    }
}

class PersonsFromCSV extends PersonsFromWhatever {
    function getPersons(): array
    {
        $personsFromCSV = [];
        $personsFromCSVFile = fopen("persons.csv", "r");
        $headers = fgetcsv($personsFromCSVFile, NULL, ",");
        while($row = fgetcsv($personsFromCSVFile, NULL, ",")) {
            $personsFromCSV[] = array_combine($headers, $row);
        }
        fclose($personsFromCSVFile);
        return $personsFromCSV;
    }
}

class PersonsFromJson extends PersonsFromWhatever {
    function getPersons(): array {
        return json_decode(file_get_contents('persons.json'), true);
    }
}

$personsAPI = new PersonsFromCSV();
$personsJsonAPI = new PersonsFromJson();


foreach ($personsAPI->getPersonsOverAge(18) as $adultPerson) {
    echo nl2br($adultPerson['name'] . PHP_EOL);
}

foreach ($personsJsonAPI->getPersonsOverAge(30) as $adultPerson) {
    echo nl2br($adultPerson['name'] . PHP_EOL);
}

