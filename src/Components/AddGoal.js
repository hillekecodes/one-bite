import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddGoal = (props) => {
    const [ show, setShow ] = useState(false);
    const [ page, setPage ] = useState(1)
    const [ modalGoal, setModalGoal ] = useState('')
    const [ doIt, setDoIt ] = useState(false)
    const [ wasNoClicked, setWasNoClicked] = useState(false)
    const [ nextStep, setNextStep ] = useState('')

    useEffect(() => {
        if(doIt) {
            setShow(false)
            setPage(1)
            setModalGoal('');
        }
    }, [doIt]) 

    // useEffect(() => {
    //   localStorage.('goals', goalArr)
    // }, [the goal array])


    const handleSave = () => {
      console.log('modalGoal inside handleSave', modalGoal);
      props.setGoals({
        ...props.goals,
        [modalGoal]: [],
      })
      setWasNoClicked(false)
      setPage(2)
      setDoIt(false)
    }

    const handleNextStep = () => {
      console.log('nextStep inside handleNextStep', nextStep)
      let goalsCopy = {
        ...props.goals
      };
      goalsCopy[modalGoal].push(nextStep);
      props.setGoals(goalsCopy);
      setWasNoClicked(false)
      setPage(2)
      setNextStep('');
    }

    const renderStep = () => {
      if (page === 1) {
        return (
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Main Goal</Form.Label>
            <Form.Control
                onChange={(e) => setModalGoal(e.target.value)}
                value={modalGoal}
                type="text"
                placeholder="Your goal here..."
                autoFocus
              />
            <Modal.Footer>
                <Button variant="secondary" onClick={(() => setShow(false))}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
              </Modal.Footer>
        </Form.Group>
        )
      }
//ELSE...
      if (page === 2 && !doIt) {
        if(wasNoClicked){
          return(
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>What is the most important next step to accomplish that goal?</Form.Label>
              <Form.Control
                  onChange={(e) => setNextStep(e.target.value)}
                  value={nextStep}
                  type="text"
                  placeholder="Your next step here..."
                  autoFocus
              />
              <Modal.Footer>
                  <Button variant="secondary" onClick={(() => setShow(false))}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleNextStep}>
                      Save Changes
                  </Button>
              </Modal.Footer>
            </Form.Group>
          )
        } else{
            return (
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Can you do this now?</Form.Label>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setWasNoClicked(true)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => setDoIt(true)}>
                        Yes
                    </Button>
                </Modal.Footer>
              </Form.Group>
            )
          }
      }
    }
  
    return (
      <>
        <Button variant="light" onClick={() => setShow(true)}>
          + Add a Goal
        </Button>
        <Modal 
            show={show} 
            onHide={() => setShow(false)}
            backdrop="static"    
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.goals ? Object.keys(props.goals)[0]: 'What is your Goal?'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                {/* make renderStep its own component? */}
              { renderStep() }
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default AddGoal;
