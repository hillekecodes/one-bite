import { useState} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AddGoal from './AddGoal';
import Button from 'react-bootstrap/Button';


const LeftInterface = () => {
  // const localgoals = localStorage.getItem('goals)
   const [ goals, setGoals ] = useState({})

const removeStep = (goal, step) => {
  const filteredGoals = goals[goal].filter(x => x !== step)
  const updatedGoals = {...goals}
  updatedGoals[goal] = filteredGoals
  console.log("updatedGoals", updatedGoals)
  setGoals(updatedGoals)
  // localStorage.setItem('goals', updatedGoals)
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
                      <Nav.Link eventKey={goal}><strong>{goal}</strong></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                   <Tab.Content>
                     <Tab.Pane eventKey={goal}>
                       <ul>
                        { Object.keys(goals).length ? goals[goal].map(step => {
                              return (
                                <li key={step} id={step}>
                                  {step}
                                  <Button variant="light" size="sm" className="btn bg-transparent"
                                    onClick={() => removeStep(goal, step)}>X</Button>
                                </li>
                              )
                           }) : 'No goals yet' }
                        </ul>
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

