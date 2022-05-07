var tdList = document.querySelectorAll('li');
for (i = 0; i < tdList.length; i++) {
    var item = tdList[i];
    item.addEventListener('click', showMsg);
}

function changeColor() {
    document.getElementById("p1").style.color = 'red';
}

function replaceDate() {
    nowDate = new Date();
    var char = "-";
    var day = nowDate.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = nowDate.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = nowDate.getFullYear();
    document.getElementById("Date").innerHTML = year + char + month + char + day;
}

function setActive() {
    document.getElementById("p3").classList.add("fn-active");
}

function delChildren() {
    var parent = document.getElementById("ul");
    var child = document.getElementById("p8");
    parent.removeChild(child);
}

function Taobao() {
    window.open("http://www.taobao.com");
}

function newChildren() {
    var para = document.createElement("li");
    var node = document.createTextNode("p9");
    para.appendChild(node);
    var element = document.getElementById("ul");
    element.appendChild(para);
}

function showMsg(e) {
    var item = e.target;
    alert(item.innerHTML);
}

function setWidth() {
    var div = document.getElementById("Old");
    div.style.width = screen.availWidth + "px";
}