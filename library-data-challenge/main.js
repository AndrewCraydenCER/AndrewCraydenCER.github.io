$(function() {

    setTimeout(() => {
        $('#filter').addClass("filter-off");
        $('#filter').removeClass("filter-on");
        $('header h2').fadeIn('1500');
        document.getElementById('library').play();
    }, 3000);


    $('#question-1-submit').click(function() {
        console.log('Selection: ', $('input[name=question-1]:checked').val());
        $("section#section-one .img-transition.first").fadeOut(750);
        $("section#section-one .img-transition.hidden").fadeIn(750);
        if(parseInt($('input[name=question-1]:checked').val()) === 4) {
            $('#question-1-submit').addClass('bg-green-500');
            $('#question-1-submit').text('Correct');
        } else {
            $('#question-1-submit').addClass('bg-red-500');
            $('#question-1-submit').text('Incorrect');
        }
        $('input[name=question-1]').attr("disabled",true);
        $('#question-1-submit').attr("disabled",true);
        $('#section-one .answer').fadeIn(750);
    });

    $('#question-2-submit').click(function() {
        console.log('Selection: ', $('input[name=question-2]:checked').val());
        $("section#section-two .img-transition.first").fadeOut(750);
        $("section#section-two .img-transition.hidden").fadeIn(750);
        if(parseInt($('input[name=question-2]:checked').val()) === 2) {
            $('#question-2-submit').addClass('bg-green-500');
            $('#question-2-submit').text('Correct');
        } else {
            $('#question-2-submit').addClass('bg-red-500');
            $('#question-2-submit').text('Incorrect');
        }
        $('input[name=question-2]').attr("disabled",true);
        $('#question-2-submit').attr("disabled",true);
        $('#section-two .answer').fadeIn(750);
    });

    $('#question-3-submit').click(function() {
        console.log('Selection: ', $('input[name=question-3]:checked').val());
        $("section#section-three .img-transition.first").fadeOut(750);
        $("section#section-three .img-transition.hidden").fadeIn(750);
        if(parseInt($('input[name=question-3]:checked').val()) === 3) {
            $('#question-3-submit').addClass('bg-green-500');
            $('#question-3-submit').text('Correct');
        } else {
            $('#question-3-submit').addClass('bg-red-500');
            $('#question-3-submit').text('Incorrect');
        }
        $('input[name=question-3]').attr("disabled",true);
        $('#question-3-submit').attr("disabled",true);
        $('#section-three .answer').fadeIn(750);
    });

    const drawIntroText = () => {
        var vara = new Vara("#title", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
            text: "The Canada Energy Regulator Library",
            fontSize: 72,
            lineHeight: 100,
            height: 500,
            color:"#FFF"
        }], {
            strokeWidth: 2,
            textAlign:"center"
        });
    }

    drawIntroText();

});