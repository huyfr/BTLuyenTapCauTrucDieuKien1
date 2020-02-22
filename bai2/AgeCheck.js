function ageCheck() {
    let ageInput = document.getElementById("inputAge").value;

    if (ageInput<0)
    {
        alert("Vui long nhap lai");
    }
    else
    {
        if (ageInput<16)
        {
            document.getElementById("result").innerHTML = "Chua du tuoi vao lop 10";
        }
        else
        {
            document.getElementById("result").innerHTML = "Du tuoi vao lop 10";
        }
    }
}