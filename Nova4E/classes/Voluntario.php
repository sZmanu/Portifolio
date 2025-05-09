<?php 

class Voluntario{

    private $idVoluntario;
    private $nome;
    private $nomeSocial;
    private $telefone;
    private $email;
    private $senha;
    private $dataNascimento;


    public function getIdVoluntario(){
        return $this->idVoluntario;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getNomeSocial(){
        return $this->nomeSocial;
    }

    public function getTelefone(){
        return $this->telefone;
    }

    public function getEmail(){
        return $this->email;
    }
    
    public function getSenha(){
        return $this->senha;
    }

    public function getDataNascimento(){
        return $this->dataNascimento;
    }
    

    public function setIdVoluntario($idVoluntario){
        $this->idVoluntario = $idVoluntario;
    }

    public function setNome($nome){
        $this->nome = $nome;
    }

    public function setNomeSocial($nomeSocial){
        $this->nomeSocial = $nomeSocial;
    }

    public function setTelefone($telefone){
        $this->telefone = $telefone;
    }

    public function setEmail($email){
        $this->email = $email;
    }

    public function setSenha($senha){
        $this->senha = $senha;
    }

    public function setDataNascimento($dataNascimento){
        $this->dataNascimento = $dataNascimento;
    }


    public function cadastrar($voluntario, $documento, $disponibilidade, $atividade) {
        try{
            $conexao = Conexao::pegarConexao();
            $conexao->beginTransaction();
        
            // Voluntário
                // Validação
                $emailVoluntario = $voluntario->getEmail();
            
                $stmtE = $conexao->prepare("SELECT * FROM voluntario WHERE email = :email");
                $stmtE->bindValue(':email', $emailVoluntario);
                $stmtE->execute();
            
                if ($stmtE->rowCount() > 0) {
                    throw new Exception("Email ja existente, por favor utilize um diferente.");
                } else {
                    // Cadastro
                    $sql = "INSERT INTO voluntario (nome, telefone, email, senha, dataNascimento) VALUES (:nome, :telefone, :email, :senha, :dataNascimento)";
                    $stmtV = $conexao->prepare($sql);
                    $stmtV->bindValue(':nome', $voluntario->getNome());
                    $stmtV->bindValue(':telefone', $voluntario->getTelefone());
                    $stmtV->bindValue(':email', $voluntario->getEmail());
                    $stmtV->bindValue(':senha', $voluntario->getSenha());
                    $stmtV->bindValue(':dataNascimento', $voluntario->getDataNascimento());
                    $stmtV->execute();
                }
            
            // Documentos
                // Pegar id do voluntario
                $stmtI = $conexao->prepare("SELECT idVoluntario FROM voluntario WHERE email = :email");
                $stmtI->bindValue(':email', $emailVoluntario);
                $stmtI->execute();
                $resultado = $stmtI->fetch();
                if (!$resultado) {
                    throw new Exception("Voluntário não encontrado.");
                }
                $documento->setIdVoluntario($resultado['idVoluntario']);
            
                // Verificar CPF
                $stmtC = $conexao->prepare("SELECT * FROM documentos WHERE cpf = :cpf");
                $stmtC->bindValue(':cpf', $documento->getCpf());
                $stmtC->execute();
                
                if ($stmtC->rowCount() > 0) {
                    throw new Exception("Cpf ja existente, por favor utilize um diferente.");
                } else {
                    // Criação dos documentos no banco de dados
                    $sql = "INSERT INTO documentos (idVoluntario, estadoCivil, rg, cpf, nacionalidade, profissao, cidade, endereco, numero, bairro, uf, complemento, cep, caminhoImagem, nomeImagem) 
                            VALUES (:idVoluntario, :estadoCivil, :rg, :cpf, :nacionalidade, :profissao, :cidade, :endereco, :numero, :bairro, :uf, :complemento, :cep, :caminhoImagem, :nomeImagem)";
                    $stmtDoc = $conexao->prepare($sql);
                    $stmtDoc->bindValue(':idVoluntario', $documento->getIdVoluntario());
                    $stmtDoc->bindValue(':estadoCivil', $documento->getEstadoCivil());
                    $stmtDoc->bindValue(':rg', $documento->getRg());
                    $stmtDoc->bindValue(':cpf', $documento->getCpf());
                    $stmtDoc->bindValue(':nacionalidade', $documento->getNacionalidade());
                    $stmtDoc->bindValue(':profissao', $documento->getProfissao());
                    $stmtDoc->bindValue(':cidade', $documento->getCidade());
                    $stmtDoc->bindValue(':endereco', $documento->getEndereco());
                    $stmtDoc->bindValue(':numero', $documento->getNumero());
                    $stmtDoc->bindValue(':bairro', $documento->getBairro());
                    $stmtDoc->bindValue(':uf', $documento->getUf());
                    $stmtDoc->bindValue(':complemento', $documento->getComplemento());
                    $stmtDoc->bindValue(':cep', $documento->getCep());
                    $stmtDoc->bindValue(':caminhoImagem', $documento->getCaminhoImagem());
                    $stmtDoc->bindValue(':nomeImagem', $documento->getNomeImagem());
                    $stmtDoc->execute();
                }
                
            //Disponibilidade
                // Pegar id do voluntario
                $disponibilidade->setIdVoluntario($resultado['idVoluntario']);

                // Pegar id da atividade
                $stmtA = $conexao->prepare("SELECT idAtividade FROM atividade WHERE nome = :nome");
                $stmtA->bindValue(':nome', $atividade);
                $stmtA->execute();
                $resultado2 = $stmtA->fetch();
                if (!$resultado2) {
                    throw new Exception("Atividade não encontrada.");
                }
                $disponibilidade->setIdAtividade($resultado2['idAtividade']);
            
                // Salvando a disponibilidade no banco de dados
                $sql = "INSERT INTO disponibilidade (idVoluntario, idAtividade, outroDescricao, horasSemanais, periodicidade) 
                        VALUES (:idVoluntario, :idAtividade, :outroDescricao, :horasSemanais, :periodicidade)";
                $stmtDisp = $conexao->prepare($sql);
                $stmtDisp->bindValue(':idVoluntario', $disponibilidade->getIdVoluntario());
                $stmtDisp->bindValue(':idAtividade', $disponibilidade->getIdAtividade());
                $stmtDisp->bindValue(':outroDescricao', $disponibilidade->getOutroDescricao());
                $stmtDisp->bindValue(':horasSemanais', $disponibilidade->getHorasSemanais());
                $stmtDisp->bindValue(':periodicidade', $disponibilidade->getPeriodicidade());
                $stmtDisp->execute();

            // Confirmar a transação
            $conexao->commit();

            // Redirecionar após sucesso
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Cadastro realizado com sucesso!');</script>";
            header("Location: ../login.php");
        } catch (Exception $e) {
            // Reverter a transação em caso de erro
            $conexao->rollBack();

            // Redirecionar após erro
            $_SESSION['error'] = $e->getMessage();
            header("Location: ../form_volunteer.php");
        }
    }    

    public function atualizar($voluntario, $documento, $disponibilidade, $atividade) {
        try{
            $conexao = Conexao::pegarConexao();
            $conexao->beginTransaction();

            //Voluntario
                //Pegar id do usuário
                $stmtE = $conexao->query("SELECT idVoluntario FROM voluntario WHERE email = '" . $_SESSION['UserEmail'] . "'");
                $resultado = $stmtE->fetch();
                $voluntario->setIdVoluntario($resultado['idVoluntario']);
                
                //Atualizar dados
                $sql = "UPDATE voluntario SET nome = :nome, telefone = :telefone, email = :email, senha = :senha, dataNascimento = :dataNascimento
                        WHERE idVoluntario = :idVoluntario";
                $stmtV = $conexao->prepare($sql);
                $stmtV->bindValue(':idVoluntario', $voluntario->getIdVoluntario());
                $stmtV->bindValue(':nome', $voluntario->getNome());
                $stmtV->bindValue(':telefone', $voluntario->getTelefone());
                $stmtV->bindValue(':email', $voluntario->getEmail());
                $stmtV->bindValue(':senha', $voluntario->getSenha());
                $stmtV->bindValue(':dataNascimento', $voluntario->getDataNascimento());
                $stmtV->execute();

            //Documentos
                //Pegar id do voluntario
                $documento->setIdVoluntario($resultado['idVoluntario']);

                //Atualizar dados
                $sql = "UPDATE documentos SET estadoCivil = :estadoCivil, nacionalidade = :nacionalidade, profissao = :profissao, cidade = :cidade, endereco = :endereco, numero = :numero, bairro = :bairro, uf = :uf, complemento = :complemento, cep = :cep,
                        WHERE idVoluntario = :idVoluntario";
                $stmtDoc = $conexao->prepare($sql);
                $stmtDoc->bindValue(':idVoluntario', $documento->getIdVoluntario());
                $stmtDoc->bindValue(':estadoCivil', $documento->getEstadoCivil());
                $stmtDoc->bindValue(':nacionalidade', $documento->getNacionalidade());
                $stmtDoc->bindValue(':profissao', $documento->getProfissao());
                $stmtDoc->bindValue(':cidade', $documento->getCidade());
                $stmtDoc->bindValue(':endereco', $documento->getEndereco());
                $stmtDoc->bindValue(':numero', $documento->getNumero());
                $stmtDoc->bindValue(':bairro', $documento->getBairro());
                $stmtDoc->bindValue(':uf', $documento->getUf());
                $stmtDoc->bindValue(':complemento', $documento->getComplemento());
                $stmtDoc->bindValue(':cep', $documento->getCep());
                $stmtDoc->execute();

            //Disponibilidade
                //Pegar idVoluntario e idAtividade
                $disponibilidade->setIdVoluntario($resultado['idVoluntario']);
                $stmtA = $conexao->prepare("SELECT idAtividade FROM atividade WHERE nome = :nome");
                $stmtA->bindValue(':nome', $atividade);
                $stmtA->execute();
                $resultado = $stmtA->fetch();
                if (!$resultado) {
                    throw new Exception("Atividade não encontrada.");
                }
                $disponibilidade->setIdAtividade($resultado['idAtividade']);

                $sql = "UPDATE disponibilidade SET idAtividade = :idAtividade, outroDescricao = :outroDescricao, horasSemanais = :horasSemanais, periodicidade = :periodicidade 
                        WHERE idVoluntario = :idVoluntario";
                $stmt = $conexao->prepare($sql);
                $stmt->bindValue(':idVoluntario', $disponibilidade->getIdVoluntario());
                $stmt->bindValue(':idAtividade', $disponibilidade->getIdAtividade());
                $stmt->bindValue(':outroDescricao', $disponibilidade->getOutroDescricao());
                $stmt->bindValue(':horasSemanais', $disponibilidade->getHorasSemanais());
                $stmt->bindValue(':periodicidade', $disponibilidade->getPeriodicidade());
                $stmt->execute();

            // Confirmar a transação
            $conexao->commit();

            // Redirecionar após sucesso
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Dados atualizados com sucesso!');</script>";
            header("Location: ../profile.php");
        } catch (Exception $e) {
            // Reverter a transação em caso de erro
            $conexao->rollBack();

            // Redirecionar após erro
            $_SESSION['error'] = $e->getMessage();
            header("Location: ../profile.php");
        }

    }

    public function deletar($idVoluntario) {
        try{
            $conexao = Conexao::pegarConexao();
            $conexao->beginTransaction();

            //Disponibilidade
                $sql = "DELETE FROM disponibilidade WHERE idVoluntario = :idVoluntario";
                $stmtDisp = $conexao->prepare($sql);
                $stmtDisp->bindValue(':idVoluntario', $idVoluntario);
                $stmtDisp->execute();

            //Documentos
                $sql = "DELETE FROM documentos WHERE idVoluntario = :idVoluntario";
                $stmtDoc = $conexao->prepare($sql);
                $stmtDoc->bindValue(':idVoluntario', $idVoluntario);
                $stmtDoc->execute();

            //Voluntario
                $sql = "DELETE FROM voluntario WHERE idVoluntario = :idVoluntario";
                $stmtV = $conexao->prepare($sql);
                $stmtV->bindValue(':idVoluntario', $idVoluntario);
                $stmtV->execute();

            // Confirmar a transação
            $conexao->commit();
            if($_SESSION['User'] != 'adm'){
                unset($_SESSION['User']);
            }
            // Redirecionar após sucesso
            if($_SESSION['User'] == 'adm'){
                $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Voluntario excluido com sucesso!');</script>";
                header("Location: ../dasboard_adm.php");
            }else{
                $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Cadastro excluido com sucesso!');</script>";
                header("Location: ../index.php");
            }
        }catch(Exception $e){
            /// Reverter a transação em caso de erro
            $conexao->rollBack();

            // Redirecionar após erro
            $_SESSION['error'] = $e->getMessage();
            header("Location: ../profile.php");
        }
    }

    public function listar() {
        $conexao = Conexao::pegarConexao();
        
        $sql = "SELECT * FROM voluntario";
        $stmt = $conexao->query($sql);
        $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $lista;
    }

    public function detalhar($idVoluntario) {
        $conexao = Conexao::pegarConexao();
        
        $sql = "SELECT v.*, d.*, disp.* FROM voluntario v
                JOIN documentos d ON v.idVoluntario = d.idVoluntario
                    JOIN disponibilidade disp ON v.idVoluntario = disp.idVoluntario
                        WHERE v.idVoluntario = :idVoluntario";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':idVoluntario', $idVoluntario);
        $stmt->execute();
        $detalhes = $stmt->fetch(PDO::FETCH_ASSOC);

        return $detalhes;
    }

    public function participacao($idVoluntario){
        $conexao = Conexao::pegarConexao();

        $sql = "SELECT e.idEvento, e.nomeEvento, participacao.* FROM participacao
                JOIN evento e ON e.idEvento = participacao.idEvento
                 WHERE idVoluntario = :idVoluntario";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':idVoluntario', $idVoluntario);
        $stmt->execute();
        $eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $eventos;
    }

    public function perfil($email) {
        $conexao = Conexao::pegarConexao();

        //Pegar id do usuário
        $stmtE = $conexao->prepare("SELECT idVoluntario FROM voluntario WHERE email = :email");
        $stmtE->bindParam(':email', $email);
        $stmtE->execute();
        $resultado = $stmtE->fetch();
        $idVoluntario = $resultado['idVoluntario'];
                        
        //Pegar detalhes
        $sql = "SELECT v.*, d.*, disp.* FROM voluntario v
                JOIN documentos d ON v.idVoluntario = d.idVoluntario
                    JOIN disponibilidade disp ON v.idVoluntario = disp.idVoluntario
                        WHERE v.idVoluntario = :idVoluntario";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':idVoluntario', $idVoluntario, PDO::PARAM_INT);
        $stmt->execute();
        $perfil = $stmt->fetch(PDO::FETCH_ASSOC);

        return $perfil;
    }

    public function logar($login, $senha){
        $conexao = Conexao::pegarConexao();

        $stmt = $conexao->prepare("SELECT * FROM voluntario WHERE email = ? and senha = ?");


        $stmt->bindParam(1, $login);
        $stmt->bindParam(2, $senha);
        $stmt->execute();

        if($stmt->rowCount() > 0){
            $dado = $stmt->fetch();

            session_start();
            $_SESSION['User'] = $dado['nome'];
            $_SESSION['UserEmail'] = $dado['email'];

            return true;
        }else{
            return false;
        }
    }
}

?>