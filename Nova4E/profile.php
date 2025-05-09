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
    if($_SESSION['User'] == 'adm'){
      header("Location: dashboard_adm.php");
      exit();
    }
    if(!isset($_SESSION['User']) || !isset($_SESSION['UserEmail'])){
      header("Location: login.php");
      exit();
    }
    

    $voluntario = new Voluntario();
    $perfil = $voluntario->perfil($_SESSION['UserEmail']);
    $datas = explode("a", $perfil['periodicidade']);
    $dataInicio = $datas[0];
    $dataFim = $datas[1];
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
                <li class="nav-item"><a class="nav-link" href="index.php#voluntariado ">SOBRE VOLUNTARIADO</a></li>
            </ul>
            <button class="btn btn-ong ml-auto" onclick=navigateToPerfil()>Perfil</button>
            <button class="btn btn-volunteer ml-2" onclick=navigateToEvents()>Seja Voluntário</button>
        </div>
    </nav>

    <div class="container profile-container">
        <div class="profile-header">
            <h2><?php echo htmlspecialchars($perfil['nome']);?></h2>
        </div>
        <div class="profile-details">
            <p><strong>Email:</strong><?php echo htmlspecialchars($perfil['email']);?></p>
            <p><strong>Telefone:</strong><?php echo htmlspecialchars($perfil['telefone']);?></p>
            <p><strong>Data de Nascimento:</strong><?php echo htmlspecialchars($perfil['dataNascimento']);?></p>
            <p><strong>Profissão:</strong><?php echo htmlspecialchars($perfil['profissao']);?></p>
            <p><strong>CPF:</strong><?php echo htmlspecialchars($perfil['CPF']);?></p>
        </div>
        <button class="btn btn-update" onclick="toggleUpdateForm()">Informações detalhadas</button>
        <button class="btn btn-logout" onclick="logout()">Logout</button>
    </div>

    <div class="container form-container" id="update-form" style="display: none;">
        <h2><b>Atualizar Informações</b></h2>
        <form id="update-form-content" method="POST" action="./php/crud_voluntario.php?action=editar" enctype="multipart/form-data">
            <div class="form-group">
                <label for="nomeCompleto">Nome Completo</label>
                <input type="text" class="form-control" id="nomeCompleto" name="Nome" value="<?php echo htmlspecialchars($perfil['nome']);?>"/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="Email" value="<?php echo htmlspecialchars($perfil['email']);?>" />
                </div>
                <div class="form-group col-md-6">
                  <label for="senha">Senha</label>
                  <input type="password" class="form-control" id="senha" name="Senha" <?php echo htmlspecialchars($perfil['senha']);?> />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="telefone">Telefone</label>
                  <input type="text" class="form-control" id="telefone" name="Telefone" value="<?php echo htmlspecialchars($perfil['telefone']);?>" />
                </div>
                <div class="form-group col-md-6">
                  <label for="estadoCivil">Estado Civil</label>
                  <input type="text" class="form-control" id="estadoCivil" name="EstadoCivil" value="<?php echo htmlspecialchars($perfil['estadoCivil']);?>" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="dataNascimento">Data de Nascimento</label>
                    <input type="date" class="form-control" id="dataNascimento" name="Nascimento" value="<?php echo htmlspecialchars($perfil['dataNascimento']);?>" />
                  </div>
                <div class="form-group col-md-4">
                  <label for="nacionalidade">Nacionalidade</label>
                  <input type="text" class="form-control" id="nacionalidade" name="Nacionalidade" value="<?php echo htmlspecialchars($perfil['nacionalidade']);?>" />
                </div>
                <div class="form-group col-md-5">
                  <label for="profissao">Profissão</label>
                  <input type="text" class="form-control" id="profissao" name="Profissao" value="<?php echo htmlspecialchars($perfil['profissao']);?>" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="endereco">Endereço</label>
                  <input type="text" class="form-control" id="endereco" name="Endereco" value="<?php echo htmlspecialchars($perfil['endereco']);?>" />
                </div>
                <div class="form-group col-md-2">
                  <label for="numero">Número</label>
                  <input type="text" class="form-control" id="numero" name="Numero" value="<?php echo htmlspecialchars($perfil['numero']);?>" />
                </div>
                <div class="form-group col-md-4">
                  <label for="bairro">Bairro</label>
                  <input type="text" class="form-control" id="bairro" name="Bairro" value="<?php echo htmlspecialchars($perfil['bairro']);?>" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-1">
                  <label for="uf">UF</label>
                  <input type="text" class="form-control" id="uf" name="UF" value="<?php echo htmlspecialchars($perfil['uf']);?>" />
                </div>
                <div class="form-group col-md-3">
                  <label for="cidade">Cidade</label>
                  <input type="text" class="form-control" id="cidade" name="Cidade" value="<?php echo htmlspecialchars($perfil['cidade']);?>">
                </div>
                <div class="form-group col-md-4">
                  <label for="complemento">Complemento</label>
                  <input type="text" class="form-control" id="complemento" name="Complemento" value="<?php echo htmlspecialchars($perfil['complemento']);?>" />
                </div>
                <div class="form-group col-md-4">
                  <label for="cep">CEP</label>
                  <input type="text" class="form-control" id="cep" name="Cep" value="<?php echo htmlspecialchars($perfil['cep']);?>" />
                </div>
              </div>
              <p class="d-inline">Atividade a ser desenvolvida</p>
              <div class="dropdown d-inline">
                <select class="form-control" id="atividadeSelect" name="Atividade">
                  <option value="">Escolha uma opção</option>
                  <option value="Apoio em oficinas" <?php echo $perfil['idAtividade'] == '1' ? 'selected' : '';?>>Apoio em oficinas</option>
                  <option value="Acompanhamento" <?php echo $perfil['idAtividade'] == '2' ? 'selected' : '';?> >Acompanhamento</option>
                  <option value="Ensino" <?php echo $perfil['idAtividade'] == '3' ? 'selected' : '';?>>Ensino</option>
                  <option value="Trabalho administrativo" <?php echo $perfil['idAtividade'] == '4' ? 'selected' : '';?>>Trabalho administrativo</option>
                  <option value="Eventos" <?php echo $perfil['idAtividade'] == '5' ? 'selected' : '';?>>Eventos</option>
                  <option value="Divulgação" <?php echo $perfil['idAtividade'] == '6' ? 'selected' : '';?>>Divulgação</option>
                  <option value="Controle de acesso" <?php echo $perfil['idAtividade'] == '7' ? 'selected' : '';?>>Controle de acesso</option>
                  <option value="Cozinha" <?php echo $perfil['idAtividade'] == '8' ? 'selected' : '';?>>Cozinha</option>
                  <option value="Outro" <?php echo $perfil['idAtividade'] == '9' ? 'selected' : '';?>>Outro</option>
                </select>
              </div>
              <div class="form-group col-md4">
                <input type="text" class="form-control" id="outroInput" name="Descricao" style="margin-top: 10px" placeholder="Descreva a atividade" value="<?php echo htmlspecialchars($perfil['outroDescricao']);?>"/>
              </div>
              <div class="available">
                <div class="bloco d-flex align-items-center mt-3">
                  <p class="mb-0 mr-3"><b>Disponibilidade de horas semanais</b></p>
                  <div class="input-group" style="width: 150px">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon1"
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      name="HorasSemanais"
                      value="<?php echo htmlspecialchars($perfil['horasSemanais']);?>"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bloco d-flex align-items-center mt-3">
                <p class="mb-0 mr-3"><b>Pelo período de:</b></p>
                <div class="input-group" style="width: 150px">
                  <input type="text" class="form-control" id="init" name="init" placeholder="Ex. 29/06" value="<?php echo $dataInicio; ?>"/>
                </div>
                <p class="init mb-0 mr-3"><b>a:</b></p>
                <div class="input-group" style="width: 150px">
                  <input type="text" class="form-control" id="end" name="end" placeholder="Ex. 07/07" value="<?php echo $dataFim; ?>" />
                </div>
              </div>
            <button type="submit" class="btn btn-primary btn-update">Atualizar</button>
            <button class="btn btn-primary btn-logout" onclick="excluirCadastro(<?php echo $perfil['idVoluntario']; ?>)">Excluir cadastro</button>
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
