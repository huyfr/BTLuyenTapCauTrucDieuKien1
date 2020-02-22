function numberCheck() {
    let numberInput = document.getElementById("numberInput").value;

    if (numberInput > 0)
    {
        document.getElementById("result").innerHTML = "So "+ numberInput + " lon hon 0";
    }
    else
    {
        document.getElementById("result").innerHTML = "So "+ numberInput + " nho hon 0";
    }
}