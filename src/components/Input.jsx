import React from 'react'

function Input({extraStyle, type, placeholder, name}) {
  return (
    <input className={`w-full px-5 py-6 outline-none text-lg leading-6 border border-[#CCCCCC] rounded-md ${extraStyle}`} type={type} placeholder={placeholder} name={name} required />
  )
}

export default Input
