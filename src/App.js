import React from 'react'

import './App.css'
import { people } from './People'
import Birthday from './Birthday'

const App = () => {
  const numberOfBirthdays = people.length
  return (
    <main>
      <section className='container'>
        <h3>{numberOfBirthdays} birthdays today</h3>
        {people.map((person) => {
          return <Birthday key={person.id} {...person}></Birthday>
        })}
      </section>
    </main>
  )
}

export default App
