let company_details=[{
    company_name:"infosays",
    start_year:2001,
    end_year:2030,
    category:"retail",     
    },
    {
    company_name:"wipro limited",
    start_year:1990,
    end_year:2010,
    category:"whole sale",     
    },
    {
    company_name:"Tech Mahindra",
    start_year:1982,
    end_year:2060,
    category:"whole sale",     
    },
    {
    company_name:"Zoho",
    start_year:1987,
    end_year:2030,
    category:"retail",     
    },
      {company_name:"TCS",
    start_year:1986,
    end_year:2020,
    category:"retail",     
    },
]
//task1
/* let company_names=company_details.map((name_detail)=>{
      return name_detail.company_name
})
console.log(company_names)
*/
//task2
//method1
/* let year_filter=company_details.filter((year_detail)=>{
if(	year_detail.start_year>1987){
  return year_detail.company_name
  }				
}
)
console.log(year_filter)
*/
//method2

/*  for(let each of company_details){
     if(each.start_year>1987){
      console.log(each.company_name+" "+each.start_year)
    }
 }
  */   
 //task3
 //method1
/* let company_names=company_details.map((detail)=>{
      if(detail.category=="retail"){
          return detail.company_name
    document.getElementById("company_data").innerHTML=detail
          
      }
      
})
console.log(company_names)
*/ 

 //method2
let renderHTML=""
for(let each of company_details){
          if(each.category=="retail"){
            console.log(each.company_name)
renderHTML=renderHTML+`<tr><td>${each.company_name}</td>
<td>${each.category}</td><td>${each.start_year}</td><td>${each.end_year}</td></tr>
`
}
document.getElementById("company_data").innerHTML=renderHTML

}
//task4
/* let date_sorting=company_details.sort((a,b)=>b.end_year-a.end_year)
 console.log(date_sorting)
  */


//task5&6
 let student_detail=[{
    name:"Amirtha",
    age:22
    },
    {
    name:"Aiswarya",
    age:27
    },
    {
    name:"Jayasree",
    age:28
    },
    ]
    let sort_date=student_detail.sort((a,b)=>a.age-b.age)
    console.log(sort_date)
    let total=0
    let add_age=student_detail.reduce((a,b)=>a+b.age,total);
    console.log("sum of the ages is",add_age)
    
    //task7
  
let company_object= {
      company_name:"infosays",
      category:"retail",     
      }
   let {company_name}=company_object 
   console.log(company_name)


//task8
function add(...args){
	let total=0
  for(let each of args){
  total=total+each
  }
  console.log(total)
}
add(1,2,4,5,9,100)



//task9
function data(...args){
  let new_args=[]
        for(let each of args){
          if(typeof(each)==="number"){
            new_args.push(each)
          }
          else if(typeof(each)==="string"){
            new_args.push(each)
          }
          else if(typeof(each)==="object"){
            new_args.push(...each)
          }
          
        }
        console.log(new_args)
  }
  console.log(data(1,3,"apple","orange",["papaya","grapes",9,10,"mango"]))
  

//task10
 
let user_address={
      name:"Amirtha",
      street:"Ammasimadam street",
      door_no:"15/A",
      city:"Nager Coil",
      pin_code:629001
      }
      var street={street}=user_address
      console.log(street.street)
      
      
//task11
let number=-1
function increment_number(){
   number=number+1  
   return number
    }
console.log(increment_number())
 console.log(increment_number())
// console.log(increment_number())
//console.log(increment_number())
//console.log(increment_number())
//console.log(increment_number())


//task12

let object={name:"Amirtha",
            age:22}
let params=new URLSearchParams();
let index=params.get(object);
  console.log(index)      


