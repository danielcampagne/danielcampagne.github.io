
$( document ).ready(function() {


$('.pin').click(function(){
    $(this).toggleClass('pinned');
    updatePositions();
  });
  
  function updatePositions() {
    $('.pinned').each(function(){
        var $this=$(this);
        var indx= $this.parent().parent('.container').find('.pinned').index($this);
        $(this).css('top',indx * 20 + 'px');
    });
  }


  var debounce_timer;
 
  $(window).scroll(function() {
    updateCoordinatesTriangles()

          if(debounce_timer) {
                  window.clearTimeout(debounce_timer);
          }
   
          debounce_timer = window.setTimeout(function() {
          }, 0);
  });



  function updateCoordinatesTriangles() {
    $('.menu ul li').each(function(){
        var currentClass = $(this).attr("class");
        var eTop = $(this).offset().top; 
        var positionMenu = eTop - $(window).scrollTop() + 2;
        var topSection =  $('.container.' + currentClass + ' .items').offset().top -  $(window).scrollTop();
        var bottomSection =  $('.container.' + currentClass + ' .items').offset().top + $('.container.' + currentClass + ' .items').outerHeight()  -  $(window).scrollTop();
        $('.container.' + currentClass + ' .triangle').css('clip-path','polygon(100% ' + topSection + 'px, 0  ' + positionMenu + 'px , 100% ' + bottomSection + 'px)') ;
    });
  }

  $('input').on('keypress keyup', function(){
    var value = $(this).val().toLowerCase();
    if (value != '') {
      $('.pin').each(function () {
        if ($(this).text().toLowerCase().indexOf(value) > -1) {
          $('.nine').css('margin-bottom','220px');
          $(this).removeClass('displaynone');  
        } else {
          $(this).addClass('displaynone');
          $('.nine').css('margin-bottom','0');
        }
      });

      $('.list').css('min-height','auto');

      var listHeight = $('.list').height();
      console.log(listHeight);
      var windowtHeight = $(window).height();
      console.log(windowtHeight);

      if (listHeight < windowtHeight) {
        $('.list').css('justify-content','center');
        // $('.list').css('min-height','100%');
        

      } 

      if (listHeight > windowtHeight) {
        $('.list').css('justify-content','flex-start');
        // $('.list').css('min-height','auto');

      }  

    } else {
      $('*').removeClass('displaynone');
      $('.nine').css('margin-bottom','220px');

    }
    updateCoordinatesTriangles()
});

$('#check1').click(function(){
  $('body').toggleClass('only-selected');
  updateCoordinatesTriangles()

});

updateCoordinatesTriangles()


// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 100, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

});
