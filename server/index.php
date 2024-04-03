<?php 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include 'users/DbConnect.php';
$objDB= new DbConnect;
$conn= $objDB->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST";
    $user = json_decode(file_get_contents('php://input'));

    $sql = "INSERT INTO users(id, name, email, mobile,password,  create_at) VALUES(NULL, :name, :email, :mobile, :password,:create_at);";
    $stmt = $conn -> prepare($sql);
    $created_at = date('Y-m-d');
    $stmt->bindParam(':name', $user->name);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':mobile', $user->mobile);
    $stmt->bindParam(':password', $user->password);
    $stmt->bindParam(':create_at', $create_at);
    if($stmt->execute()){
        $response=1;
        echo json_encode($response);
    }else{

        $response = "Something went wrong in regards to your credentials. Try using a different email.";
        echo json_encode($response);
        
    }
    break;
  
}
