import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Komponen Modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='modal-body'>
        <h4>Hasil Prediksi Stunting</h4>
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


const FormStuntingPage = () => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [umur, setUmur] = useState('');
  const [kelamin, setKelamin] = useState('Laki-Laki');
  const [tinggiBadan, setTinggiBadan] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setModalShow(true);  // Show modal immediately after submit

    try {
      const response = await fetch('https://bhimasakti-api-production.up.railway.app/stunting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          umur: parseInt(umur, 10),
          kelamin: kelamin === 'Laki-Laki' ? 'male' : 'female',
          tinggi_badan: parseFloat(tinggiBadan)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.stunt_predict);
      console.log(data.stunt_predict)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stunting-form">
      <br /><br /><br /><br /><br /><br />
      <div className="bg-stunting">
        <h1>Stunting Prediction</h1>
        <div className="container px-5 my-5">
          <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <select className="form-select" id="jenisKelamin" aria-label="Jenis Kelamin" value={kelamin} onChange={(e) => setKelamin(e.target.value)} required>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <label htmlFor="jenisKelamin">Jenis Kelamin</label>
            </div>
            <div className="form-floating mb-3">
              <input className="form-control" id="umur" type="number" placeholder="Umur" value={umur} onChange={(e) => setUmur(e.target.value)} required />
              <label htmlFor="umur">Umur</label>
              <div className="invalid-feedback" data-sb-feedback="umur:required">Umur is required.</div>
            </div>
            <div className="form-floating mb-3">
              <input className="form-control" id="tinggiBadan" type="number" placeholder="Tinggi Badan" value={tinggiBadan} onChange={(e) => setTinggiBadan(e.target.value)} required />
              <label htmlFor="tinggiBadan">Tinggi Badan</label>
              <div className="invalid-feedback" data-sb-feedback="tinggiBadan:required">Tinggi Badan is required.</div>
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <div className="button-container">
              <Button className="left-button" onClick={() => navigate(-1)}>Back</Button>
              <Button className="right-button" type="submit">Submit</Button>
            </div>
          </form>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          result={result}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default FormStuntingPage;