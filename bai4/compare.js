function compare(type) {
    let first, second, third;

    first = document.getElementById("firstNumber").value;
    second = document.getElementById("secondNumber").value;
    third = document.getElementById("thirdNumber").value;

    if (type === 1) {

        if (first > second && first > third)
        {
            document.getElementById('result').innerHTML = "So lon nhat la so " + first;
        }
        else
        {
            if (second > first && second > third)
            {
                document.getElementById('result').innerHTML = "So lon nhat la so " + second;
            }
            else
            {
                document.getElementById('result').innerHTML = "So lon nhat la so " + third;
            }
        }
    }
    else {
        document.getElementById("result").innerHTML = "";
        document.getElementById("firstNumber").value = "";
        document.getElementById("secondNumber").value = "";
        document.getElementById("thirdNumber").value = "";
    }
}
