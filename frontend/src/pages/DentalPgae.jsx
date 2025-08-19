import React from 'react'
import './DentalPage.css'
import NavBar from '../components/NavBar.jsx'
import Img0 from '../assets/images/DentalPage/img0.png'
import Img1 from '../assets/images/DentalPage/img1.png'
import Img2 from '../assets/images/DentalPage/img2.png'
import Img3 from '../assets/images/DentalPage/img3.png'
import Img4 from '../assets/images/DentalPage/img4.png'
import Img5 from '../assets/images/DentalPage/img5.png'
import Img6 from '../assets/images/DentalPage/img6.png'
import Footer from '../components/Footer.jsx'
import NavBarNew from '../components/NavBarNew.jsx'


function DentalPage() {
  return (
    <div className='dentalPage'>
            <NavBar/>
            <div>
                <img src={Img0} alt="Dental Page Banner" className='dentalPageImage' />
            </div>
            <div className='newNavBar'>
                <NavBarNew />
            </div>
            <div className="dentalPageText ">
                <h1>Bright Smiles Start Here... </h1>
                <h1>Find Trusted Dentists &</h1>
                <h1>Clinics</h1>
            </div>
            <div className="dentalPageSubText">
                <h1 className="dentalPage-header-details" id='service-topic'>Dental Services</h1>
            </div>
    
            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img1} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>SmileCare Dental Studio – Colombo</h1>
                    <h3 className='dentalCardSubtitle'>Service: Teeth Cleaning</h3>
                    <h4 className='dentalCardTime'>Time: Mon–Sat | 9:00 AM – 12:00 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Scaling and polishing</li>
                        <li className='list'>Plaque removal</li>
                        <li className='list'>Fluoride treatment</li>
                        <li className='list'>Gum health checks</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Advanced cleaning for brighter, healthier smiles in just one visit.</p>
                </div>
            </div>

            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img2} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>OralFix Dental Center – Gampaha</h1>
                    <h3 className='dentalCardSubtitle'>Service: Braces & Invisalign</h3>
                    <h4 className='dentalCardTime'>Time: Tue–Sun | 11:00 AM – 1:00 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Free assessment</li>
                        <li className='list'>Braces fitting</li>
                        <li className='list'>Monthly follow-ups</li>
                        <li className='list'>Payment plans available</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Get the perfect smile with orthodontic solutions for all ages.</p>
                </div>
            </div>

            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img3} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>White Pearl Dental – Kandy</h1>
                    <h3 className='dentalCardSubtitle'>Service: Root Canal</h3>
                    <h4 className='dentalCardTime'>Time: Mon–Fri | 2:00 PM – 5:00 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Painless procedures</li>
                        <li className='list'>Single/multi-visit options</li>
                        <li className='list'>Digital X-rays</li>
                        <li className='list'>Post-treatment care</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Save your tooth with gentle and effective endodontic care.</p>
                </div>
            </div>

            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img4} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>City Dental Hub – Colombo</h1>
                    <h3 className='dentalCardSubtitle'>Service: Tooth Extraction</h3>
                    <h4 className='dentalCardTime'>Time: Daily | 10:00 AM – 12:00 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Simple & surgical extraction</li>
                        <li className='list'>Aftercare advice</li>
                        <li className='list'>Emergency slots</li>
                        <li className='list'>Wisdom tooth removal</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Professional whitening for a glowing, confident smile.</p>
                </div>
            </div>

            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img5} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>Care&Smile Dentistry – Matara</h1>
                    <h3 className='dentalCardSubtitle'>Service: Pediatric Dentistry</h3>
                    <h4 className='dentalCardTime'>Time: Mon–Sat | 9:00 AM – 12:30 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Cavity filling for kids</li>
                        <li className='list'>Baby teeth care</li>
                        <li className='list'>Friendly, calm environment</li>
                        <li className='list'>Parent education support</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Gentle and fun dental care for your little ones.</p>
                </div>
            </div>

            <div className='dentalCard'>
                <div className='dentalCardLeft'>
                    <div>
                        <img src={Img6} alt="Dental Card" className='dentalCardImage'/>
                    </div>
                    <div>
                        <button className='dentalCardButton'>Schedule Now</button>
                    </div>
                </div>
                <div className='dentalCardRight'>
                    <h1 className='dentalCardTitle'>Sparkle Dental – Kurunegala</h1>
                    <h3 className='dentalCardSubtitle'>Service: Teeth Whitening</h3>
                    <h4 className='dentalCardTime'>Time: Daily | 1:00 PM – 4:00 PM</h4>
                    <h3 className='dentalCardFeatures'>Features:</h3>
                    <ul className='dentalCardFeatureList'>
                        <li className='list'>Laser whitening</li>
                        <li className='list'>Sensitivity protection</li>
                        <li className='list'>One-hour session</li>
                        <li className='list'>Affordable packages</li>
                    </ul>
                    <h3 className='dentalCardDescription'>Description:</h3>
                    <p className='dentalCardDescriptionText'>Professional whitening for a glowing, confident smile.</p>
                </div>
            </div>
    
            <Footer/>
        </div>
  )
}

export default DentalPage
