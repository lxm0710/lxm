var btns = document.querySelectorAll('#btn');
btns.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var items = document.querySelectorAll('#item');
        items.forEach((ele, index) => {
            ele.style.display = "none"
        })
        items[index].style.display = "block"
    })
})