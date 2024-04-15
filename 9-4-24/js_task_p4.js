//****************************************PART_4*********************************************//
//task1

      function duplicate(array){
        let new_array=[]
        for(let each of array){
          if(!(each in new_array)){
            new_array.push(each)
      
          }
        }
          console.log(new_array);

      }
      duplicate([2,4,5,3,6,2,3])

    //task2
    // function types(array,value,string){
    //   if(string=="Add"){
    //     let total=0
    //     for(let each of array){
    //       total=total+each
    //     }
    //   console.log(total)
    //   }
    //   if(string=="remove"){
    //   let number=0
    //     for(let each=0;each<=array.length;each=each-1){
    //     number=array[each]
    //     console.log(each)
       
            
    //     }
       
    //   }
    // }
    // types([1,2,3,5],4,"remove")

    //task4
  //   let array=[1,2,4,5,6,8,10]
  //   let filter_array=array.filter((num)=>{
  //     if(num%2==0){
  //       return true
  //     }    
  //   }  
  // )
  // console.log(filter_array)
