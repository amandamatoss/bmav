$(document).ready(function () {
    //  login
    $(".menuLogin").hide();
    $(".loginToggle").on("click", function () {
      event.preventDefault();
      $(".menuLogin").slideToggle();
    });
  
    // controle foco do input
    $(".form-item__field").on("focus", function () {
      $(this).parent().addClass("active");
    });
  
    $(".form-item__field").on("focusout", function () {
      if ($(this).val() == "") $(this).parent().removeClass("active");
    });
    // fim controle foco do input
  });
  