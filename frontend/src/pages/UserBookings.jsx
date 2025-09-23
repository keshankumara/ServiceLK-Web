import React, { useState, useEffect } from 'react';
import './UserBookings.css';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

function UserBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    // Fetch user bookings from backend
    useEffect(() => {
        const fetchBookings = async () => {
            const userData = getUserData();
            
            if (!userData) {
                window.location.href = '/login';
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Fetch bookings for the user
                const response = await fetch(`http://localhost:8080/booking/getAllBookings`);
                
                if (response.ok) {
                    const allBookingsData = await response.json();
                    console.log('Fetched all bookings:', allBookingsData);
                    console.log('Current user ID:', userData.userId);

                    // Filter bookings for current user only
                    const userBookingsData = allBookingsData.filter(booking => {
                        // Convert both to strings for comparison to handle different data types
                        return String(booking.user_id) === String(userData.userId);
                    });
                    
                    console.log('Filtered user bookings:', userBookingsData);

                    if (userBookingsData.length === 0) {
                        setBookings([]);
                        setLoading(false);
                        return;
                    }

                    // Fetch service details for each user booking
                    const bookingsWithServices = await Promise.all(
                        userBookingsData.map(async (booking) => {
                            try {
                                console.log(`Fetching service details for booking ID: ${booking.id}, service ID: ${booking.service_id}`);
                                
                                const serviceResponse = await fetch(`http://localhost:8080/service/findService/${booking.service_id}`, {
                                    method: 'GET'
                                });
                                
                                console.log(`Service response status for service ID ${booking.service_id}:`, serviceResponse.status);
                                
                                if (serviceResponse.ok) {
                                    const serviceData = await serviceResponse.json();
                                    console.log(`Service data for service ID ${booking.service_id}:`, serviceData);
                                    
                                    const enrichedBooking = {
                                        ...booking,
                                        serviceName: serviceData.name || 'Unknown Service',
                                        serviceDescription: serviceData.description || 'No description available',
                                        serviceLocation: serviceData.location || 'Location not specified',
                                        servicePrice: serviceData.price || 0
                                    };
                                    
                                    console.log(`Enriched booking for ID ${booking.id}:`, enrichedBooking);
                                    return enrichedBooking;
                                } else {
                                    const errorText = await serviceResponse.text();
                                    console.error(`Failed to fetch service details for service ID ${booking.service_id}:`, errorText);
                                    return {
                                        ...booking,
                                        serviceName: 'Service Not Found',
                                        serviceDescription: 'Service details unavailable',
                                        serviceLocation: 'Unknown',
                                        servicePrice: 0
                                    };
                                }
                            } catch (error) {
                                console.error(`Error fetching service details for service ID ${booking.service_id}:`, error);
                                return {
                                    ...booking,
                                    serviceName: 'Service Not Found',
                                    serviceDescription: 'Service details unavailable',
                                    serviceLocation: 'Unknown',
                                    servicePrice: 0
                                };
                            }
                        })
                    );

                    console.log('Final bookings with service details:', bookingsWithServices);
                    setBookings(bookingsWithServices);
                } else {
                    const errorText = await response.text();
                    setError(`Failed to fetch bookings: ${errorText}`);
                }
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setError('Failed to load your bookings. Please check your connection and try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // Get status badge class
    const getStatusBadgeClass = (status) => {
        switch (status?.toLowerCase()) {
            case 'confirmed':
                return 'status-confirmed';
            case 'pending':
                return 'status-pending';
            case 'cancelled':
                return 'status-cancelled';
            case 'completed':
                return 'status-completed';
            default:
                return 'status-default';
        }
    };

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const userData = getUserData();

    if (!userData) {
        return (
            <div className='bookingsPage'>
                <NavBar />
                <div className='bookingsContainer'>
                    <h1>Please log in to view your bookings</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className='bookingsPage'>
            <NavBar />
            
            {/* Header Section */}
            <div className='bookingsHeader'>
                <div className='headerContent'>
                    <h1 className='pageTitle'>My Bookings</h1>
                    <p className='pageSubtitle'>Track and manage all your service appointments</p>
                    <div className='userInfo'>
                        <span className='welcomeText'>Welcome back, {userData.username}!</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='bookingsContainer'>
                {loading ? (
                    <div className='loadingSection'>
                        <div className='loadingSpinner'></div>
                        <p className='loadingText'>Loading your bookings...</p>
                    </div>
                ) : error ? (
                    <div className='errorSection'>
                        <div className='errorIcon'>⚠️</div>
                        <h3 className='errorTitle'>Oops! Something went wrong</h3>
                        <p className='errorMessage'>{error}</p>
                        <button 
                            className='retryButton'
                            onClick={() => window.location.reload()}
                        >
                            Try Again
                        </button>
                    </div>
                ) : bookings.length === 0 ? (
                    <div className='emptySection'>
                        <div className='emptyIcon'>📅</div>
                        <h3 className='emptyTitle'>No bookings yet</h3>
                        <p className='emptyMessage'>You haven't made any bookings yet. Start exploring our services!</p>
                        <a href='/DoctorPage' className='exploreButton'>
                            Explore Services
                        </a>
                    </div>
                ) : (
                    <div className='bookingsGrid'>
                        {bookings.map((booking, index) => {
                            const gradientClasses = [
                                'gradient-ocean-blue',
                                'gradient-sunset-orange',
                                'gradient-emerald-green',
                                'gradient-royal-purple',
                                'gradient-rose-pink',
                                'gradient-cosmic-blue'
                            ];
                            const gradientClass = gradientClasses[index % gradientClasses.length];

                            return (
                                <div key={booking.id} className={`bookingCard ${gradientClass}`}>
                                    <div className='cardHeader'>
                                        <h3 className='serviceName'>{booking.serviceName}</h3>
                                        <span className={`statusBadge ${getStatusBadgeClass(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    
                                    <div className='cardBody'>
                                        <div className='serviceDetails'>
                                            <p className='serviceDescription'>{booking.serviceDescription}</p>
                                            
                                            <div className='detailsGrid'>
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>📅</span>
                                                    <div className='detailContent'>
                                                        <span className='detailLabel'>Date</span>
                                                        <span className='detailValue'>{formatDate(booking.booking_date)}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>📍</span>
                                                    <div className='detailContent'>
                                                        <span className='detailLabel'>Location</span>
                                                        <span className='detailValue'>{booking.serviceLocation}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>💰</span>
                                                    <div className='detailContent'>
                                                        <span className='detailLabel'>Price</span>
                                                        <span className='detailValue'>LKR {booking.servicePrice}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className='detailItem'>
                                                    <span className='detailIcon'>🆔</span>
                                                    <div className='detailContent'>
                                                        <span className='detailLabel'>Booking ID</span>
                                                        <span className='detailValue'>#{booking.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='cardFooter'>
                                        <div className='bookingActions'>
                                            <button className='actionButton primary'>
                                                View Details
                                            </button>
                                            {booking.status.toLowerCase() === 'pending' && (
                                                <button className='actionButton secondary'>
                                                    Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default UserBookings;