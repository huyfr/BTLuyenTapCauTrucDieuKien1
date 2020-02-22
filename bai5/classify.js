function classify() {
    let first, mid, final, result;

    first = parseInt(document.getElementById("testMark").value);
    mid = parseInt(document.getElementById("midTerm").value);
    final = parseInt(document.getElementById("final").value);

    result = (first + mid + final)/3;

    if (result<0)
    {
        alert("Vui long nhap lai diem")
    }
    else
    {
        if (result>=9)
            document.getElementById("result").innerHTML = "Hang A";
        else
        {
            if (result>=7)
                document.getElementById("result").innerHTML = "Hang B";
            else
            {
                if (result>=5)
                    document.getElementById("result").innerHTML = "Hang C";
                else
                    document.getElementById("result").innerHTML = "Hang D";
            }
        }
    }
}