// let inst_name=[1,2,3,4];
// function storeData(){
//     let convertedData=JSON.stringify(inst_name)

//     localStorage.setItem("details",convertedData)
// }
// function getData(){
//     let localData=localStorage.getItem("details");
//     let arrayData=JSON.parse(localData)
//     alert(arrayData)
//     // alert(typeof(localData));
// }

let inst_name=[1,2,3,4];
function storeData(){
    let convertedData=JSON.stringify(inst_name)

    sessionStorage.setItem("data",convertedData)
}
function getData(){
    let sessionData=sessionStorage.getItem("data");
    let arrayData=JSON.parse(sessionData)
    alert(arrayData)
    // alert(typeof(localData));
}