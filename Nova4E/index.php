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
      $destaqueEvento = $evento->recente();

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
    <title>Nova4E</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style/index.css" />
  </head>
  <body>
    <!-- NOVA NAVBAR -->
    <nav class="navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >(11)0800 99864-6753</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Responsabilidade Social</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acessibilidade</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Faça uma Doação</a>
            </li>
            <li class="nav-item ml-auto">
              <a class="nav-link" href="#">
                <i class="bi bi-person-wheelchair"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="header-background">
      <!-- NAVBAR PRINCIPAL -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"
          ><img class="logoNavbar" src="img/logoNavbar.png" alt="Nova4E"
        /></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="events.php"
                >EVENTOS</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="#voluntariado">SOBRE VOLUNTARIADO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-main" href="#feedbacks">FEEDBACKS</a>
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

      <!-- SEÇÃO COM O TEXTO -->

      <div class="titulo-banner">
        <h1>ONG Especializada em pessoas especiais</h1>
        <h4>
          Entidade filantrópica fundada em 1967 com núcleo de Apoio à Inclusão
          Social,
        </h4>
        <h4>
          no bairro da Mooca,são atendidas 120 pessoas com deficiência
          intelectual,
        </h4>
        <h4>a partir dos 07 anos de idade.</h4>
      </div>
    </div>
    <!-- SEÇÃO PRA GRADIENTE -->
  <div class="gradiente">
    <!-- SEÇÃO SOBRE O VOLUNTARIADO -->
    <div id="voluntariado" class="sobre">
      <img class="index-logo" src="img/icon-nova4e.png" alt="" />
    </div>

    <h1 class="h1-sobre">Sobre o Voluntariado</h1>
    <div class="row g-3">
      <div class="col">
        <img src="img/voluntariado-img.png" alt="" />
      </div>
      <div class="col">
        <p>
          Entidade filantrópica fundada em 1967 com núcleo de Apoio à Inclusão
          Social. Localizada no bairro da Mooca, onde são atendidas 120 pessoas
          com deficiência intelectual, a partir dos 07 anos de idade.
        </p>
        <h4 class="h4-title">Transforme Vidas!</h4>
        <p>
          Na Nova 4E, acreditamos que cada criança com deficiência intelectual
          tem um potencial incrível para brilhar. Todos os dias, nossa equipe
          dedicada se esforça para criar um ambiente acolhedor, onde essas
          crianças possam se desenvolver, aprender e sentir o amor que as
          cercam. Mas para isso, precisamos de você. O voluntariado vai além de
          doar seu tempo; é um ato profundo de amor e solidariedade. Ao se
          juntar a nós, você contribuirá diretamente para um mundo mais
          inclusivo e repleto de oportunidades. A experiência de voluntariado
          não só transforma a vida das crianças, mas também enriquece a sua,
          proporcionando momentos de aprendizado e alegria. Ser voluntário na
          Nova 4E é compartilhar sorrisos, conquistas e alegrias. Cada hora
          dedicada faz uma diferença significativa na vida de nossas crianças e
          de suas famílias. Você será parte de uma comunidade unida, que
          valoriza o respeito, a inclusão e a diversidade. Além disso, o
          voluntariado oferece uma chance única de crescimento pessoal e
          profissional, enriquecendo sua vida de maneiras inimagináveis. Nosso
          programa de voluntariado é flexível e acolhe pessoas de todas as
          idades e habilidades. Quer você tenha habilidades específicas para
          compartilhar ou simplesmente a vontade de ajudar, há um espaço para
          você na Nova 4E. Juntos, podemos criar um impacto duradouro na vida
          dessas crianças incríveis. Dê o próximo passo e transforme a vida de
          uma criança com deficiência intelectual. Inscreva-se em nosso banco de
          dados de voluntários e junte-se a nós nessa jornada de amor e
          solidariedade. Acesse nosso site e descubra como você pode fazer a
          diferença. Juntos, podemos construir um futuro mais brilhante para
          todos. Venha fazer parte da família Nova 4E.
        </p>
        <button
          type="button"
          onclick="navigateToFormVolunteer()"
          class="btn btn-primary btn-voluntaria-se"
        >
          Seja Voluntário
        </button>
      </div>
    </div>
  
    <!-- SEÇÃO EVENTOS -->
    <div class="eventos">
      <img class="index-logo" src="img/icon-nova4e.png" alt="" />
    </div>
    <h1 class="h1-sobre">Eventos</h1>

    <!-- Container com imagem e gradiente -->
    <?php foreach ($destaqueEvento as $evento): ?>
      <div class="gradient-container evento1" style="background-image: url('<?php echo $evento['caminhoImagem']; ?>');">
        <!-- Conteúdo que ficará sobre a imagem e o gradiente -->
        <div class="content">
          <h2><?php echo htmlspecialchars($evento['nomeEvento']);?></h2>
          <h3><?php echo htmlspecialchars($evento['data']);?></h3>
          <p><?php echo htmlspecialchars($evento['horario']);?></p>
          <button
            type="button"
            onclick="navigateToDetailEvent(<?php echo $evento['idEvento']; ?>)"
            class="btn btn-primary btn-verMais"
          >
            Ver mais
          </button>
        </div>
      </div>
    <?php endforeach; ?>

    <div class="gradient-container evento2">
      <!-- Conteúdo que ficará sobre a imagem e o gradiente -->
      <div class="content">
        <h2>Feijoada Coletiva</h2>
        <h3>data</h3>
        <p>local</p>
        <button
          type="button"
          onclick="navigateToEvents()"
          class="btn btn-primary btn-verMais"
        >
          Ver mais
        </button>
      </div>
    </div>

    <!-- SEÇÃO DE FEEDBACKS -->
    <div id="feedbacks" class="feedbacks">
      <img class="index-logo" src="img/icon-nova4e.png" alt="Logo" />
    </div>
    <h1 class="h1-sobre">Feedbacks dos Voluntários</h1>

    <div class="feedbacks-wrapper">
      <!-- Slide container -->
      <div class="feedback-slider">
        <div class="feedback-slide">
          <div class="feedback-card">
            <p>
            "Trabalhar como voluntária nesta ONG tem sido uma experiência extremamente recompensadora. A entidade, fundada em 1967, tem uma longa história de apoio à inclusão social, e o núcleo no bairro da Mooca é um exemplo brilhante disso. Atender 120 pessoas com deficiência intelectual é uma missão desafiadora, mas a dedicação e o amor da equipe fazem toda a diferença. Sinto-me honrada por poder contribuir para a inclusão e o desenvolvimento dessas pessoas especiais. O impacto positivo que geramos juntos é inestimável."
            </p>
            <div class="feedback-info">
              <span>Julia Avarenga, 49</span>
              <div class="feedback-icons">
                <img class="peca" src="img\peça-vermelha.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="feedback-slide">
          <div class="feedback-card">
            <p>
            "Eu comecei a trabalhar como voluntário nesta ONG há seis meses e fiquei impressionado com a organização e a eficiência com que atendem as 120 pessoas com deficiência intelectual. A estrutura do núcleo de apoio à inclusão social é fantástica e proporciona um ambiente seguro e acolhedor para todos. É gratificante ver o impacto positivo que nossas ações têm na vida dessas crianças e adultos. Esta ONG realmente faz a diferença na comunidade da Mooca."
            </p>
            <div class="feedback-info">
              <span>Caio Neves, 22</span>
              <div class="feedback-icons">
                <img class="peca" src="img\peça-vermelha.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="feedback-slide">
          <div class="feedback-card">
            <p>
            "Ser voluntário nesta ONG tem sido uma experiência transformadora para mim. De fato é um desafio imenso, mas a dedicação da equipe e o carinho que oferecem a cada pessoa é inspirador. Tenho orgulho de fazer parte dessa história e contribuir para o desenvolvimento dessas pessoas maravilhosas."
            </p>
            <div class="feedback-info">
              <span>Maria Aparecida, 56</span>
              <div class="feedback-icons">
                <img class="peca" src="img\peça-vermelha.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-container">
      <i class="bi bi-arrow-left-circle btn-prev"></i>
      <i class="bi bi-arrow-right-circle btn-next"></i></i></button>
    </div>
  </div>


    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const feedbackSlider = document.querySelector(".feedback-slider");
        const feedbackSlides = document.querySelectorAll(".feedback-slide");
        let currentIndex = 0;

        function showSlide(index) {
          feedbackSlider.style.transform = `translateX(-${index * 100}%)`;
        }
        document
          .querySelector(".btn-next")
          .addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % feedbackSlides.length;
            showSlide(currentIndex);
          });

        document
          .querySelector(".btn-prev")
          .addEventListener("click", function () {
            currentIndex =
              (currentIndex - 1 + feedbackSlides.length) %
              feedbackSlides.length;
            showSlide(currentIndex);
          });

        showSlide(currentIndex);
      });
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/nav.js"></script>
  </body>
</html>