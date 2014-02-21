$(document).ready(function() {
    $('.is #step-1').show()

    $('div.is-cont .sub').bind('click', function() {
        var step = $(this).parent().parent().parent().attr('id');
        var answer = $(this).attr('data-option');
        if (answer == "continue") {
            sub_content = step_2;
            $('.form').animate({
                left: "-100%"
            }, 500, function() {
                prev_content_1 = $('.form').html();
                $('.form').html(sub_content);
                $('.form').css('left', '100%');
                subClick();
                backClick();
            }).animate({
                left: 0
            }, 500);
        } else if (answer == "back") {
            $('.form').animate({
                left: "100%"
            }, 500, function() {
                $('.form').html(sub_content);
                $('.form').css('left', '-100%');
                subClick();
                backClick();
            }).animate({
                left: 0
            }, 500);
        } else { // click on answer
            $('div.is-cont #' + step).animate({
                left: "-100%"
            }, 500, function() {
                $('div.is-cont #' + step).hide()
                $('div.is-cont #' + step + '-' + answer).show();
                $('div.is-cont #' + step + '-' + answer).css('left', '100%');
            }).animate({
                left: 0
            }, 500);
        }
    })

    var backClick = function() {
        $('.form .sub-back').click(function() {
            var back = $(this).parent().parent().parent().parent().attr('class');
            var sub_content = '';

            switch (back) {
                case "step-2":
                    sub_content = prev_content_1;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function() {
                        prev_content_1 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                        left: 0
                    }, 500);
                    break;

                case "step-3":
                    sub_content = prev_content_2;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function() {
                        prev_content_2 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                        left: 0
                    }, 500);
                    break;

                case "step-4":
                    sub_content = prev_content_3;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function() {
                        prev_content_3 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                        left: 0
                    }, 500);
                    break;

                case "step-5":
                    sub_content = prev_content_4;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function() {
                        prev_content_4 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                        left: 0
                    }, 500);
                    break;
            }
        })
    }
})
