
var map = function(arr, fn) {
    let newArray=[]
  
    for(let i=0;i<arr.length;i++)
    {
        
        const a =fn(arr[i],i)
        newArray.push(a)
       
        
    }
    return newArray
  
    
 };
 
 

     
 
 map([1,2,3],function fn(n,i)
 {
     
     return ans=n+1;
     
     
    })
 map([1,2,3],function plusI(n, i) { return n + i })