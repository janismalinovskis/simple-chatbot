const input = document.getElementById("input");
const button = document.getElementById("button");
const answerContainer = document.getElementById("answer-container");

button.addEventListener('click', function(){
    cipars=Number(input.value);
    if(input.value.length==0||Math.floor(cipars) == cipars){
        alert("nederīgs vārds");
    
    }else{
    
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML ="Jūsu vārds ir " + input.value ;

    answerContainer.appendChild(paragraph);
    input.value = "";
    }
   
    })

    

