import React from 'react'
import { people } from '../public/data/data';
import { getImageUrl } from '../public/data/utilitis';

function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const physicists = people.filter(person => person.profession === 'physicist');
    const mathematicians = people.filter(person => person.profession === 'mathmetician');
    const allPeople = people.map(people => {
        return(
            <div>

<img src={getImageUrl(people)} alt="" srcset="" />
        <li key={people.id}>
            <p>{people.name}</p>
            <p>{people.profession}</p>
            <p>{people.accomplishment}</p>
            <p>{people.id}</p>



        </li>
            </div>

        ) 
    
    })

    const mathmaticianList = mathematicians.map(person => {
        return <li key={person.id}>
            <img src={getImageUrl(person)} alt="" srcset="" />
            <p>
                {person.name} : {' ' + person.profession + ' '}
            </p>

        </li>
    })

    const listItemsPhy = physicists.map(person =>

        <li key={person.id}>
            <img src={getImageUrl(person)} alt="" srcset="" />
            <p>
                {person.name} : {' ' + person.profession + ' '} known for {person.accomplishment}

            </p>
        </li>
    )

    const listItems = chemists.map(person =>

        <li key={person.id}>
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
            <ul>{listItemsPhy}</ul>
            <ul>{mathmaticianList}</ul>
            <h1>Al People</h1>
            <ul>{allPeople}</ul>
        </div>
    )
}

export default List
