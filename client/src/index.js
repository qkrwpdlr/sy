const ele = document.getElementsByClassName("main__root_lottie")[0]
lottie.loadAnimation({
    container: ele, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/data.json' // the path to the animation json
});