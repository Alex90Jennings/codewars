//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(" ").reverse().toString().replaceAll(",", " ")
}

console.log(reverseWords("hi my name is Rina"))