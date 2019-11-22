// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.



function firstNotRepeatingCharacter(s) {
    
    var arr = s.split("");
    
    for(var i = 0; i < arr.length; i++){
      
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
        
    }
    
    return "_"
}


firstNotRepeatingCharacter("abacabad")
