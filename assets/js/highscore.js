var highscoreList = document.getElementById("highscores");
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");

function listLocal() {
    for (var i = 0; i < localStorage.length; i++){
        var item = document.createElement("li");
        item.textContent = localStorage.getItem(localStorage.key(i));
        highscoreList.appendChild(item)
    }
};

listLocal();

function clearItems() {
    localStorage.clear();
};

clearScores.addEventListener("click", function() {
    clearItems();
    location.reload();
});

goBack.addEventListener("click", function() {
    location.replace("index.html");
});