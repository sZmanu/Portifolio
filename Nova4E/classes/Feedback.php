<?php

class Feedback {

    private $idFeedback;
    private $idVoluntario;
    private $data;
    private $descricao;

    public function getIdFeedback() {
        return $this->idFeedback;
    }

    public function getIdVoluntario() {
        return $this->idVoluntario;
    }

    public function getData() {
        return $this->data;
    }

    public function getDescricao() {
        return $this->descricao;
    }

    public function setIdFeedback($idFeedback) {
        $this->idFeedback = $idFeedback;
    }

    public function setIdVoluntario($idVoluntario) {
        $this->idVoluntario = $idVoluntario;
    }

    public function setData($data) {
        $this->data = $data;
    }

    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

    public function criar($feedback) {
        $conexao = Conexao::pegarConexao();

        // Criação do feedback no banco de dados
        $sql = "INSERT INTO feedback (idVoluntario, data, descricao) 
                VALUES (:idVoluntario, :data, :descricao)";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idVoluntario', $feedback->getIdVoluntario());
        $stmt->bindValue(':data', $feedback->getData());
        $stmt->bindValue(':descricao', $feedback->getDescricao());
        $stmt->execute();
    }

    public function atualizar($feedback) {
        $conexao = Conexao::pegarConexao();

        // Atualizar dados
        $sql = "UPDATE feedback SET data = :data, descricao = :descricao 
                WHERE idFeedback = :idFeedback";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idFeedback', $feedback->getIdFeedback());
        $stmt->bindValue(':data', $feedback->getData());
        $stmt->bindValue(':descricao', $feedback->getDescricao());

        if ($stmt->execute()) {
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Feedback atualizado com sucesso!');</script>";
        } else {
            $_SESSION['TryAgain'] = "<script type='text/javascript'>alert('Falha ao atualizar o feedback, tente novamente.');</script>";
        }

        header('Location: ../profile_feedback.php'); //não tenho certeza para qual página devo mandar após isso
    }

    public function deletar($idFeedback) {
        $conexao = Conexao::pegarConexao();

        $sql = "DELETE FROM feedback WHERE idFeedback = :idFeedback";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idFeedback', $idFeedback);
        if ($stmt->execute()) {
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Feedback excluído com sucesso!');</script>";
        } else {
            $_SESSION['TryAgain'] = "<script type='text/javascript'>alert('Falha ao excluir o feedback, tente novamente.');</script>";
        }
        header('Location: ../index.php');
    }

    public function listar() {
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT * FROM feedback";
        $stmt = $conexao->query($sql);
        $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $lista;
    }
}
?>
