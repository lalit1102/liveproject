import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import {addDoc,collection, onSnapshot,query,deleteDoc,doc, updateDoc,getDoc  } from "firebase/firestore";

const RegisterForm = () => {
const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    console.log("INPUT CHANGE 👉", name, value)
    setData({
      ...data,
      [name]:value
    })
  }

  useEffect(()=>{
      console.log("🔥 Firestore onSnapshot start")
    const q = query(collection(db,"lalit"));
    const unsub = onSnapshot(q,(i)=>{
      let todosArray = [];
      i.forEach((doc)=>{
        todosArray.push({...doc.data(),id: doc.id})
      })
         console.log("📦 ALL DATA FROM FIRESTORE 👉", todosArray)
      setAlldata(todosArray);
    });
    return () =>{
       console.log("❌ Firestore listener stopped")
      unsub()
    }
  },[])



  const savedata = async (e) => {
    e.preventDefault();

    console.log("SUBMIT DATA 👉", data)
    console.log("CURRENT ID 👉", id)


    if(id !== ""){
      console.log("✏️ UPDATE MODE")
      await updateDoc(doc(db,"lalit",id),data)
       console.log("✅ DATA UPDATED FOR ID 👉", id)
    } else {
      console.log("➕ ADD MODE")
   const a = await addDoc(collection(db,"lalit"),data)
   console.log("✅ DATA ADDED WITH ID 👉", a)
    }
    
    setData({ name: "", email: "", password: "" })
    setId("")
  }


  // const deletedata = (id) => {
  //   const res = alldata.filter((i,index)=>id !== index)
  //   setAlldata(res)

  // }
  const deletedata = async(id) => {
     console.log("🗑 DELETE ID 👉", id)

    await deleteDoc(doc(db,"lalit",id))
    console.log("✅ DATA DELETED 👉", id)
  }

  

  const editdata =async (id) => {
     console.log("🖊 EDIT CLICKED ID 👉", id)
    const res = await getDoc(doc(db,"lalit",id))
     console.log("📄 FETCHED DOC 👉", res.data())

    setData(res.data())
    setId(id)
     console.log("EDIT MODE ENABLED, FORM FILLED")
  }
  return (
     
    <div>
      <form action="#" method="post" name="fnm" onSubmit={savedata}>
        <table>
          <tr>
            <td>
            <span>here input tag : {data.name}</span><br />
              <label htmlFor="">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="enter name"
                value={data.name}
                onChange={handleChange}
                
              />
            </td>
          </tr>
          <tr>
            <td>
               <span>here input tag : {data.email}</span><br />
              <label htmlFor="">Email : </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter email"
                onChange={handleChange}
                value={data.email}
              />
            </td>
          </tr>
          <tr>
            <td>
               <span>here input tag : {data.password}</span><br />
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
                onChange={handleChange}
                value={data.password}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">save</button>
            </td>
          </tr>
        </table>
      </form>

      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      <button onClick={()=>editdata(item.id)}>Edit</button>
                      <button onClick={()=>deletedata(item.id)}>Delete</button>
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterForm
