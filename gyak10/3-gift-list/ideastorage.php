<?php
include_once('storage.php');

class IdeaStorage extends Storage {
    public function __construct(){
        parent::__construct(new JsonIO('ideas.json'));
    }
}


?>