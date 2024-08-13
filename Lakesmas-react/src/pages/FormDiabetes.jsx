import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <h4>Hasil Prediksi Diabetes</h4>
      {props.loading && <p>Loading...</p>}
        {props.error && <p style={{ color: 'red' }}>Error: {props.error}</p>}
        {props.result && <p>Prediksi: {props.result}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button className='left-button' onClick={props.onHide}>Back</Button>
      </Modal.Footer>
    </Modal>
  );
}

const FormDiabetesPage = () => {
  const [pregnancies, setPregnancies] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [insulin, setInsulin] = useState('');
  const [bmi, setBmi] = useState('');
  const [dpf, setDpf] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://bhimasakti-api-production.up.railway.app/diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pregnancies: parseInt(pregnancies, 10),
          glucose: parseFloat(glucose),
          blood_pressure: parseFloat(bloodPressure),
          skin_thickness: parseFloat(skinThickness),
          insulin: parseFloat(insulin),
          bmi: parseFloat(bmi),
          dpf: parseFloat(dpf),
          age: parseInt(age, 10)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.prediction);
      console.log(data.prediction)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setModalShow(true);
    }
  };

  return (
    <div className='diabetes-form'>
      <br />
      <br />
      <br />
      <br />
      <h1>Diabetes Prediction</h1>
      <div className='bg-diabetes'>
        <Container>
          <Row>
            <Col>
              <div className="container px-5 my-5">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="pregnacies" type="number" placeholder="Pregnacies" value={pregnancies} onChange={(e) => setPregnancies(e.target.value)} />
                    <label htmlFor="pregnacies">Pregnacies</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="glucose" type="number" placeholder="Glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)} />
                    <label htmlFor="glucose">Glucose</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="bloodPressure" type="number" placeholder="Blood Pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} />
                    <label htmlFor="bloodPressure">Blood Pressure</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="skinThickness" type="number" placeholder="Skin Thickness" value={skinThickness} onChange={(e) => setSkinThickness(e.target.value)} />
                    <label htmlFor="skinThickness">Skin Thickness</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="insulin" type="number" placeholder="Insulin" value={insulin} onChange={(e) => setInsulin(e.target.value)} />
                    <label htmlFor="insulin">Insulin</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="bmi" type="number" placeholder="BMI" value={bmi} onChange={(e) => setBmi(e.target.value)} />
                    <label htmlFor="bmi">BMI</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="diabetesPedigreeFuncion" type="number" placeholder="Diabetes Pedigree Funcion" value={dpf} onChange={(e) => setDpf(e.target.value)} />
                    <label htmlFor="diabetesPedigreeFuncion">Diabetes Pedigree Funcion</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    <label htmlFor="age">Age</label>
                  </div>
                  <div className="button-container">
                    <Button className="left-button">Back</Button>
                    <Button className='right-button' type="submit" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</Button>
                  </div>
                </form>
                {error && <p className="text-danger mt-3">Error: {error}</p>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        result={result}
      />
    </div>
  );
}

export default FormDiabetesPage;
