"use-strict";
function drag(e) {
    element = e.target.id
}
function allowDrop(e) {
    e.preventDefault();
}
function drop(e) {
    e.target.appendChild(document.getElementById(element))
}


// on drag start - to card - every card call drag()
// on drag over - to coloumn - calls allowDrop()
// on drop - to coloumn - calls drop()
