import React from "react";
import students from '../../data/students'

export default props => {
  const listItems = students.map(student => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} - {student.score}
      </li>
    ) 
  })

  return (
    <div>
      <ul style={{listStyle: "none"}} >{listItems}</ul>
    </div>
  )
}