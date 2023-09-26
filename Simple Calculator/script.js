var buttons = document.querySelectorAll("button");
var input = document.getElementById("input");


buttons.forEach(function(button) {
    button.addEventListener("click",function() {
        var buttonText = button.textContent.trim();
        if(buttonText == "=") {
            input.value = eval(input.value);
        }
        else if(buttonText == 'AC') {
            input.value = '';
        }
        else if(buttonText == 'Del') {
            var str = input.value;
            input.value = str.slice(0,-1);
        }
        else {
            var number = parseInt(buttonText);
            input.value += buttonText;
        }
    });
});