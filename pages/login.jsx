import Link from 'next/link'
import React from 'react'

import {IoLogoGoogle, IoLogoFacebook} from 'react-icons/io'

const Login = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-c1'>
        <div className="flex items-center flex-col w-full sm:w-3/4">

          <div className="text-center">
            <div className="text-2xl px-1 sm:text-4xl text-bold">
              Login to your account
            </div>
            <div className="mt-3 text-c3">
              Chat with someone you like...
            </div>
          </div>

          <div className="flex items-center justify-center flex-col sm:flex-row gap-2 w-full mt-10 mb-5">
            <div className="bg-gradient-to-r from-indigo-500 vio-purple-500 to-pink-500 w-3/4 sm:w-1/2 md:w-[300px] rounded-md h-14 cursor-pointer p-[1px]">
              <div className="flex justify-center items-center text-white gap-3 bg-c1 font-semibold w-full h-full rounded-md">
                <IoLogoGoogle size={24} />
                <span>Login with Google</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 vio-purple-500 to-pink-500 w-3/4 sm:w-1/2 md:w-[300px] rounded-md h-14 cursor-pointer p-[1px]">
              <div className="flex justify-center items-center text-white gap-3 bg-c1 font-semibold w-full h-full rounded-md">
              <IoLogoFacebook size={24} />
                <span>Login with Facebook</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="w-5 h-[1px] bg-c3"></span>
            <span className="text-c3 font-semibold">OR</span>
            <span className="w-5 h-[1px] bg-c3"></span>
          </div>

          <form className="flex flex-col items-center gap-3 mt-5 w-3/4">
            <input type="email" name="email" placeholder='Email' className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3" autoComplete='off' />
            <input type="password" name="password" placeholder='Password' className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3" autoComplete='off' />
            <div className="text-right w-full text-c3">
              <span className='cursor-pointer'>Forgot Password?</span>
            </div>
            <button className='mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Login to you Account</button>
          </form>

          <div className="flex justify-center gap-1 text-c3 mt-5">
            <span>Don't have an account?</span>
            <Link href={'/register'} className='font-semibold text-white underline underline-offset-2 cursor-pointer'>Register Now</Link>
          </div>

        </div>
    </div>
  )
}

export default Login