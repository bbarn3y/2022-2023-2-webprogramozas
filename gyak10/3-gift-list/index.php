<?php
include_once('memberstorage.php');

$ms = new MemberStorage();

if (count($_POST) > 0) {
    $member = [
            "name" => $_POST["name"]
    ];
    $ms->add($member);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task 3</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Task 3: Gift list</h1>
  <h2>My family members</h2>
  <form action="" method="post">
    Name: <input type="text" name="name" required>
    <button type="submit">Add</button>
  </form>
  <ul>
    <?php foreach ($ms->findAll() as $member): ?>
    <li>
        <a href="member.php?id=<?= $member['id'] ?>"><?= $member['name'] ?></a>
    </li>
    <?php endforeach; ?>
      <!--
    <li>
      Family member 1 (2 / 4)
    </li>
    <li>
      Family member 2 (1 / 2)
    </li>
    <li>
      Family member 3 (0 / 3)
    </li>
    -->
  </ul>
</body>
</html>