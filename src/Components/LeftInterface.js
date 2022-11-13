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
   let goalList = Object.keys(goals).map(goal => {return [goal]});


//remove a step
//edit a goal
//put the focus on the next step(accordian), possibly with a title
//add log-in functionality and tie to storage
//implement storage feature
//add context
//add routes
//make it attractive

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
                    {/* display goal list */}
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