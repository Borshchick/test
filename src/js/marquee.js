'use strict'

document.addEventListener('DOMContentLoaded', function(){
    $('.marquee').marquee({
        duration: 7000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true
    });
})