
function textChange() {
	
	document.getElementById('header').innerHTML="Welcome to my website.";
}
function showDate() {
	document.getElementById('date_show').innerHTML= Date();
}
// openFullscreen,closeFullscreen start
/* Get the element you want displayed in fullscreen */ 
var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}
// openFullscreen,closeFullscreen end
function upperCase() {
	
	const x = document.getElementById('f_name');
	x.value = x.value.toUpperCase();
}
function lowerCase() {
	
	const x = document.getElementById('l_name');
	x.value = x.value.toLowerCase();
}
function selectMycare() {
	var x = document.getElementById('mySelect').value;
	document.getElementById('select').innerHTML = "Your selected car: " + x;
}
// mouse_Down start
function mouseDown(m_d_change) {
	m_d_change.style.backgroundColor= "red";
	m_d_change.innerHTML= "Relase Me";
}
// mouse_Down end

// mouse_Up start
function mouseUp(m_u_change) {
	m_u_change.style.backgroundColor= "black";
	m_u_change.style.color= "white";
	m_u_change.innerHTML= "Thank You";
}
// mouse_Up end

// mouse_over start
function mouseOver(mouse_over) {
	mouse_over.innerHTML= "Thank You";
}
// mouse_over end
// mouse_out start
function mouseOut(mouse_out) {
	mouse_out.innerHTML= "Mouse Hover Me";
}
// mouse_out end

// animation start
var x=document.getElementById('myDIV');
function myFunction() {
	x.style.animation="mymove 4s 2";
}
// animationStart
x.addEventListener("animationstart", myStartFunction);
function myStartFunction() {
    this.innerHTML = "animationstart event.";
    this.style.backgroundColor = "pink";
}
// animationiteration
x.addEventListener("animationiteration",myRepeatFunction);
function myRepeatFunction() {
	this.innerHTML = "animationiteration event.";
    this.style.backgroundColor = "lightblue";
}
// animationend
x.addEventListener("animationend", myEndFunction);
function myEndFunction() {
  this.innerHTML = "animationend event occured.";
  this.style.backgroundColor = "orange";
}
// animation end
// onbeforeprint start
function onbeforeprintFunction() {
	alert("You are about to print this document!");
}
// onbeforeprint end
// oncopy start
function onCopy() {
	document.getElementById('copy_select').innerHTML = "You copy the text";
}
// oncopy end
// oncopy start
function onCut() {
	document.getElementById('cut_select').innerHTML = "You cut the text";
}
// oncopy end
// ondblclick start
function onClick() {
	document.getElementById('dblclick').innerHTML = "Hello Friends";
}
// ondblclick end
// ondrop,ondragover start
/*events fired on the drag target*/
function dragStart(event) {
	event.dataTransfer.setData("text",event.target.id);
}
function dragging(event) {
	document.getElementById('demo').innerHTML = "The p element is being dragged";
}
/*events fired on the drop target*/
function allowDrop(event) {
	event.preventDefault();
}
function drop(event) {
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
	document.getElementById('demo').innerHTML = "The p element was dropped";
}
// ondrop,ondragover end
// onerror start
/*function onError() {
	document.getElementById('on').innerHTML = "This img could not be load";
}*/
// onerror end
// onfocus start
function onFocus(on_focus) {
	on_focus.style.background = "green";
	on_focus.style.outline = "none";
	on_focus.style.border = "2px dotted black";
}
// onfocus end
// onfocusout start
function onFocusOut() {
	var x = document.getElementById('fname');
	x.value = x.value.toUpperCase();
}
// onfocusout end
// oninput start
function onInput() {
	var x = document.getElementById('myInput').value;
	document.getElementById('oninput_P').innerHTML = "your text:" + x;
}
// oninput end


// mouse_move start
var pointer = document.getElementById('cursor');
document.addEventListener('mousemove',

	function(e) {
	var x = e.clientX;
	var y = e.clientY;

	pointer.style.left = x+"px";
	pointer.style.top = y+"px";
})
// mouse_move end
// onmouseenter,onmouseleave start
function bigImg(x) {
  x.style.color = "red";
}

function normalImg(x) {
  x.style.color = "black";
}
// onmouseenter,onmouseleave end