import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-teal-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-black">Sam Travels</h3>
            <p className="mt-8 mb-5 text-2xl">Let's explore Europe's most beautiful places with us</p>
          </div> 

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-black">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Destinations</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Tours</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-black">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon className='bg-black p-2 rounded-full' icon={faFacebookF} /> Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon className='bg-black p-2 rounded-full' icon={faTwitter} /> Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon className='bg-black p-2 rounded-full' icon={faInstagram} /> Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400"><FontAwesomeIcon className='bg-black p-2 rounded-full' icon={faLinkedinIn} /> LinkedIn</a></li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4 text-black">Contact Info</h3>
            <ul className="flex flex-col">
              <li className="hover:text-gray-400">+123-456-7890</li>
              <li className="hover:text-gray-400">+111-222-3333</li>
              <li className="hover:text-gray-400">xyz@gmail.com</li>
              <li className="hover:text-gray-400">Lucknow, India</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-400" />
        <p className='text-center text-xl font-semibold'>Created by Sameena Zubair | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;