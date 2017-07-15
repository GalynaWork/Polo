$(document).ready(function () {

    $('#nested').foldable({
        accordion: true
    });

    var coeur_subTab = document.getElementById('coeur_sub');
    var anti_coeur_subTab = document.getElementById('anti-coeur_sub');
    var manche_gauche_subTab = document.getElementById('manche_gauche_sub');
    var mancheDroite_subTab = document.getElementById('mancheDroite_sub');
    var dos_subTab = document.getElementById('dos_sub');


    coeur_subTab.style.display = 'none';
    anti_coeur_subTab.style.display = 'none';
    manche_gauche_subTab.style.display = 'none';
    mancheDroite_subTab.style.display = 'none';
    dos_subTab.style.display = 'none';


    $('.polo_manches_longues input[name="marquageParts"]').click(function (e) {

        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {

            case "coeur":

                coeur_subTab.style.display = 'inherit';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    coeur_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "anti-coeur":

                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'inherit';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    anti_coeur_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "mancheGauche":

                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'inherit';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    manche_gauche_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "mancheDroite":

                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'inherit';
                dos_subTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    mancheDroite_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "dos":

                coeur_subTab.style.display = 'none';
                anti_coeur_subTab.style.display = 'none';
                manche_gauche_subTab.style.display = 'none';
                mancheDroite_subTab.style.display = 'none';
                dos_subTab.style.display = 'inherit';
                if ($(this).hasClass("click")) {
                    dos_subTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;

        }
        $('#nested').foldable('refresh')
    });



});