import { useDispatch, useSelector } from 'react-redux'
import axios from "../api/axios"
import React from 'react'
import { getUserProfile } from '../features/auth/authActions'


const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)


  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
      <img  width={50} height={50} src={userInfo?.avatar ? `${axios.defaults.baseURL}/upload/image/${userInfo?.avatar}`: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"} alt="avatar" style={{width:'200px',height:'200px',borderRadius:'50%',borderWidth:1, borderColor:"green"}}/>
      <p><span style={{fontWeight:"bold",color:"green"}}>Name: </span>{userInfo?.name}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>Email: </span>{userInfo?.email}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>Phone Number: </span>{userInfo?.phoneNo}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>Comapany Name: </span>{userInfo?.companyName}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>Designation: </span>{userInfo?.designation}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>Role: </span>{userInfo?.role}</p>
      <p><span style={{fontWeight:"bold",color:"green"}}>interests: </span><div style={{display:"flex",gap:5,alignItems:"center"}}>{
        userInfo?.interests?.map((item)=><p style={{backgroundColor:"green",color:"white",padding:5,borderRadius:5}}>{item}</p>)
      }</div></p>
    </div>
  )
}

export default ProfileScreen
