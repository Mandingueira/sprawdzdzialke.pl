$(document).ready(function(){
    
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
//            alert(Wpisz wartość!)
//        }
                     });
        
    
});