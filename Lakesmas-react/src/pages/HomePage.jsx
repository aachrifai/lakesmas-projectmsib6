import {Container, Row, Col, Button, Card} from 'react-bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css';


import prediction from '../assets/img/Prediction.png'
import chatbot from '../assets/img/Chatbot.png'
import faq from '../assets/img/FAQ.png'
import artikel1 from '../assets/img/artikel1.jpg'
import artikel2 from '../assets/img/artikel2.jpg'
import artikel3 from '../assets/img/artikel3.jpg'
import artikel4 from '../assets/img/artikel4.jpg'
import artikel5 from '../assets/img/artikel5.jpg'
import artikel6 from '../assets/img/artikel6.jpg'

import {useNavigate} from "react-router-dom"



const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      {/* -----------------------------------------------------Bagian LandingPage---------------------------------------------------- */}


        <header className="w-100 min-vh-100">
          <Container >
            <Row  className=''>
              <Col>
                <h1 className='header-box '>Your Healthy <br/>Body is Your Main <br/> Priority</h1>
                <br/>
                <p className='text-home'>Dia yang mempunyai kesehatan berati mempunyai <br/>Harapan, dan dia yang punya harapan, memiliki
                <br/>segalanya - Thomas Carlyle <br/> <br/>
                Cek prediksi kesehatan anda bersama Lakesmas</p>
                <Button className='btn btn-warning rounded-1 me-2 tombol' onClick={()=>navigate('/prediction')}>Mulai</Button>
                {/* <Button className='tombol-2' onClick={()=>navigate('/login')}>Login</Button> */}
              </Col>
            </Row>
          </Container>
        </header>
        <div className='artikel w-100 min-vh100'>
        <div className='artikel-info '>
          <img className='three-info' src={prediction}  onClick={()=>navigate('/prediction')}/>
          <img className='three-info' src={chatbot}/>
          <img className='three-info' src={faq}/>
        </div>
      {/* -----------------------------------------------------Bagian LandingPage---------------------------------------------------- */}



      {/* -----------------------------------------------------Bagian Artikel---------------------------------------------------- */}


        <h1 className='artikel-judul fw-bold mt-5 '>Baca 100+ Artikel Baru</h1>
          <Container className='artikel-card'>
            <Row >
              <Col>
              <Card  style={{ width: '25rem' }}>
                            <img className='gambar-card' src={artikel1}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Ciri-Ciri anak stunting dan langkah pencegahan</Card.Title>
                                <Card.Text>
                                    Ciri-ciri anak yang mengalami stunting antara lain pertumbuhan fisik yang terlambat, berat badan yang tidak semuai dengan usia
                                </Card.Text>
                                <Card.Link href="https://www.generasimaju.co.id/artikel/1-tahun/tumbuh-kembang/ciri-anak-stunting?utm_source=google&utm_medium=cpc&utm_campaign=sgm-sem_generic_dsa-gum-aon_cosideration_traffic_Jun-2024&utm_term=dsa&utm_content=GUM1&&&&&gad_source=1&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8twPDgGjFHkSAnjCLVZ3OJaVK4mOz4-9x986Xy0V2TYPPvSxdcijFQaAlilEALw_wcB&gclsrc=aw.d" target='_blank'
                                className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
              <Col>
              <Card style={{ width: '25rem' }}>
                            <img className='gambar-card' src={artikel2}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Memahami Diabetes, Penyebab, Jenis, Gejala, dan Pengobatannya</Card.Title>
                                <Card.Text>
                                Diabetes adalah penyakit metabolik yang terjadi ketika terdapat kadar gula yang tinggi pada tubuh,namun
                                </Card.Text>
                                <Card.Link href="https://www.siloamhospitals.com/informasi-siloam/artikel/diabetes" target='_blank' className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
              <Col>
              <Card style={{ width: '25rem' }}>
                            <img  className='gambar-card' src={artikel3}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Cegah Stunting dengan Perbaikan Pola Makan dan Pola Asuh </Card.Title>
                                <Card.Text>
                                Stunting adalah masalah kurang gizi kronis yang disebabkan oleh kurangnya asupan gizi 
                                </Card.Text>
                                <Card.Link href="https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20180407/1825480/cegah-stunting-dengan-perbaikan-pola-makan-pola-asuh-dan-sanitasi-2/" target='_blank' className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
            </Row>
            <Row>
              <Col>
              <Card style={{ width: '25rem' }}>
                            <img className='gambar-card' src={artikel4}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Mulai Hidup Sehat, Kenali Ciri-Ciri Diabetes di Usia Muda</Card.Title>
                                <Card.Text>
                                Siapa bilang kalau diabetes hanya dialami oleh orang dewasa? Faktanya, anak-anak muda, bahkan anak kecil.</Card.Text>
                                <Card.Link href="https://www.prudential.co.id/id/pulse/article/kenali-ciri-ciri-diabetes-di-usia-muda/" target='_blank' className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
              <Col>
              <Card  style={{ width: '25rem' }}>
                            <img className='gambar-card' src={artikel5}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Mengenal Stunting, Penyebab, Dampak dan Pencegahannya.</Card.Title>
                                <Card.Text>
                                Stunting dapat didefinisikan sebagai gangguan tumbuh kembang anak yang disebabkan masalah gizi kronis sejak anak .</Card.Text>
                                <Card.Link href="#" className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
              <Col>
              <Card  style={{ width: '25rem' }}>
                            <img className='gambar-card' src={artikel6}/>
                            <Card.Body className="bgArtikel">
                                <Card.Title className='fw-bold'>Panduan dan Pola Hidup Sehat Bagi Penderita Diabetes</Card.Title>
                                <Card.Text>
                                Agar pasien diabetes dapat menjalani hidup sehat dan normal, hal utama yang penting untuk dilakukan adalah kadar gula darah selalu.</Card.Text>
                                <Card.Link href="#" className="selanjut">Baca selengkapnya</Card.Link>
                            </Card.Body>
                        </Card>
              </Col>
            </Row>
          </Container>
        </div>
      {/* -----------------------------------------------------Bagian Artikel---------------------------------------------------- */}




      {/* -----------------------------------------------------Bagian FAQ---------------------------------------------------- */}

        <div className='faq py-5 '>
        <Container>
                <Row>
                    <Col className="faqKiri">
                        <div >Frequently Asked Questions</div>
                    </Col>
                    <Col>
                        <div className="faqJudul">
                            Apa itu Stunting ?
                        </div>
                        <div className="faqKanan">
                            <p> Stunting adalah kondisi yang terjadi ketika pertumbuhan anak
                                terhambat atau terhenti karena kurangnya asupan gizi yang
                                memadai, terutama pada masa awal kehidupan, yaitu dari 
                                konsepsi hingga usia dua tahun. Kondisi ini sering kali ditandai 
                                dengan tinggi badan yang lebih pendek dari rata-rata untuk 
                                usia tertentu, yang dapat mempengaruhi perkembangan 
                                fisik dan kognitif anak.</p>
                        </div>
                        <div className="faqJudul">
                            Apa itu Stunting Berbahaya?
                        </div>
                        <div className="faqKanan">
                            <p> Ya, stunting dapat berbahaya dan memiliki dampak serius 
                                terhadap kesehatan dan perkembangan anak.</p>
                        </div>
                        <div className="faqJudul">
                            Apakah diabetes berbahaya ?
                        </div>
                        <div className="faqKanan">
                            <p> Ya, diabetes adalah kondisi yang berbahaya jika tidak 
                                dikelola dengan baik. Diabetes yang tidak terkontrol 
                                dapat menyebabkan berbagai komplikasi 
                                kesehatan jangka panjang.</p>
                        </div>
                        <div className="faqJudul">
                            Apa itu diabetes ?
                        </div>
                        <div className="faqKanan">
                            <p> Diabetes adalah kelompok penyakit yang ditandai dengan 
                                tingginya kadar glukosa (gula) dalam darah dalam jangka 
                                waktu yang lama. </p>
                        </div>
                        <div className="faqJudul">
                            Apa itu web layanan kesehatan ?
                        </div>
                        <div className="faqKanan">
                            <p> Web layanan kesehatan adalah platform digital yang menyediakan berbagai layanan terkait kesehatan, seperti informasi medis,
                              konsultasi dengan dokter atau profesional kesehatan lainnya, pemesanan janji temu, manajemen catatan medis, dan akses ke berbagai
                              sumber daya kesehatan. Platform ini mempermudah pengguna untuk mendapatkan informasi yang akurat, mengelola kesehatan mereka, dan 
                              berkomunikasi dengan penyedia layanan kesehatan tanpa harus hadir secara fisik. Dengan kemudahan akses yang ditawarkan, web layanan 
                              kesehatan dapat meningkatkan efisiensi, kenyamanan, dan kualitas perawatan kesehatan bagi pengguna di mana saja dan kapan saja.</p>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
      {/* -----------------------------------------------------Bagian FAQ---------------------------------------------------- */}
      {/* -----------------------------------------------------Bagian Footer---------------------------------------------------- */}
      <div  className='bg-footer'>
        <h3 className=' judul-footer fw-bold '>Lakesmas</h3>
        <br/>
        <Container>
          <Row>
            <Col>
            <p><b>Waspada Kesehatan Bersama Kami !</b> </p>
            <div className="icon-footer">
              <i className='sosmed' class="bi bi-instagram h2"></i>
              <i className='sosmed' class="bi bi-youtube h2"></i>
              <i className='sosmed' class="bi bi-twitter h2"></i>
              <i className='sosmed' class="bi bi-facebook h2"></i>
          </div>
          <p>Copyright ©  2024 Bima Sakti Team <br/>
          All right reserved</p>
            </Col>
            <Col>
            <h5><b>Kategori</b></h5>
                <br/>
                <p>Home</p>
                <p>Kesehatan</p>
                <p>Tentang</p>
          </Col>
          <Col>
            <h5><b>Layanan</b></h5>
                <br/>
                <p>Prediksi Kesehatan</p>
                <p>Chat Bot</p>
                <p>FAQ</p>
          </Col>
          <Col>
            <h5><b>Kontak</b></h5>
                <br/>
                <i class="bi bi-envelope">  bimasakti@gmail.com</i><br/>
                <i class="bi bi-telephone"> +62 895 4985 2277</i>
          </Col>
          </Row>
        </Container>
      </div>


      {/* -----------------------------------------------------Bagian Footer---------------------------------------------------- */}

    </div>
  )
}

export default HomePage
