function firstNonRepeatedChar(str) {
 // Write your code here
for(let i=0;i<str.length;i++){
	let s=str.charAt(i);
	let p=str.charAt(i+1);
	if(i==0){
		if(s!=p){
			return s;
		}
	}
	if(i>0 && i<str.length-1){
		let m=str.charAt(i-1);
		if(s!=p && s!=m){
          return s;
		}
	}
	if(i==str.length-1){
		if(s!=m){
         return s;
		}
	}
	
}
	return null;
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
