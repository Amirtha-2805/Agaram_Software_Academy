function cutoff(){
        let tamil=Number(document.getElementById("tamil-mark").value);
        let english=Number(document.getElementById("eng-mark").value);
        let percentage1=(tamil+english)/2
        let total1=percentage1/4


        let maths=Number(document.getElementById("maths-mark").value);
        let percentage2=maths/1
        let total2=percentage2/2


        let physics=Number(document.getElementById("physics-mark").value);
        let chemistry=Number(document.getElementById("chem-mark").value);
        let compt=Number(document.getElementById("cs-mark").value);
        let percentage3=(physics+chemistry+compt)/3
        let total3=percentage3/4
        
        let total_cutoff=total1+total2+total3
        console.log(total_cutoff)
}