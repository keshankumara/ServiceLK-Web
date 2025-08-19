import React from 'react'
import './VehiclePage.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Img0 from '../assets/images/VehiclePage/img0.png'
import Img1 from '../assets/images/VehiclePage/img1.png'
import Img2 from '../assets/images/VehiclePage/img2.png'    
import Img3 from '../assets/images/VehiclePage/img3.png'
import Img4 from '../assets/images/VehiclePage/img4.png'
import Img5 from '../assets/images/VehiclePage/img5.png'
import Img6 from '../assets/images/VehiclePage/img6.png'
import NavBarNew from '../components/NavBarNew.jsx'


function VehiclePage() {
  return (
    <div className='vehiclePage'>
        <NavBar/>
        <div>
            <img src={Img0} alt="Vehicle Page Banner" className='vehiclePageImage' />
        </div>
        <div className='newNavBar'>
            <NavBarNew />
        </div>
        <div className="vehiclePageText ">
            <h1>Keep Vehicle Running Smoothly...</h1>
            <h1>Book Trusted Vehicle Services</h1>
        </div>
        <div className="vehiclePageSubText">
            <h1 className="vehiclePage-header-details" id='service-topic'>Vehicle Services</h1>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img1} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'>QuickFix Auto Garage – Colombo</h1>
                <h3 className='vehicleCardSubtitle'>Service: Full Vehicle Inspection</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Sat | 8:00 AM – 5:30 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>Engine diagnostics</li>
                    <li className='list'>Brake and suspension check</li>
                    <li className='list'>Fluid level inspection</li>
                    <li className='list'>Battery health test</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Ensure your vehicle’s performance and safety with a thorough inspection by certified professionals.</p>
            </div>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img2} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'>BlueLine Car Wash – Colombo</h1>
                <h3 className='vehicleCardSubtitle'>Service: Premium Car Wash & Polishing</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Sun | 9:00 AM – 6:30 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>Touchless pressure washing</li>
                    <li className='list'>Interior deep vacuuming</li>
                    <li className='list'>Dashboard and leather polishing</li>
                    <li className='list'>Underbody rinse with rust protection</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Restore your car’s shine with our advanced blue-themed premium car wash and polish — spotless, scratch-free, and eco-conscious.</p>
            </div>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img3} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'> AutoCare Detailing Center – Gampaha</h1>
                <h3 className='vehicleCardSubtitle'>Service: Complete Auto Detailing</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Sat | 8:30 AM – 5:00 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>Exterior waxing & buffing</li>
                    <li className='list'>Engine bay cleaning</li>
                    <li className='list'>Ceramic coating available</li>
                    <li className='list'>Upholstery and seat shampooing</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Treat your car to the ultimate detailing session — top-to-bottom care with showroom-quality finishing and durable paint protection.</p>
            </div>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img4} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'>SmartWheels – Kandy</h1>
                <h3 className='vehicleCardSubtitle'>Service: Mobile Car Services & Quick Repairs</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Fri | 9:00 AM – 4:00 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>On-demand oil change at your location</li>
                    <li className='list'>Tyre pressure and battery check</li>
                    <li className='list'>Mobile diagnostics</li>
                    <li className='list'>Emergency roadside assistance</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Stay on the move with SmartWheels — smart, mobile vehicle servicing right at your doorstep or office.</p>
            </div>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img5} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'>MotoCare Service Hub – Nuwara Eliya</h1>
                <h3 className='vehicleCardSubtitle'>Service: Motorcycle Service & Repair</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Fri | 8:00 AM – 4:30 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>Oil change & chain lubrication</li>
                    <li className='list'>Brake pad replacement</li>
                    <li className='list'>Electrical fault fixing</li>
                    <li className='list'>Helmet sanitization</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Complete motorcycle maintenance from routine servicing to repairs by 2-wheeler experts.</p>
            </div>
        </div>

        <div className='vehicleCard'>
            <div className='vehicleCardLeft'>
                <div>
                    <img src={Img6} alt="Vehicle Card" className='vehicleCardImage'/>
                </div>
                <div>
                    <button className='vehicleCardButton'>Schedule Now</button>
                </div>
            </div>
            <div className='vehicleCardRight'>
                <h1 className='vehicleCardTitle'>DriveSafe Auto Care – Kurunegala</h1>
                <h3 className='vehicleCardSubtitle'>Service: AC Repair & Maintenance</h3>
                <h4 className='vehicleCardTime'>Time: Mon–Sat | 9:00 AM – 1:00 PM</h4>
                <h3 className='vehicleCardFeatures'>Features:</h3>
                <ul className='vehicleCardFeatureList'>
                    <li className='list'>AC gas refill</li>
                    <li className='list'>Cooling performance check</li>
                    <li className='list'>Compressor testing</li>
                    <li className='list'>Leak detection</li>
                </ul>
                <h3 className='vehicleCardDescription'>Description:</h3>
                <p className='vehicleCardDescriptionText'>Beat the heat with fast and reliable car air conditioning repairs and servicing.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default VehiclePage
