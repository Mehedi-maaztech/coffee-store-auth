import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import coffeeCupIcon from '../assets/icons/1.png';
import footerbg from '../assets/more/13.jpg';
const Footer = () => {
    return (
        <footer className="py-10" style={{
                backgroundImage: `url('${footerbg}')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100px' 
              }}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={coffeeCupIcon} alt="Espresso Emporium" className="h-10 w-10 mr-2" />
                        <h3 className="text-2xl font-bold">Espresso Emporium</h3>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></a>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Get In Touch</h4>
                    <ul className="text-gray-400 text-sm">
                        <li className="flex items-center mb-2">
                            <span className="mr-2">+88 01633 333 333</span>
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="mr-2">info@gmail.com</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">72, Wall street, King Road, Dhaka.</span>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-5">Connect with Us</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="input input-bordered w-full    " />
                        <input type="email" placeholder="Email" className="input input-bordered w-full  " />
                        <textarea placeholder="Message" className="textarea textarea-bordered w-full     h-24"></textarea>
                        <button type="submit" className="btn btn-primary bg-yellow-600 border-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;