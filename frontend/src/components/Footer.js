import {Link} from 'react-router-dom';
import logo from '../assets/jobhub-logo.svg';
import fb from '../assets/fb.svg';
import x from '../assets/x.svg';
import rd from '../assets/rd.svg';
function Footer() {
    return (
        <div className="container footer mx-auto text-center mt-[50px]">
            <div className="flex flex-wrap">
                <div className='footer-col1'>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <div className='mt-3 mb-3 text-[#66789c] font-medium text-[14px] leading-[18px] text-left'>
                        JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide
                    </div>
                    <div className='text-left'>
                        <span className='inline-block mr-3'><img src={fb} alt=""/></span>
                        <span className='inline-block mr-3'><img src={x} alt=""/></span>
                        <span className='inline-block mr-3'><img src={rd} alt=""/></span>
                    </div>
                </div>
                <div className='footer-col2 text-left'>
                    <h6 className='font-bold mb-3'>Resources</h6>
                    <ul className='text-md list-none'>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>Our Team</Link></li>
                        <li><Link to='/'>Products</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </div>
                <div className='footer-col3 text-left'>
                    <h6 className='font-bold mb-3'>Community</h6>
                    <ul className='text-md list-none'>
                        <li><Link to='/'>Feature</Link></li>
                        <li><Link to='/'>Pricing</Link></li>
                        <li><Link to='/'>Credit</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                    </ul>
                </div>
                <div className='footer-col4 text-left'>
                    <h6 className='font-bold mb-3'>Quick links</h6>
                    <ul className='text-md list-none'>
                        <li><Link to='/'>iOS</Link></li>
                        <li><Link to='/'>Android</Link></li>
                        <li><Link to='/'>Microsoft</Link></li>
                        <li><Link to='/'>Desktop</Link></li>
                    </ul> 
                </div>
                <div className='footer-col5 text-left'>
                    <h6 className='font-bold mb-3'>More</h6>
                    <ul className='text-md list-none'>
                        <li><Link to='/'>Privacy</Link></li>
                        <li><Link to='/'>Help</Link></li>
                        <li><Link to='/'>Terms</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                    </ul> 
                </div>
            </div>
            <div className="">

            </div>
            
        </div>
    );
}

export default Footer;