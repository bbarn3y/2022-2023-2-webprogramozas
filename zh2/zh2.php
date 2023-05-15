<?php

interface BooksAPI {
    function getBooks(): array;
    function getBooksReleasedAfter(int $year): array;
}

abstract class BooksFromWhatever implements BooksAPI {
    abstract function getBooks(): array;

    function getBooksReleasedAfter(int $year): array
    {
        # 1.2
        return $this->getBooks();
    }
}

class BooksFromCSV extends BooksFromWhatever {
    function getBooks(): array
    {
        # +1
        return [];
    }
}

class BooksFromJSON extends BooksFromWhatever {
    function getBooks(): array
    {
        # 1.1
        return [];
    }
}

$csvBooksAPI = new BooksFromCSV();
$jsonBooksAPI = new BooksFromJSON();

$errors = [];
if (!empty($_POST)) {
    # 1.3

    $booksAfterYear = [];
    if (count($errors) === 0) {
        # 1.5

        # 1.6
    }
}

?>

<form method="POST">
    <label for="year" title="Év"></label>
    <input name="year" type="number" />
    <!-- # 1.4 -->

    <button type="submit">Könyvek listázása</button>
</form>


