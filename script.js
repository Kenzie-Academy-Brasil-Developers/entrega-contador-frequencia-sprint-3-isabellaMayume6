const letterCounts = {};
const wordCounts = {}
const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        counts(letterCounts, currentLetter)
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    words = typedText.split(/\s/);

    for (let i = 0; i < words.length; i++) {
        const elemento = words[i];
        counts(wordCounts, elemento)
    }
    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent;
        const words = document.getElementById("wordsDiv");
        words.appendChild(span);
    }
});
    function counts(letterCounts, currentLetter){
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
    } else { 
        letterCounts[currentLetter]++; 
    }}