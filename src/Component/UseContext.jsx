import React, { useState } from "react";

const UseContext = () => {
  const [alldata,setAlldata] = useState([])
  const [id,setId] = useState("")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const savedata = (e) => {
    e.preventDefault()
    setAlldata([...alldata, data])
    setData({ name: "", email: "", password: "" })
  }


  const deletedata = (id) => {
    const res = alldata.filter((i,index)=>id !== index)
    setAlldata(res)

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
                      <button onClick={()=>editdata(index)}>Edit</button>
                      <button onClick={()=>deletedata(index)}>Delete</button>
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

export default UseContext;
