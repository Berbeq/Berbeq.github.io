let num = 0

function addera() {
    let div = document.createElement("div")
    div.classList.add("smaskigt")
    div.classList.add("n" + String(num))
    let p = document.createElement("p")
    let kmtr = document.getElementById("kmtr").value;
    let text1 = document.createTextNode(kmtr)
    p.appendChild(text1)
    let button = document.createElement("button")
    let text2 = document.createTextNode("Radera")
    button.appendChild(text2)
    button.onclick = function() {
        button.parentElement.remove();
        num = num - 1
    }
    div.appendChild(p)
    div.appendChild(button)
    let element = document.getElementById("container")
    element.appendChild(div)
    num = num + 1
    document.getElementById("kmtr").value = ""
}

