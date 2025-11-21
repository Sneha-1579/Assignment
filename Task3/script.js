let images = [
    "https://fandomwire.com/wp-content/uploads/2020/07/3-13.jpg",
    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2016/09/Daniel-Radcliffe-Harry-Potter.jpg",
    "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2024/01/robert-downey-jr-iron-man.jpg?w=1200&h=675&fit=crop",
    "https://media.wired.com/photos/627b4658323db22d6ba1fed1/16:9/w_2400,h_1350,c_limit/Wanda-Dr-Strange-Multiverse-Madness-Culture.jpg",
    "https://cdn.mos.cms.futurecdn.net/PhELGAEwRJwAaroWpnQAXR.jpg"
];

let index = 0;
let slide = document.getElementById("slide");


function next() {
    index++;
    if (index >= images.length) index = 0;
    slide.src = images[index];
}


function prev() {
    index--;
    if (index < 0) index = images.length - 1;
    slide.src = images[index];
}


let auto = setInterval(next, 3000);


slide.onmouseover = function() {
    clearInterval(auto);
};

slide.onmouseout = function() {
    auto = setInterval(next, 3000);
};