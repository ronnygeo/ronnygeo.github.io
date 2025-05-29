/**
 * Created by ronnygeo on 2/13/16.
 */

(function(){
    var theater = theaterJS();

    theater
        .addActor('role', {speed: 0.6, accuracy: 0.8})
        .addScene('role:AI', 600)
        .addScene('role:VISION', 500)
        .addScene('role:NLP', 500)
        .addScene('role:DATA', 700)
        .addScene('role:ANALYTICS')
        .addScene('role: WEB', 400)
        .addScene('role: SOFTWARE', 400)
        .addScene(theater.replay.bind(theater));

    window.sr = ScrollReveal({reset: true});
    sr.reveal('#intro', {duration: 500});
    sr.reveal('#education', {duration: 500});
    sr.reveal('#experience', {duration: 1000});
    sr.reveal('#projects', {duration: 500});
    sr.reveal('#image-thumb-1', {duration: 100});
    sr.reveal('#image-thumb-2', {duration: 300});
    sr.reveal('#image-thumb-3', {duration: 500});
    sr.reveal('#image-thumb-4', {duration: 700});
})();

$(document).foundation();

$('#offCanvasLeft').click(function(){
    $('#offCanvasLeft').removeClass('is-open');
    $('#offCanvasLeft').attr('aria-hidden',true);
    $('#offCanvasWrapper').removeClass('is-off-canvas-open').removeClass('is-open-left');
});

$('a').smoothScroll();
