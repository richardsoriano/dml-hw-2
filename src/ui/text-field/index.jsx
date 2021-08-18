import React, { useState } from 'react'

export default function TextField({
  type = 'text',
  label,
  placeholder,
  value = '',
  onChange = () => {},
}) {
  //   const id = label
  //     .toLowerCase()
  //     .split(' ')
  //     .map((word) => word.replace(/[^a-z]+/g, ''))
  //     .join('-')

  const id = label
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/[^a-z]+/g, ''))
    .join('-')

  return (
    <div className='mr-2'>
      <div>
        <label className='m1-1' htmlFor={id}>
          {label}
        </label>
        :
      </div>
      <input
        className='border rounded-sm p-2 w-full shadow-sm'
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
        onChange={(e) => onChange(e.target.value, e)}
      />
    </div>
  )
}
