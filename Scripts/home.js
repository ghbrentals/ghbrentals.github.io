$(function () {
    $('#currentYear').text(new Date().getFullYear());

    $('.modal-photos img')
        .css('cursor', 'pointer')
        .hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        })
        .click(function (e) {
            var imgUrl = $(this).attr('src');
            $('#home-photo').attr('src', imgUrl).addClass('img-thumbnail');
            $('#btnDownload').data('src', imgUrl);
            $('#myModal').modal('show');
        });

    $('#btnDownload').click(function () {
        var src = $(this).data('src');
        if (src == '')
            return false;
        window.open(src);
    });
});