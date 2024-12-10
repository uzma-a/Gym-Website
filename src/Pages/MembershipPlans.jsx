import React from 'react';
import { Link } from 'react-router-dom';

const MembershipPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$19.99/month',
      features: [
        'Access to basic features',
        '1 Gym Visit per week',
        'Limited Classes',
        'Email Support',
      ],
    },
    {
      name: 'Standard Plan',
      price: '$39.99/month',
      features: [
        'Access to all features',
        '3 Gym Visits per week',
        'Unlimited Classes',
        'Priority Support',
      ],
    },
    {
      name: 'Premium Plan 👑',
      price: '$59.99/month',
      features: [
        'All Features Included',
        'Unlimited Gym Visits',
        'Personal Trainer Access',
        '24/7 Support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-800 text-white p-4">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h1 className="text-4xl mt-4 font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text">
          Membership Plans
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Choose the plan that suits your needs and get started on your fitness journey!
        </p>
        <p className='text-lg text-gray-300 mt-4'>Our Membership Plans are designed to suit every fitness journey. Whether you're just starting out or looking to level up, we offer flexible options with exclusive benefits. Choose the plan that best fits your goals, and enjoy access to top-tier facilities, expert trainers, and a motivating environment. Join us today and take the first step towards a healthier, stronger you!</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-600"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{plan.name}</h2>
            <p className="text-xl font-semibold text-gray-300 mb-4">{plan.price}</p>
            <ul className="text-gray-200 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <span className="text-cyan-300">✔</span> {feature}
                </li>
              ))}
            </ul>
            <Link to='/plans/booking-a-plan'>
            <button className="w-full py-3 bg-cyan-700 text-white font-semibold rounded-md hover:bg-cyan-800 transition-colors">
              Book Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
