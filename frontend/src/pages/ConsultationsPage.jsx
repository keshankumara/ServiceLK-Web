import React from 'react'
import './ConsultationsPage.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Img1 from '../assets/images/ConsultationsPage/img1.png'
import Img2 from '../assets/images/ConsultationsPage/img2.png'
import Img3 from '../assets/images/ConsultationsPage/img3.png'
import Img4 from '../assets/images/ConsultationsPage/img4.png'
import Img5 from '../assets/images/ConsultationsPage/img5.png'
import Img6 from '../assets/images/ConsultationsPage/img6.png'
import Img7 from '../assets/images/ConsultationsPage/img7.png'
import NavBarNew from '../components/NavBarNew.jsx'

function ConsultationsPage() {
  return (
    <div className='consultationsPage'>
        <NavBar/>
        <div>
            <img src={Img1} alt="consultations Page Banner" className='consultationsPageImage' />
        </div>
        <div className='newNavBar'>
            <NavBarNew />
        </div>
        <div className="consultationsPageText ">
            <h1>Get the Right Advice at the Right</h1>
            <h1>Time... Book Trusted</h1>
            <h1>Consultations</h1>
        </div>
        <div className="consultationsPageSubText">
            <h1 className="consultationsPage-header-details" id='service-topic'>Consultations</h1>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img2} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>CareerBridge Consulting – Colombo</h1>
                <h3 className='consultationsCardSubtitle'>Service: Career Guidance & Counseling</h3>
                <h4 className='consultationsCardTime'>Time: Mon–Fri | 10:00 AM – 4:00 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>One-on-one career planning</li>
                    <li className='list'>CV and interview preparation</li>
                    <li className='list'>University admission help</li>
                    <li className='list'>Youth and graduate programs</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Get expert advice on choosing the right career path, building a strong CV, and preparing for interviews — all tailored to your goals.</p>
            </div>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img3} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>LegalWise Associates – Kandy</h1>
                <h3 className='consultationsCardSubtitle'>Service: Legal Consultations (Civil & Family Law)</h3>
                <h4 className='consultationsCardTime'>Time: Tue–Sat | 9:00 AM – 2:00 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>Divorce & custody matters</li>
                    <li className='list'>Property & contract issues</li>
                    <li className='list'>Legal documentation help</li>
                    <li className='list'>Licensed legal consultants</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Understand your legal rights with personalized consultations from experienced lawyers in a confidential setting.</p>
            </div>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img4} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>BizMentor Consulting – Gampaha</h1>
                <h3 className='consultationsCardSubtitle'>Service: Small Business & Startup Advisory</h3>
                <h4 className='consultationsCardTime'>Time: Mon–Fri | 8:30 AM – 5:30 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>Business model evaluation</li>
                    <li className='list'>Financial planning tips</li>
                    <li className='list'>Market & brand strategy</li>
                    <li className='list'>First-time startup support</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Turn your idea into a successful business with guidance from seasoned startup consultants and business planners.</p>
            </div>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img5} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>MindMatters Counseling – Matara</h1>
                <h3 className='consultationsCardSubtitle'>Service: Academic & Exam Stress Counseling</h3>
                <h4 className='consultationsCardTime'>Time: Daily | 3:00 PM – 7:00 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>Focus & time management</li>
                    <li className='list'>Exam stress reduction</li>
                    <li className='list'>Study techniques coaching</li>
                    <li className='list'>Student-friendly sessions</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Struggling with study stress? Book a session to learn proven techniques for managing pressure and boosting academic performance.</p>
            </div>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img6} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>FinPlan Advisory – Kurunegala</h1>
                <h3 className='consultationsCardSubtitle'>Service: Personal Financial Planning</h3>
                <h4 className='consultationsCardTime'>Time: Mon–Fri | 10:00 AM – 5:00 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>Monthly budgeting</li>
                    <li className='list'>Debt management advice</li>
                    <li className='list'>Investment guidance</li>
                    <li className='list'>Retirement planning</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Take control of your money and plan your financial future with a certified financial consultant you can trust.</p>
            </div>
        </div>

        <div className='consultationsCard'>
            <div className='consultationsCardLeft'>
                <div>
                    <img src={Img7} alt="consultations Card" className='consultationsCardImage'/>
                </div>
                <div>
                    <button className='consultationsCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='consultationsCardRight'>
                <h1 className='consultationsCardTitle'>ImmigraHelp Center – Negombo</h1>
                <h3 className='consultationsCardSubtitle'>Service: Visa & Immigration Consultation</h3>
                <h4 className='consultationsCardTime'>Time: Mon–Sat | 9:00 AM – 1:00 PM</h4>
                <h3 className='consultationsCardFeatures'>Features:</h3>
                <ul className='consultationsCardFeatureList'>
                    <li className='list'>Student & work visa help</li>
                    <li className='list'>PR and immigration pathways</li>
                    <li className='list'>Application support</li>
                    <li className='list'>Country-specific advice</li>
                </ul>
                <h3 className='consultationsCardDescription'>Description:</h3>
                <p className='consultationsCardDescriptionText'>Whether studying or migrating, get professional guidance to simplify your visa and immigration process.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ConsultationsPage
