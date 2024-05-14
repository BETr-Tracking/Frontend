import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginSystemUser } from '../../../axios/auth'
import { useDisplayMsgs } from '../../../hooks/useDisplayMsgs'

export const useLoginUser = () => {

    const navigate=useNavigate()
    const {handleBackendResponse,handleErr,handleSuccess}=useDisplayMsgs()
    const loginUser=async(data)=>{
        console.log(data)
        const res = await loginSystemUser(data)
        if(res){
            if(res.err){
                // handle error accordingly
                handleBackendResponse(res)
            }else{
                if(res.status){
                    // update user in store
                    localStorage.setItem("token",res.token)
                    handleSuccess("You have Successfully logged in.")
                    navigate("/dashboard")
                }else{
                    // add notification msg : "Sorry! Problem in Sign in the User." or msg from backend
                    if(res.errmsg){
                        handleErr(res.errmsg)
                    }else{
                        handleErr("Sorry! Problem in Sign in the User.")
                    }
                }
            }
        }else{
            // add notification msg : "Sorry! Problem in Sign in the User."
            handleErr("Sorry! Problem in Sign in the User.")
        }
    }
  return {loginUser}
}
