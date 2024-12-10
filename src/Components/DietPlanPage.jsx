import React from 'react';

const DietPlanPage = () => {
  const plans = [
    {
      title: 'Weight Loss Plan',
      description:
        'A low-calorie diet plan designed to help you shed extra pounds while maintaining energy levels.',
    },
    {
      title: 'Muscle Gain Plan',
      description:
        'High-protein and nutrient-rich meals to fuel your muscle-building journey.',
    },
    {
      title: 'General Fitness Plan',
      description:
        'Balanced meals to maintain overall fitness and health for an active lifestyle.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-5xl mt-10 font-bold text-center mb-8 text-cyan-400">
        Diet Plans for Your Goals
      </h1>
      <p className="text-center mb-12 text-gray-400">
        Choose a diet plan tailored to your fitness goals. 
        Healthy eating made easy and delicious.
      </p>
      <p className='px-10 text-lg mb-16'>
      <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>Creating a diet plan tailored</span> to your goals is essential for <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>maintaining a healthy lifestyle</span>. A well-balanced diet should include a variety of <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>nutrient-rich</span> foods such as <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>fresh fruits</span>, <span>vegetables</span>, <span>whole grains</span>, <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>lean proteins</span>, and <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>healthy fats</span>. Proper hydration and portion control are equally important, ensuring your body receives the necessary energy and nutrients without <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>overindulgence</span>. Personalize your plan based on your specific health objectives, whether it’s <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>weight loss</span>, <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>muscle gain</span>, or improved overall health. <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>Incorporating mindful</span> eating habits and avoiding processed foods can make a significant difference in achieving sustainable results. Always consult a <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>nutritionist</span> or <span className='bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent'>dietitian</span> for expert advice tailored to your individual needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
              {plan.title}
            </h2>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <button className="w-full bg-cyan-600 text-gray-900 font-bold py-2 rounded-md hover:bg-cyan-500">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlanPage;
