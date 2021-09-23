var main = document.getElementById("main");
var buttonOne = document.getElementById("button-1");
var h1 = document.getElementById("header");
var message = document.getElementById("message");



function startGame() {
    h1.textContent = "";
    message.textContent = "";
    buttonOne.style.display = "none";

    var h2 = document.createElement("h2");
    h2.textContent = "Commonly used data types DO NOT include:";
    main.appendChild(h2);

    var choice1 = document.createElement("button");
    choice1.textContent = "1. strings";
    choice1.style.display = "block";
    main.appendChild(choice1);

    var choice2 = document.createElement("button");
    choice2.textContent = "2. booleans";
    choice2.style.display = "block";
    main.appendChild(choice2);

    var choice3 = document.createElement("button");
    choice3.textContent = "3. alerts";
    choice3.style.display = "block";
    main.appendChild(choice3);

    var choice4 = document.createElement("button");
    choice4.textContent = "4. numbers";
    choice4.style.display = "block";
    main.appendChild(choice4);

    choice1.addEventListener("click", wrongAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", rightAnswer1);
    choice4.addEventListener("click", wrongAnswer);

    function rightAnswer1() {
        // score up

        h2.textContent = "";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
        choice4.style.display = "none";

        h2.textContent = "The condition in an if/else statement is enclosed within ___.";
    
        var choice5 = document.createElement("button");
        choice5.textContent = "1. quotes";
        choice5.style.display = "block";
        main.appendChild(choice5);
    
        var choice6 = document.createElement("button");
        choice6.textContent = "2. curly brackets";
        choice6.style.display = "block";
        main.appendChild(choice6);
    
        var choice7 = document.createElement("button");
        choice7.textContent = "3. parentheses";
        choice7.style.display = "block";
        main.appendChild(choice7);
    
        var choice8 = document.createElement("button");
        choice8.textContent = "4. square brackets";
        choice8.style.display = "block";
        main.appendChild(choice8);
    
        choice5.addEventListener("click", wrongAnswer);
        choice6.addEventListener("click", wrongAnswer);
        choice7.addEventListener("click", rightAnswer2);
        choice8.addEventListener("click", wrongAnswer);

        function rightAnswer2() {
            // score up

            h2.textContent = "";
            choice5.style.display = "none";
            choice6.style.display = "none";
            choice7.style.display = "none";
            choice8.style.display = "none";
    
            h2.textContent = "Arrays in JavaScript can be used to store ___.";
        
            var choice9 = document.createElement("button");
            choice9.textContent = "1. numbers and strings";
            choice9.style.display = "block";
            main.appendChild(choice9);
        
            var choice10 = document.createElement("button");
            choice10.textContent = "2. other arrays";
            choice10.style.display = "block";
            main.appendChild(choice10);
        
            var choice11 = document.createElement("button");
            choice11.textContent = "3. booleans";
            choice11.style.display = "block";
            main.appendChild(choice11);
        
            var choice12 = document.createElement("button");
            choice12.textContent = "4. all of the above";
            choice12.style.display = "block";
            main.appendChild(choice12);
        
            choice9.addEventListener("click", wrongAnswer);
            choice10.addEventListener("click", wrongAnswer);
            choice11.addEventListener("click", wrongAnswer);
            choice12.addEventListener("click", rightAnswer3);
    
            function rightAnswer3() {
                // score up

                h2.textContent = "";
                choice9.style.display = "none";
                choice10.style.display = "none";
                choice11.style.display = "none";
                choice12.style.display = "none";
        
                h2.textContent = "String values must be enclosed within ___ when being assigned to variables.";
            
                var choice13 = document.createElement("button");
                choice13.textContent = "1. commas";
                choice13.style.display = "block";
                main.appendChild(choice13);
            
                var choice14 = document.createElement("button");
                choice14.textContent = "2. curly brackets";
                choice14.style.display = "block";
                main.appendChild(choice14);
            
                var choice15 = document.createElement("button");
                choice15.textContent = "3. quotes";
                choice15.style.display = "block";
                main.appendChild(choice15);
            
                var choice16 = document.createElement("button");
                choice16.textContent = "4. parentheses";
                choice16.style.display = "block";
                main.appendChild(choice16);
            
                choice13.addEventListener("click", wrongAnswer);
                choice14.addEventListener("click", wrongAnswer);
                choice15.addEventListener("click", rightAnswer4);
                choice16.addEventListener("click", wrongAnswer);

                function rightAnswer4() {
                    // score up

                    h2.textContent = "";
                    choice13.style.display = "none";
                    choice14.style.display = "none";
                    choice15.style.display = "none";
                    choice16.style.display = "none";
            
                    h2.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
                
                    var choice17 = document.createElement("button");
                    choice17.textContent = "1. JavaScript";
                    choice17.style.display = "block";
                    main.appendChild(choice17);
                
                    var choice18 = document.createElement("button");
                    choice18.textContent = "2. terminal/bash";
                    choice18.style.display = "block";
                    main.appendChild(choice18);
                
                    var choice19 = document.createElement("button");
                    choice19.textContent = "3. for loops";
                    choice19.style.display = "block";
                    main.appendChild(choice19);
                
                    var choice20 = document.createElement("button");
                    choice20.textContent = "4. console log";
                    choice20.style.display = "block";
                    main.appendChild(choice20);
                
                    choice17.addEventListener("click", wrongAnswer);
                    choice18.addEventListener("click", wrongAnswer);
                    choice19.addEventListener("click", wrongAnswer);
                    choice20.addEventListener("click", rightAnswer5);
            
                    function rightAnswer5() {
                        
                    }
                }
            }
        }
    }

    function wrongAnswer() {
        alert("wrong answer!")
        // time decrease

        // if time=0, game over
    }
}

buttonOne.addEventListener("click", startGame)