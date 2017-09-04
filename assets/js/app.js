$(document).ready(function () {

            $(".navbar a, footer a[href='#myPage'], .arrow a").on('click', function (event) {
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 900, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });

//            $(window).scroll(function () {
//                $(".slideanim").each(function () {
//                    var pos = $(this).offset().top;
//
//                    var winTop = $(window).scrollTop();
//                    if (pos < winTop + 600) {
//                        $(this).addClass("slide");
//                    }
//                });
//            });



            var $body = $(document.body);
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


            //    
            var $mainImg = $('.main').height();

            $('.btn-custom-lg span').mouseover(function () {
                /*$('.main').css('height', 0.9 * $('.main').height());*/
                $('.main .bg').animate({
                    height: 1.06 * $('.main').height()
                });
                $('.main .bg').css({
                            'filter': 'blur(1px)',
                            'filter': 'brightness(90%)',
                    
                        });
            });

            $('.btn-custom-lg span').mouseleave(function () {
                $('.main .bg').animate({
                    height: $mainImg
                });
                $('.main .bg').css({
                            'filter': 'blur(0px)',
                            'filter': 'brightness(80%)',
                    
                        });
            });

            //    $('.btn-custom-lg').mouseleave(function () {
            //   $('.main').animate({height: $mainImg}); 

            //    $('.btn-custom-lg').mouseover(function () {
            //        /*$('.main').css('height', 0.9 * $('.main').height());*/
            //        $('.main').animate({height: 0.9 * $('.main').height()});
            //    });
            //    
            //    $('.btn-custom-lg').mouseleave(function () {
            //    $('.main').animate({height: 1.11 * $('.main').height()}); 
            //   });

            //----------------
            //RAPORT
            //----------------


            $('.butt').click(function () {

                var text;
                var numb = $("#nrDzialki").val();
                if (numb == '') {
                    text = "Wpisz numer działki";
                } else {
                    text = "OK";
                    $('#liNumer .ok').show();
                }
                $("#status").html(text);
                $("#numer").html(numb);
            });

            $('#formMpzp button').click(function () {
                var zmienna = $('#przeznaczenie').val();
                //console.log(zmienna);
                var text;

                if (zmienna == 0 || zmienna == '') {
                    text = "Wybierz przeznaczenie gruntu z listy";
                    console.log('click');
                } else {
                    text = "OK";
                    $('#liMpzp .ok').show();
                }

                $("#status-dzialki").html(text);
                $("#przeznaczenie-raport").html(zmienna);

                var uwagi = $("#uwagi").val();
                console.log(uwagi);
                if (uwagi !== '') {
                    $(".uwagi #mpzp-raport").html(uwagi).parent().show();
                }

            })
    


    $('input[name="optradio"]').change(function () {
        if ($(this).val() === 'tak') {
            $('#przeznaczenie').removeAttr('disabled');
            $('input[name="optradio1"]').attr('disabled', true);
        }
        else if ($(this).val() === 'nie') {
            $('#przeznaczenie').attr('disabled', true);
            $('input[name="optradio1"]').removeAttr('disabled');
        }
    });
    
    $('input[name="optradio1"]').change(function () {
        if ($(this).val() === 'tak') {
            $('#przeznaczenie').removeAttr('disabled');
        }
        else if ($(this).val() === 'nie') {
            $('#przeznaczenie').attr('disabled', true);
            $("#czyWarZab").html('brak MPZP i decyzji o warunkach zabudowy');
        }
    });

});