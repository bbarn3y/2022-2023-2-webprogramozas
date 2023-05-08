<?php

print_r($_POST);

function validate($input, &$errors) {
    if (!isset($input['categories']) || count($input['categories']) < 2) {
        $errors['categories'] = 'Please choose at least 2 categories!';
    }

    if (!isset($input['bool']) || filter_var($input['bool'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) === NULL) {
        $errors['bool'] = 'Please choose a proper boolean value!';
    }

    // ^[0-9a-zA-Z]{8}-[0-9]{8}$
    if (!isset($input['email']) || !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email_format'] = 'Please provide a valid e-mail address!';
    } else if (!filter_var($input['email'], FILTER_VALIDATE_REGEXP, [
            "options" => [
                    "regexp" => "/^a(.+)/"
            ]
    ])) {
        $errors['email_a'] = 'The e-mail address must start with the character "a"';
    }
}

$errors = [];
if (!empty($_POST)) {
    validate($_POST, $errors);
}

?>

<form method="post">
    <div>
        <input type="radio" name="bool" value="true"> True
        <input type="radio" name="bool" value="false"> False
        <input type="radio" name="bool" value="other"> Other
    </div>
    <?php if (isset($errors['bool'])): ?>
        <div style="color: red">
            <?= $errors['bool'] ?>
        </div>
    <?php endif; ?>

    <div>
        <input type="checkbox" name="categories[]" value="1"> Cat1
        <input type="checkbox" name="categories[]" value="2"> Cat2
        <input type="checkbox" name="categories[]" value="3"> Cat3
    </div>
    <?php if (isset($errors['categories'])): ?>
        <div style="color: red">
            <?= $errors['categories'] ?>
        </div>
    <?php endif; ?>

    <div>
        <input type="text" name="email">
    </div>
    <?php if (isset($errors['email_format'])): ?>
        <div style="color: red">
            <?= $errors['email_format'] ?>
        </div>
    <?php endif; ?>
    <?php if (isset($errors['email_a'])): ?>
        <div style="color: red">
            <?= $errors['email_a'] ?>
        </div>
    <?php endif; ?>

    <button type="submit">Submit</button>

</form>