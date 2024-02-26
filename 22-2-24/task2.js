function bill(){

    let unit=Number(document.getElementById("elect-unit").value)
    
    if(unit<=50){
        let i=unit*0.50+unit*1/5;
        console.log(i)
    }
    else if(unit<=150)
    {
        let j= (50*0.50) + (unit-50)*0.75;
        console.log(j+j*1/5) 
    }
    else if(unit<=250)
    {
        let k=(50*0.50)+(100*0.75)+(unit-150)*1.20;
        console.log(k+k*1/5)
    }
    else if(unit>250)
    {
        let l=unit*1.50;
        console.log(l+l*1/5)
    }
}