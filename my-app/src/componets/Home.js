import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './images/4022487.jpg';
import image2 from './images/cv.png';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Templates');
  };

  return (
    <div>
      <div className="container mx-auto flex justify-between p-4 ml-20">
        <div className="flex flex-col w-1/2">
          <h1 className="text-3xl font-bold text-blue-800 mt-4">
            Online CV Builder With Creative Templates
          </h1>
          <p className="text-gray-500 font-sans text-sm font-normal leading-snug text-left mt-4 ml-4" style={{ width: '500px', height: '152px', fontSize: '22px', lineHeight: '30px' }}>
            Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.
          </p>
          <button
            className="bg-blue-800 text-white rounded-lg text-center font-sans text-xl font-normal mt-4 ml-4 hover:bg-blue-700 flex items-center justify-center"
            style={{ width: '200px', height: '40px', fontSize: '18px', lineHeight: '60px' }}
            onClick={handleClick}
          >
            CHOOSE TEMPLATES
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            className="h-auto max-w-full"
            src={image1}
            alt="Professional CV template illustration"
            style={{ width: '400px', height: 'auto' }}
          />
        </div>
      </div>
      <div className="container flex justify-even">
        <div className="ml-20">
          <img
            className="h-auto max-w-full"
            src={image2}
            alt="Professional CV template illustration"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
        <div className="ml-20 mt-10">
          <h1 className="text-2xl text-blue-900 font-bold">We Deliver the best</h1>
          <ul className="mt-4 list-disc list-inside">
            <li>Proven CV Templates to Increase chance</li>
            <li>Creative and Clean Templates Design</li>
            <li>Easy and Intuitive Online CV Builder</li>
            <li>Free to use. Developed by hiring professionals.</li>
            <li>Fast Easy CV and Resume Formatting</li>
            <li>Recruiter Approved Phrases.</li>
          </ul>
        </div>
      </div>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/4">
            <img src={image1} alt="CV Builder Logo" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-bold">CV Builder</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Privacy & TOS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300">Advertiser Agreement</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Acceptable Use Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Technology Privacy</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Developer Agreement</a></li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300">Advertisers</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Developers</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Resources</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Company</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Connect</a></li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Mailing Address: xx00 E. Union Ave Suite 1100, Denver, CO 80237</p>
            <p className="text-sm">+999 90932 627</p>
            <p className="text-sm">support@yourdomain.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
