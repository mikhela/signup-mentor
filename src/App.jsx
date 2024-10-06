import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import bg from './images/bg.svg'
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = ''
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className='w-full h-[100vh] bg-slate-900 flex justify-center items-center'>
      <div className="container w-[90%]  md:w-1/2 h-[65vh] md:h-[70vh] bg-white rounded-3xl flex">
          <div className="left-content w-1/2 px-4 pt-2 md:px-8 md:py-6">
            <h1 className='text-slate-900 font-bold text-xl md:text-[30px] mt-1 md:mt-2 lg:mt-5'>Stay updated!</h1>
            <p className='text-slate-700 mt-2 md:mt-4 text-xs md:text-md lg:text-base'>Join 60,000+ product managers receiving monthly updates on:</p>
            <span className='flex gap-2 md:gap-4 mt-2 justify-start items-center lg:mt-4'><span className='bg-red-500 rounded-full px-1.5 text-white text-xs flex justify-center items-center w-6 h-6'><FontAwesomeIcon icon={faCheck} /></span> <span className='text-slate-700 text-xs md:text-md lg:text-base'>Product discovery and building what matters</span></span>
            <span className='flex gap-2 md:gap-4 mt-2 justify-start items-center'><span className='bg-red-500 rounded-full px-1.5 text-white text-xs flex justify-center items-center w-6 h-6'><FontAwesomeIcon icon={faCheck} /></span> <span className='text-slate-700 text-xs md:text-md lg:text-base'>Measuring to ensure updates are a success</span></span>
            <span className='flex gap-2 md:gap-4 mt-2 justify-start items-center'><span className='bg-red-500 rounded-full px-1.5 text-white text-xs flex justify-center items-center w-6 h-6'><FontAwesomeIcon icon={faCheck} /></span> <span className='text-slate-700 text-xs md:text-md lg:text-base'>And much more!</span></span>

            <form className='mt-2 md:mt-4 lg:mt-8' onSubmit={formik.handleSubmit}>
              <label className='text-slate-900 text-[10px] md:text-sm lg:text-md'  htmlFor="email ">Email Address</label>
                <input className='block border-2 border-slate-900 rounded-md w-[350px] max-w-full mt-2' type="email" name="email" id="email"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                  <span className='text-red-600 text-sm md:text-md'>{formik.errors.email}</span>
                ) : null}
              <button className='bg-slate-900 text-white px-4 py-4 text-[8px] md:text-sm lg:text-md rounded-md mt-1 md:mt-2 lg:mt-4 w-[350px] max-w-full' type='submit'>Subscribe to monthly newsletter</button>
             </form>
          </div>
          <div
            className="right-content w-1/2 py-4 h-[100%] rounded-3xl"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat', 
            }}
          >
          </div>
      </div>
    </div>
  )
}
