<?php

class Evento {

    private $idEvento;
    private $nome;
    private $data;
    private $local;
    private $resumo;
    private $descricao;
    private $caminhoImagem;
    private $nomeImagem;

    public function getIdEvento() {
        return $this->idEvento;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getData() {
        return $this->data;
    }

    public function getLocal() {
        return $this->local;
    }

    public function getResumo() {
        return $this->resumo;
    }

    public function getDescricao() {
        return $this->descricao;
    }

    public function getCaminhoImagem() {
        return $this->caminhoImagem;
    }

    public function getNomeImagem() {
        return $this->nomeImagem;
    }

    public function setIdEvento($idEvento) {
        $this->idEvento = $idEvento;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setData($data) {
        $this->data = $data;
    }

    public function setLocal($local) {
        $this->local = $local;
    }

    public function setResumo($resumo) {
        $this->resumo = $resumo;
    }

    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

    public function setCaminhoImagem($caminhoImagem) {
        $this->caminhoImagem = $caminhoImagem;
    }

    public function setNomeImagem($nomeImagem) {
        $this->nomeImagem = $nomeImagem;
    }

    public function criar($evento) {
        $conexao = Conexao::pegarConexao();

        // Verificar se o evento já existe
        $nome = $evento->getNome();
        $data = $evento->getData();

        $stmtE = $conexao->prepare("SELECT * FROM evento WHERE nomeEvento = ? AND data = ?");
        $stmtE->bindParam(1, $nome);
        $stmtE->bindParam(2, $data);
        $stmtE->execute();

        if ($stmtE->rowCount() > 0) {            
            $_SESSION['error'] = "Evento já existente.";
            header("Location: ../edit_events.php");
        } else {
            // Criação do evento no banco de dados
            $sql = "INSERT INTO evento (nomeEvento, data, horario, resumo, descricao, caminhoImagem, nomeImagem) 
                    VALUES (:nomeEvento, :data, :horario, :resumo, :descricao, :caminhoImagem, :nomeImagem)";
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(':nomeEvento', $evento->getNome());
            $stmt->bindValue(':data', $evento->getData());
            $stmt->bindValue(':horario', $evento->getLocal());
            $stmt->bindValue(':resumo', $evento->getResumo());
            $stmt->bindValue(':descricao', $evento->getDescricao());
            $stmt->bindValue(':caminhoImagem', $evento->getCaminhoImagem());
            $stmt->bindValue(':nomeImagem', $evento->getNomeImagem());
            $stmt->execute();

            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Evento adicionado com sucesso!');</script>";
            header("Location: ../events.php");
        }
    }

    public function atualizar($evento) {
        $conexao = Conexao::pegarConexao();

        // Atualizar dados
        $sql = "UPDATE evento SET nomeEvento = :nomeEvento, data = :data, horario = :horario, resumo = :resumo, descricao = :descricao, caminhoImagem = :caminhoImagem, nomeImagem = :nomeImagem 
                WHERE idEvento = :idEvento";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idEvento', $evento->getIdEvento());
        $stmt->bindValue(':nomeEvento', $evento->getNome());
        $stmt->bindValue(':data', $evento->getData());
        $stmt->bindValue(':horario', $evento->getLocal());
        $stmt->bindValue(':resumo', $evento->getResumo());
        $stmt->bindValue(':descricao', $evento->getDescricao());
        $stmt->bindValue(':caminhoImagem', $evento->getCaminhoImagem());
        $stmt->bindValue(':nomeImagem', $evento->getNomeImagem());
        
        if ($stmt->execute()) {
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Dados atualizados com sucesso!');</script>";
        } else {
            $_SESSION['TryAgain'] = "<script type='text/javascript'>alert('Falha ao atualizar os dados, tente novamente.');</script>";
        }

        header('Location: ../events.php'); //não tenho certeza para qual página devo mandar após isso
    }

    public function deletar($idEvento) {
        $conexao = Conexao::pegarConexao();

        $sql = "DELETE FROM evento WHERE idEvento = :idEvento";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idEvento', $idEvento);
        if ($stmt->execute()) {
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Evento excluído com sucesso!');</script>";
        } else {
            $_SESSION['TryAgain'] = "<script type='text/javascript'>alert('Falha ao excluir o evento, tente novamente.');</script>";
        }
        header('Location: ../events.php');
    }

    public function listar() {
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT * FROM evento";
        $stmt = $conexao->query($sql);
        $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $lista;
    }

    public function detalhar($idEvento) {
        $conexao = Conexao::pegarConexao();
        
        $sql = "SELECT * FROM evento WHERE idEvento = :idEvento";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':idEvento', $idEvento);
        $stmt->execute();
        $detalhes = $stmt->fetch(PDO::FETCH_ASSOC);

        return $detalhes;
    }

    public function participacao($idEvento){
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT v.idVoluntario, nome, email, participacao.* FROM participacao
                JOIN voluntario v ON v.idVoluntario = participacao.idVoluntario
                 WHERE idEvento = :idEvento";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':idEvento', $idEvento);
        $stmt->execute();
        $participantes = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $participantes;
    }

    public function participar($idEvento){
        $conexao = Conexao::pegarConexao();

        $stmtE = $conexao->query("SELECT idVoluntario FROM voluntario WHERE email = '" . $_SESSION['UserEmail'] . "'");
        $resultado = $stmtE->fetch();
        $idVoluntario = $resultado['idVoluntario'];

        $sql = "INSERT INTO participacao(idVoluntario, idEvento)
                    VALUES (:idVoluntario, :idEvento)";
        $stmt = $conexao->prepare($sql);
        $stmt->bindValue(':idVoluntario', $idVoluntario);
        $stmt->bindValue(':idEvento', $idEvento);
        $stmt->execute();

        $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Participação registrada!');</script>";
        header("Location: ../events.php");
        
    }

    public function recente(){
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT * FROM evento ORDER BY idEvento DESC LIMIT 2";
        $stmt = $conexao->query($sql);
        $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $lista;
    }   
}
?>
