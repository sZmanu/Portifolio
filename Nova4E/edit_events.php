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
    if(!isset($_SESSION['User'])){
        header("Location: login.php");
        exit();
    }
    if($_SESSION['User'] != 'adm'){
      header("Location: events.php");
      exit();
    }

    $idEvento = isset($_GET['id']) ? $_GET['id'] : null;
    $detalhes = null;
    if ($idEvento) {
        $evento = new Evento();
        $detalhes = $evento->detalhar($idEvento);
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulário Voluntário</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style/edits_events.css" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <img src="img/logoNavbar.png" alt="Nova4E" />
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="index.php">HOME</a></li>
        <li class="nav-item"><a class="nav-link" href="events.php">EVENTOS</a></li>
        <li class="nav-item"><a class="nav-link" href="filtro_voluntario.php">VOLUNTARIOS</a></li>
      </ul>
      <button class="btn btn-ong ml-2" onclick="navigateToDashboard()">Dashboard</button>
      <button class="btn btn-volunteer ml-2" onclick="logout()">Logout</button>
    </div>
  </nav>

  <h1 class="text-center"><?php echo $idEvento ? 'EDITAR' : 'CRIAR'; ?> EVENTO</h1>

    <div class="container form-container">
        <form method="POST" action="php/crud_evento.php?action=<?php echo $idEvento ? 'editar&id=' . $idEvento : 'criar'; ?>" enctype="multipart/form-data">

            <div class="form-row">

                <div class="form-group col-md-6">
                    <label for="nomeEvento">Nome do Evento</label>
                    <input type="text" class="form-control" id="nomeEvento" name="Nome" value="<?php echo $detalhes ? htmlspecialchars($detalhes['nomeEvento']) : '';?>" />
                </div>

                <div class="form-group col-md-3">
                    <label for="dataEvento">Data do Evento</label>
                    <input type="date" class="form-control" id="dataEvento" name="Data" value="<?php echo $detalhes ? htmlspecialchars($detalhes['data']) : '';?>" />
                </div>

                <div class="form-group col-md-3">
                    <label for="horárioEvento">Horário do Evento</label>
                    <input type="text" class="form-control" id="horarioEvento" name="Horario" value="<?php echo $detalhes ? htmlspecialchars($detalhes['horario']) : '';?>" />
                </div>
            </div>

            <div class="form-row">

                <div class="form-group col-md-12">
                    <label for="descricaoEvento">Complemento (breve descrição do evento)</label>
                    <input type="text" class="form-control" id="descricaoEvento" name="Resumo" value="<?php echo $detalhes ? htmlspecialchars($detalhes['resumo']) : '';?>" />
                </div>

            </div>
            
            <div class="form-row">

                <div class="input-group mb-4">
                    <p class="mr-5 mt-2">Imagem do Evento:</p>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile02" name="inputGroupFile02" />
                        <label class="custom-file-label" for="inputGroupFile02">Escolha a imagem</label>
                    </div>
                </div>
            </div>

            <div class="form-row">

                <div class="form-group col-md-12">
                    <label for="textoEvento">Texto sobre o evento</label>
                    <textarea class="form-control" id="textoEvento" name="Descricao" rows="5"><?php echo $detalhes ? htmlspecialchars($detalhes['descricao']) : ''; ?></textarea>
                </div>

            </div>

            <div class="form-row justify-content-center mt-2">
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-update"><?php echo $detalhes ? 'Salvar' : 'Criar';?></button>
                    <button class="btn btn-primary btn-logout" onclick="excluirEvento(<?php echo $detalhes['idEvento'];?>)"style="display: <?php echo $detalhes ? 'block' : 'none'; ?>;">Excluir evento</button>
                </div>
            </div>
        </form>
    </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/forms.js"></script>
  <script src="js/nav.js"></script>
</body>
</html>
