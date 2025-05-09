<?php

class Documentos {

    private $idVoluntario;
    private $estadoCivil;
    private $rg;
    private $cpf;
    private $nacionalidade;
    private $profissao;
    private $cidade;
    private $endereco;
    private $numero;
    private $bairro;
    private $uf;
    private $complemento;
    private $cep;
    private $caminhoImagem;
    private $nomeImagem;

    public function getIdVoluntario() {
        return $this->idVoluntario;
    }

    public function getEstadoCivil(){
        return $this->estadoCivil;
    }

    public function getRg() {
        return $this->rg;
    }

    public function getCpf() {
        return $this->cpf;
    }

    public function getNacionalidade() {
        return $this->nacionalidade;
    }

    public function getProfissao() {
        return $this->profissao;
    }

    public function getCidade() {
        return $this->cidade;
    }

    public function getEndereco() {
        return $this->endereco;
    }

    public function getNumero() {
        return $this->numero;
    }

    public function getBairro() {
        return $this->bairro;
    }

    public function getUf() {
        return $this->uf;
    }

    public function getComplemento() {
        return $this->complemento;
    }

    public function getCep() {
        return $this->cep;
    }

    public function getCaminhoImagem() {
        return $this->caminhoImagem;
    }

    public function getNomeImagem() {
        return $this->nomeImagem;
    }

    public function setIdVoluntario($idVoluntario) {
        $this->idVoluntario = $idVoluntario;
    }
    
    public function setEstadoCivil($estadoCivil){
        $this->estadoCivil = $estadoCivil;
    }

    public function setRg($rg) {
        $this->rg = $rg;
    }

    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }

    public function setNacionalidade($nacionalidade) {
        $this->nacionalidade = $nacionalidade;
    }

    public function setProfissao($profissao) {
        $this->profissao = $profissao;
    }

    public function setCidade($cidade) {
        $this->cidade = $cidade;
    }

    public function setEndereco($endereco) {
        $this->endereco = $endereco;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }

    public function setBairro($bairro) {
        $this->bairro = $bairro;
    }

    public function setUf($uf) {
        $this->uf = $uf;
    }

    public function setComplemento($complemento) {
        $this->complemento = $complemento;
    }

    public function setCep($cep) {
        $this->cep = $cep;
    }

    public function setCaminhoImagem($caminhoImagem) {
        $this->caminhoImagem = $caminhoImagem;
    }

    public function setNomeImagem($nomeImagem) {
        $this->nomeImagem = $nomeImagem;
    }

}
?>
