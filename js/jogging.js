$(document).ready(function () {

    $('#nested').foldable({
        accordion: true
    });
    var up = 't24-button__icon fa fa-chevron-up';
    var plus = 't24-button__label t24-button--color-white fa fa-plus';
    var down = 't24-button__icon fa fa-chevron-down';
    var minus = 't24-button__label t24-button--color-white fa fa-minus';
    var pocheDroiteTab = document.getElementById('pocheDroite_sub');
    var pocheGaucheTab = document.getElementById('pocheGauche_sub');
    var cuisseDroiteTab = document.getElementById('cuisseDroite_sub');
    var cuisseGaucheTab = document.getElementById('cuisseGauche_sub');
    pocheDroiteTab.style.display = 'none';
    pocheGaucheTab.style.display = 'none';
    cuisseDroiteTab.style.display = 'none';
    cuisseGaucheTab.style.display = 'none';
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
    $(".press_butt a").on('click', function(e) {
        e.preventDefault();
        $('#nested').foldable('close', $('#nested').find('[data-foldable-role="group"]').eq($(e.target).index()))
    });

    $('.jogging_manches_longues input[name="marquageParts"]').click(function (e) {

        var partId1 = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId1) {


            case "pocheDroite":
                pocheDroiteTab.style.display = 'inherit';
                pocheGaucheTab.style.display = 'none';
                cuisseDroiteTab.style.display = 'none';
                cuisseGaucheTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    pocheDroiteTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "pocheGauche":
                pocheDroiteTab.style.display = 'none';
                pocheGaucheTab.style.display = 'inherit';
                cuisseDroiteTab.style.display = 'none';
                cuisseGaucheTab.style.display = 'none';
                if ($(this).hasClass("click")) {
                    pocheGaucheTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;

            case "cuisseDroite":
                pocheDroiteTab.style.display = 'none';
                pocheGaucheTab.style.display = 'none';
                cuisseDroiteTab.style.display = 'inherit';
                cuisseGaucheTab.style.display = 'none';

                if ($(this).hasClass("click")) {
                    cuisseDroiteTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;
            case "cuisseGauche":
                pocheDroiteTab.style.display = 'none';
                pocheGaucheTab.style.display = 'none';
                cuisseDroiteTab.style.display = 'none';
                cuisseGaucheTab.style.display = 'inherit';
                if ($(this).hasClass("click")) {
                    cuisseGaucheTab.style.display = 'none';
                    $(this).removeClass("click")


                }
                else {
                    $(this).addClass("click");
                }
                break;

        }
        $('#nested').foldable('refresh')
    });
    var cordonsTab = document.getElementById('cordonsButtons');
    var couturesPTab = document.getElementById('couturesButtons');
    var elastiquesCTab = document.getElementById('elastiquesButtons');
    var baseTab = document.getElementById('baseButtons');
    cordonsTab.style.display = 'none';
    couturesPTab.style.display = 'none';
    elastiquesCTab.style.display = 'none';
    baseTab.style.display = 'none';
    $('.polo_manches_longues input[name="checkboxParts"]').change(function (e) {


        var partId = $(this)[0].id;
        //var partValueOnOff = $(this).val();
        switch (partId) {
            case "baseColor":

                baseTab.style.display = 'inherit';
                couturesPTab.style.display = 'none';
                elastiquesCTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                break;

            case "cordonsColor":

                baseTab.style.display = 'none';
                couturesPTab.style.display = 'none';
                elastiquesCTab.style.display = 'none';
                cordonsTab.style.display = 'inherit';
                break;
            case "couturesPColor":

                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                elastiquesCTab.style.display = 'none';
                couturesPTab.style.display = 'inherit';
                break;
            case "elastiquesCColor":

                baseTab.style.display = 'none';
                cordonsTab.style.display = 'none';
                elastiquesCTab.style.display = 'inherit';
                couturesPTab.style.display = 'none';
                break;

        }
        $('#nested').foldable('refresh')
    });



});
