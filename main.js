// elements
var selectedEl = document.querySelector('div');
// var mouseDown = false;

//add eventLiistener
var moveEvent = function(event){
    selectedEl.style.left = event.clientX+'px';
    selectedEl.style.top = event.clientY+'px';
    document.addEventListener('mouseup',function(){
        document.removeEventListener('mousemove', moveEvent);
    })
}

selectedEl.addEventListener('mousedown',function(){
     document.addEventListener('mousemove',moveEvent);
});


// add eventListener 

