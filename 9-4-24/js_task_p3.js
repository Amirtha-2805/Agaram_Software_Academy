//****************************************PART_3*********************************************//
//task1
let details_object=[{
	name:"Amirtha",
    age:22
},
{
	name:"Aiswarya",
  age:27
},
{
	name:"Jayasree",
  age:30
},
{
	name:"Natarajan",
  age:40
},
]
for(let each of details_object){
		console.log("name is"+' '+each.name)
		console.log("age is"+' '+each.age)
    
}

//task3
 console.log("please update your browser") 

//task4
function submit(){
    let user_email=document.getElementById("u_email")
    let security_pin=document.getElementById("u_pwd")
    if(security_pin.value==1234){
        console.log("correct password")
    }
    else{
        console.log("Error")
    }
    }

//task5
let paragraph_details=document.getElementById("para").innerHTML
console.log(paragraph_details)    

//task8
//1st way
 let object1={name:"Amirtha",
age:22}
if(object1=={}){
    console.log("Empty")
}
else{
    console.log("non_empty")
}

//2nd way
let object2={name:"",
place:""}
let{name,place}=object2
if(name==""&&place==""){
	console.log("Empty")
}
else{
    console.log("non_empty")
}

 //3rd way
 let object3={name:"",
 age:""}
 if(object3.name=="" && object3.age==""){
    console.log("Empty")
 }
 else{
 	console.log("non_empty")
 }
 //task9
//method1
let array_1=[1,3,5,7,8]
let value_1=array_1[0]
let value_2=array_1[1]
let value_3=array_1[2]
let value_4=array_1[3]
let value_5=array_1[4]
console.log(value_1,value_2,value_3,value_4,value_5)
 

//method2
 let array_2=["Apple","Orange","Mango"]
console.log(array_2)
 
//method3
let array_3=["Apple","Lemon","papaya","Guava"]
for(let each of array_3){
	console.log(each)
}

//method4
let array_4=["Apple","Lemon","papaya","Guava"]
for(let each in array_3){
	console.log(array_4[each])
}

//method5
let array_5=["Apple","Lemon","papaya","Guava"]
let mapped_array=array_5.map((fruits)=>{
		return fruits
})
console.log(mapped_array)


