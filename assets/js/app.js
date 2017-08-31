$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
    
var $main = $('#main');
var $button = $('.btn-custom-lg');
   
    $button.on('mouseover', function(e) {
        $main.attr('height', 0.9 * $main.height());
        
    });
        
    $button.on('mouseleave', function(e) {
        $main.attr('height', 1.11 * $main.height()); 
    });
    
    var $body= $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $('#sidebar').affix({
          offset: {
            top: 100,
            bottom: navHeight
          }
    });


    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });
    
    $('.butt').click(function () {
        $('#ok').show()
        
//        if('.butt').value === null){
//            alert(Wpisz wartoĹ›Ä‡!)
//        }
                     });
//    
//    $('.btn-custom-lg').mouseover(function () {
//        $('.main').attr('height', 0.9 * ('.main').height());
//                             });

})