<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style/dashboard_adm.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
    </style>
</head>

<body>

    <!-- HEADER ADM -->

    <nav class="navbar navbar-expand-lg bg-white mx-4 mt-3 navbar-custom semi-bold">
        <a class="navbar-brand ml-5" href="#">
            <img src="./img/Novfa4E 4.png" width="213" height="60" alt="">
        </a>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto mx-auto">
                <li class="nav-item mr-5">
                    <a class="nav-link" href="index.php">HOME</a>
                </li>
                <li class="nav-item mr-5 ml-5">
                    <a class="nav-link" href="filtro_voluntario.php">SELECIONAR VOLUNTARIOS</a>
                </li>
                <li class="nav-item ml-5">
                    <a class="nav-link" href="events.php">EVENTOS</a>
                </li>
            </ul>

            <button class="btn  my-2 my-sm-0 mr-5 px-5" onclick="logout()">Logout</button>

        </div>
    </nav>

    <!-- DASHBOARD ADM -->

    <div class="container mt-5">
        <div class="d-flex flex-wrap">

            <div class="card m-2 card-azul" style="flex: 1 1 230px;">
                <a href="edit_events.php">
                    <div class="card-body">
                        <img src="./img/calendario.png" class="mt-2">
                        <p class="card-text text-center mt-3">Adicionar Evento</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-azul" style="flex: 1 1 230px;">
                <a href="events.php">
                    <div class="card-body">
                        <img src="./img/calendario.png" class="mt-2">
                        <p class="card-text text-center mt-3">Visualizar Eventos</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-roxo" style="flex: 1 1 230px;">
                <a href="">
                    <div class="card-body">
                        <img src="./img/voluntariado.png" class="mt-2">
                        <p class="card-text text-center mt-3">Alterar Cadastro Voluntários</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-roxo" style="flex: 1 1 230px;">
                <a href="index.php#feedbacks">
                    <div class="card-body">
                        <img src="./img/voluntariado.png" class="mt-2">
                        <p class="card-text text-center mt-3">Visualizar Feedbacks</p>
                    </div>
                </a>
            </div>

        </div>
    </div>

    <div class="container mt-2">
        <div class="d-flex flex-wrap">

            <div class="card m-2 card-laranja" style="flex: 1 1 230px;">
                <a href="">
                    <div class="card-body">
                        <img src="./img/configuracoes.png" class="mt-2">
                        <p class="card-text text-center mt-3">Alterar Página Inicial</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-laranja" style="flex: 1 1 230px;">
                <a href="">
                    <div class="card-body">
                        <img src="./img/configuracoes.png" class="mt-2">
                        <p class="card-text text-center mt-3">Configurações</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-vermelho" style="flex: 1 1 230px;">
                <a href="">
                    <div class="card-body">
                        <img src="./img/lupa.png" class="mt-2">
                        <p class="card-text text-center mt-3">Banco de Voluntários</p>
                    </div>
                </a>
            </div>

            <div class="card m-2 card-vermelho" style="flex: 1 1 230px;">
                <a href="filtro_voluntario.php">
                    <div class="card-body">
                        <img src="./img/lupa.png" class="mt-2">
                        <p class="card-text text-center mt-3">Buscar Voluntários</p>
                    </div>
                </a>
            </div>

        </div>
    </div>
    <script src="./js/nav.js"></script>
</body>

</html>