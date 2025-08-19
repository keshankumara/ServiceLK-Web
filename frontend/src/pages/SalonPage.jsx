import React from 'react'
import './SalonPage.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Img1 from '../assets/images/SalonPage/img1.png'
import Img2 from '../assets/images/SalonPage/img2.png'
import Img3 from '../assets/images/SalonPage/img3.png'  
import Img4 from '../assets/images/SalonPage/img4.png'
import Img5 from '../assets/images/SalonPage/img5.png'
import Img6 from '../assets/images/SalonPage/img6.png'
import Img7 from '../assets/images/SalonPage/img7.png'
import NavBarNew from '../components/NavBarNew.jsx'

function SalonPage() {
  return (
    <div className='salonPage'>
        <NavBar/>
        <div>
            <img src={Img1} alt="Salon Page Banner" className='salonPageImage' />
        </div>
        <div className='newNavBar'>
            <NavBarNew />
        </div>
        <div className="salonPageText ">
            <h1>Bright Smiles Start Here... </h1>
            <h1>Find Trusted Dentists & </h1>
            <h1>Clinics</h1>
        </div>
        <div className="salonPageSubText">
            <h1 className="salonPage-header-details" id='service-topic'>Salons & Clinics</h1>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img2} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>GlamZone Salon – Colombo</h1>
                <h3 className='salonCardSubtitle'>Service: Hair Styling & Coloring</h3>
                <h4 className='salonCardTime'>Time: Mon–Sat | 10:00 AM – 6:00 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Trendy cuts & trims</li>
                    <li className='list'>Highlights & balayage</li>
                    <li className='list'>Hair straightening & curling</li>
                    <li className='list'>Blow-dry & styling</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>Transform your look with professional haircuts and vibrant coloring tailored to your style.</p>
            </div>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img3} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>StyleCraze Studio – Kandy</h1>
                <h3 className='salonCardSubtitle'>Service: Bridal & Party Makeup</h3>
                <h4 className='salonCardTime'>Time: Tue–Sun | 9:00 AM – 7:00 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Full bridal packages</li>
                    <li className='list'>Engagement & party looks</li>
                    <li className='list'>Long-lasting HD makeup</li>
                    <li className='list'>Trial sessions available</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>Get picture-perfect for any occasion with flawless makeup artistry by expert beauticians.</p>
            </div>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img4} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>NailVibe – Gampaha</h1>
                <h3 className='salonCardSubtitle'>Service: Manicure & Nail Art</h3>
                <h4 className='salonCardTime'>Time: Mon–Sun | 11:00 AM – 5:00 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Gel & acrylic nails</li>
                    <li className='list'>French tips & glitter art</li>
                    <li className='list'>Cuticle treatment</li>
                    <li className='list'>Nail strengthening</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>Make your hands pop with trendy, long-lasting nail designs and expert manicure care.</p>
            </div>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img5} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>Brows & Blush – Negombo</h1>
                <h3 className='salonCardSubtitle'>Service: Eyebrow Shaping & Tinting</h3>
                <h4 className='salonCardTime'>Time: Mon–Sat | 10:00 AM – 2:30 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Eyebrow threading</li>
                    <li className='list'>Brow tinting</li>
                    <li className='list'>Lash lifting</li>
                    <li className='list'>Sensitive skin-friendly products</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>Perfectly shaped brows and lashes that define your face, done by skilled hands.</p>
            </div>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img6} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>Trim & Shine – Matara</h1>
                <h3 className='salonCardSubtitle'>Service: Men's Grooming & Beard Styling</h3>
                <h4 className='salonCardTime'>Time: Daily | 9:00 AM – 6:00 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Beard trim & shaping</li>
                    <li className='list'>Classic & modern haircuts</li>
                    <li className='list'>Hair wash & scalp care</li>
                    <li className='list'>Shave & facial cleansing</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>A complete grooming destination for men who care about sharp looks and style.</p>
            </div>
        </div>

        <div className='salonCard'>
            <div className='salonCardLeft'>
                <div>
                    <img src={Img7} alt="Salon Card" className='salonCardImage'/>
                </div>
                <div>
                    <button className='salonCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='salonCardRight'>
                <h1 className='salonCardTitle'>ColorCraft Salon – Nuwara Eliya</h1>
                <h3 className='salonCardSubtitle'>Service: Hair Rebonding & Smoothing</h3>
                <h4 className='salonCardTime'>Time: Mon–Fri | 11:00 AM – 5:30 PM</h4>
                <h3 className='salonCardFeatures'>Features:</h3>
                <ul className='salonCardFeatureList'>
                    <li className='list'>Permanent hair straightening</li>
                    <li className='list'>Frizz control treatment</li>
                    <li className='list'>Heat protection</li>
                    <li className='list'>Follow-up care advice</li>
                </ul>
                <h3 className='salonCardDescription'>Description:</h3>
                <p className='salonCardDescriptionText'>Say goodbye to frizz and hello to sleek, smooth hair with our advanced hair treatments.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default SalonPage
