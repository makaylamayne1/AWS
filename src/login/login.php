<?php
header('Content-Type: application/json');

// Retrieve username and password from POST request
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

// Validate username and password (You should replace this with your own validation logic)
if ($username === 'admin' && $password === 'password') {
    // Successful login
    $response = array('success' => true, 'message' => 'Login successful');
    echo json_encode($response);
} else {
    // Failed login
    $response = array('success' => false, 'message' => 'Invalid username or password');
    http_response_code(401); // Unauthorized status code
    echo json_encode($response);
}
?>
