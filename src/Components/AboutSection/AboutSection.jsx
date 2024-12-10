import React from 'react';
import aboutGym from '../../assets/aboutGym.png'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'

const AboutSection = () => {
  return (
    <section className="bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl text-center bg-gradient-to-t font-semibold from-white to-gray-500 bg-clip-text text-transparent mb-8">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto mb-12">
          <div className="para">
            <p className="text-lg font-medium text-gray-100">
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Welcome to GymFluencer</span>, where fitness meets inspiration! We are more than just a gym — 
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">we are a vibrant community dedicated to helping individuals achieve their health and wellness goals</span>. Whether you're a beginner taking the first step on your fitness journey or an athlete pushing the limits, 
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">our state-of-the-art facilities</span>, 
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">certified trainers</span>, and 
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">supportive environment</span> are here to guide you every step of the way.
            </p>
            <p className="mt-5 text-lg font-medium text-gray-100">
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">At GymFluencer</span>, we believe in empowering our members to transform their lives. 
              From personalized workout plans and expert-led group classes to tailored nutrition advice, we provide all the tools you need to succeed. 
              Join us to experience a holistic approach to fitness that fuels both your body and mind. Together, let's redefine what it means to live a healthy, active lifestyle!
            </p>
          </div>
          <img
            className="h-[50vh] lg:h-[70vh] w-full lg:w-1/2 object-cover rounded-md"
            src={aboutGym}
            alt="Gym Quote"
          />
        </div>

        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 mt-20 text-start">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-6xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
              Our Vision
            </h3>
            <p className="text-xl mt-10 text-gray-300">
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Our mission</span> is to <span  className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">inspire</span> and <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">motivate</span> individuals to embrace a <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">healthier lifestyle</span>. We strive to offer <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">top-notch facilities</span>, <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">experienced trainers</span>, and <span  className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">personalized support</span> to help every member unlock their full potential. 
              With a focus on <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">inclusivity</span>, <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">dedication</span>, and <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">innovation</span>, we are committed to creating an environment where <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">fitness</span> becomes a rewarding and <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">transformative journey</span> for everyone.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-6xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-8">
              Why Choose Us?
            </h3>
            <ul className="text-lg text-gray-300 list-disc pl-6 space-y-3 text-left">
              <li>
                <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Expert Trainers:</span> Our team consists of certified fitness professionals who are passionate about helping you achieve your fitness goals.
              </li>
              <li>
                <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-600 bg-clip-text text-transparent">State-of-the-Art Equipment:</span> We pride ourselves on offering top-tier gym equipment that is regularly maintained.
              </li>
              <li>
                <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Community Support:</span> At GymFluencer, you’re part of a fitness family.
              </li>
              <li>
                <span className="bg-gradient-to-t text-xl font-extrabold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Flexible Plans:</span> Whether you’re just getting started or looking to take your fitness to the next level, we have flexible membership plans to suit your needs.
              </li>
            </ul>
          </div>
        </div>

        <div className="posters text-center mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src={pic1}
              alt="Motivation"
              className="h-64 w-64 object-cover rounded-md mx-auto"
            />
            <img
              src={pic2}
              alt="Life Better Gym"
              className="h-64 w-64 object-cover rounded-md mx-auto"
            />
            <img
              src={pic3}
              alt="Transform"
              className="h-64 w-64 object-cover rounded-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
