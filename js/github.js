$(function () {
    $.get('https://api.github.com/users/mocxd/repos', function (d) {
        $( '.gitvis' ).text( JSON.stringify(d) );
    });
});