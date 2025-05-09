// NAVEGAÇÃO PARA A TELA DE FORMULARIO
  //NAVEGAÇÃO ENTRE TELAS

  function navigateToLogin() {
    window.location.href = 'login.php';
  }

  function navigateToPerfil(){
    window.location.href = 'profile.php';
  }

  function navigateToFormVolunteer() {
    window.location.href = 'form_volunteer.php';
  }

  function navigateToEvents(){
    window.location.href = 'events.php';
  }
  function navigateToDetailEvent(id){
    window.location.href = 'detail_event.php?id=' + id;
  }

  function navigateToDashboard(){
    window.location.href = 'dashboard_adm.php';
  }

  function logout(){
    window.location.href = './php/logout.php';
  }

  function excluirCadastro(id){
    window.location.href = './php/crud_voluntario.php?action=deletar&id=' + id;
  }

  function excluirEvento(id){
    window.location.href = './php/crud_evento.php?action=deletar&id=' +id;
  }

  function voluntariar(id){
    window.location.href = './php/crud_evento.php?action=voluntariar&id=' +id;
  }