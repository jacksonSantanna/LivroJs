
function showHello() {
    var name = document.getElementById("name").value;
    document.getElementById("answer").textContent = "Hello " + name;

}

var show = document.getElementById("show");
show.addEventListener("click", showHello);