// alert("")

document.querySelector("button").addEventListener("click", gradeQuiz);

shufflechoices();
let q2 = document.querySelector("#q2")
// this is to shuffle the options.
function shufflechoices() {
    let q1Choices = ["font-color", "color", "text-color", "color-text"];

    for (let i of q1Choices) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(radioElement);
        labelElement.prepend(" ");
        // label element is parent and radio is child

        document.querySelector("#q1ChoicesDiv").append(labelElement);
        console.log(labelElement);
    }


}

function gradeQuiz() {
    // alert("grading quiz");
    let q1Answer = document.querySelector("input[name=q1]:checked").value; // only for radio
    alert(q1Answer);
    let q2Answer = document.querySelector("#q2").value;
    alert(q2Answer)
    let q3Answer = document.querySelector("#q3").value;
    alert(q3Answer)
    let q4Answer = document.querySelector("#q4").value;
    alert(q4Answer)

    let q5Answer = false;
    if (document.querySelector("#q5a").checked && document.querySelector("#q5c").checked) {
        q5Answer = true;
        document
    }

    if(q2.value===8){
        q2.style.fontColor
    }



}
