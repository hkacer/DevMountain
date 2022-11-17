


const decoder=(code)=>{
  
  let result=""
  for(let i= 0; i<code.lenght; i++){
    
    if(!isNaN(code([i])))
    {
     let letter=code[i]
     let  sliced=code.slice(i+1);
      result+=sliced[letter]
    
    }
  }
  return result;

}
console.log(decoder('0h2xce5ngbrdy'))
console.log('Hello')