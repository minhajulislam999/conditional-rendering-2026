import React from 'react'
import { people } from '../public/data/data';
import { getImageUrl } from '../public/data/utilitis';

function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    
    const listItems = chemists.map(person =>

        <li>
            <img src={getImageUrl(person)} alt="" srcset="" />

            <p>
           {/* + = */}
            <b> {person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
        </li>
        
    )
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List
