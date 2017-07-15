$(document).ready(function () {

    $('#nested').foldable({
        accordion: true
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

    var cordonsTab = document.getElementById('cordonsButtons');
    var couturesPTab = document.getElementById('couturesButtons');
    var InterieurCapucheTab = document.getElementById('InterieurCapucheButtons');
    var baseTab = document.getElementById('baseButtons');
    var ElastiqueTaillesTab = document.getElementById('ElastiqueTaillesButtons');
    var ElastiquePoignetsTab = document.getElementById('ElastiquePoignetsButtons');
    cordonsTab.style.display = 'none';
    couturesPTab.style.display = 'none';
    InterieurCapucheTab.style.display = 'none';
    baseTab.style.display = 'none';
    ElastiqueTaillesTab.style.display = 'none';
    ElastiquePoignetsTab.style.display = 'none';
    $('.polo_manches_longues input[name="checkboxParts"]').change(function (e) {


        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {
            case "baseColor":

                baseTab.style.display = 'inherit';
                couturesPTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;

            case "cordonsColor":

                baseTab.style.display = 'none';
                couturesPTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'none';
                cordonsTab.style.display = 'inherit';
                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "couturesColor":
                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'none';
                couturesPTab.style.display = 'inherit';
                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "InterieurCapucheColor":

                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'inherit';
                couturesPTab.style.display = 'none';
                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "ElastiqueTaillesColor":

                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'none';
                couturesPTab.style.display = 'none';
                ElastiqueTaillesTab.style.display = 'inherit';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "ElastiquePoignetsColor":

                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                InterieurCapucheTab.style.display = 'none';
                couturesPTab.style.display = 'none';
                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'inherit';
                break;
        }
        $('#nested').foldable('refresh')
    });
    $(".modele_radio input").change(function (){
        $("#InterieurCapucheColor").parent().css("display","block");
        $("#cordonsColor").parent().css("display","block");
        $("#couturesColor").parent().css("display","block");
        $("#ElastiqueTaillesColor").parent().css("display","block");
        $("#ElastiquePoignetsColor").parent().css("display","block");
        $("#poitrine").parent().css("display","block");
});

    /*$("#colRugby").change(function () {
        $("#InterieurCapucheColor").parent().css("display","none");
        $("#cordonsColor").parent().css("display","none");
        $("#couturesColor").parent().css("display","none");
        $("#ElastiqueTaillesColor").parent().css("display","none");
        $("#ElastiquePoignetsColor").parent().css("display","none");

    });*/
    $("#zipper").change(function () {
        $("#poitrine").parent().css("display","none");


    });


});

