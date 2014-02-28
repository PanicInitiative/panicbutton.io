$(document).ready(function() {
    $('.is #step-1').show()

    $('div.is-cont .sub').bind('click', function() {
        var current = $(this).parents('.slider');
        var step = current.attr('id');
        var answer = $(this).attr('data-option');
        current.animate({
            left: "-100%"
        }, 500, function() {
            current.hide()
            $('#' + step + '-' + answer).show();
            $('#' + step + '-' + answer).css('left', '100%').animate({
                left: 0
            }, 500);
        });
    })

    $('div.is-cont .cont').bind('click', function() {
        var current = $(this).parents('.slider');
        current.animate({
            left: "-100%"
        }, 500, function() {
            current.hide()
            current.nextAll('.question').first().show();
            current.nextAll('.question').first().css('left', '100%').animate({
                left: 0
            }, 500);
        })
    })

    $('div.is-cont .back').bind('click', function() {
        var current = $(this).parents('.slider');
        var step = current.attr('id');
        if (step !== "step-1") {
            current.animate({
                left: "100%"
            }, 500, function() {
                current.hide();
                current.prevAll('.question').first().show();
                current.prevAll('.question').first().css('left', '-100%').animate({
                    left: 0
                }, 500);
            })
        }
    })

    var showCaptions = function () {
      var caption;
      $('img').each(function () {
        caption = $(this).attr('alt');
        if (caption !== '')
          // use .before to insert the caption before the image
          $(this).wrap('<div class="about-illus img-responsive article-img">');
          $(this).parent().after('<div class="clearfix"></div><div class="img-fig">' + caption + '</div>');
      });
    }

    showCaptions();

})
