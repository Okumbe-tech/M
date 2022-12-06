    
// let score = parseInt(prompt("input score between 0 and 100"));
// let grade=score>79?'A':score>60 &&score<79?'B':score<59 && score>50?'C':score<49 && score>40?'D-':'E'

// let holder=document.getElementById('res')
// let str=` Your score is ${score}${grade}`
// holder.innerHTML=str
const getResult = () => {
    let Chemistry = document.getElementById('Chemistry').value;
    let maths = document.getElementById('maths').value;
    let Biology = document.getElementById('Biology').value;
    let Physics = document.getElementById('Physics').value;
    let English = document.getElementById('English').value;

    if (document.getElementsByTagName('input').value == "") {
        alert("enter marks")
    }
    let total = parseFloat(Chemistry) + parseFloat(maths) + parseFloat(Biology)+parseFloat(Physics)+parseFloat(English);
    let percentage = (total* 100)/500;
    if (percentage >= 79){
        document.getElementById("grade").innerHTML = "A";
    }
        else if (percentage >= 60 && percentage <=78) {
            document.getElementById("grade").innerHTML = "B";
         }

            else if (percentage >= 49 && percentage <=59){       document.getElementById("grade").innerHTML = "C"
            }

                else if (percentage>=40 && percentage <=49){
                    
                    document.getElementById("grade").innerHTML = "D";

                }
                else (percentage >=40);{
                    document.getElementById("grade").innerHTML = "E";}
            
                document.getElementById('percentage').innerHTML = percentage;
                document.getElementById('total').innerHTML = total;
                }
getResult()