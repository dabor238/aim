$(document).ready(function () {
    $('#gracias').hide();
    $('#graciasContacto').hide();
    $('#enviarDatos').click(function () {
        var nombre = $('#nombreDatos').val();
        var email = $('#emailDatos').val();
        var telefono = $('#numeroDatos').val();
        var texto = '-';
        var usuarioRequest = {
            Nombre: nombre,
            Email: email,
            Telefono: telefono,
            TextArea: texto,
            IdPrograma: 13,
            IdLanding: 6
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.instaclientes.com/api/usuarios/IngresoDatos',
            dataType: 'json',
            data: JSON.stringify(usuarioRequest),
            contentType: 'application/json; charset=utf-8',
            async: false,
            success: function (data) {
                $('#newsletterForm2').hide();
                $('#gracias').show('slow');
            },
            error: function (xhr) {
                alert('Problemas al ingresar los datos. Intente nuevamente.');

            }
        });
    });

    $('#enviarDatosContacto').click(function () {
        var nombre = $('#nombreContacto').val();
        var email = $('#emailContacto').val();
        var telefono = $('#numeroContacto').val();
        var texto = $('#texto').val();;
        var usuarioRequest = {
            Nombre: nombre,
            Email: email,
            Telefono: telefono,
            TextArea: texto,
            IdPrograma: 13,
            IdLanding: 6
        }
        $.ajax({
            type: 'POST',
            url: 'http://www.instaclientes.com/api/usuarios/IngresoDatos',
            dataType: 'json',
            data: JSON.stringify(usuarioRequest),
            contentType: 'application/json; charset=utf-8',
            async: false,
            success: function (data) {
                $('#contactForm').hide();
                $('#graciasContacto').show('slow');
            },
            error: function (xhr) {
                alert('Problemas al ingresar los datos. Intente nuevamente.');

            }
        });
    });
    $("#newsletterForm2").submit(function (e) {
        e.preventDefault();
    });

    $("#contactForm").submit(function (e) {
        e.preventDefault();
    });
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

    //codigo para banderas
        var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
        var engImgLink = "img/banderas/america.gif";
        var deuImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Deutschland.gif";
        var fraImgLink = "img/banderas/espanol.gif";

        var imgBtnSel = $('#imgBtnSel');
        var imgBtnIta = $('#imgBtnIta');
        var imgBtnEng = $('#imgBtnEng');
        var imgBtnDeu = $('#imgBtnDeu');
        var imgBtnFra = $('#imgBtnFra');

        var imgNavSel = $('#imgNavSel');
        var imgNavIta = $('#imgNavIta');
        var imgNavEng = $('#imgNavEng');
        var imgNavDeu = $('#imgNavDeu');
        var imgNavFra = $('#imgNavFra');

        var spanNavSel = $('#lanNavSel');
        var spanBtnSel = $('#lanBtnSel');

        imgBtnSel.attr("src", itaImgLink);
        imgBtnIta.attr("src", itaImgLink);
        imgBtnEng.attr("src", engImgLink);
        imgBtnDeu.attr("src", deuImgLink);
        imgBtnFra.attr("src", fraImgLink);

        imgNavSel.attr("src", itaImgLink);
        imgNavIta.attr("src", itaImgLink);
        imgNavEng.attr("src", engImgLink);
        imgNavDeu.attr("src", deuImgLink);
        imgNavFra.attr("src", fraImgLink);

        $(".language").on("click", function (event) {
            var currentId = $(this).attr('id');

            if (currentId == "navIta") {
                imgNavSel.attr("src", itaImgLink);
                spanNavSel.text("ITA");
            } else if (currentId == "navEng") {
                imgNavSel.attr("src", engImgLink);
                spanNavSel.text("ENG");
            } else if (currentId == "navDeu") {
                imgNavSel.attr("src", deuImgLink);
                spanNavSel.text("DEU");
            } else if (currentId == "navFra") {
                imgNavSel.attr("src", fraImgLink);
                spanNavSel.text("FRA");
            }

            if (currentId == "btnIta") {
                imgBtnSel.attr("src", itaImgLink);
                spanBtnSel.text("ITA");
            } else if (currentId == "btnEng") {
                imgBtnSel.attr("src", engImgLink);
                spanBtnSel.text("ENG");
            } else if (currentId == "btnDeu") {
                imgBtnSel.attr("src", deuImgLink);
                spanBtnSel.text("DEU");
            } else if (currentId == "btnFra") {
                imgBtnSel.attr("src", fraImgLink);
                spanBtnSel.text("FRA");
            }

        });
    //fin codigo para banderas

});
