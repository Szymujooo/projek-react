import Person from './Person'

function PeopleList() {
const people=[{name: 'Jakub', age: 15}, {name: 'Maciek', age: 48}, {name: 'Bartek', age: 22}]

const filterPeople= people.filter((person) => person.age >= 18)

return <div className="wrapper">{filterPeople.map((person, index) => {
return <Person key={index} name={person.name} age={person.age}><b>Tekst przekazany jako dziecko</b></Person>

})}</div>
}

export default PeopleList