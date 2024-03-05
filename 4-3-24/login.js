



function checkData(){

let user_name= document.getElementById("name")
let mail_id=document.getElementById("mail")
let security_pin=document.getElementById("security_pin")

            if(mail_id.value==="amirthanatarajan14@gmail.com" && security_pin.value==="1428"){
                // alert("success")
                let details={}
                details.email=mail_id.value;
                details.password=security_pin.value;
                details.name=user_name.value
                let loginDetails=JSON.stringify(details)
                localStorage.setItem("login_data",loginDetails)                
                window.location="home.html"
                
            }
            else{
                window.location="login.html"
            
            }


}

function authentication(){
       
    let user_details=localStorage.getItem("login_data");
    let checked_data=JSON.parse(user_details)
    console.log(checked_data)

    if(checked_data){

        let head=document.getElementById("heading");
        head.innerHTML="Welcome" + checked_data["name"]

        }
        else{
            window.location="login.html"
        }

}
function delData(){
        localStorage.removeItem("login_data");
        window.location="login.html"

}