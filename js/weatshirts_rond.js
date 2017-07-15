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


    var manchesTab = document.getElementById('manchesButtons');
    var baseTab = document.getElementById('baseButtons');
    var ElastiqueTaillesTab = document.getElementById('ElastiqueTaillesButtons');
    var ElastiquePoignetsTab = document.getElementById('ElastiquePoignetsButtons');
    manchesTab.style.display = 'none';
    baseTab.style.display = 'none';
    ElastiqueTaillesTab.style.display = 'none';
    ElastiquePoignetsTab.style.display = 'none';
    $('.polo_manches_longues input[name="checkboxParts"]').change(function (e) {


        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {
            case "baseColor":

                baseTab.style.display = 'inherit';

                manchesTab.style.display = 'none';

                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "manchesColor":

                baseTab.style.display = 'none';

                manchesTab.style.display = 'inherit';

                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'none';
                break;


            case "ElastiqueTaillesColor":

                baseTab.style.display = 'none';

                manchesTab.style.display = 'none';

                ElastiqueTaillesTab.style.display = 'inherit';
                ElastiquePoignetsTab.style.display = 'none';
                break;
            case "ElastiquePoignetsColor":

                baseTab.style.display = 'none';

                manchesTab.style.display = 'none';

                ElastiqueTaillesTab.style.display = 'none';
                ElastiquePoignetsTab.style.display = 'inherit';
                break;
        }
        $('#nested').foldable('refresh')
    });
    $("#manchesColor").parent().css("display","none");
    $(".modele_radio input").change(function (){
        $("#manchesColor").parent().css("display","none");

    });

    $("#manchesBaseball").change(function () {
        $("#manchesColor").parent().css("display","block");


    });
   /* $("#triangleCol").change(function () {
       // $("#ElastiqueTaillesColor").parent().css("display","none");
       // $("#ElastiquePoignetsColor").parent().css("display","none");
       // $("#manchesColor").parent().css("display","none");
        if ( $("#triangleCol").hasClass("add")  ) {
            $("#ElastiqueTaillesColor").parent().css("display","block");
            $("#ElastiquePoignetsColor").parent().css("display","block");



        }
        else {
            $("#triangleCol").addClass("add");
            $("#ElastiqueTaillesColor").parent().css("display","none");
            $("#ElastiquePoignetsColor").parent().css("display","none");
            $("#manchesColor").parent().css("display","none");

        }


    });*/


});


