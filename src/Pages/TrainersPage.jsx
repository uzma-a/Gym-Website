import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';
import trainer4 from '../assets/trainer4.jpg';
import trainer5 from '../assets/trainer5.jpg';
import trainer6 from '../assets/trainer6.jpg';
import services_bg from '../assets/services_bg.jpg';

const TrainersPage = () => {
    const trainers = [
        {
            id: 1,
            name: 'John Doe',
            specialty: 'Personal Trainer',
            bio: 'John is an expert in weight training and body conditioning. He has been helping clients achieve their fitness goals for over 5 years.',
            image: trainer1,
        },
        {
            id: 2,
            name: 'Jane Smith',
            specialty: 'Yoga Instructor',
            bio: 'Jane has been practicing yoga for 8 years and specializes in mindfulness and flexibility training. She helps clients improve mental and physical balance.',
            image: trainer2,
        },
        {
            id: 3,
            name: 'Mark Lee',
            specialty: 'Cardio Specialist',
            bio: 'Mark is passionate about cardiovascular health and loves motivating clients to push their limits in cardio training.',
            image: trainer3,
        },
        {
            id: 4,
            name: 'Emily White',
            specialty: 'Pilates Instructor',
            bio: 'Emily has a deep understanding of Pilates and core strengthening exercises. She works with clients to build better posture and flexibility.',
            image: trainer4,
        },
        {
            id: 5,
            name: 'Chris Johnson',
            specialty: 'Strength Coach',
            bio: 'Chris specializes in strength coaching and powerlifting, guiding clients to build strength while focusing on proper technique.',
            image: trainer5,
        },
        {
            id: 6,
            name: 'Sophia Brown',
            specialty: 'Health & Wellness Coach',
            bio: 'Sophia is a certified health coach who helps clients with personalized nutrition plans, lifestyle changes, and overall wellness.',
            image: trainer6,
        },
    ];

    return (
        <div
            className="bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url(${services_bg})`, // Apply the background image
            }}
        >
            {/* Adjust the overlay for better visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div> {/* Ensure overlay is behind content */}

            <header className=" py-5 relative z-10">
                <h1 className="text-4xl text-center text-white font-bold">Meet Our Trainers</h1>
                <p className="text-center text-gray-300 mt-2">
                    Our team of experienced trainers is here to guide you on your fitness journey.
                </p>
            </header>

            <main className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainers.map((trainer) => (
                    <div
                        key={trainer.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow relative z-10"
                    >
                        <div className="relative">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-80 object-cover rounded-t-lg"
                            />
                            {/* Adding overlay with opacity */}
                            <div className="rounded-t-lg"></div> {/* Adjust opacity */}
                        </div>
                        <h2 className="text-xl text-gray-800 font-semibold mt-4">{trainer.name}</h2>
                        <p className="text-gray-600 font-bold">{trainer.specialty}</p>
                        <p className="text-gray-600 mt-2">{trainer.bio}</p>
                    </div>
                ))}
            </main>
            <div className="contact bg-black bg-opacity-80 text-lg   text-slate-300 py-5 px-16">
            <p className=''>Book Your Appointment Today
                Ready to start your fitness journey with one of our expert trainers? It's easy! Simply click on the "Contact Us" link below to visit our contact page, where you can book your appointment and get all the details you need. Whether you're looking for personal training, yoga, or wellness coaching, our team is here to guide you every step of the way. Don’t wait—book your session now and take the first step towards achieving your goals!  </p>
                <Link to='/contact'><p className='mt-6 text-blue-700 font-semibold underline'>Contact Us</p></Link>
            </div>
            
        </div>
    );
};

export default TrainersPage;
