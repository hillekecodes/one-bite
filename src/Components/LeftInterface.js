import { useState} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import Goal from './Goal';
import AddGoal from './AddGoal';

function LeftInterface() {
   const [ goals, setGoals ] = useState([])
   console.log("GOALS IN LEFT INT: ", goals)
  const goal = [
    <ul>
      <li>Be debt-free in X yearss</li>
      <li>Make bigger payments on outstanding debt</li>
      <li>Increase income</li>
      <li>Get a higher paying job</li>
      <li>Learn to code</li>
      <li>Sign up for a bootcamp</li>
      <li>Decide on a bootcamp</li>
      <li>Research coding bootcamps</li>
    </ul>
  ]

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Goal 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Goal 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/* display goal list */}
              <Tab.Pane eventKey="first">
                { goal }
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                2nd goal here
                {/* <Goal /> */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
      {/* possible to pass props down <AddGoal goalText={props} /> */}
      <AddGoal goals={goals} setGoals={setGoals} />

    </div>
  );
}

export default LeftInterface;