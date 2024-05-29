import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const Aboutus = () => {
    const images = [
        'https://www.vhv.rs/dpng/d/459-4595661_hd-technician-repairing-air-conditioner-air-conditioning-repair.png',
        'https://repaircentrejum.in/wp-content/uploads/2021/01/Male-Technician-With-Screwdriver-Repairing-Refrigerator-in-Kitchen-1536x1020.jpg',
        'https://thumbs.dreamstime.com/b/technician-repairing-television-male-digital-multimeter-home-251554671.jpg',
        'https://img.freepik.com/premium-photo/technician-repairing-washing-machine_13339-277154.jpg',
        'https://wallpaperaccess.com/full/5211224.jpg',
        'https://wallpapercave.com/wp/wp8484755.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsSliding(false);
            }, 500); // Half a second for the sliding transition
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className={`slideshow-container ${isSliding ? 'sliding' : ''}`}>
                        <img
                            src={images[currentIndex]}
                            className="img-fluid"
                            alt={`Slideshow ${currentIndex}`}
                        />
                    </div>
                </div>
            </div>
            <div className="about-us mt-5 p-5 text-white">
                <h2>About Us</h2>
                <p>
                    Our application provides a convenient solution for finding reliable technicians for your home appliances. Whether you need help with your air conditioner, TV, refrigerator, plumbing, or electrical work.
                </p>
                <ul>
                    <li>Find technicians based on your city and specific needs.</li>
                    <li>Request a technician easily through our application.</li>
                    <li>Chat directly with the technician to discuss the issue.</li>
                    <li>Technicians can accept or decline your request based on availability.</li>
                </ul>
                <p>
                    Our goal is to ensure that your home appliances are always in top working condition by connecting you with skilled professionals quickly and easily.
                </p>
            </div>
        </div>
    );
};

export default Aboutus;
