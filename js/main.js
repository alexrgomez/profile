/* Responsive Menu */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* Active Status */
$(document).ready(function(){
    $('#myTopnav a').click(function(){
      $('#myTopnav a').removeClass("active");
      $(this).addClass("active");
  });
  });

  /* Smooth Scroll */

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var baseMinScrollTime = 200,
            baseMaxScrollTime = 500;

        var docHeight = $(document).height(),
            triggerTop = $(this).offset().top,
            targetTop = $target.offset().top;

        var scrollProportion = (targetTop - triggerTop) / docHeight,
            relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
            // Create inverse relationship (quicker the further we scroll)
            scrollTime = -1 * (1 - relativeTime);

        $('html, body').animate({
          scrollTop: targetTop - 10
        }, scrollTime);
        return false;
      }
    }
  });

  /* Services */

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

    /* Portfolio */

    $(window).load(function() {
        $('.post-module').hover(function() {
          $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
          }, 300);
        });
      });