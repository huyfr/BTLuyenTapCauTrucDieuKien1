function checkEven() {
    let numberA, numberB;
    numberA = document.getElementById("numberA").value;
    numberB = document.getElementById("numberB").value;
    if (numberA % numberB == 0)
    {
        document.getElementById("result").innerHTML = "A la so chan";
    }
    else
    {
        document.getElementById("result").innerHTML = "A khong phai la so chan";
    }
}