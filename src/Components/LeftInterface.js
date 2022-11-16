import { useState} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AddGoal from './AddGoal';


const LeftInterface = () => {
  // const localgoals = localStorage.getItem('goals)
   const [ goals, setGoals ] = useState({
    exampleGoal:['first step', 'second step', 'third step']
   })

//IN PROGRESS
//removeStep isn't working
//editGoal
//add context
//user authentication, sort of tied to context
//sign in modal needs SM buttons and register button

//have a landing page that explains the concept
//and invites user to log in or create a profile
//use routes to make that happen

//NEED TO START
//put the focus on the next step(accordian the others?)
//add routes
//make it purdy
//fix title of AddGoal modal to be the previous step

const removeStep = (goal, step) => {
  const filteredGoals = goals[goal].filter(x => x !== step)
  const updatedGoals = {...goals}
  updatedGoals[goal] = filteredGoals
  console.log("updatedGoals", updatedGoals)
  setGoals(updatedGoals)
  // localStorage.setItem('goals', updatedGoals)
}

const editGoal = (key) => {
  //code here to edit the goal
  //open modal back up or edit in place?
}

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          {
          Object.keys(goals).map(goal => (
            <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey={goal}>{goal}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                {/* make a new component or f() */}
                {/* { renderSteps(goals) } */}
                <Col sm={9}>
                   <Tab.Content>
                     <Tab.Pane eventKey={goal}>
                       <ul>
                        { Object.keys(goals).length ? goals[goal].map(step => {
                              return (
                                <li key={step} id={step}>{step}
                                <button type="button" onClick={() => removeStep(goal, step)}>X</button></li>
                              )
                           }) : 'No goals yet' }
                        </ul>
                      {/* <button onClick={editGoal}>Edit</button> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>            
              ))}
      </Tab.Container>
      <AddGoal goals={goals} setGoals={setGoals} />
    </>
  );
}

export default LeftInterface;




// const renderSteps = (goals) => {
//   return(
//     Object.keys(goals).map(goal => (
//       <Col sm={9}>
//         <Tab.Content>
//           <Tab.Pane eventKey={goal}>
//             {/* <ul dangerouslySetInnerHTML={{__html: 
//                   goals[goal].map(step => `
//                     <li id=${step}>${step}</li>`).join('')
//                     <button type="button" onClick={removeStep}>X</button>
//                   }} >
//             </ul> */}
//             <ul>
//               { Object.keys(goals).length ? goals[goal].map(step => {
//                 return (
//                   <li key={step} id={step}>{step}
//                   <button type="button" onClick={() => removeStep(goal, step)}>X</button></li>
//                 )
//               }) : 'No goals yet' }
//             </ul>
//             {/* <button onClick={editGoal}>Edit</button> */}
//           </Tab.Pane>
//         </Tab.Content>
//       </Col>
// )))};

 {/* <ul dangerouslySetInnerHTML={{__html: 
//                             goals[goal].map(step => `
//                               <li id=${step}>${step}</li>`).join('')
//                               <button type="button" onClick={removeStep}>X</button>
//                             }} >
//                       </ul> */}