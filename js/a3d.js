$(function ($) {
    /**share and accept buttons**/
    var continuerButton=document.getElementById('continuer');
    var annulerButton=document.getElementById('annuler');



    $(".press_butt a").click(function (e) {
        e.preventDefault();


        $('#nested').foldable('close', $('#nested').find('[data-foldable-role="group"]').eq($(e.target).index()));
        var content = $(this).parent(".press_butt").find(".content");
        var allContent = $(".press_butt").find(".content");

        if (content.hasClass("show_content")) {
            content.removeClass("show_content");

        }
        else {
            allContent.removeClass("show_content");
            content.addClass("show_content");

        }
    });
    /**end share and accept buttons**/

    $("#menu1").click(function (e) {

        $(".press_butt").find(".content").removeClass("show_content");

    });

    /****last menu submenu**/

    /****last menu submenu**/

    /****last submenu submenu**/

    $(".marquage_sub li").click(function (e) {

        var content1 = $(this);
        //var allContent =  $(".marquage_sub li");
        var allContent =  $(this).parent();

        if (content1.hasClass("click_marge_sub_li")) {

        }
        else {
            allContent.find("li").removeClass("click_marge_sub_li");
            content1.addClass("click_marge_sub_li");
        }

    });
    $(".marquage_sub li:first-child").click(function (e) {

        $(".first_button_li").addClass("show_submenu");
        $(".second_button_li").removeClass("show_submenu");
    });
    $(".marquage_sub li:last-child").click(function (e) {
        $(".first_button_li").removeClass("show_submenu");
        $(".second_button_li").addClass("show_submenu");
    });


    /****last submenu submenu**/

    $("#taille").select2({ });
    $("#police").select2({ });
    $("#taille1").select2({ });
    $("#police1").select2({ });
    $("#taille2").select2({ });
    $("#police2").select2({ });
    $("#taille3").select2({ });
    $("#police3").select2({ });
    $("#taille4").select2({ });
    $("#police4").select2({ });
    $("#taille5").select2({ });
    $("#police5").select2({ });
    /****POLO MANCHES LONGUES*****/
$("#Colmao").click(function (e) {


    if ( $("#Rayurescol").parent().hasClass("no-active")) {
        $("#Rayurescol").parent().removeClass("no-active")
        $("#Rayurescol").removeAttr("disabled");


    }
    else {
        $("#Rayurescol").parent().addClass("no-active");
        $("#Rayurescol").attr("disabled","disabled");
    }

});

    $("#Rayurescol").click(function (e) {


        if ( $("#Colmao").parent().hasClass("no-active")) {
            $("#Colmao").parent().removeClass("no-active");
            $("#Colmao").removeAttr("disabled");

        }
        else {
            $("#Colmao").parent().addClass("no-active");
            $("#Colmao").attr("disabled","disabled");
        }

    });
    $("#Dessousbras").click(function (e) {


        if ( $("#Dessusbras").parent().hasClass("no-active") && $("#Manches").parent().hasClass("no-active") ) {
            $("#Dessusbras").parent().removeClass("no-active");
            $("#Manches").parent().removeClass("no-active");
            $("#Manches").removeAttr("disabled");
            $("#Dessusbras").removeAttr("disabled");

        }
        else {
            $("#Dessusbras").parent().addClass("no-active");
            $("#Manches").parent().addClass("no-active");
            $("#Dessusbras").attr("disabled","disabled");
            $("#Manches").attr("disabled","disabled");
        }

    });
    $("#Dessusbras").click(function (e) {


        if ( $("#Dessousbras").parent().hasClass("no-active") && $("#Manches").parent().hasClass("no-active") ) {
            $("#Dessousbras").parent().removeClass("no-active");
            $("#Manches").parent().removeClass("no-active");
            $("#Manches").removeAttr("disabled");
            $("#Dessousbras").removeAttr("disabled");

        }
        else {
            $("#Dessousbras").parent().addClass("no-active");
            $("#Manches").parent().addClass("no-active");
            $("#Dessousbras").attr("disabled","disabled");
            $("#Manches").attr("disabled","disabled");
        }

    });

    $("#Manches").click(function (e) {


        if ( $("#Dessusbras").parent().hasClass("no-active") && $("#Dessousbras").parent().hasClass("no-active") ) {
            $("#Dessusbras").parent().removeClass("no-active");
            $("#Dessousbras").parent().removeClass("no-active");
            $("#Dessousbras").removeAttr("disabled");
            $("#Dessusbras").removeAttr("disabled");

        }
        else {
            $("#Dessusbras").parent().addClass("no-active");
            $("#Dessousbras").parent().addClass("no-active");
            $("#Dessusbras").attr("disabled","disabled");
            $("#Dessousbras").attr("disabled","disabled");
        }

    });

    $("#BandeDiagonale").change(function (e) {

        $(".elements_check li").removeClass("BandePleine");
        $(".elements_check li").removeClass("BandeHorizontale");
        $(".elements_check li").removeClass("BandeVerticale");
        $(".elements_check li").removeClass("BandesBras");
        $("#secondaireColor").parent().css("display","block");

        if ( $(".elements_check li").hasClass("BandeDiagonale")  ) {
            $(".elements_check li").removeClass("BandeDiagonale")


        }
        else {
            $("#Dessusbras").parent().addClass("BandeDiagonale");
            $("#Dessousbras").parent().addClass("BandeDiagonale");
            $("#Bandeshanches").parent().addClass("BandeDiagonale");

        }

    });
    $("#DiagonalePleine").change(function (e) {
        $(".elements_check li").removeClass("BandeDiagonale");
        $(".elements_check li").removeClass("BandeHorizontale");
        $(".elements_check li").removeClass("BandeVerticale");
        $(".elements_check li").removeClass("BandesBras");
        $("#secondaireColor").parent().css("display","block");

        if ( $(".elements_check li").hasClass("BandePleine")  ) {
            $(".elements_check li").removeClass("BandePleine")


        }
        else {
            $("#Dessusbras").parent().addClass("BandePleine");
            $("#Dessousbras").parent().addClass("BandePleine");
            $("#Bandeshanches").parent().addClass("BandePleine");

        }

    });
    $("#BandeHorizontale").change(function (e) {
        $(".elements_check li").removeClass("BandeDiagonale");
        $(".elements_check li").removeClass("BandePleine");

        $(".elements_check li").removeClass("BandeVerticale");
        $(".elements_check li").removeClass("BandesBras");
        $("#secondaireColor").parent().css("display","block");


        if ( $(".elements_check li").hasClass("BandeHorizontale")  ) {
            $(".elements_check li").removeClass("BandeHorizontale")


        }
        else {
            $("#Dessusbras").parent().addClass("BandeHorizontale");
            $("#Dessousbras").parent().addClass("BandeHorizontale");
            $("#Bandeshanches").parent().addClass("BandeHorizontale");

        }

    });
    $("#BandeVerticale").change(function (e) {
        $(".elements_check li").removeClass("BandeDiagonale");
        $(".elements_check li").removeClass("BandePleine");
        $(".elements_check li").removeClass("BandeHorizontale");

        $(".elements_check li").removeClass("BandesBras");
        $("#secondaireColor").parent().css("display","block");


        if ( $(".elements_check li").hasClass("BandeVerticale")  ) {
            $(".elements_check li").removeClass("BandeVerticale")


        }
        else {
            $("#Dessusbras").parent().addClass("BandeVerticale");
            $("#Dessousbras").parent().addClass("BandeVerticale");
            $("#Bandeshanches").parent().addClass("BandeVerticale");

        }

    });
    $("#BandesBras").change(function (e) {
        $(".elements_check li").removeClass("BandeDiagonale");
        $(".elements_check li").removeClass("BandePleine");
        $(".elements_check li").removeClass("BandeHorizontale");
        $(".elements_check li").removeClass("BandeVerticale");
        $("#secondaireColor").parent().css("display","block");


        if ( $(".elements_check li").hasClass("BandesBras")  ) {
            $(".elements_check li").removeClass("BandesBras")


        }
        else {
            $("#Dessusbras").parent().addClass("BandesBras");
            $("#Dessousbras").parent().addClass("BandesBras");
            $("#Bandeshanches").parent().addClass("BandesBras");

        }

    });
    $("#Classique").change(function (e) {

        $(".elements_check li").removeClass("BandeDiagonale");
        $(".elements_check li").removeClass("BandePleine");
        $(".elements_check li").removeClass("BandeHorizontale");
        $(".elements_check li").removeClass("BandeVerticale");
        $(".elements_check li").removeClass("BandesBras");
        $("#secondaireColor").parent().css("display","none");


    });
    /**color**/
   // $("#elementColor").attr("disabled","disabled");
    $("#buttonColor").attr("disabled","disabled");
  $(".foldable__item input").click(function () {
      $("#elementColor").removeAttr("disabled");
      $("#buttonColor").removeAttr("disabled");
  });


    /****end POLO MANCHES LONGUES*****/
    /**marquage**/


    /**marquage**/

   /*
    /**end**/

/***color***/
    var color;
    var radios = $('#colorButtons #baseButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.base").css("background",color);
            $("p.base").css("border-color","#bebebe");

        }}

    var radios = $('#colorButtons #cordonsButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.cordons").css("background",color);
            $("p.cordons").css("border-color","#bebebe");

        }}

    var radios = $('#colorButtons #couturesButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.coutures").css("background",color);
            $("p.coutures").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #elastiquesButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.elastiques").css("background",color);
            $("p.elastiques").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #manchesButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.manches").css("background",color);
            $("p.manches").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #secondaireButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.secondaire").css("background",color);
            $("p.secondaire").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #tertiaireButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.tertiaire").css("background",color);
            $("p.tertiaire").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #pocheButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.poche").css("background",color);
            $("p.poche").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #couturesMButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.couturesM").css("background",color);
            $("p.couturesM").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #colButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.col").css("background",color);
            $("p.col").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #InterieurCapucheButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.InterieurCapuche").css("background",color);
            $("p.InterieurCapuche").css("border-color","#bebebe");

        }}

    var radios = $('#colorButtons #ElastiqueTaillesButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.ElastiqueTailles").css("background",color);
            $("p.ElastiqueTailles").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #ElastiquePoignetsButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.ElastiquePoignets").css("background",color);
            $("p.ElastiquePoignets").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #BandeshanchesButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.Bandeshanches").css("background",color);
            $("p.Bandeshanches").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #DessusbrasButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.Dessusbras").css("background",color);
            $("p.Dessusbras").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #DessousbrasButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.Dessousbras").css("background",color);
            $("p.Dessousbras").css("border-color","#bebebe");

        }}
    var radios = $('#colorButtons #CoudieresButtons .mk-trc input');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function () {
            color=$(this).attr("id");
            color=color.slice(0,7);
            $("p.Coudieres").css("background",color);
            $("p.Coudieres").css("border-color","#bebebe");

        }}

    /***POLO add color****/
    $("#Manches").click(function (e) {


        if($(this).hasClass("pressB")){
            $(".manchesPolo").css("display","none");
            $(this).removeClass("pressB")
        }
        else{
            $(this).addClass("pressB");
            $(".manchesPolo").css("display","block")
        }




    });
    $("#Bandeshanches").change(function (e) {
        if($(this).hasClass("pressB")){
            $(".BandeshanchesPolo").css("display","none");
            $(this).removeClass("pressB")
        }
        else{
            $(this).addClass("pressB");
            $(".BandeshanchesPolo").css("display","block")
        }


    });
    $("#Dessusbras").change(function (e) {
        if($(this).hasClass("pressB")){
            $(".DessusbrasPolo").css("display","none");
            $(this).removeClass("pressB")
        }
        else{
            $(this).addClass("pressB");
            $(".DessusbrasPolo").css("display","block")
        }


    });
    $("#Dessousbras").change(function (e) {
        if($(this).hasClass("pressB")){
            $(".DessousbrasPolo").css("display","none");
            $(this).removeClass("pressB")
        }
        else{
            $(this).addClass("pressB");
            $(".DessousbrasPolo").css("display","block")
        }


    });
    $("#Coudieres").change(function (e) {
        if($(this).hasClass("pressB")){
            $(".CoudieresPolo").css("display","none");
            $(this).removeClass("pressB")
        }
        else{
            $(this).addClass("pressB");
            $(".CoudieresPolo").css("display","block")
        }


    });
});

