// let a=20;
// let b=30;
// console.log(a+b)


function getdata(){

        // console.log("Welcome")
        let email=document.getElementById("mail");
        console.log(email)
        let security=document.getElementById("security-pin").value;
        console.log(security)

}

function getnumber(){

        // let input1=Number(document.getElementById("no1").value);
        // let input2=Number(document.getElementById("no2").value);
        // console.log(input1+input2)

            let input1=Number(document.getElementById("no1").value);
            let input2=Number(document.getElementById("no2").value);
            if(input1>input2){
                console.log(input1,"is the largest number")                
            }
            else if(input2>input1){
                console.log(input2,"is the largest number")
            }
            else if(input1=input2){
                console.log("Both are equal")
            }
            else if ((typeof(input1)!="integer") && (typeof(input2)!="integer")){
                console.log("undefined")
            }


        // let input2=Number(document.getElementById("no2").value);
        //     if (input2%2==0){
        //         console.log(input2, "is an even number")

        //     }
        //     else{
        //         console.log(input2, "is an odd number")
        //     }
}