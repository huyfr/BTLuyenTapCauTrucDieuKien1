function calculate() {
    let input = parseInt(document.getElementById("inputMinutes").value);
    const obligate = 25;
    let fee;

    if (input<0)
    {
        alert("Vui long nhap lai")
    }
    else
    {
    if (input>200)
    {
        fee = (input-200)*200+(150*400)+(50*600)+obligate;
        document.getElementById("result").innerHTML = "So tien: " + fee + " nghin dong";
    }
    else
    {
        if (input>50)
        {
            fee = (input-50)*400+(50*600)+obligate;
            document.getElementById("result").innerHTML = "So tien: " + fee + " nghin dong";
        }
        else
        {
            fee = input*600+obligate;
            document.getElementById("result").innerHTML = "So tien: " + fee + " nghin dong";
        }
    }
    }
}