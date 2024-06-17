function indexOfIgnoreCase(s1, s2) {
    let ans=0;


   for(let i=0;i<s1.length;i++){
     
       if(s1.charAt(i)==s2.charAt(0)){
       break;
       }
       ans++;
     }
     if(ans==s1.length)
     return -1

  return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
