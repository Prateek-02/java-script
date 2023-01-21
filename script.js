let namasteBtn =  document.querySelector("button");
namasteBtn.addEventListener("click",inputMsg);

function inputMsg(){
    // alert("Namaste world!")
    let name = prompt("Enter name of student");
    namasteBtn.textContent = "Roll no. 1: " + name;
}