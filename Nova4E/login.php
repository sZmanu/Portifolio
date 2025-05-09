<?php
    session_start();

    if(isset($_SESSION['error'])){
      echo $_SESSION['error'];
      unset($_SESSION['error']);
    }
    if(isset($_SESSION['User'])){
      header("Location: profile.php");
      exit();
    }
?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style/login.css" />
  </head>
  <body>

      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="img/logoNavbar.png" alt="Nova4E">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a class="nav-link" href="index.php">HOME</a></li>
            <li class="nav-item"><a class="nav-link" href="events.php">EVENTOS</a></li>
            <li class="nav-item"><a class="nav-link" href="index.php#voluntariado">SOBRE VOLUNTARIADO</a></li>
          </ul>
          <button class="btn btn-ong ml-2" onclick=navigateToLogin()>Login</button>
          <button class="btn btn-volunteer ml-2"onclick=navigateToFormVolunteer()>Seja Voluntário</button>
        </div>
      </nav>

      <!-- FORMULÁRIO LOGIN-->
      <div id="form1" class="container form-container">
        <form method="POST" action="./php/logar.php" >
          <img src="img/icon-nova4e.png" alt="Logo" class="logo-img">
          <h2><b>Bem vindo!</b></h2>
          <p class="paragraph-form">Utilize seu login para acessar</p>
          <div class="mb-3">
            <label for="email" class="form-label"><b>Email:</b></label>
            <input type="email" class="form-control" id="email" name="Email">
          </div>
          <div class="mb-3">
            <label for="senha" class="form-label"><b>Senha:</b></label>
            <input type="password" class="form-control" id="senha" name="Senha">
          </div>
          <button type="submit" id="login" class="btn btn-primary btn-login">Entrar</button>
          <h5><b>Não possui uma conta?</b></h5>
          <a href="form_volunteer.php" class="paragraph-form">Cadastre-se aqui</a>
        </form>     
      </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
    
    <script src="./js/forms.js"></script>
    <script src="./js/nav.js"></script>
  </body>
</html>
