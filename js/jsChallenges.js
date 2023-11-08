// function challenge1(){
//     if (document.getElementById("subscribe").checked == true){
//         document.getElementById("emailDiv").style.display = "block";
//     } else{
//         document.getElementById("emailDiv").style.display = "none";
//     }
// }

// function challenge2(){
//     let bill = document.getElementById("bill");
//     let home = document.getElementById("home");
//     if (document.getElementById("sameAddress").checked == true){
//         home.value = bill.value;
//         home.disabled = true;
//     } else{
//         home.value = " ";
//         home.disabled = false;
//     }
// }

document
.querySelector("#subscribe")
.addEventListener("click", function() {
    if (this.checked){
        document.querySelector("#emailDiv").style.display = "block";
    } else{
        document.getElementById("emailDiv").style.display = "none";
    }
});


document
.querySelector("#sameAddress")
.addEventListener("click", function() {
    let bill = document.getElementById("bill");
    let home = document.getElementById("home");
    if (this.checked){
        home.value = bill.value;
        home.disabled = true;
    } else{
        home.value = " ";
        home.disabled = false;
    }
});