<?php

    require_once '../global.php';

    $acao = $_GET['action'];

    if($acao == 'cadastrar'){
        // Preparando variáveis
        $imagem = $_FILES['Assinatura'];
        $nomeImagem = $imagem['name'];
        $arquivo = $imagem['tmp_name'];
        $email = $_POST['Email'];
        $atividade = $_POST['Atividade'];
        $periodicidade = $_POST['init'] . "a" . $_POST['end'];

        // Instanciando
        $voluntario = new Voluntario();
        $documentos = new Documentos();
        $disponibilidade = new Disponibilidade();
        
        // Setando atributos voluntario
        $voluntario->setNome($_POST['Nome']);
        $voluntario->setTelefone($_POST['Telefone']);
        $voluntario->setEmail($email);
        $voluntario->setSenha($_POST['Senha']);
        $voluntario->setDataNascimento($_POST['Nascimento']);
        
        // Setando atributos documentos
        $documentos->setEstadoCivil($_POST['EstadoCivil']);
        $documentos->setRg($_POST['RG']);
        $documentos->setCpf($_POST['CPF']);
        $documentos->setNacionalidade($_POST['Nacionalidade']);
        $documentos->setProfissao($_POST['Profissao']);
        $documentos->setCidade($_POST['Cidade']);
        $documentos->setEndereco($_POST['Endereco']);
        $documentos->setNumero($_POST['Numero']);
        $documentos->setBairro($_POST['Bairro']);
        $documentos->setUf($_POST['UF']);
        $documentos->setComplemento($_POST['Complemento']);
        $documentos->setCep($_POST['Cep']);
            // Recebendo imagem
            $documentos->setNomeImagem($nomeImagem);
            $documentos->setCaminhoImagem('img/');
            move_uploaded_file($arquivo, '../' . $documentos->getCaminhoImagem() . $documentos->getNomeImagem());
            $documentos->setCaminhoImagem($documentos->getCaminhoImagem() . $documentos->getNomeImagem());
            
        // Setando atributos disponibilidade
        $disponibilidade->setOutroDescricao($_POST['Descricao']);
        $disponibilidade->setHorasSemanais($_POST['HorasSemanais']);
        $disponibilidade->setPeriodicidade($periodicidade);
        
        // Cadastrando
        $voluntario->cadastrar($voluntario, $documentos, $disponibilidade, $atividade);
 
    }else if($acao == 'editar'){
        $conexao = Conexao::pegarConexao();
        
        // Preparando variaveis
        $email = $_POST['Email'];
        $atividade = $_POST['Atividade'];
            
        // Instanciando
        $voluntario = new Voluntario();
        $documentos = new Documentos();
        $disponibilidade = new Disponibilidade();
        
            // Setando atributos voluntario
        $voluntario->setNome($_POST['Nome']);
        $voluntario->setTelefone($_POST['Telefone']);
        $voluntario->setEmail($email);
        $voluntario->setSenha($_POST['Senha']);
        $voluntario->setDataNascimento($_POST['Nascimento']);
        
        // Setando atributos documentos
        $documentos->setEstadoCivil($_POST['EstadoCivil']);
        $documentos->setNacionalidade($_POST['Nacionalidade']);
        $documentos->setProfissao($_POST['Profissao']);
        $documentos->setCidade($_POST['Cidade']);
        $documentos->setEndereco($_POST['Endereco']);
        $documentos->setNumero($_POST['Numero']);
        $documentos->setBairro($_POST['Bairro']);
        $documentos->setUf($_POST['Uf']);
        $documentos->setComplemento($_POST['Complemento']);
        $documentos->setCep($_POST['Cep']);

        // Setando atributos disponibilidade
        $disponibilidade->setOutroDescricao($_POST['Descricao']);
        $disponibilidade->setHorasSemanais($_POST['HorasSemanais']);
        $disponibilidade->setPeriodicidade($_POST['Periodicidade']);
        
        // Atualizando
        $voluntario->atualizar($voluntario, $documentos, $disponibilidade, $atividade);

    }else if($acao == 'deletar'){
        $conexao = Conexao::pegarConexao();
        // Iniciar a transação
        $conexao->beginTransaction();

        $idVoluntario = $_GET['id'];
        
        // Instanciando
        $voluntario = new Voluntario();
        $documentos = new Documentos();
        $disponibilidade = new Disponibilidade();

        //deletando
        $voluntario->deletar($idVoluntario);

    }else{
       header("Location: ../index.php"); 
    }
?>
