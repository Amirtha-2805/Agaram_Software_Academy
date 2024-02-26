function grade(){
   
    let physics=Number(document.getElementById("phy").value)
    let chemistry=Number(document.getElementById("chem").value)
    let biology=Number(document.getElementById("bio").value)
    let mathematics=Number(document.getElementById("maths").value)
    let computer=Number(document.getElementById("compt").value)

    let total_percentage=(physics+chemistry+biology+mathematics+computer)/5

    if(total_percentage>=90){
        console.log("Grade A")
    }
    else if(total_percentage>=80){
        console.log("Grade B")
    }

    else if(total_percentage>=70){
        console.log("Grade C")
    }
    else if(total_percentage>=60){
        console.log("Grade D")
    }
    else if(total_percentage>=40){
        console.log("Grade E")
    }
    else if(total_percentage<40){
        console.log("Grade F")
    }
}