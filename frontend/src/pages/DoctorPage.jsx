import React from 'react'
import './doctorPage.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Img1 from '../assets/images/DoctorPage/img1.png'
import Img2 from '../assets/images/DoctorPage/img2.png'
import Img3 from '../assets/images/DoctorPage/img3.png'
import Img4 from '../assets/images/DoctorPage/img4.png'
import Img5 from '../assets/images/DoctorPage/img5.png'
import Img6 from '../assets/images/DoctorPage/img6.png'
import Img7 from '../assets/images/DoctorPage/img7.png'
import NavBarNew from '../components/NavBarNew.jsx'

function DoctorPage() {
  return (
    <div className='doctorPage'>
        <NavBar/>
        <div>
            <img src={Img1} alt="Doctor Page Banner" className='doctorPageImage' />
        </div>
        <div className='newNavBar'>
            <NavBarNew />
        </div>
        <div className="doctorPageText ">
            <h1>Your Health, Our Priority...</h1>
            <h1>Find Trusted Doctors &</h1>
            <h1>Clinics</h1>
        </div>
        <div className="doctorPageSubText">
            <h1 className="doctorPage-header-details">Doctors & Clinics</h1>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img2} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>City Health Clinic – Colombo</h1>
                <h3 className='doctorCardSubtitle'>Specialist: General Physician</h3>
                <h4 className='doctorCardTime'>Time: Mon–Sat | 9:00 AM – 12:00 PM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>General illness treatment</li>
                    <li className='list'>Blood pressure and diabetes checkups</li>
                    <li className='list'>Online prescription service</li>
                    <li className='list'>Follow-up reminders</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>A top-rated family clinic offering friendly and quick medical care for all ages.</p>
            </div>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img3} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>Sunshine Pediatric Care – Kandy</h1>
                <h3 className='doctorCardSubtitle'>Specialist: Pediatrician</h3>
                <h4 className='doctorCardTime'>Time: Mon–Fri | 10:00 AM – 1:00 PM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>Child growth tracking</li>
                    <li className='list'>Immunization scheduling</li>
                    <li className='list'>Allergy testing</li>
                    <li className='list'>Online video consultations</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>Focused child care with experienced pediatricians and play-friendly clinic spaces.</p>
            </div>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img4} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>Elite Medical Center – Galle</h1>
                <h3 className='doctorCardSubtitle'>Specialist: ENT Specialist</h3>
                <h4 className='doctorCardTime'>Time: Tue–Sun | 2:00 PM – 5:00 PM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>Hearing tests</li>
                    <li className='list'>Nasal endoscopy</li>
                    <li className='list'>Ear wax removal</li>
                    <li className='list'>Allergy control treatments</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>Specialized ENT care for sinus, allergy, and ear balance issues.</p>
            </div>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img5} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>HeartCare Hospital – Colombo</h1>
                <h3 className='doctorCardSubtitle'>Specialist: Cardiologist</h3>
                <h4 className='doctorCardTime'>Time: Mon–Fri | 4:00 PM – 6:30 PM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>ECG and echo testing</li>
                    <li className='list'>Cholesterol and heart health plan</li>
                    <li className='list'>Medication management</li>
                    <li className='list'>Lifestyle consultation</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>Book a heart expert for early detection and long-term cardiac wellness.</p>
            </div>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img6} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>Hope Family Clinic – Negombo</h1>
                <h3 className='doctorCardSubtitle'>Specialist: Family Medicine</h3>
                <h4 className='doctorCardTime'>Time: Daily | 8:00 AM – 11:00 AM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>Family check-ups</li>
                    <li className='list'>Women's health monitoringn</li>
                    <li className='list'>Diet & weight consultations</li>
                    <li className='list'>Free blood pressure monitoring</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>A trusted family-friendly clinic with experienced GPs and supportive staff.</p>
            </div>
        </div>

        <div className='doctorCard'>
            <div className='doctorCardLeft'>
                <div>
                    <img src={Img7} alt="Doctor Card" className='doctorCardImage'/>
                </div>
                <div>
                    <button className='doctorCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='doctorCardRight'>
                <h1 className='doctorCardTitle'>WellLife Centre – Nuwara Eliya</h1>
                <h3 className='doctorCardSubtitle'>Specialist: Dermatologist</h3>
                <h4 className='doctorCardTime'>Time: Mon–Sat | 3:00 PM – 6:00 PM</h4>
                <h3 className='doctorCardFeatures'>Features:</h3>
                <ul className='doctorCardFeatureList'>
                    <li className='list'>Acne treatment</li>
                    <li className='list'>Hair loss analysis</li>
                    <li className='list'>Skin rash diagnosis</li>
                    <li className='list'>Laser therapy</li>
                </ul>
                <h3 className='doctorCardDescription'>Description:</h3>
                <p className='doctorCardDescriptionText'>Personal skincare with evidence-based solutions and cosmetic dermatology.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default DoctorPage
