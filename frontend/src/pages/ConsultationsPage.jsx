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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//const doctorImages = [Img2, Img3, Img4, Img5, Img6, Img7];

function useConsultationServices() {
    const [consultationCategoryId, setConsultationCategoryId] = useState(null);
    const [consultationServices, setConsultationServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryName = "Consultations"; 

    useEffect(() => {
        async function fetchConsultationCategoryAndServices() {
            try {
                setLoading(true);
                
                // Fetch the consultation category
                const categoryRes = await fetch(`http://localhost:8080/category/getAllCategories`);
                const categoryData = await categoryRes.json();
                console.log('Fetched Category Data:', categoryData);
                
                // Find the category with matching name
                const matchedCategory = categoryData.find(cat => cat.name === categoryName);
                
                if (matchedCategory) {
                    const consultationCatId = matchedCategory.id;
                    console.log('Consultation Category ID:', consultationCatId);
                    setConsultationCategoryId(consultationCatId);

                    // Fetch all services
                    const servicesRes = await fetch('http://localhost:8080/service/getAllServices');
                    const servicesData = await servicesRes.json();
                    console.log('All Services Data:', servicesData);
                    console.log('Consultation Category ID type:', typeof consultationCatId, 'value:', consultationCatId);

                    // Filter services by consultation category ID (ensure same type)
                    const filteredServices = servicesData.filter(service => String(service.category_id) === String(consultationCatId));
                    console.log('Filtered Consultation Services:', filteredServices);
                    setConsultationServices(filteredServices);
                } else {
                    console.log('Consultation category not found');
                    setConsultationServices([]);
                }
            } catch (error) {
                console.error('Failed to fetch consultation category or services:', error);
                setConsultationCategoryId(null);
                setConsultationServices([]);
            } finally {
                setLoading(false);
            }
        }

        fetchConsultationCategoryAndServices();
    }, []);

    return { consultationCategoryId, consultationServices, loading };
}

function ConsultationsPage() {
    const { consultationServices, loading } = useConsultationServices();
    const navigate = useNavigate();
    
    // State for popup management
    const [showPopup, setShowPopup] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [bookingData, setBookingData] = useState({
        bookingDate: '',
        status: 'pending'
    });

    // Get user data from localStorage
    const getUserData = () => {
        try {
            const userData = localStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    };

    // Handle appointment button click
    const handleAppointmentClick = (service) => {
        const userData = getUserData();
        
        if (!userData) {
            alert('Please log in to book an appointment.');
            window.location.href = '/login';
            return;
        }

        setSelectedService(service);
        setBookingData({
            bookingDate: '',
            status: 'pending'
        });
        setShowPopup(true);
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const userData = getUserData();
        
        if (!userData) {
            alert('User session expired. Please log in again.');
            window.location.href = '/login';
            return;
        }

        const bookingPayload = {
            user_id: parseInt(userData.userId),
            service_id: selectedService.id,
            booking_date: bookingData.bookingDate,
            status: bookingData.status
        };

        try {
            console.log('Booking consultation appointment with data:', bookingPayload);
            
            // Submit booking to backend
            const response = await fetch('http://localhost:8080/booking/addBooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingPayload)
            });

            if (response.ok) {
                const result = await response.text();
                console.log('Booking response:', result);
                
                //alert(`Consultation appointment booked successfully!\nUser: ${userData.username}\nService: ${selectedService.name}\nDate: ${bookingData.bookingDate}\nBooking ID: ${result || 'Generated'}`);
                
                // Close popup and reset form
                setShowPopup(false);
                setSelectedService(null);
                setBookingData({
                    bookingDate: '',
                    status: 'pending'
                });
                
                // Navigate to UserBookings page
                navigate('/UserBookings');
            } else {
                const errorText = await response.text();
                console.error('Booking failed:', errorText);
                alert('Failed to book appointment. Please try again.');
            }
            
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment. Please check your connection and try again.');
        }
    };

    return (
        <div className='consultationPage'>
            <NavBar/>
            <div>
                <img src={Img1} alt="Consultation Page Banner" className='consultationsPageImage' />
            </div>
            <div className="consultationsPageText">
                <h1 className='consult'>Get the Right Advice at the Right</h1>
                <h1 className='consult'>Time... Book Trusted</h1>
                <h1 className='consult'>Consultations</h1>
            </div>
            <div className='consultationsServicesSection'>
                <div className='sectionHeader'>
                    <h2 className='sectionTitle'>Available Consultation Services</h2>
                    <p className='sectionSubtitle'>Discover trusted consultation and advisory services in your area</p>
                </div>
                
                <div className='consultationsCardGrid'>
                    {loading ? (
                        <div className='loadingState'>
                            <div className='loadingSpinner'></div>
                            <p>Loading consultation services...</p>
                        </div>
                    ) : consultationServices.length === 0 ? (
                        <div className='emptyState'>
                            <p>No consultation services found at the moment.</p>
                        </div>
                    ) : (
                        consultationServices.map((service, idx) => {
                            // Cycle through images for each card
                            const images = [Img2, Img3, Img4, Img5, Img6, Img7];
                            const imageSrc = images[idx % images.length];
                            
                            // Define unique gradient combinations for each card (consultation themed)
                            const gradientClasses = [
                                'gradient-professional-blue',
                                'gradient-trust-teal', 
                                'gradient-wisdom-gold',
                                'gradient-corporate-gray',
                                'gradient-expert-purple',
                                'gradient-advisor-green'
                            ];
                            const gradientClass = gradientClasses[idx % gradientClasses.length];
                            
                            return (
                                <article key={service.id} className={`consultationsCard ${gradientClass}`}>
                                    <div className='cardHeader'>
                                        <div className='cardImageContainer'>
                                            <img src={imageSrc} alt={`${service.name} consultation service`} className='cardImage'/>
                                            <div className='imageOverlay'></div>
                                        </div>
                                    </div>
                                    
                                    <div className='cardContent'>
                                        <div className='cardInfo'>
                                            <h3 className='cardTitle'>{service.name}</h3>
                                            <p className='cardDescription'>{service.description}</p>
                                            
                                            <div className='cardDetails'>
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>📍</span>
                                                    <span className='detailText'>{service.location}</span>
                                                </div>
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>💰</span>
                                                    <span className='detailText'>LKR {service.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='cardActions'>
                                            <button 
                                                className='primaryButton'
                                                onClick={() => handleAppointmentClick(service)}
                                            >
                                                <span className='buttonText'>Appointment</span>
                                                <span className='buttonIcon'>→</span>
                                            </button>
                                            <button className='secondaryButton'>Learn More</button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            </div>
            
            {/* Appointment Booking Popup */}
            {showPopup && (
                <div className='popupOverlay' onClick={() => setShowPopup(false)}>
                    <div className='popupContent' onClick={(e) => e.stopPropagation()}>
                        <div className='popupHeader'>
                            <h3 className='popupTitle'>Book Consultation Appointment</h3>
                            <button 
                                className='closeButton'
                                onClick={() => setShowPopup(false)}
                            >
                                ×
                            </button>
                        </div>
                        
                        {selectedService && (
                            <div className='popupBody'>
                                <div className='serviceDetails'>
                                    <h4>Service Details</h4>
                                    <p><strong>Service:</strong> {selectedService.name}</p>
                                    <p><strong>Description:</strong> {selectedService.description}</p>
                                    <p><strong>Location:</strong> {selectedService.location}</p>
                                    <p><strong>Price:</strong> LKR {selectedService.price}</p>
                                </div>

                                <div className='userDetails'>
                                    <h4>User Information</h4>
                                    <p><strong>User:</strong> {getUserData()?.username || 'Not logged in'}</p>
                                    <p><strong>User ID:</strong> {getUserData()?.userId || 'Not logged in'}</p>
                                </div>
                                
                                <form className='bookingForm' onSubmit={handleFormSubmit}>
                                    <div className='formGroup'>
                                        <label htmlFor='bookingDate'>Booking Date:</label>
                                        <input
                                            type='date'
                                            id='bookingDate'
                                            value={bookingData.bookingDate}
                                            onChange={(e) => setBookingData({...bookingData, bookingDate: e.target.value})}
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>
                                    
                                    <div className='formGroup'>
                                        <label htmlFor='status'>Status:</label>
                                        <select
                                            id='status'
                                            value={bookingData.status}
                                            onChange={(e) => setBookingData({...bookingData, status: e.target.value})}
                                        >
                                          
                                            <option value='confirmed'>Confirmed</option>
                                        </select>
                                    </div>
                                    
                                    <div className='popupActions'>
                                        <button type='submit' className='submitButton'>
                                            Book Appointment
                                        </button>
                                        <button 
                                            type='button' 
                                            className='cancelButton'
                                            onClick={() => setShowPopup(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            <Footer/>
        </div>
    )
}

export default ConsultationsPage

