
function tipcal() {
    debugger
    var tipAmount = document.getElementById("tipamt").value;
    var tipService = document.getElementById("tipser").value;
    var noOfPerson = document.getElementById("Nple").value;

    if (tipAmount === "" || tipService == 0) {
        alert("Please enter any value");
        return;
    }
    else {
        document.getElementById("tta").style.display = "inline";
    }
    if (noOfPerson === "" || noOfPerson <= 1) {
        Nple = 1;
        document.getElementById("tpp").style.display = "none";
    }
    else {
        document.getElementById("tpp").style.display = "inline";
    }
    var total = (tipAmount * tipService);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("amt").style.display = "inline";
    document.getElementById("tta").innerHTML = total;
    document.getElementById("tpp").innerHTML = total/noOfPerson;
}

document.getElementById("tta").style.display = "none";
document.getElementById("tpp").style.display = "none";

document.getElementById("calbut").onclick = function () {
    tipcal();
};