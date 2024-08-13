import prediction from '../assets/img/Prediction.png'
import chatbot from '../assets/img/Chatbot.png'
import faq from '../assets/img/FAQ.png'

const ArtikelPage = () => {
  return (
    <div className='artikel-info'>
        <img className='three-info' src={prediction}/>
        <img className='three-info' src={chatbot}/>
        <img className='three-info' src={faq}/>
    </div>
  )
}

export default ArtikelPage
