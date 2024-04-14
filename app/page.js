
"use client"
import React, { useState } from 'react'

const page = () => {
   const[title,setTitle ] = useState("")
   const[desc,setDesc ] = useState("")
   const[mainTask,setMainTask ] = useState([])

   
   const submitHandler = (e)=>{
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")

  
  }

  const deleteHandler=(i)=>{
    let copytask = [...mainTask];
    var removeTask = copytask.splice(i,1);
     setMainTask(copytask)

  }
  let renderTask = <h2>No Task Available</h2>
   
   if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center  justify-between mb-2'>
          <div className='flex  items-center justify-between w-1/3 '>
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h5 className='text-m font-sm'>{t.desc}</h5>
            
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }}
          className=' text-red-500 rounded font-bold px-2 py-2'>✗</button>
          <button onClick={()=>{
            deleteHandler(i)
          }}
          className=' text-green-500 rounded font-bold px-2 py-2'>✓</button>

        </li>
        
      );
    })
   }
  return (
    <>
    
    <h1 className='bg-black text-yellow-50 m-2 p-5 flex items-center'> To - Do  List</h1>
    <form onSubmit={submitHandler} >
      <input type="text" className='text border-zinc-800 border-2 m-2' 
      placeholder='Enter Task Here'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />
      <input type="text" className='text border-zinc-800 border-2 m-2 ' 
      placeholder='Enter Description Here'
      value={desc}
      onChange={(e)=>{
        setDesc(e.target.value)
      }}/>
      <button className=' text-black text-2xl'>+</button>
    </form>
    <hr />
    <div className='p-3 m-2 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
