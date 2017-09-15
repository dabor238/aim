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

    //codigo para banderas
        var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
        var engImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Grossbritanien.gif";
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
