import {Container, Row, Col, Button, Card} from 'react-bootstrap'

import prediksi1 from '../assets/img/prediksi1.jpg'
import prediksi2 from '../assets/img/prediksi2.jpg'
import {useNavigate} from "react-router-dom"


const PredictionPage = () => {
  let navigate = useNavigate();
  return (
    <div className="prediksi-page">
      <div className=''>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 >Let's Look At You Health</h2>
        <h2>Future Together</h2>
        <h3>Come prediction your health today !</h3>
        <br/>
      </div>
        <Container >
          <Row>
            <Col>
                <div className='prediksi-card'>
                  <h4 ><b>Stunting</b></h4>
                  <img className='mt-4' src={prediksi1} onClick={()=>navigate('/Stunting')}/>
                </div>
                  <p className=' deck mt-3'><b>Dengan prediksi stunting kita bisa <br/> memahami dan mengatasi risiko yang  mungkin dihadapi anak -anak kita.</b></p>
                  <a href="" className='prediksi-link' onClick={()=>navigate('/Stunting')}>Ayo periksa sekarang !  </a>
                
            </Col>
            <Col>
            <div className='prediksi-card'>
                  <h4 ><b>Diabetes</b></h4>
                  <img className='mt-4' src={prediksi2} onClick={()=>navigate('/Diabetes')}/>
                </div>
                <p className=' deck mt-3'> <b>Prediksi risiko diabetes <br/> Anda sekarang untuk mengambil tindakan sebelum terlambat.</b></p>
                  <a href="" className='prediksi-link' onClick={()=>navigate('/Diabetes')}>Ayo periksa sekarang ! </a>
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default PredictionPage
