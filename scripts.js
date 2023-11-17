console.log("stylesheet conencted");

$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    }); 
     
        $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
            e.stopPropagation();
        });
    });
    
   /*  $(document).ready(function() {
        $('.navbar-toggler').click(function() {
          $('#offcanvasExample').toggleClass('open');
        });
      }); */