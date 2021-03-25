var input1Text = null;
var input2Text = null;

document.getElementById("P1Input").addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        input1Text = document.getElementById("P1Input").innerHTML;
    }
});
document.getElementById("P2Input").addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        input2Text = document.getElementById("P2Input").innerHTML;
    }
});

function Login() {
    if(input1Text == null && input2Text == null) {
        input1Text = document.getElementById("P1Input").innerHTML;
        input2Text = document.getElementById("P2Input").innerHTML;
        if(input1Text != null && input2Text != null) {
            localStorage.setItem("player1", input1Text);
            localStorage.setItem("player2", input2Text);
            window.location = "gamePlay.html";
        }
    }else{
        localStorage.setItem("player1", input1Text);
        localStorage.setItem("player2", input2Text);
        }
    }