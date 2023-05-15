<?php
include_once('memberstorage.php');
include_once('ideastorage.php');

$ms = new MemberStorage();
$is = new IdeaStorage();

$id = $_GET['id'];

if (count($_POST) > 0) {
    $is->add([
       'idea' => $_POST["idea"],
       'active' => true,
       'ready' => false,
       'comments' => [],
        'member_id' => $id
    ]);
}

$ideas = $is->findAll([
   'member_id'  => $id,
   'active'     => true
]);
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
  <a href="index.php">Back to main page</a>
  <h2>Ideas for <?= $ms->findById($id)['name'] ?> </h2>
  <form action="" method="post">
    <fieldset>
      <legend>New idea</legend>
      Idea: <input type="text" name="idea" required>
      <button name="function-add" type="submit">Add new idea</button>
    </fieldset>
  </form>
  <?php foreach($ideas as $idea): ?>
      <details>
        <summary>
          <?= $idea["idea"] ?> <span>✓</span>
        </summary>
        <form action="" method="post">
          <input type="hidden" name="idea-id" value="">
          Comment: <input type="text" name="comment" required>
          <button type="submit" name="add-comment">Add comment</button> <br>
        </form>
        <form action="" method="post">
          <input type="hidden" name="idea-id" value="">
          <button type="submit" name="complete">Complete</button>
          <button type="submit" name="hide">Hide</button>
        </form>
        <ul>
          <li>Comment 1</li>
          <li>Comment 2</li>
        </ul>
      </details>
  <?php endforeach; ?>
</body>
</html>