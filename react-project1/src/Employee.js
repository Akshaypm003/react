import React from 'react'

function Employee({key,name,age}) {
  return (
    <div>
        <h1> Name:{name}, Age:{age}</h1>
    </div>
  )
}

export default Employee