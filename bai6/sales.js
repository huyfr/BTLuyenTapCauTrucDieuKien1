function bonus() {
    let input = parseInt(document.getElementById("inputMoney").value);
    let bonus;

    if (input<0)
    {
        alert("Vui long nhap lai");
    }
    else
    {
        if (input<100000000)
        {
            bonus = input*0.05;
            document.getElementById("result").innerHTML = "Hoa hong nhan duoc la " + bonus;
        }
        else
        {
            if (input<=300000000)
            {
                bonus = input*0.1;
                document.getElementById("result").innerHTML = "Hoa hong nhan duoc la " + bonus;
            }
            else
            {
                if (input>300000000)
                {
                    bonus = input*0.2;
                    document.getElementById("result").innerHTML = "Hoa hong nhan duoc la " + bonus;
                }
            }
        }
    }
}