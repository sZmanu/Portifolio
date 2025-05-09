<?php
    session_start();
    require_once 'global.php';

    if(isset($_SESSION['error'])){
        echo $_SESSION['error'];
        unset($_SESSION['error']);
    }
    if(isset($_SESSION['Sucess'])){
        echo $_SESSION['Sucess'];
        unset($_SESSION['Sucess']);
    }

    // Pega o ID do evento da URL
    $idEvento = $_GET['id'];
    $evento = new Evento();
    $detalhes = $evento->detalhar($idEvento);
    $voluntarios = $evento->participacao($idEvento);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detalhes do Evento</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./style/voluntario.css" />
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
            <button class="btn btn-ong ml-2" 
            onclick="<?php 
                  if(isset($_SESSION['User'])){
                      if($_SESSION['User'] == 'adm'){
                          echo 'navigateToDashboard()';
                      } else {
                          echo 'navigateToPerfil()';
                      }
                  } else {
                      echo 'navigateToLogin()';
                  } 
              ?>">
              <?php 
                  if(isset($_SESSION['User'])){
                      if($_SESSION['User'] == 'adm'){
                          echo 'Dashboard';
                      } else {
                          echo 'Perfil';
                      }
                  } else {
                      echo 'Login';
                  } 
              ?></button>
            <button class="btn btn-volunteer ml-2" onclick="logout()">Logout</button>
        </div>
    </nav>

    <div class="container profile-container">
        <div class="profile-header">
            <img src="<?php echo $detalhes['caminhoImagem'];?>" alt="imagem do evento">
            <h2><?php echo htmlspecialchars($detalhes['nomeEvento']); ?></h2>
        </div>
        <div class="profile-details">
            <p><strong>Data: </strong><?php echo htmlspecialchars($detalhes['data']); ?></p>
            <p><strong>Horario: </strong><?php echo htmlspecialchars($detalhes['horario']); ?></p>
            <p><strong>Descrição: </strong><?php echo htmlspecialchars($detalhes['descricao']); ?></p>
        </div>
        <div class="profile-details" id="participantes" style="display: <?php echo $_SESSION['User'] == 'adm' ? 'block' : 'none'?> ;">
            <h3>Voluntários Presentes:</h3>
            <ul>
                <?php foreach ($voluntarios as $voluntario): ?>
                    <li><?php echo htmlspecialchars($voluntario['nome']); ?>, <?php echo htmlspecialchars($voluntario['email']); ?> -- <a href="detail_volunteer.php?id=<?php echo $voluntario['idVoluntario'];?>">detalhes</a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <button class="btn btn-primary btn-update"
         onclick="<?php
                if (isset($_SESSION['User'])){
                    if($_SESSION['User'] == 'adm'){
                        echo 'toggleParticipantes()';
                    }else{
                        echo 'voluntariar('.$detalhes['idEvento'].')';
                    }
                }else{
                    echo 'navigateToFormVolunteer()';
                }?>">
            <?php
                if (isset($_SESSION['User'])){
                    if($_SESSION['User'] == 'adm'){
                        echo 'Mostrar participantes';
                    }else{
                        echo 'Quero me voluntariar';
                    }
                }else{
                    echo 'Quero ser voluntário';
                }?>
        </button>
        <button class="btn btn-logout" onclick="excluirEvento(<?php echo $detalhes['idEvento'];?>)" style="display:<?php echo $_SESSION['User'] == 'adm' ? 'block' : 'none'?> ;">Excluir</button>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>

    <script src="js/forms.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
