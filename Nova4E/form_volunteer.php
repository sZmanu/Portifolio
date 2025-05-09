<?php
    session_start();

    if (isset($_SESSION['error'])){
        echo $_SESSION['error'];
        unset($_SESSION['error']);
    }
    if(isset($_SESSION['User'])){
      header("Location: profile.php");
    }

?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulário Voluntário</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style/form_volunteer.css" />
  </head>
  <body>
    <style>
      body {
        background-image: url("img/background_volunteer.png");
        background-size: cover;
        font-family: "Manrope", sans-serif;
      }
    </style>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img src="img/logoNavbar.png" alt="Nova4E"
      /></a>
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

    <div class="container form-container">
      <h2><b>Seja Voluntário!</b></h2>
      <form id="main-form" method="POST" action="./php/crud_voluntario.php?action=cadastrar" enctype="multipart/form-data">
        <!-- FORMULÁRIO 1 -->
        <div id="form1-content">
          <h4><b>Preencha os campos com seus dados</b></h4>
          <div class="form-group">
            <label for="nomeCompleto">Nome Completo</label>
            <input type="text" class="form-control" id="nomeCompleto" name="Nome"/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" name="Senha" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="telefone">Telefone</label>
              <input type="text" class="form-control" id="telefone" name="Telefone" />
            </div>
            <div class="form-group col-md-6">
              <label for="estadoCivil">Estado Civil</label>
              <input type="text" class="form-control" id="estadoCivil" name="EstadoCivil" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="dataNascimento">Data de Nascimento</label>
              <input type="date" class="form-control" id="dataNascimento" name="Nascimento" />
            </div>
            <div class="form-group col-md-3">
              <label for="rg">RG</label>
              <input type="text" class="form-control" id="rg" name="RG" />
            </div>
            <div class="form-group col-md-3">
              <label for="cpf">CPF</label>
              <input type="text" class="form-control" id="cpf" name="CPF" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="nacionalidade">Nacionalidade</label>
              <input type="text" class="form-control" id="nacionalidade" name="Nacionalidade" />
            </div>
            <div class="form-group col-md-6">
              <label for="profissao">Profissão</label>
              <input type="text" class="form-control" id="profissao" name="Profissao" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="endereco">Endereço</label>
              <input type="text" class="form-control" id="endereco" name="Endereco" />
            </div>
            <div class="form-group col-md-2">
              <label for="numero">Número</label>
              <input type="text" class="form-control" id="numero" name="Numero" />
            </div>
            <div class="form-group col-md-4">
              <label for="bairro">Bairro</label>
              <input type="text" class="form-control" id="bairro" name="Bairro" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-1">
              <label for="uf">UF</label>
              <input type="text" class="form-control" id="uf" name="UF" />
            </div>
            <div class="form-group col-md-3">
              <label for="cidade">Cidade</label>
              <input type="text" class="form-control" id="cidade" name="Cidade">
            </div>
            <div class="form-group col-md-4">
              <label for="complemento">Complemento</label>
              <input type="text" class="form-control" id="complemento" name="Complemento" />
            </div>
            <div class="form-group col-md-4">
              <label for="cep">CEP</label>
              <input type="text" class="form-control" id="cep" name="Cep" />
            </div>
          </div>
          <div class="form-group col-md-4 ml-auto">
            <button
                type="button"
                onclick="showNextForm(1)"
                class="btn btn-primary btn-next"
              >
              Próximo
            </button>
          </div>
        </div>

        <!-- FORMULÁRIO DE INFORMAÇÕES - 2 -->
        <div id="form2-content" style="display: none;">
          <h4><b>Informações da Entidade</b></h4>
          <p>
            <b>Denominação:</b> Nova 4E – Entidade Especializada em Pessoas
            Especiais
          </p>
          <p><b>CNPJ:</b> 62.063.060/0001-00</p>
          <p>
            <b>Endereço:</b> Rua Bresser, 2701 – Mooca/ São Paulo – SP CEP:
            03162-030
          </p>
          <p><b>Área de atuação:</b> Assistência Social</p>
          <br />
          <p><b>Escopo do Trabalho:</b> Assistência Social</p>
          <p class="d-inline">Atividade a ser desenvolvida</p>
          <div class="dropdown d-inline">
            <select class="form-control" id="atividadeSelect" name="Atividade">
              <option value="">Escolha uma opção</option>
              <option value="Apoio em oficinas">Apoio em oficinas</option>
              <option value="Acompanhamento">Acompanhamento</option>
              <option value="Ensino">Ensino</option>
              <option value="Trabalho administrativo">Trabalho administrativo</option>
              <option value="Eventos">Eventos</option>
              <option value="Divulgação">Divulgação</option>
              <option value="Controle de acesso">Controle de acesso</option>
              <option value="Cozinha">Cozinha</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div class="form-group col-md4">
            <input type="text" class="form-control" id="outroInput" name="Descricao" style="margin-top: 10px" placeholder="Descreva a atividade"/>
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
              <input type="text" class="form-control" id="init" name="init" placeholder="29/06"/>
            </div>
            <p class="init mb-0 mr-3"><b>a:</b></p>
            <div class="input-group" style="width: 150px">
              <input type="text" class="form-control" id="end" name="end" placeholder="07/07" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <button type="button" onclick="showPreviousForm(2)" class="btn btn-volunteer">Voltar</button>
            </div>
            <div class="form-group col-md-4 ml-auto">
              <button
                type="button"
                onclick="showNextForm(2)"
                class="btn btn-primary btn-next"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>

        <!-- FORMULÁRIO DE TERMOS - 3 -->
        <div id="form3-content" style="display: none;">
          <h4><b>Nestes Termos</b></h4>
          <div class="bloco d-flex align-items-center mt-3">
            <div class="input-group" style="width: 150px">
              <input type="text" class="form-control" id="day" name="day"/>
            </div>
            <p class="p-margin init mb-0 mr-3"><b>de</b></p>
            <div class="input-group" style="width: 150px">
              <input type="text" class="form-control" id="month" name="month"/>
            </div>
            <p class="p-margin mb-0 mr-3"><b>de</b></p>
            <p class="ano mb-0 mr-3"><b>20</b></p>
            <div class="input-group" style="width: 50px">
              <input type="text" class="form-control" id="year" name="year"/>
            </div>
          </div>
          <br />
          <h4><b>Assinatura</b></h4>
          <p>Assinatura do voluntário</p>
          <div class="input-group mb-4">
            <div class="custom-file">
              <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile02"
              name="Assinatura"
              />
              <label class="custom-file-label" for="inputGroupFile02">Escolha o arquivo</label>
            </div>
          </div>
          <div class="form-group col-md-4">
            <button type="button" onclick="showPreviousForm(3)" class="btn btn-volunteer">Voltar</button>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-next"
          >
            Cadastrar
          </button>
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
