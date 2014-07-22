// alert("js file linked");

var hideNavElement = function () {
    var ul = document.getElementById('mainNav');
    var li = ul.getElementsByTagName('li');
    console.log(li.length); // make sure you get length
    var length = (li.length);
    var n = prompt("What num to last should I remove? ie: 2nd to last removes At");
    var i = length - n; // subtract n from length to get second to last 
    li[i].style.display = 'none'; // hide second to last nav item
};

hideNavElement();