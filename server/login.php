<?php 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");


include 'users/DbConnect.php';
$objDB= new DbConnect;
$conn= $objDB->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        
    // Check if JSON data is received
    $user = json_decode(file_get_contents('php://input'));
    if (!$user) {
        // Handle invalid JSON data
        $response = ['status' => 0, 'message' => 'Invalid JSON data'];
        echo json_encode($response);
        exit; // Stop script execution
    }
    // Extract email and password from JSON data
    $email = $user->email;
    $password = $user->password;

    // Prepare and execute SQL query
    $sql = "SELECT * FROM users WHERE email = :email AND password = :password";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':password', $user->password);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if user exists
  // Check if user exists
if ($user && $password!=NULL){
    $response = 1;
    // Access the status value
    echo json_encode($response);

    } else {
       $response = ["Unsuccessful log in to the database. Please review your credentials. "];
       $response = 0;
       // Access the status value
       echo json_encode($response);
      
    }
}
