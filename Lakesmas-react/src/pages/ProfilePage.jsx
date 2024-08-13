import { Container,Row,Col, Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

import foto from '../assets/img/upin.png'


const ProfilePage = () => {
  let navigate = useNavigate();

  return (
    <div className="bg-profil">
      <br/>
      <br/>
      <br/>
      <br/>
        <Container className="mt-5"> 
            <Row>
              <Col className="foto1">
                <img className="foto mt-4" src={foto}/>
                <h2><b>Jamal</b></h2>
                <Button onClick={()=>navigate('/home')} className="logout">Logout</Button>
              </Col>
              <Col className="data">
                <h2><b>Profil Pengguna</b></h2>
              <div class="container px-5 my-5">
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="form-floating mb-3">
            <input class="form-control" id="nama" type="text" placeholder="Nama" data-sb-validations="required" />
            <label for="nama">Nama</label>
            <div class="invalid-feedback" data-sb-feedback="nama:required">Nama is required.</div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="noTelepon" type="text" placeholder="No Telepon" data-sb-validations="required" />
            <label for="noTelepon">No Telepon</label>
            <div class="invalid-feedback" data-sb-feedback="noTelepon:required">No Telepon is required.</div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="jenisKelamin" type="text" placeholder="Jenis Kelamin " data-sb-validations="required" />
            <label for="jenisKelamin">Jenis Kelamin </label>
            <div class="invalid-feedback" data-sb-feedback="jenisKelamin:required">Jenis Kelamin is required.</div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="tanggalLahir" type="text" placeholder="Tanggal Lahir" data-sb-validations="required" />
            <label for="tanggalLahir">Tanggal Lahir</label>
            <div class="invalid-feedback" data-sb-feedback="tanggalLahir:required">Tanggal Lahir is required.</div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="email" type="text" placeholder="Email" data-sb-validations="required" />
            <label for="email">Email</label>
            <div class="invalid-feedback" data-sb-feedback="email:required">Email is required.</div>
        </div>
        <div class="d-none" id="submitSuccessMessage">
            <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
        </div>
        <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div class="d-grid">
            <button className="right-button" class="btn btn-primary btn-lg " id="submitButton" type="submit">Save</button>
        </div>
    </form>
</div>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
              </Col>
            </Row>

        </Container>
    </div>
  )
}

export default ProfilePage
