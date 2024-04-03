<?php
/***
* Database Connection  
*/
class DbConnect{
    private $server = 'localhost';
    private $dbname = 'react-crud';
    private $user = 'root';
    private $pass = '';

    public function connect(){
        try {
            // Use $this-> to access class properties
            $pdo = new PDO("mysql:host={$this->server};dbname={$this->dbname}", $this->user, $this->pass);
            return $pdo; // Return the PDO object
        }
        catch (PDOException $e) {
             echo "Error!: " . $e->getMessage() . "<br/>";
             die();
         }
    }
}
?>
