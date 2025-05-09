<?php
    session_start();

    require_once '../global.php';

    $login = $_POST['Email'];
    $senha = $_POST['Senha'];

    if(isset($login) && !empty($login) || isset($senha) && !empty($senha)){

        $voluntario = new Voluntario();

        if($voluntario->logar($login, $senha) == true){
            $_SESSION['Sucess'] = "<script type='text/javascript'>alert('Login realizado com sucesso!');</script>";
            header("Location:  ../index.php");
        }else if($login == 'adm@adm' && $senha == 'adm123'){
            $_SESSION['User'] = 'adm';
            header("Location: ../dashboard_adm.php");
        }else{
            $_SESSION['error'] = "<script type='text/javascript'>alert(Dados incorretos ou usuário inexistente.);</script>";
            header("Location: ../login.php");
        }

    }else{
        $_SESSION['error'] = "<script type='text/javascript'>alert(Por favor preencha todos os campos.);</script>";
        header("Location: ../login.php");
    }
?>