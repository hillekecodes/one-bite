import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddGoal(goals, setGoals) {
    const [ show, setShow ] = useState(false); // const show = false
    const [ step, setStep ] = useState(1)
    const [ modalGoal, setModalGoal ] = useState('')
    const [ doIt, canYouDoIt ] = useState(false)


    console.log("STEP? ", step)

    const handleSave = () => {
      // Figure out how to spread an array in state
      // console.log("goals 1", goals)
      // const newGoals = goals
      // console.log("newGoals", newGoals.push(modalGoal))
      setGoals(newGoals)
      setStep(2)
    }

    const handleNextClosestStep = () => {
      // setStep(3)
    }

    const handleStepOneClose = () => {
      // Look into setting step back to 1 after exiting modal
      // setStep(1)
      setShow(false)
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
        <Button variant="secondary" onClick={handleStepOneClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
        </Form.Group>
        )
      }
      if (step === 2) {
        return (
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{ goals.length ? goals[0] : '' }</Form.Label>
          {/* goals.map(x => {
            <Goal>
          }) */}
          <Form.Label>Can you do this now?</Form.Label>
           <Modal.Footer>
        <Button variant="secondary" onClick={handleNextClosestStep}>
          No
        </Button>
        <Button variant="primary" onClick={() => canYouDoIt(true)}>
          Yes
        </Button>
      </Modal.Footer>
        </Form.Group>
        )
      }
      // if (step === 3) {
      //   return (
      // //  Do it   // 
      //   )
      // }
      // if (step === 4) {
      //   return (
      // //  No    // 
      //   )
      // }
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