let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);

    let resultText = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
        resultText.textContent = "Please Enter Valid Number instead of Text";
        resultText.style.color = "red";
        return;
    }

    let largest = Math.max(n1, n2, n3);
    resultText.textContent = "The largest number is " + largest;
    resultText.style.color = "0ef";
    resultText.style.fontSize = "28px";
    resultText.style.backgroundColor = "transparent";
    resultText.style.margin = "20px";
45
});
