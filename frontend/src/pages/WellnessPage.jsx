import React from 'react'
import './WellnessPage.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Img1 from '../assets/images/WellnessPage/img1.png'
import Img2 from '../assets/images/WellnessPage/img2.png'
import Img3 from '../assets/images/WellnessPage/img3.png'
import Img4 from '../assets/images/WellnessPage/img4.png'
import Img5 from '../assets/images/WellnessPage/img5.png'
import Img6 from '../assets/images/WellnessPage/img6.png'
import Img7 from '../assets/images/WellnessPage/img7.png'
import NavBarNew from '../components/NavBarNew.jsx'


function WellnessPage() {
  return (
    <div className='wellnessPage'>
        <NavBar/>
        <div>
            <img src={Img1} alt="Wellness Page Banner" className='wellnessPageImage' />
        </div>
        <div className='newNavBar'>
            <NavBarNew />
        </div>
        <div className="wellnessPageText ">
            <h1>Feel Better Inside & Out...   Book</h1>
            <h1>Trusted Wellness & Therapy</h1>
            <h1>Services</h1>
        </div>
        <div className="wellnessPageSubText">
            <h1 className="wellnessPage-header-details" id='service-topic'>Wellness & Therapy</h1>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img2} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>MindEase Therapy Center – Colombo</h1>
                <h3 className='wellnessCardSubtitle'>Service: Individual Mental Health Counseling</h3>
                <h4 className='wellnessCardTime'>Time: Mon–Fri | 9:00 AM – 5:00 PM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Certified psychologists</li>
                    <li className='list'>Anxiety & stress management</li>
                    <li className='list'>Confidential one-on-one sessions</li>
                    <li className='list'>Online appointments available</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Get personal support from licensed professionals in a safe, calm space to help manage anxiety, stress, and life challenges.</p>
            </div>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img3} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>BodyBalance Physiotherapy – Galle</h1>
                <h3 className='wellnessCardSubtitle'>Service: Post-Injury Physiotherapy</h3>
                <h4 className='wellnessCardTime'>Time: Mon–Sat | 8:30 AM – 4:30 PM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Muscle rehabilitation</li>
                    <li className='list'>Joint mobility therapy</li>
                    <li className='list'>Personalized recovery plans</li>
                    <li className='list'>Insurance-covered sessions</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Recover stronger with guided physical therapy sessions tailored to your needs and injury recovery progress.</p>
            </div>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img4} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>Serenity Wellness Hub – Kandy</h1>
                <h3 className='wellnessCardSubtitle'>Service: Mindfulness & Meditation Classes</h3>
                <h4 className='wellnessCardTime'>Time: Tue–Sun | 7:00 AM – 11:00 AM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Guided meditation sessions</li>
                    <li className='list'>Breathing techniques</li>
                    <li className='list'>Group and individual classes</li>
                    <li className='list'>Calm, nature-themed environment</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Reclaim peace of mind with meditation practices that improve focus, reduce anxiety, and promote emotional well-being.</p>
            </div>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img5} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>VitalFlow – Matara</h1>
                <h3 className='wellnessCardSubtitle'>Service: Yoga & Stretch Therapy</h3>
                <h4 className='wellnessCardTime'>Time: Daily | 6:30 AM – 9:30 AM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Certified yoga instructors</li>
                    <li className='list'>Gentle and power yoga</li>
                    <li className='list'>Flexibility-focused routines</li>
                    <li className='list'>Beginners & senior-friendly</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Build flexibility, improve posture, and find inner balance through professionally guided yoga and stretch therapy.</p>
            </div>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img6} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>HealNest – Kurunegala</h1>
                <h3 className='wellnessCardSubtitle'>Service: Family & Couples Therapy</h3>
                <h4 className='wellnessCardTime'>Time: Wed–Sun | 2:00 PM – 6:00 PM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Licensed family therapists</li>
                    <li className='list'>Relationship support</li>
                    <li className='list'>Conflict resolution strategies</li>
                    <li className='list'>LGBTQ+ inclusive</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Strengthen relationships and improve communication through supportive, confidential family and couples therapy sessions.</p>
            </div>
        </div>

        <div className='wellnessCard'>
            <div className='wellnessCardLeft'>
                <div>
                    <img src={Img7} alt="Wellness Card" className='wellnessCardImage'/>
                </div>
                <div>
                    <button className='wellnessCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='wellnessCardRight'>
                <h1 className='wellnessCardTitle'>Reviva Therapy Studio – Negombo</h1>
                <h3 className='wellnessCardSubtitle'>Service: Trauma & PTSD Counseling</h3>
                <h4 className='wellnessCardTime'>Time: Mon–Fri | 10:00 AM – 4:00 PM</h4>
                <h3 className='wellnessCardFeatures'>Features:</h3>
                <ul className='wellnessCardFeatureList'>
                    <li className='list'>Trauma-informed professionals</li>
                    <li className='list'>PTSD and emotional recovery</li>
                    <li className='list'>Safe, private setting</li>
                    <li className='list'>Long-term support options</li>
                </ul>
                <h3 className='wellnessCardDescription'>Description:</h3>
                <p className='wellnessCardDescriptionText'>Expert-guided therapy sessions designed to help you process trauma and begin healing in a supportive environment.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default WellnessPage
