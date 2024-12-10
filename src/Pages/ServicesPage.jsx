import React from 'react';
import services_bg from '../assets/services_bg.jpg';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Personal Training",
            description:
                "One-on-one training with professional trainers to achieve your fitness goals efficiently.",
            icon: "🏋️",
        },
        {
            id: 2,
            title: "Group Classes",
            description:
                "Exciting group workouts including Yoga, Zumba, and High-Intensity Interval Training (HIIT).",
            icon: "🤸",
        },
        {
            id: 3,
            title: "Nutrition Guidance",
            description:
                "Custom meal plans and expert advice to support your fitness journey.",
            icon: "🥗",
        },
        {
            id: 4,
            title: "Cardio Equipment",
            description:
                "State-of-the-art treadmills, ellipticals, and stationary bikes for your cardio needs.",
            icon: "🏃",
        },
        {
            id: 5,
            title: "Strength Training",
            description:
                "Fully equipped gym with weights, machines, and free spaces for all levels of strength training.",
            icon: "💪",
        },
        {
            id: 6,
            title: "Spa & Relaxation",
            description:
                "Unwind after your workout with our sauna, steam room, and massage therapy.",
            icon: "🛁",
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
            <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* Adjust opacity here */}

            <header className="relative z-10   py-5">
                <h1 className="text-4xl text-center text-white font-bold">Our Services</h1>
                <p className="text-center font-medium text-gray-300 mt-2">
                    Discover the services we offer to help you stay fit and healthy.
                </p>
                <p className=' text-lg mt-10 px-10 font-semibold text-gray-300'>
                    At <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">GymFluencer</span>, we offer a wide range of
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">fitness services</span> designed to help you achieve your
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">personal health</span> and
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">wellness goals</span>. Whether you're looking to build
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">strength</span>,
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">improve cardiovascular health</span>, or relax with
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">mindfulness practices</span>, we have a variety of programs tailored to meet your needs. From
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">expert-led group fitness classes</span> to personalized
                    <span>one-on-one training sessions</span>, we’re committed to providing
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">top-notch facilities</span> and
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">expert guidance</span> every step of the way.
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">Join us today</span> and take the first step towards a
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">healthier</span>, more active
                    <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-500 bg-clip-text text-transparent">lifestyle</span>!
                </p>
            </header>



            <main className="relative z-10 py-12 cursor-pointer px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-gray-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl">{service.icon}</div>
                        <h2 className="text-xl text-gray-600 font-semibold mt-4">{service.title}</h2>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </main>
            <p className="bg-black bg-opacity-80 text-lg text-center text-slate-300 p-4">
            For more information or to book a free appointment, feel free to <Link to='/contact'><span className='mt-6 text-blue-700 font-semibold underline'>contact us</span></Link> today! We're here to help you achieve your fitness goals.
            </p>



        </div>
    );
};

export default ServicesPage;
