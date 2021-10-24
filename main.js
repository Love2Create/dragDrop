// elements
var selectedEl;
var offsetx;
var offsety
// var mouseDown = false;

//add eventLiistener
var moveEvent = function(event){

    selectedEl.style.left = event.clientX - offsetx +'px';
    selectedEl.style.top = event.clientY - offsety +'px';
    document.addEventListener('mouseup',function(){
        document.removeEventListener('mousemove', moveEvent);
    })
}


var divs = document.querySelectorAll('.draggable');
// console.log(divs);

for (var i=0; i<divs.length; i++){
    // console.log(divs[div]);
    divs[i].addEventListener('mousedown',function(e){
        selectedEl = e.currentTarget;

        // calculate offset - x
        elx = parseInt(selectedEl.getBoundingClientRect().left);
        mousex = parseInt(e.clientX);
        offsetx = mousex - elx;
        console.log("x:", elx, mousex, offsetx);

        // calculate offset - y
        ely = parseInt(selectedEl.getBoundingClientRect().top);
        mousey = parseInt(e.clientY);
        offsety = mousey - ely;
        console.log('y:', ely, mousey, offsety);

        selectedEl.style.cursor = 'move';

        document.addEventListener('mousemove',moveEvent);
   });
}


// add eventListener 

