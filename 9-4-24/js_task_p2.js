//****************************************PART_2*********************************************//

//task1

function sum(num1,num2=0){

	if(num2===""){
	    return num1+1
	  }
	 
	  else{
	      return num1+num2
	    }	           
}
console.log(sum(9,8))

//task3

let object1={
    name:"Amirtha",
age:22,
place:"Nagercoil"
}
let object2={
  name:"Amirtha.N",
age:22,
place:"Nagercoil"
}
if(object1.name==object2.name && object1.age==object2.age&&object1.place==object2.place){
    console.log("both are same")
}
else{
    console.log("Error")
}


//task4
let array1=[1,2,3,4,5,6,7,8]
let new_array=[]

let filtered_array=array1.filter((num)=>{
		if(num%2==0){
    	return true
    }
    else{
    	new_array.push(num)
    }
})
console.log(new_array)

//task5
let a;
let b;
if(typeof(a)=="undefined"&&typeof(b)=="undefined"){
  console.log ("undefined")
}    

//task6

let details={
    name:"Amirtha",
age:22,
personal_details:{
    father_name:"Natarajan",
  mother_name:"Jayasree",
  sibilings:{
          sister:"Aiswarya",
      brother:"Vishak"
  }
}
}	  
console.log(details.personal_details.sibilings.sister)

