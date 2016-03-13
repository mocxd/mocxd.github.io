$(function() {
    var moniker = 'mocxd'; // i am internet

    // start page ui
    $( '.menu-icon' ).click(function() {
        $(this).toggleClass('clicked');
    });

    $( '.trigger' ).height($(document).height());
    // end page ui

    // class moniker throughout document
    $( '*:not(title)' ).each(function() {
        'use strict';
        if ( $(this)
            .clone()
            .children()
            .remove()
            .end()
            .text().includes(moniker) ) {
                var html = $(this).html();
                console.log('Classy Moniker in a', $(this).prop('tagName'));
                if (html === moniker) {
                    $(this).html('<span class="moniker">' + moniker + '</span>');
                } else {
                    var fragments = html.split(moniker);
                    for (let f in fragments) {
                        fragments[f] += (f == fragments.length-1) ? '' : '<span class="moniker">' + moniker + '</span>';
                    }
                    $(this).html(fragments.join(''));
                }
        }
    });

    //      .       o       +       =       *       B       O       X       @       %       &       #       /       ^       S       E
});