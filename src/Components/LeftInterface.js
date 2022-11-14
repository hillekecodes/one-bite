import { useState} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AddGoal from './AddGoal';


const LeftInterface = () => {
   const [ goals, setGoals ] = useState({
    exampleGoal:['first step', 'second step', 'third step']
   })

//IN PROGRESS
//removeStep isn't working
//editGoal
//add context
//user authentication, sort of tied to context
//sign in modal, (need SM buttons, register button)

//NEED TO START
//put the focus on the next step(accordian the others?)
//build createNewUser functionality and tie user info to storage
//implement local storage
//add routes
//make it purdy
//fix title of AddGoal modal to be the previous step

let goalList = Object.keys(goals).map(goal => {return [goal]});

const removeStep = (id) => {
  console.log('removeStep')
  const newGoals = goalList.filter((step) => step.id !== id);
  setGoals(newGoals)
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
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey={goal}>
                      <ul dangerouslySetInnerHTML={{__html: 
                            goals[goal].map(step => `
                              <li id=${step}>${step}</li>`).join('')
                              // <button type="button" onClick={removeStep}>X</button>
                            }} >
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