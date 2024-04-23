import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect} from "react"

export default function Create(props){
    const[response,setResponse]=useState("")
    const[createApi,setCreateApi]=useState({
        name:"",
        email:"",
        password:"",
        aadhar:"",
        address:"",
        phone:"",
        city:"",
        area:"",
        pin:""
    })
   
      const createNew=()=>{
        axios({
            method:"POST",
            url:"https://agaram.academy/api/action.php",
            Data:{
                request:"create_candidate",
                name:createApi.name,
                email:createApi.email,
                password:createApi.password,
                aadhar:createApi.aadhar,
                address:createApi.address,
                phone:createApi.phone,
                city:createApi.city,
                area:createApi.area,
                pin:createApi.pin
            }
        }).then((response)=>{
                // console.log(response)
                setResponse(response)
        })
      }
      const getAllData=()=>{
        axios({
            method:"GET",
            url:"https://agaram.academy/api/action.php",
            Data:{
                request:"getAllMembers"
            }
        }).then((response)=>{
            console.log("getDatas",response)
        })
      }
          
    // useEffect(()=>{
    //    createNew() 
    // },[])          
   
 return(
        <>
            <h1>Create Api</h1>
            <h6>{JSON.stringify(response)}</h6>
            <div>
                Name:<input type="text" placeholder="Enter your name" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    name:e.target.value
                })}/>
            </div>
            <div>
                Email:<input type="email" placeholder="Enter your email" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    email:e.target.value
                })}/>
            </div>
            <div>
                Password:<input type="password" placeholder="Enter your name" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    password:e.target.value
                })}/>
            </div>
            <div>
                Aadhar:<input type="number" placeholder="Enter your aadhar number" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    aadhar:e.target.value
                })}/>
            </div>
            <div>
                Address:<input type="text" placeholder="Enter your address" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    address:e.target.value
                })}/>
            </div>
            <div>
                Phone:<input type="text" placeholder="Enter your phone" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    phone:e.target.value
                })}/>
            </div>
            <div>
                City:<input type="text" placeholder="Enter your city" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    city:e.target.value
                })}/>
            </div>
            <div>
                area:<input type="text" placeholder="Enter your area" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    area:e.target.value
                })}/>
            </div>
            <div>
                Pincode:<input type="number" placeholder="Enter your pincode" onKeyUp={(e)=>setCreateApi({
                    ...createApi,
                    pin:e.target.value
                })}/>
            </div>
            <div>
                <button type="button" onClick={()=>createNew()}>createApi</button>
                <button type="button" onClick={()=>getAllData()}>Get</button>
            </div>
       </>
)
}