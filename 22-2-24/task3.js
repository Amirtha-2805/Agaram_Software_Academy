function gross_salary(){
    let basic_salary=Number(document.getElementById("basic-salary").value)
    
    
    if(basic_salary<=10000){

        let Gross_salary=basic_salary+(basic_salary*20/100)+(basic_salary*80/100)
        console.log(Gross_salary)

    }
    else if(basic_salary<=20000){
        let Gross_salary=basic_salary+(basic_salary*25/100)+(basic_salary*90/100)
        console.log(Gross_salary)
    }
    else if(basic_salary>20000){
        let Gross_salary=basic_salary+(basic_salary*30/100)+(basic_salary*95/100)
        console.log(Gross_salary)
    }
}