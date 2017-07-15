$( document ).ready( function () {

    $('#nested').foldable({
        accordion: true
    });

    var up = 't24-button__icon fa fa-chevron-up';
    var plus = 't24-button__label t24-button--color-white fa fa-plus';
    var down = 't24-button__icon fa fa-chevron-down';
    var minus = 't24-button__label t24-button--color-white fa fa-minus';

    var baseTab = document.getElementById('baseButtons');
    var couturesMTab = document.getElementById('couturesMButtons');
    var elementTab = document.getElementById('elementButtons');
    var colTab = document.getElementById('colButtons');
    var secondaireTab = document.getElementById('secondaireButtons');
    var manchesTab = document.getElementById('manchesButtons');
    var BandeshanchesTab = document.getElementById('BandeshanchesButtons');
    var DessusbrasTab = document.getElementById('DessusbrasButtons');
    var DessousbrasTab = document.getElementById('DessousbrasButtons');
    var CoudieresTab = document.getElementById('CoudieresButtons');
    // var cordonsTab = document.getElementById('cordonsButtons');
    // var couturesPTab = document.getElementById('couturesPButtons');
    // var elastiquesCTab = document.getElementById('elastiquesCPButtons');

  /*  baseTab.style.display = 'none';
    couturesMTab.style.display = 'none';
    elementTab.style.display = 'none';
    colTab.style.display = 'none';
    secondaireTab.style.display = 'none';
    manchesTab.style.display = 'none';
    BandeshanchesTab.style.display = 'none';*/
//cordonsTab.style.display = 'none';
    // couturesPTab.style.display = 'none';
    //  elastiquesCTab.style.display = 'none';





    $("#nested").on('open.foldable', function (event, foldableInstance) {
        var triggerId = foldableInstance.$trigger[0].id;
        var i1 = foldableInstance.$trigger[0].querySelector(".t24-button__icon");
        var i2 = foldableInstance.$trigger[0].querySelector(".t24-button__label");
        $(i1).removeClass(up).addClass(down);
        $(i2).removeClass(plus).addClass(minus);
    });

    $("#nested").on('close.foldable', function (event, foldableInstance) {
        console.log(foldableInstance)

        var triggerId = foldableInstance.$trigger[0].id;
        var i1 = foldableInstance.$trigger[0].querySelector(".t24-button__icon");
        var i2 = foldableInstance.$trigger[0].querySelector(".t24-button__label");
        $(i1).removeClass(down).addClass(up);
        $(i2).removeClass(minus).addClass(plus);
    });

    $('.polo_manches_longues input[name="checkboxParts"]').change(function (e) {

        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {
            case "baseColor":

               /* couturesMTab.style.display = 'none';
                elementTab.style.display = 'none';
                colTab.style.display = 'none';
                secondaireTab.style.display = 'none';*/
                //  cordonsTab.style.display = 'none';
                //   couturesPTab.style.display = 'none';
                //   elastiquesCTab.style.display = 'none';
                $("#colorButtons > div").css("display","none");
                baseTab.style.display = 'inherit';
                break;
            case "couturesMColor":
                $("#colorButtons > div").css("display","none");
                couturesMTab.style.display = 'inherit';
               /* baseTab.style.display = 'none';
                couturesMTab.style.display = 'inherit';
                elementTab.style.display = 'none';
                colTab.style.display = 'none';
                secondaireTab.style.display = 'none';*/
                break;
            case "elementColor":
                $("#colorButtons > div").css("display","none");
                elementTab.style.display = 'inherit';
               /* baseTab.style.display = 'none';
                couturesMTab.style.display = 'none';
                colTab.style.display = 'none';
                elementTab.style.display = 'inherit';
                secondaireTab.style.display = 'none';*/
                break;
            case "colColor":
                $("#colorButtons > div").css("display","none");
                colTab.style.display = 'inherit';
                /*baseTab.style.display = 'none';
                couturesMTab.style.display = 'none';
                elementTab.style.display = 'none';
                colTab.style.display = 'inherit';
                secondaireTab.style.display = 'none';*/
                break;
            case "secondaireColor":
                $("#colorButtons > div").css("display","none");
                secondaireTab.style.display = 'inherit';
               /* baseTab.style.display = 'none';
                couturesMTab.style.display = 'none';
                elementTab.style.display = 'none';
                colTab.style.display = 'none';
                secondaireTab.style.display = 'inherit';*/
                break;
            case "manchesColor":
                $("#colorButtons > div").css("display","none");
                manchesTab.style.display = 'inherit';
                break;
                Coudières
            case "BandeshanchesColor":
                $("#colorButtons > div").css("display","none");
                BandeshanchesTab.style.display = 'inherit';
                break;
            case "DessusbrasColor":
                $("#colorButtons > div").css("display","none");
                DessusbrasTab.style.display = 'inherit';
                break;
            case "DessousbrasColor":
                $("#colorButtons > div").css("display","none");
                DessousbrasTab.style.display = 'inherit';
                break;
            case "CoudieresColor":
                $("#colorButtons > div").css("display","none");
                CoudieresTab.style.display = 'inherit';
                break;
        }
        $('#nested').foldable('refresh')
    });
    var poitrine_subTab = document.getElementById('poitrine_sub');
    var coeur_subTab = document.getElementById('coeur_sub');
    var anti_coeur_subTab = document.getElementById('anti-coeur_sub');
    var manche_gauche_subTab = document.getElementById('manche_gauche_sub');
    var mancheDroite_subTab = document.getElementById('mancheDroite_sub');
    var dos_subTab = document.getElementById('dos_sub');

    poitrine_subTab.style.display = 'none';
    coeur_subTab.style.display = 'none';
    anti_coeur_subTab.style.display = 'none';
    manche_gauche_subTab.style.display = 'none';
    mancheDroite_subTab.style.display = 'none';
    dos_subTab.style.display = 'none';


    $('.polo_manches_longues input[name="marquageParts"]').click(function (e) {

        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {
            case "poitrine":

                poitrine_subTab.style.display = 'inherit';
                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ( $(this).hasClass("click")  ) {
                    poitrine_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;
            case "coeur":
                poitrine_subTab.style.display = 'none';
                coeur_subTab.style.display = 'inherit';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ( $(this).hasClass("click")  ) {
                    coeur_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;
            case "anti-coeur":
                poitrine_subTab.style.display = 'none';
                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'inherit';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ( $(this).hasClass("click")  ) {
                    anti_coeur_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;
            case "mancheGauche":
                poitrine_subTab.style.display = 'none';
                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'inherit';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ( $(this).hasClass("click")  ) {
                    manche_gauche_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;
            case "mancheDroite":
                poitrine_subTab.style.display = 'none';
                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'inherit';
                dos_subTab.style.display = 'none';
                if ( $(this).hasClass("click")  ) {
                    mancheDroite_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;
            case "dos":
                poitrine_subTab.style.display = 'none';
                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'inherit';
                if ( $(this).hasClass("click")  ) {
                    dos_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");}
                break;

        }
        $('#nested').foldable('refresh')
    });


    $(".press_butt a").on('click', function(e) {
        e.preventDefault();
        $('#nested').foldable('close', $('#nested').find('[data-foldable-role="group"]').eq($(e.target).index()))
    });


    initSketchfab();

  /*  $('input[name="baseColor"]').change(function (e) {
        var partColId = $(this)[0].id;

        getData(partColId);
    });
    $('input[name="colColor"]').change(function (e) {
        var partColId = $(this)[0].id;
        getData(partColId);
    });

    $('input[name="couturesMColor"]').change(function (e) {
        var partColId = $(this)[0].id;
        getData(partColId);
    });

    $('input[name="elementColor"]').change(function (e) {
        var partColId = $(this)[0].id;
        getData(partColId);
    });*/

    /***change color in color***/










});