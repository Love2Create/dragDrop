// elements
var selectedEl;
// var mouseDown = false;

//add eventLiistener
var moveEvent = function(event){
    selectedEl.style.left = event.clientX+'px';
    selectedEl.style.top = event.clientY+'px';
    document.addEventListener('mouseup',function(){
        document.removeEventListener('mousemove', moveEvent);
    })
}


var divs = document.querySelectorAll('div');
console.log(divs);

for (var i=0; i<divs.length;i++){
    // console.log(divs[div]);
    divs[i].addEventListener('mousedown',function(e){
        selectedEl = e.target;
        document.addEventListener('mousemove',moveEvent);
   });
}


// add eventListener 

