const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total = ({ sum }) => 
<h4>
  total of {sum} exercises
</h4>


const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />   
    <Part
      part={parts[3]} 
    />         
  </>
const Course = ({course}) =>{
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises +course.parts[3].exercises} />    
  </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App