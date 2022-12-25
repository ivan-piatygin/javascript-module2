function findLongestWord(string) {
    // Change code below this line
    let words = string.split(" ");
  
    let longestWord = words[0];
    // let longestWordLength = longestWord.length;
  
    for (word of words) {
        // console.log(word);
      if (word.length > longestWord.length) {
        longestWord = word;
        console.log(longestWord);
      }
    }
  
    return longestWord;
    // Change code above this line
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));
