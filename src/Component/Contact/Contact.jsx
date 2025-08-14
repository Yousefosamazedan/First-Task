
import { useState } from 'react';
import MainHeaderDark from '../MainHeaderDark/MainHeaderDark.jsx';
export default function Contact() {

  const [isChange, setChange] = useState({
    name: false,
    age: false,
    email: false,
    password: false
  });

  function handleChange(e) {
    setChange((prev) => ({
      ...prev, [e.target.id]: true
    })
    )
  }


  return <>
    <MainHeaderDark>Contact Section</MainHeaderDark>
    <div className='mx-auto w-full sm:w-11/12 md:w-10/12'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-group relative py-2 mb-6'>
          <input type="text" id="name" placeholder='userName:' className='w-full outline-none border-b-2' onChange={handleChange} />
          <label
            className={`absolute left-0 text-green 
            ${isChange.name ? 'opacity-100 top-[-30px]' : 'opacity-0 top[20px] '} 
            transition[opacity, top] duration-500`}
            htmlFor="name">
            userName:
          </label>
        </div>
        <div className='form-group relative py-2 mb-6'>
          <input type="text" id="age" placeholder='userAge:' className='w-full outline-none border-b-2' onChange={handleChange} />
          <label htmlFor="age"
            className={`absolute left-0 text-green 
                ${isChange.age ? 'opacity-100 top-[-30px]' : 'opacity-0 top[20px] '} 
                transition[opacity, top] duration-500`}>
            userAge:
          </label>
        </div>
        <div className='form-group relative py-2 mb-6'>
          <input type="email" id="email" placeholder='userEmail:' className='w-full outline-none border-b-2' onChange={handleChange} />
          <label htmlFor="name"
            className={`absolute left-0 text-green  
                ${isChange.email ? 'opacity-100 top-[-30px]' : 'opacity-0 top[20px] '} 
                transition[opacity, top] duration-500`}>
            userEmail:
          </label>
        </div>
        <div className='form-group relative py-2 mb-6'>
          <input type="text" id="password" placeholder='userPassword:' className='w-full outline-none border-b-2' onChange={handleChange} />
          <label htmlFor="name"
            className={`absolute left-0 text-green  
                ${isChange.password ? 'opacity-100 top-[-30px]' : 'opacity-0 top[20px] '} 
                transition[opacity, top] duration-500`}>
            userPassword:
          </label>
        </div>
        <button className=' bg-green/70 py-2 px-4 cursor-pointer rounded-md ml-auto block hover:bg-green hover:text-white transition-colors duration-500'>Submit</button>
      </form>
    </div>

  </>
}
