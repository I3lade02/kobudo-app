
<?php
include 'auth.php';

if ($_FILES['file']['error'] == UPLOAD_ERR_OK) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);

    if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo json_encode(["success" => true, "message" => "Soubor byl nahrán"]);
    } else {
        echo json_encode(["success" => false, "message" => "Nahrání souboru selhalo"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Chyba při nahrávání"]);
}
?>