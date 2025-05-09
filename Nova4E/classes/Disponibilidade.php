<?php

class Disponibilidade {

    private $idVoluntario;
    private $idAtividade;
    private $outroDescricao;
    private $horasSemanais;
    private $periodicidade;

    public function getIdVoluntario() {
        return $this->idVoluntario;
    }

    public function getIdAtividade() {
        return $this->idAtividade;
    }

    public function getOutroDescricao() {
        return $this->outroDescricao;
    }

    public function getHorasSemanais() {
        return $this->horasSemanais;
    }

    public function getPeriodicidade() {
        return $this->periodicidade;
    }

    public function setIdVoluntario($idVoluntario) {
        $this->idVoluntario = $idVoluntario;
    }

    public function setIdAtividade($idAtividade) {
        $this->idAtividade = $idAtividade;
    }

    public function setOutroDescricao($outroDescricao) {
        $this->outroDescricao = $outroDescricao;
    }

    public function setHorasSemanais($horasSemanais) {
        $this->horasSemanais = $horasSemanais;
    }

    public function setPeriodicidade($periodicidade) {
        $this->periodicidade = $periodicidade;
    }   
    
    public function listar() {
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT a.nome as nomeAtividade, v.idVoluntario as idVoluntario, v.nome as nomeVoluntario, d.* FROM disponibilidade d
                 JOIN voluntario v ON d.idVoluntario = v.idVoluntario
                 JOIN atividade a ON d.idAtividade = a.idAtividade";
        $stmt = $conexao->query($sql);
        $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $lista;
    }
}
?>
