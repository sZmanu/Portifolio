  function showNextForm(currentForm) {
    document.getElementById(`form${currentForm}-content`).style.display = 'none';
    document.getElementById(`form${currentForm + 1}-content`).style.display = 'block';
  }

  function showPreviousForm(currentForm) {
    document.getElementById(`form${currentForm}-content`).style.display = 'none';
    document.getElementById(`form${currentForm - 1}-content`).style.display = 'block';
  }

  function toggleUpdateForm() {
    const form = document.getElementById('update-form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
  }

  function toggleDocuments(){
    const form = document.getElementById('documents');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
  }

  function toggleEvents(){
    const form = document.getElementById('events');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
  }

  function toggleParticipantes(){
    const form = document.getElementById('participantes');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
  }

 // JavaScript to update the label of the custom file input
  $('#inputGroupFile02').on('change', function() {
    var fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').addClass("selected").html(fileName);
  });