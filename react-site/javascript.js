    var theater = theaterJS();
    theater
        .addActor('role', {speed: 0.6, accuracy: 0.8})
        .addScene('role:DATA', 700)
        .addScene('role: WEB', 400)
        .addScene('role: SOFTWARE', 400)
        .addScene('role:ANALYTICS')
        .addScene('role:AI', 600)
        .addScene('role:NLP', 500)
        .addScene(theater.replay.bind(theater));

    // window.sr = ScrollReveal({reset: true});
    // sr.reveal('#intro', {duration: 500});
    // sr.reveal('#education', {duration: 500});
    // sr.reveal('#experience', {duration: 1000});
    // sr.reveal('#projects', {duration: 500});
    // //sr.reveal('#interests', {duration: 500});
    // sr.reveal('#image-thumb-1', {duration: 100});
    // sr.reveal('#image-thumb-2', {duration: 300});
    // sr.reveal('#image-thumb-3', {duration: 500});
    // sr.reveal('#image-thumb-4', {duration: 700});
