<?php
function main(array $args) : array
{
    // Parâmetros de conexão com o banco de dados MySQL
    $servername = "server";
    $username = "user";
    $password = "pass";
    $dbname = "dbname";

    // Criar conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query SQL
    $sql = $args["query"];
    $result = $conn->query($sql);

    // Verificar se retornou resultados
    if ($result->num_rows > 0) {
        // Converter resultados para um array associativo
        $data = array();
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Retornar os dados em formato JSON
        return $data;
    } else {
        // Caso não haja resultados
        return ["error" => "Nenhum resultado encontrado"];
    }

    // Fechar conexão
    $conn->close();
}

  
