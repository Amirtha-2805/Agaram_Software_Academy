//****************************************PART_5*********************************************//
//task1
// let numbers=[]
// let num1=12
// let num2=90
// let num4=2
// let concat=""+num1+num2
// let num3=parseInt(concat)
// numbers.push(num1,num2,num3,num4)
// let largest_no=0
// let smallest_no=numbers[0]
// for(let large of numbers){
//     if(large>largest_no){
//         largest_no=large
//     }       
// }
// for(let each in numbers){
//     if(numbers[each]<smallest_no){
//         smallest_no=numbers[each]
//     }
// }
// console.log("max_no" +" " +largest_no)
// console.log("min_no" +" " +smallest_no)

//task2
// let fishermen_list=[{
//             name:"Akal",
//             score:98
//         },
//         {
//             name:"mani",
//             score:200
//         },
//         {
//             name:"sam",
//             score:100
//         },
//         {
//             name:"Raju",
//             score:198
//         },
//         {
//             name:"Rajan",
//             score:210
//         }

// ]
// let average=0
// for(let each of fishermen_list){
//     average=average+each.score/fishermen_list.length
//     if(each.score>100){
//         console.log("Name of fishermen got score greater than 100 is"+" "+each.name)
//     }
// } 
// console.log("The average of score is"+" "+average)

//task3
// let string="amirtha23904nata"
// for(let each of string){
//     if(each==parseInt(each)){
//         console.log(parseInt(each))
//     }
// }

//task4
// let score_detail=[{
//     name:"Amirtha",
//     score:90
// },
// {
//     name:"Aishu",
//     score:80
// },
// {
//     name:"Jaya",
//     score:98
// },
// {
//     name:"Natarajan",
//     score:100
// },
// {
//     name:"Dhiya",
//     score:-92
// }
// ]
// function scores(){
//     for(let each of score_detail){
//        if(each.score>0){
//         console.log("The score of"+" "+each.name+" "+"is positive")
//        }
//        else{
//         console.log("The score of"+" "+each.name+" "+"is negative")
        
//        }
//     }
// }
// scores()

// function string_value(){
//     for(let each of score_detail){
//        if(each.name){
//         console.log(each.name+" "+"is not a number but a string")
//        }
// }
// }
// string_value()

//task5
function checkNum(num1,num2){
    if(num1>0 && num2>0){
        console.log("Both are positive")
    }
    if(num1>0 || num2>0){
        console.log("One is positive")
    }
    if(num1<0 && num2<0){
        console.log("Both are negative")
    }
}
checkNum(-1,-3)