function showTime(name) {
    document.getElementById(name).innerHTML = Date();
}


let mouseX = 0;
let mouseY = 0;
function trackMouse() {
    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX; //+ e.clientX;
        mouseY = e.pageY; //+ e.clientY;
      });
    
    document.addEventListener('wheel', function(e) {
        mouseX = e.pageX; //+ e.clientX;
        mouseY = e.pageY; //+ e.clientY;
      });
}

function initSkull(name) {
    // make skull 0
    let skull = document.getElementById(name);
    skull.style.left = '0px';
    skull.style.top =  '0px';
    // start mouse loop
    trackMouse();
    // start moving skull
    window.requestAnimationFrame(follow);
}

function follow() {
    let name = 'skull'
    let body = document.querySelector('body');
    let circle = document.getElementById(name);
    let leftchange = (mouseX - parseFloat(circle.style.left)) / 50;
    let topchange = (mouseY - parseFloat(circle.style.top)) / 50;
    let newleft = (parseFloat(circle.style.left) + leftchange);
    let newbottom = (parseFloat(circle.style.top) + topchange);
    circle.style.left = newleft + 'px';
    circle.style.top =  newbottom + 'px';
    window.requestAnimationFrame(follow);
}