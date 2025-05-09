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
    if (!isset($_SESSION['User']) || $_SESSION['User'] != 'adm') {
        header("Location: login.php");
        exit();
    }

    $idVoluntario = $_GET['id'];
    $voluntario = new Voluntario();
    $detalhes = $voluntario->detalhar($idVoluntario);
    $eventos = $voluntario->participacao($idVoluntario);
?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Perfil do Usuário</title>
    <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        rel="stylesheet"
    />
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
            <button class="btn btn-ong ml-2" onclick=navigateToDashboard()>Dashboard</button>
            <button class="btn btn-volunteer ml-2" onclick=logout()>Logout</button>
        </div>
    </nav>

    <div class="container profile-container">
        <div class="profile-header">
            <h2><?php echo htmlspecialchars($detalhes['nome']);?></h2>
        </div>
        <div class="profile-details">
            <p><strong>Email: </strong><?php echo htmlspecialchars($detalhes['email']);?></p>
            <p><strong>Telefone: </strong><?php echo htmlspecialchars($detalhes['telefone']);?></p>
            <p><strong>Data de Nascimento: </strong><?php echo htmlspecialchars($detalhes['dataNascimento']);?></p>
            <p><strong>Profissão: </strong><?php echo htmlspecialchars($detalhes['profissao']);?></p>
            <p><strong>CPF: </strong><?php echo htmlspecialchars($detalhes['CPF']);?></p>
            <p><strong>RG: </strong><?php echo htmlspecialchars($detalhes['RG']); ?></p>
            <p><strong>Atividade: </strong>
                <?php 
                    switch ($detalhes['idAtividade']) {
                        case 1: echo 'Apoio em oficinas'; break;
                        case 2: echo 'Acompanhamento'; break;
                        case 3: echo 'Ensino'; break;
                        case 4: echo 'Trabalho administrativo'; break;
                        case 5: echo 'Eventos'; break;
                        case 6: echo 'Divulgação'; break;
                        case 7: echo 'Controle de acesso'; break;
                        case 8: echo 'Cozinha'; break;
                        default: echo 'Outro'; break;
                    }
                ?>
            </p>
        </div>
        <button class="btn btn-update" onclick="toggleDocuments()">Documentos</button>
        <button class="btn btn-update" onclick="toggleEvents()">Eventos</button>
        <button class="btn btn-logout" onclick="excluirCadastro(<?php echo $detalhes['idVoluntario'];?>)">Excluir</button>
    </div>

    <div class="container profile-container" id="documents" style="display: none;">
        <div class="profile-header">
            <h2>Documentos</h2>
        </div>
        <div class="profile-details">
            <p><strong>Nacionalidade: </strong><?php echo htmlspecialchars($detalhes['nacionalidade']);?></p>
            <p><strong>Estado Civil: </strong><?php echo htmlspecialchars($detalhes['estadoCivil']);?></p>
            <p><strong>Cidade: </strong> <?php echo htmlspecialchars($detalhes['cidade']);?></p>
            <p><strong>Endereço: </strong><?php echo htmlspecialchars($detalhes['endereco']);?></p>
            <p><strong>Numero: </strong><?php echo htmlspecialchars($detalhes['numero']);?></p>
            <p><strong>Bairro: </strong><?php echo htmlspecialchars($detalhes['bairro']);?></p>
            <p><strong>UF: </strong><?php echo htmlspecialchars($detalhes['uf']);?></p>
            <p><strong>Complemento: </strong><?php echo htmlspecialchars($detalhes['complemento']);?></p>
            <p><strong>Cep: </strong><?php echo htmlspecialchars($detalhes['cep']);?></p>
        </div>
    </div>

    <div class="container profile-container" id="events" style="display: none;">
        <div class="profile-header">
            <h2>Eventos participados</h2>
        </div>
        <div class="profile-details">
            <ul>
                <?php foreach ($eventos as $evento): ?>
                    <li><?php echo htmlspecialchars($evento['nomeEvento']); ?> -- <a href="detail_event.php?id=<?php echo $evento['idEvento'];?>">detalhes</a></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>

    <script src="js/forms.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
