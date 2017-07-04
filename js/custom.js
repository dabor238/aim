$(document).ready(function () {
    function borrarTodo() {
        $('#uno').hide();
        $('#dos').hide();
        $('#tres').hide();
        $('#cuatro').hide();
    }
    borrarTodo();
   
    $("#one").hover(function () {
        $('#uno').show();
    }, function () {
        $('#uno').hide('slow');
    });
    $("#two").hover(function () {
        $('#dos').show();
    }, function () {
        $('#dos').hide('slow');
    });
    $("#three").hover(function () {
        $('#tres').show();
    }, function () {
        $('#tres').hide('slow');
    });
    $("#four").hover(function () {
        $('#cuatro').show();
    }, function () {
        $('#cuatro').hide('slow');
    });

});
