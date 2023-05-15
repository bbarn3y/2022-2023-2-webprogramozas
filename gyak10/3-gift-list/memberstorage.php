<?php
include_once('storage.php');

class MemberStorage extends Storage {
    public function __construct(){
        parent::__construct(new JsonIO('members.json'));
    }
}


?>