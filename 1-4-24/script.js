
//*****difference between let and var*****/
// if(true){
//   let a=3;
//   var b=8;
  
// }
// console.log("value of b is"+b)

//*****loop in a traditional way*****/
// for(let i=0;i<=10;i=i+1){
  
// }
//   console.log(i)

// for(var i=0;i<=10;i=i+1){
  
// }
//  console.log(i)

//*****default parameter*****//
// function add(input1,input2,input3=0,input4=0){
//   console.log(input1+input2+input3+input4) 
// }
// add(8,9)
// add(9,6,88)
// add(8,66,54,90)

//*****rest parameter*****//
// function add(...args){
//   let total=0;
//   for(let each of args){
//     total=total+each
//   }
//   console.log(total)
// }
// add(9,7,9,70,8,9,5)


//*****spread operator*****//
// let a=[1,2,3]
// let b=[4,5,6]
// c=[...a,...b]
// console.log(c)

//*****object literals*****//
// let name="Amirtha"
// let age=22
// let email="ammu@gmail.com"

// let details={
//   name,
//   age,
//   email
// }
// console.log(details)

// let details={
//   [name]:name,
//   [age]:age,
//   [email]:email
// }

// console.log(details)


// let details={
//   name:name,
//   age:age,
//   email:email,
//     user_name:function(){
//   return this.name
// }
// }

// console.log(details,details.user_name()
// )

//*****array destructuring*****//
// let a=["sun","moon","stars"]
// let [first,second,third]=a
// console.log("The second one is" ,second)

//*****object destructuring*****//
// let user_details={
//    user_name:"Amirtha",
//     age:22,
//     place:"Nagercoil"
// }
// let {user_name,age,place}=user_details
// console.log("The age is",age)
// console.log("The place is",place)
// console.log("The name is",user_name)


//*****Arrow Function*****//

// const add=(a,b)=>{
//     return a+b
// }
// const value=add(9,6)
// console.log(value);

//*****map function*****//
//Example_1
// let student=["Amirtha","Aiswarya","Jayasree","Natarajan"]
// let stu_name_length=student.map((name_length)=>{
//     // return name_lenghth.length
// console.log(name_length.length);

// }
// )

//Example_2
// let student=["Amirtha","Aiswarya","Jayasree","Natarajan"] 
//  let stu_name_length=student.map((name_length)=>{
// 		return name_length.toUpperCase()
//  }
//  )
//  console.log(stu_name_length);

//Example_3 (array index in map function)
// let student=["Amirtha","Aiswarya","Jayasree","Natarajan"];
// let stu_name_length=student.map((name_length,i)=>{
//     return i
// }
// )
// console.log(stu_name_length)
 

//Example_4 (displaying particular value using array index in map function)

 /* let student_details=[{
 name:"Amirtha",
 place:"ngl"
 },
  {
 name:"Aishu",
 place:"chennai"
 }, 
 {
 name:"Jayasree",
 place:"kollam"
 },
 {
 name:"Natarajan",
 place:"Kottar"
 }]
 
 let parti_value=student_details.map((stu,i)=>{
 return i.name
 
 })
 console.log(parti_value)
 */

 //*****Filter function*****//
/* let student_details=[{
name:"Amirtha",
place:"ngl"
},
{
name:"Aishu",
place:"chennai"
},
{
name:"Jayasree",
place:"kollam"
},
{
name:"Natarajan",
place:"Kottar"
}]


let filter_students=student_details.filter((stu)=>{
if(stu.name!="Amirtha"){
  return true   //this method is only used for filter
}
})
console.log(filter_students) */


//***********************************TASKS*********************************************//

//*****task1(method to add next two numbers=>op is [7,5,7])*****//
// let numbers=[5,2,3,4]
// let add_numbers=numbers.map((num,i)=>{
// if(numbers[i+1]){
// return num+numbers[i+1]
// }
// else{
// return num
// }
// })
// console.log(add_numbers)



//*****task2(finding a middle value of an odd number array)*****//

// let number=[3,2,4,5,6]
// let add_number=number.length/2
// let round_value=parseInt(add_number)
// console.log(number[round_value])



//*****task3(middle value of an array with odd and even numbers_method1)*****//

// let number=[1,2,4,5,6,9]
// if(number.length%2==0){
// let add_number=(number.length+1)/2
// let round_value=parseInt(add_number)
// console.log(number[round_value]-1,number[round_value])
// }
// else{
// let addition_num=(number.length/2)
// let round_value=parseInt(addition_num)
// console.log(number[round_value])

// }


//*****task4(middle value of an array with odd and even numbers_method2)*****//

// let number=[1,2,4,5,6,9,10]
// let addition_num=(number.length/2)
// let round_value=parseInt(addition_num)
// if(number.length%2==0){
// 	console.log(number[round_value]-1,number[round_value])
// }
// else{
// console.log(number[round_value])
// }

//*****task5(multiplication of 2 array with same length using loop) */
// let array_1=[8,7,6,2]
// let array_2=[1,2,3,4]
// let multiplication=[]
// for(let each in array_1){
// 	let answer=array_1[each]*array_2[each]
//   multiplication.push(answer)
// }
// console.log(multiplication)


//*****task5(multiplication of 2 array with same length using map)*****//

// let array_1=[3,4,7,9,8]
//  let array_2=[2,4,1,9,4]
// let multiplication=array_1.map((product,i)=>{
//  		return array_1[i]*array_2[i]	 
//   })
//  console.log(multiplication)

 

//*****task6(multiplication of array with random length)*****//

//  let array_1=[3,4,7,9,8]
//  let array_2=[2,4,1,9]
//  let new_array=array_2
//  if(array_1.length<array_2.length){
//   new_array=array_1
//  }
//  let multiplication=new_array.map((product,i)=>{
//  		return array_1[i]*array_2[i]	 
//  })
//  console.log(multiplication)

//*****string in alphabet order and number******/
// let fruits_name=["mango","goa","apple","orange"]
// fruits_name.sort()
// console.log(fruits_name)

// let numbers=[1,5,6,4,3,44,6,4]
// numbers.sort()
// console.log(numbers)

 
//*****integer in ascending order*****/
// let numbers=[1,5,6,4,3,44,6,4]
// numbers.sort((a,b)=>a-b)
// console.log(numbers)


//*****integer in descending order*****/
// let numbers=[1,5,6,4,3,44,6,4]
// numbers.sort((a,b)=>b-a)
// console.log(numbers)

//**************************************************Class*************************************************//
// class StudentDetails{

//   studentName(){
//       return "Amirtha"
//   }

// }
// let student_name=new StudentDetails
// let stu=student_name.studentName()
// console.log(stu)


//*****Constructor*****/
// class Users{
// 	constructor(){
//   console.log("Welcome")
//   }
	
// }
// let user_detail=new Users();

//****passing values *****//

// class Users{
// 	constructor(name){
//   this.name=name
//   console.log(name)
//   }
//   getName(){
//      console.log(this.name)
//   }
	
// }
// let user_detail=new Users("Amirtha");
// let user_name=user_detail.getName()


//*****task on constructor*****//

// class UserName{
//   constructor(name,lname){
//    this.name=name;
//    this.lname=lname
//   }
//   getName(){
//     console.log(this.name)
//   }
//   getFullName(){
//      console.log(this.name+'' +this.lname)
//  }

// }
// let user=new UserName("Amirtha","Natarajan")
// let user_name=user.getName()
// let user_fname=user.getFullName()

//*****task*****//
// class UserName{
//   constructor(details){
//    this.name=details.name;
//    this.lname=details.lname;
//    this.education=details.education
//   }
//   getName(){
//     console.log(this.name)
   
//   }
//   getFullName(){
//  console.log(this.name+ " " +this.lname)
//  console.log(this.education)   
//  this.getName()   
//  }
  
// }

// let user=new UserName({name:"Amirtha",
//                      lname:"Natarajan",
//                      education:[
//                          {
//                          course:"SSLc",
//                          inst:"Convent",
//                           percentage:"90%"
//                          },
                         
//                          {
//                          course:"BSC",
//                          inst:"Govt clg",
//                           percentage:"99%"
                         
//                          }                    
//                      ]
//                      }
//                      )
// let user_name=user.getName()
// let user_fname=user.getFullName()


//****Accessing one class functions into another class*****//
// class UserName{
//   constructor(details){
//    this.name=details.name;
//    this.lname=details.lname;
//    this.education=details.education
//   }
//   getName(){
//     console.log(this.name)    
//   }
//   testFunc(){
//       return "Welcome"
//   }
//   getFullName(){
//  console.log(this.name+ " " +this.lname)
 
//  }    
// }

// class Message extends UserName{
//   constructor(obj){
//    super(obj)
//  }
      
// }
// let object_detail={    name:"Amirtha",
//                      lname:"Natarajan",
//                      education:[
//                          {
//                          course:"SSLc",
//                          inst:"Convent",
//                           percentage:"90%"
//                          },
                         
//                          {
//                          course:"BSC",
//                          inst:"Govt clg",
//                           percentage:"99%"
                         
//                          }                    
//                      ]
//                      }
// let user=new UserName(object_detail)

// const messages=new Message(object_detail);
// const u_name=messages.getFullName()

//********/
// class UserName{
//   constructor(details){
//    this.name=details.name;
//    this.lname=details.lname;
//    this.education=details.education
//   }
//   getName(){
//     console.log(this.name)    
//   }
//   testFunc(){
//       return "Welcome"
//   }
//   getFullName(){
//  console.log(this.name+ " " +this.lname)
 
//  }    
// }

// class Message extends UserName{
//   constructor(obj){
//       super(obj)
//  }
      
// }
// let object_detail={    name:"Amirtha",
//                      lname:"Natarajan",
//                      education:[
//                          {
//                          course:"SSLc",
//                          inst:"Convent",
//                           percentage:"90%"
//                          },
                         
//                          {
//                          course:"BSC",
//                          inst:"Govt clg",
//                           percentage:"99%"
                         
//                          }                    
//                      ]
//                      }
// let user=new UserName(object_detail)

// const messages=new Message(object_detail);
// const u_name=messages.testFunc()
// console.log(u_name)



//task my method//

// let resume_list=[{
//   name:"Amirtha",
//   education:[{
//       course:"SSLC",
//       inst:"Convent",
//       percentage:90
//        },
//        {
//        course:"HSC",
//        inst:"Convent",
//        percentage:99      
//        },
//        {course:"BSC",
//        inst:"Govt arts and science clg",
//        percentage:88    
//        },

       
//        ]
// },

// {
//   name:"Aiswarya",
//   education:[{
//           course:"SSLC",
//           inst:"SLB",
//           percentage:90
//            },
//            {
//            course:"HSC",
//            inst:"SLB",
//            percentage:60      
//            },
//            {course:"BSC",
//            inst:"Pioneer clg",
//            percentage:86   
//            },


//            ]
//        },
//        {
//           name:"Jayasree",
//          education:[{
//               course:"SSLC",
//               inst:"KDVP",
//               percentage:60
//                },
//                {
//                course:"HSC",
//                inst:"KDVP",
//                percentage:95     
//                },
//                {course:"BSC",
//                inst:"Udhaya clg",
//                percentage:82 
//                },


//            ]
//        },
//        {
//           name:"Dhiya",
//          education:[{
//               course:"SSLC",
//               inst:"Little flower",
//               percentage:63
//                },
//                {
//                course:"HSC",
//                inst:"Little flower",
//                percentage:69     
//                },
//                {course:"BSC",
//                inst:"Ms university",
//                percentage:78
//                },


//            ]
//        },
// ]

// let particular_name=resume_list.map((stu,i)=>{	
// /* console.log(resume_list[i].education[i].course) */
// for(let each of resume_list[i].education){
//   if(each.course==="HSC"){
//       if(each.percentage>=95){
//       console.log(resume_list[i].name+" "+each.percentage)
//       }
//   }
//        }
//   /* return resume_list[i].education[i].course */
//  })

//task explained by sir//
let resume_list=[{
  name:"Amirtha",
  age:22,
  skills:["c","c++","react","python"],
  education:[{
      course:"SSLC",
      inst:"Convent",
      percentage:90
       },
       {
       course:"HSC",
       inst:"Convent",
       percentage:99      
       },
       {course:"BSC",
       inst:"Govt arts and science clg",
       percentage:88    
       },

       
       ]
},

{
  name:"Aiswarya",
  age:27,
  skills:["c","c++","python"],
  education:[{
          course:"SSLC",
          inst:"SLB",
          percentage:90
           },
           {
           course:"HSC",
           inst:"SLB",
           percentage:60      
           },
           {course:"BSC",
           inst:"Pioneer clg",
           percentage:86   
           },


           ]
       },
       {
          name:"Jayasree",
          age:25,           
          skills:["c","c++","react","python","css"],         
         education:[{
              course:"SSLC",
              inst:"KDVP",
              percentage:60
               },
               {
               course:"HSC",
               inst:"KDVP",
               percentage:95     
               },
               {course:"BSC",
               inst:"Udhaya clg",
               percentage:82 
               },


           ]
       },
       {
          name:"Dhiya",
          age:19,          
          skills:["c","c++","react","python","sql"],   
         education:[{
              course:"SSLC",
              inst:"Little flower",
              percentage:63
               },
               {
               course:"HSC",
               inst:"Little flower",
               percentage:69     
               },
               {course:"BSC",
               inst:"Ms university",
               percentage:78
               },
           ]
       },
       {
          name:"Natarajan",
          age:29,           
          skills:["c","c++","react"],          
         education:[{
              course:"SSLC",
              inst:"Little flower",
              percentage:63
               },
               {
               course:"HSC",
               inst:"Little flower",
               percentage:77    
               },
               {course:"BSC",
               inst:"Ms university",
               percentage:78
               },


           ]
       }
]
let skill_filters=resume_list.filter((v)=>{
if(v.skills.includes("python")&&(v.skills.includes("react"))){
      return true
}
    
})
console.log(skill_filters) 

//to sort age
 let ages=resume_list.sort((a,b)=>a.age-b.age)
 console.log(ages)

//to sort education
let education=resume_list.sort((c,d)=>d.education.filter((val)=>val.course=="HSC")[0].percentage-c.education.filter((val)=>val.course=="HSC")[0].percentage)
console.log(education)


/* let mark_percentage=[] 
let particular_name=resume_list.map((stu,i)=>{	
for(let each of resume_list[i].education){

    if(each.course==="HSC"){
          mark_percentage.push(each.percentage)
         console.log(resume_list[i].name)
           console.log(each.percentage)
       console.log(resume_list[i].name+" "+each.percentage)
        
    }

         }
    return resume_list[i].education[i].course
       
   
   }
   
   )
  
     mark_percentage.sort((a,b)=>b-a)    
    console.log(mark_percentage)
 */
