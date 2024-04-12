//****************************************PART_4*********************************************//
//task1

function array_items(array){
    let new_array=[]
    for(let each in array){
        if(new_array.length===0){
              new_array.push(array[each])
      }
      if(new_array.indexOf(array[each])===-1){
        new_array.push(array[each])
      }}
    
    console.log(new_array)  
             }
    array_items([9,8,8,6,5,5])
    
    //task2
    function types(array,value,string){
      if(string=="Add"){
        let total=0
        for(let each of array){
          total=total+each
        }
      console.log(total)
      }
      if(string=="remove"){
      let number=0
        for(let each=0;each<=array.length;each=each-1){
        number=array[each]
        console.log(each)
       
            
        }
       
      }
    }
    types([1,2,3,5],4,"remove")