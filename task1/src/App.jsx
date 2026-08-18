import { useState } from 'react'

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "David",
      salary: 300000,
      gender: "male"
    },
    {
      id: 2,
      name: "Areg",
      salary: 900000,
      gender: "male"
    },
    {
      id: 3,
      name: "Nare",
      salary: 450000,
      gender: "female"
    }
  ])

  function deletePerson(id) {
    setPeople(
      people.filter((p) => p.id !==id)
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.salary}</td>
            <td>{person.gender}</td>
            <td>
              <button onClick={() => deletePerson(person.id)}>
                Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App
