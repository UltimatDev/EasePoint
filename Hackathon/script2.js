
var data=[];
console.log(data);




    let currentQuestionIndex = 0;

    const questions = [
        {
            question: "1) What do you identify with the most?",
            options: ["Someone who finds it difficult to maintain focus and concentration for extended periods", "Someone who faces difficulty in distinguishing between urgent and important tasks"],
            
        },
        {
            question:"",
            options: ["",""],
        },
        {
            question:"",
            options: ["",""],
        },
        
    ];
    function loadQuestion(index) {
        const questionElement = document.querySelector(".qn");
        questionElement.querySelector("h1").textContent = questions[index].question;
        
        const optionsElement = questionElement.querySelector("#options");
        optionsElement.innerHTML = "";
        questions[index].options.forEach((option, i) => {
            const optionElement = document.createElement("label");
            optionElement.className = "option";

            optionElement.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + i)}"> ${option}`;
            optionElement.style.marginBottom = "40px";
            optionsElement.appendChild(optionElement);
            
        });
    }

    loadQuestion(currentQuestionIndex);

    function submitAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!(selectedOption)){
            alert("Please select an answer.");
        }

        const selectedIndex = selectedOption.value.charCodeAt(0) - 65;
        data.push(selectedIndex);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            const mostFrequentIndex = getMostFrequentIndex(data);
            switch (mostFrequentIndex) {
                case 0:
                    alert("Pomodoro Technique might be useful for you!");
                    window.location.href="pomodoro.html"
                    break;
                case 1:
                    alert("Eisenhower Matrix can be useful for you!");
                    window.location.href = "eisenhower.html"
                    break;
                
                default:
                    alert("Some error occured.");
                    break;
           
        }
    }

        
        function getMostFrequentIndex(array) {
            const countMap = {};
            let mostFrequentIndex = null;
            let maxCount = 0;
    
            array.forEach(index => {
                countMap[index] = (countMap[index] || 0) + 1;
                if (countMap[index] > maxCount) {
                    mostFrequentIndex = index;
                    maxCount = countMap[index];
                }
            });
    
            return mostFrequentIndex;
        }




    }