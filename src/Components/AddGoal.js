import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddGoal = (props) => {
    const [ show, setShow ] = useState(false);
    const [ step, setStep ] = useState(1)
    const [ modalGoal, setModalGoal ] = useState('')
    const [ doIt, setDoIt ] = useState(false)
    const [ wasNoClicked, setWasNoClicked] = useState(false)
    
    useEffect(() => {
        if(doIt) {
            setShow(false)
            setStep(1)
            setModalGoal('');
        }
    }, [doIt]) 


    const handleSave = () => {
      console.log(modalGoal);
      props.setGoals({
        ...props.goals,
        [modalGoal]: [],
      })
      setStep(2)
    }


    const renderStep = () => {
      if (step === 1) {
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
      if (step === 2 && !doIt) {
        if(wasNoClicked){
            // most important next step stuff here
        } else{
            return (
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{ modalGoal }</Form.Label>
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
            <Modal.Title>What is your Goal?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                {/* can i make renderStep its own component? */}
              { renderStep() }
            </Form>
          </Modal.Body>
          
        </Modal>
      </>
    );
}

export default AddGoal;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// function AddGoal() {
//     const [ show, setShow ] = useState(false);
//     const [ steps, setSteps ] = useState([])


//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="light" onClick={handleShow}>
//           + Add a Goal
//         </Button>
  
//         <Modal 
//             show={show} 
//             onHide={handleClose}
//             backdrop="static"    
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>What is your Goal?</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Main Goal</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Your goal here..."
//                   autoFocus
//                 />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }

// export default AddGoal;