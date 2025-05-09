<?php
    session_start();
    require_once '../global.php';

    $acao = $_GET['action'];

    if ($acao == 'criar') {
        // Preparando variáveis
        $imagem = $_FILES['inputGroupFile02'];
        $nomeImagem = $imagem['name'];
        $arquivo = $imagem['tmp_name'];

        // Instanciando
        $evento = new Evento();

        // Setando atributos do evento
        $evento->setNome($_POST['Nome']);
        $evento->setData($_POST['Data']);
        $evento->setLocal($_POST['Horario']);
        $evento->setResumo($_POST['Resumo']);
        $evento->setDescricao($_POST['Descricao']);

        // Recebendo imagem
        $evento->setNomeImagem($nomeImagem);
        $evento->setCaminhoImagem('img/');
        move_uploaded_file($arquivo, '../' . $evento->getCaminhoImagem() . $evento->getNomeImagem());
        $evento->setCaminhoImagem($evento->getCaminhoImagem() . $evento->getNomeImagem());

        // Criando evento
        $evento->criar($evento);

    } elseif ($acao == 'editar') {
        // Preparando variáveis
        $imagem = $_FILES['inputGroupFile02'];
        $nomeImagem = $imagem['name'];
        $arquivo = $imagem['tmp_name'];

        // Instanciando
        $evento = new Evento();

        // Setando atributos do evento
        $evento->setIdEvento($_POST['idEvento']);
        $evento->setNome($_POST['Nome']);
        $evento->setData($_POST['Data']);
        $evento->setLocal($_POST['Local']);
        $evento->setResumo($_POST['Resumo']);
        $evento->setDescricao($_POST['Descricao']);

        if ($nomeImagem) {
            // Recebendo nova imagem
            $evento->setNomeImagem($nomeImagem);
            $evento->setCaminhoImagem('img/');
            move_uploaded_file($arquivo, '../' . $evento->getCaminhoImagem() . $evento->getNomeImagem());
            $evento->setCaminhoImagem($evento->getCaminhoImagem() . $evento->getNomeImagem());
        } else {
            // Mantendo imagem atual
            $conexao = Conexao::pegarConexao();
            $stmt = $conexao->prepare("SELECT caminhoImagem, nomeImagem FROM evento WHERE idEvento = ?");
            $stmt->bindValue(1, $idEvento);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            $evento->setNomeImagem($result['nomeImagem']);
            $evento->setCaminhoImagem($result['caminhoImagem']);
        }

        // Atualizando evento
        $evento->atualizar($evento);

    } elseif ($acao == 'deletar') {
        $idEvento = $_GET['idEvento'];

        // Instanciando
        $evento = new Evento();

        // Deletando evento
        $evento->deletar($idEvento);

    }elseif($acao == 'voluntariar'){
        $idEvento = $_GET['id'];
        $evento = new Evento();

        $evento->participar($idEvento);

    } else {
        header("Location: ../index.php");
        exit();
    }
?>
