<?php
    session_start();
    require_once 'global.php';

    if (isset($_SESSION['error'])){
        echo $_SESSION['error'];
        unset($_SESSION['error']);
    }
    if (isset($_SESSION['Sucess'])){
        echo $_SESSION['Sucess'];
        unset($_SESSION['Sucess']);
    }

    try{
      $evento = new Evento();
      $listaEvento = $evento->listar();

    }catch (Exception $e) {
        echo '<pre>';
            print_r($e);
        echo '</pre>';
        echo $e->getMessage();
    }
?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eventos</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style/events.css">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"
          ><img class="logoNavbar" src="img/logoNavbar.png" alt="Nova4E"
        /></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="index.php"
                >HOME</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="index.php#voluntariado">SOBRE VOLUNTARIADO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="index.php#feedbacks">FEEDBACKS</a>
            </li>
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
              ?>
          </button>
          <button class="btn btn-volunteer ml-2"
          onclick="<?php 
                  if(isset($_SESSION['User'])){
                      if($_SESSION['User'] == 'adm'){
                          echo 'logout()';
                      } else {
                          echo 'navigateToEvents()';
                      }
                  } else {
                      echo 'navigateToFormVolunteer()';
                  } 
              ?>">
              <?php 
                  if(isset($_SESSION['User'])){
                      if($_SESSION['User'] == 'adm'){
                          echo 'Logout';
                      } else {
                          echo 'Seja Voluntário';
                      }
                  } else {
                      echo 'Seja Voluntário';
                  } 
              ?>
          </button>
        </div>
      </nav>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="img/feijoada_banner.jpg"
            class="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="img/festajunina_banner.jpg"
            class="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div class="carousel-item">
          <img src="img/hamburgada.jpg" class="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="eventos">
      <img class="index-logo" src="img/icon-nova4e.png" alt="" />
    </div>
    <h1 class="h1-sobre">Próximos Eventos</h1>

    <div class="card-container">
      <?php foreach($listaEvento as $evento): ?>
      <div class="card">
        <img src="<?php echo $evento['caminhoImagem']; ?>" class="card-img-top" alt="Card 1" />
        <div class="card-body">
          <h5 class="card-title"><?php echo htmlspecialchars($evento['nomeEvento']);?></h5>
          <p class="card-text">Data: <?php echo htmlspecialchars($evento['data']);?></p>
          <p class="card-text">Horario: <?php echo htmlspecialchars($evento['horario']);?></p>
          <p class="card-text"><?php echo htmlspecialchars($evento['resumo']);?></p>
          <button class="btn btn-primary btn-verMais" onclick="navigateToDetailEvent(<?php echo $evento['idEvento'];?>)">Ver mais</button>
        </div>
      </div>
      <?php endforeach; ?>
      <div class="card">
        <img src="img/feijoada_banner.jpg" class="card-img-top" alt="Card 2" />
        <div class="card-body">
          <h5 class="card-title">Feijoda do Bem</h5>
          <p class="card-text">Data: 30 e 31 de Julho</p>
          <p class="card-text">Horario: 13h</p>
          <button class="btn btn-primary btn-verMais">Ver mais</button>
        </div>
      </div>
      <div class="card">
        <img src="img/hamburgada.jpg" class="card-img-top" alt="Card 3" />
        <div class="card-body">
          <h5 class="card-title">Hamburgada</h5>
          <p class="card-text">Data: de 05 à 18 de Julho</p>
          <p class="card-text">Horario: 13h</p>
          <button class="btn btn-primary btn-verMais">Ver mais</button>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/nav.js"></script>
  </body>
</html>
