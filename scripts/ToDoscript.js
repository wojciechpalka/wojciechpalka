var $menuLinks = document.querySelectorAll(".menu-item > a");

function getInfoPanelFromElement(element) {
    var $infoPanel = element.parentNode.querySelector(".menu-item-info");
    return $infoPanel;
}

function displayInfoPanelForElement(event) {
    var $anchor = event.target;
    getInfoPanelFromElement($anchor).classList.add("is-visible");
}

function hideInfoPanelForElement(event) {
    var $anchor = event.target;
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('main ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
    }
}, false);



function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Please write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
