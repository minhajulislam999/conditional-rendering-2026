import React from 'react'

function RenderingList({abo}) {
    const listItem = abo.map(person=><li>{person}</li>)
    
  return (
    <div>
      <ul>{listItem}</ul>
      <ol>{listItem}</ol>
    </div>
  )
}

export default RenderingList
