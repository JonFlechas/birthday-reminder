import React from 'react'

const Birthday = (props) => {
  const { img, names, age } = props
  return (
    <article className='person'>
      <img src={img} alt='' />
      <div>
        <h4>{names}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default Birthday
