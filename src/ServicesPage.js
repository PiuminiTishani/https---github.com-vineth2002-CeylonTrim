import React from 'react';
import './ServicesPage.css'; // The CSS for this page


const services = [
    { id: 1, title: 'HAIRCUTS', image: '/images/haircut.jpg' },
    { id: 2, title: 'HAIR TREATMENTS', image: '/images/treatment.jpg' },
    { id: 3, title: 'MAKEUP', image: '/images/makeup.jpg' },
    { id: 4, title: 'FACIAL TREATMENTS', image: '/images/facial.jpg' },
    { id: 5, title: 'MANICURE AND PEDICURE', image: '/images/manicure.jpg' },
    { id: 6, title: 'NAILS', image: '/images/nails.jpg' }
];

const ServicesPage = () => {
    return (
        <div className="services-page">
            <header className="services-header">
                <h1>OUR SERVICES</h1>
                <p>Booking the required service is now at your fingertips.</p>
            </header>
            <section className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="book-now.html" className="book-now-button">Book Now</a>
                        </div>
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ServicesPage;
