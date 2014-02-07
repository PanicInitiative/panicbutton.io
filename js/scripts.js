$(document).ready(function(){
    $('.btn.btn-dark, .up a, .btn-n, .nav li a, .help-header .arrows li a').click(function(){
        var $href = $(this).attr('href');
        var offset = $(this).attr('data-offset');
        var $anchor = $($href).offset();
		
        if($anchor){
            if(offset){
                $('body, html').animate({ scrollTop: $anchor.top-offset});
                return false;
            }else{
                $('body, html').animate({ scrollTop: $anchor.top});
                return false;
            }
        }
        else{
            if($(this).hasClass('restart') || $(this).hasClass('sub') )
                return true;
            else
                $('body, html').animate({ scrollTop: 0 });
                return true;
        }
    })

    var step_1 =
        '<div class="step-1" id="first">' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
            '<div class="text">' +
            '<p>What type of phone do you have?</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_1">Basic Phone</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_2">Smart Phone - Android</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_3">Smart Phone - iphone</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<p>Question 1 / 5</p>' +
            '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
            '<p><img src="images/step-1.png"></p>' +
            '</div>' +
            '</div>';

    var step_2 =
        '<div class="step-2">' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
            '<div class="text">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_1">Yes</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_2">No</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_3">I do not know</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-12 col-md-12 col-sm-12">' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Question 2 / 5</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
            '<p><img src="images/step-2.png"></p>' +
            '</div>' +
            '</div>';

    var step_3 =
        '<div class="step-3">' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
            '<div class="text">' +
            '<p>Do you have three trusted contacts in your network who can respond fast in an emergency?</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_1">Yes</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_2">No</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_3">I do not know</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-12 col-md-12 col-sm-12">' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Question 3 / 5</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
            '<p><img src="images/step-3.png"></p>' +
            '</div>' +
            '</div>';

    var step_4 =
        '<div class="step-4">' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
            '<div class="text">' +
            '<p>Which country are you based/do you work in?</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_1">Highest band of telecoms monitoring (China, Iran, Syria etc)</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-6">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_2">Second highest band</a>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">' +
            '<a class="btn btn-dark sub" role="button" data-option="sub_3">Lower band of risk</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-12 col-md-12 col-sm-12">' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Question 4 / 5</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
            '<p><img src="images/step-4.png"></p>' +
            '</div>' +
            '</div>';

    var step_5 =
        '<div class="step-5">' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
            '<div class="text">' +
            '<p>Panic Button is a useful tool to alert your network quickly and discretely in an emergency. It is not a fail-safe security tool!</p>' +
            '<a class="col-xs-12 link" role="button">Read more about good practices</a>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
            '<div class="row">' +
            '<div class="col-lg-12 col-md-12 col-sm-12">' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 5 / 5</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
            '<p><img src="images/step-5.png"></p>' +
            '</div>' +
            '</div>';

    var prev_content_1;
    var prev_content_2;
    var prev_content_3;
    var prev_content_4;
    var subClick = function(){
        $('.form .sub').bind('click', function(){
            var step = $(this).parent().parent().parent().parent().attr('class');
            var sub_index = $(this).attr('data-option');
            switch (step){
                case "step-1":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                            '<div class="text border">' +
                                                '<p>Sorry, you must have an Android phone to use Panic Button.</p>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                            '<div class="row">' +
                                                '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                                    '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                            '<div class="row">' +
                                                '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                                    '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                                    '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 1 / 5</p>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                            '<p><img src="images/step-1.png"></p>' +
                                        '</div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text">' +
                                        '<p>You should be able to use Panic Button on Android versions___-___</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 1 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-1.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Android is an operating system designed for touchscreen mobile devices such as smartphones and tablet computers. You must have an Android phone to use Panic Button.</p>' +
                                        '<a class="option" role="button">Tell us what model of phone you have. This will help us to prioritize future versions</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 1 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-1.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_1;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                    backClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_2;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            prev_content_1 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-2":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text">' +
                                        '<p>Only use Panic Button if you have independent access to your phone. This prevents false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 2 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-2.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Only use Panic Button if you have independent access to your phone. This prevents false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 2 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-2.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Independent access means that only you own and access your phone - if you share your phone with a partner or family members it may not be a good idea to use Panic Button. This is to prevent false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 2 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-2.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_2;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                    backClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_3;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            prev_content_2 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-3":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text">' +
                                        '<p>Panic Button aims to send your emergency message/s to your trusted contacts when you need help. However, the app is not able to guarantee a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 3 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-3.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Panic Button aims to send your emergency message/s to your trusted contacts when you need help. However, the app is not able to guarantee a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 3 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-3.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Your trusted contacts should be people that you know personally and should be prepared and able to respond fast when you need them. Panic Button aims to send your emergency message/s but it will not ensure a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 3 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-3.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_3;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                    backClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_4;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            prev_content_3 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-4":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-4">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Your country is known to practise mass telecommunications monitoring and interception. If your profession makes you a target of this, then you should think seriously about whether using Panic Button will reveal information about your location and trusted contacts that could put you or them at increased risk.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 4 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-4.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-4">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text border">' +
                                        '<p>Needs text.</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 4 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-4.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-4">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12 text-content">' +
                                        '<div class="text">' +
                                        '<p>Needs text.</p>' +
                                        '<a class="option" role="button">Needs text.</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-4 col-md-4 col-sm-6 offset">' +
                                        '<a class="btn btn-dark sub" role="button">Continue</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-2xs-12 col-3xs-12 col-4xs-12">' +
                                        '<div class="row">' +
                                        '<div class="col-lg-12 col-md-12 col-sm-12">' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12">Recommendation 4 / 5</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-6 col-md-6 col-sm-6 col-xs-6 offset">' +
                                        '<p><img src="images/step-4.png"></p>' +
                                        '</div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_4;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                    backClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_5;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            prev_content_4 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                        }
                    break;
                case "step-5":
                    backClick();
                    break;
            }
        })
    }
    subClick();

   /* 
   Removed as it was causing mobile navigation issues
   $('.nav li a').click(function(){
        if( $(window).width() < 751 )
			console.log("HERE");
            $('.navbar-toggle').trigger('click');
    })*/

//    $('.btn.btn-dark.restart').click(function(){
//        sub_content = step_1;
//        if($('.form').children().attr('id') == 'first'){
//            return true;
//        }else{
//            $('.form').animate({
//                left: "100%"
//            }, 500, function(){
//                $('.form').html(sub_content);
//                $('.form').css('left', '-100%');
//                subClick();
//            }).animate({
//                    left: 0
//                }, 500);
//        }
//    })

    var backClick = function(){
        $('.form .sub-back').click(function(){
            var back = $(this).parent().parent().parent().parent().attr('class');
            var sub_content = '';

            switch (back){
                case "step-2":
                    sub_content = prev_content_1;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function(){
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
                    }, 500, function(){
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
                    }, 500, function(){
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
                    }, 500, function(){
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

