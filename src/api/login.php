
<?php
session_start();
header('Content-type': 'application/json');

//Uživatelé a hesla
$users = [
    "admin" => password_hash("heslo123", PASSWORD_BCRYPT),
];

//získání dat z požadavku
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if(array_key_exists($username, $users) && password_verify($password, $users[$username])) {
    //uložení uživatele do session
    $_SESSION['user'] = $username;
    echo json_encode(["success" => true, "token" => session_id()]);
} else {
    echo json_encode(["success" => false, "message" => "Špatné přihlašovací údaje"]);
}
?>