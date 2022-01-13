import React from 'react'

const Person = (props) => {
    const {img, name, message } = props;
  return (
    <article className='person-article'>
      <img src={img} />
      <h2>{name}</h2>
      <p>{message}</p>
    </article>
  )
}

export default Person
