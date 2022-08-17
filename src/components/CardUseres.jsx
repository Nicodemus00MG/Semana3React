import React from 'react'

const CardUseres = ({users}) => {
  return (
    <div className='cardUseres'>
        <img src={users?.picture.large} alt="" />
        <h1>{users?.name.title} {users?.name.first} {users?.name.last}</h1>
    </div>
  )
}

export default CardUseres