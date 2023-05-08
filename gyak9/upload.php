<?php
print_r($_FILES);
if (!empty($_FILES)) {
    $fileContent = file_get_contents($_FILES['thefile']['tmp_name']);
    echo nl2br($fileContent);
}
?>
<br>

<form method="post" action="upload.php" enctype="multipart/form-data">
    Upload file: <input type="file" name="thefile"/>
    <button type="submit">Upload</button>
</form>