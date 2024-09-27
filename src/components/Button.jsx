import React from 'react'

function Button({type,children, extraStyle}) {
  return (
    <button type={type} className={`w-full p-4 font-bold text-lg leading-6 text-white bg-[#1DA1F2] rounded-full border border-transparent ${extraStyle}`}>{children}</button>
  )
}

export default Button
