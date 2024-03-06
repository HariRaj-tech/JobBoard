import './Profile.css';
import banner from '../../assets/userprofilebanner.png';
import profile from '../../assets/candidate-profile.png';
import locationicon from '../../assets/location.svg';
import downloadicon from '../../assets/downloadicon.svg';
import briefcaseimg from '../../assets/briefcase.svg';
import salary from '../../assets/salary.svg';
import location from '../../assets/location.svg';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { useState, useEffect} from 'react';
import axios from 'axios';


function Userprofile() {

    const [userInfo, setUserInfo] = useState({});
    const [imageData, setImageData] = useState(null);
    const userId = localStorage.getItem('id');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/${userId}/`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching User:', error);
            }
        };
        fetch(`http://localhost:8080/api/user/image/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
            },
        })
        .then(response => response.json())
            .then(data => {
                const uint8Array = new Uint8Array(data.buffer.data);
                const blob = new Blob([uint8Array], { type: 'image/jpeg' });
                const imageUrl = URL.createObjectURL(blob);
                setImageData(imageUrl);
            })
            .catch(error => console.error('Error fetching image:', error));

        fetchUser();
    }, []);


    return (
        <div className="userprofile">
            <div>
                <div className="container">
                    <div className="img-container">
                        <img className="w-full h-full rounded-s-2xl" src={banner} alt="userprofile banner" />
                    </div>
                    <div className="relative w-[90%] m-auto pt-6">
                        <div className="absolute -top-[90px] left-2">
                            {imageData && <img className="rounded-2xl" style={{ width: '100px', height: '100px'}} src={imageData} alt="User" />}
                            {!imageData && <img className="rounded-2xl" src={profile} alt="candidate profile" />}
                        </div>
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-[66.6%]">
                                <div className="flex gap-3">
                                    <h5 className="text-[18px]">{userInfo.first_name} </h5>
                                    <span style={{ 'background': `url(${locationicon}) no-repeat 0 3px` }} className="inline-block px-4 ">
                                        NewYork, US
                                    </span>
                                </div>
                                <p className="my-2">
                                    UI/UX Designer. Front end Developer
                                </p>
                            </div>
                            <div className="md:w-[33.3%] md:text-right text-left">
                                <button style={{ 'background': `url(${downloadicon}) no-repeat 24px 17px,#3c65f5` }} className="download-btn">
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-[#dee2e6] pt-3 pb-3"></div>
                </div>
            </div>
            <div className="mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col1">
                            <div>
                                <h4 className="mb-4">About Me</h4>
                                <p className="mb-4 text-[16px] leading-8">
                                    {userInfo.about}
                                </p>
                                <h4 className="mb-4">Professional Skills</h4>
                                <ul className="flex gap-[10%] mb-4">
                                    <div className="">
                                        {userInfo.skills?.map((skill, index) => {
                                            return (
                                                <li key={index}>{skill}</li>
                                            )
                                        })}
                                    </div>
                                </ul>
                                {/* <h4 className="mb-4">Work Experience</h4>
                                <ul className="pl-3 mb-4">
                                    <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                    <li>5+ years of industry experience in interactive design and / or visual design</li>
                                </ul> */}
                                <div className="border-t-[1px] border-[#e0e6f7] py-5 mt-4 ">

                                </div>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="address-card">
                                <div className="address-title">
                                    <h4>Overview</h4>
                                </div>
                                <div className="address-container py-4 border-b-[1px] border-[#e0e6f7]">
                                    {/* <div className='flex items-start gap-3 mb-4'>
                                        <img className="w-[20px]" src=briefcaseimg alt="exp" />
                                        <div>
                                            <span className='block text-[16px]'>
                                                Experience
                                            </span>
                                            <span className='block font-bold'>12 years</span>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-3 mb-4'>
                                        <img className="w-[20px]" src=salary alt="exp" />
                                        <div>
                                            <span className='block text-[16px]'>
                                                Expected Salary
                                            </span>
                                            <span className='block font-bold'>$26k - $30k</span>
                                        </div>
                            </div> */}
                                    <div className='flex items-start gap-3 mb-4'>
                                        <TbMessageLanguage style={{"fontSize":"25px"}}/>
                                        <div>
                                            <span className='block text-[16px]'>
                                                Language
                                            </span>
                                            <span className='block font-bold'>{userInfo.languages?.join(', ')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <ul>
                                        <li className='flex items-baseline gap-3'><img src={location} alt='location'/> 205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                        <li className='flex items-baseline gap-3'><CiPhone/> Phone: (123) 456-7890</li>
                                        <li className='flex items-baseline gap-3'><MdOutlineEmail/> Email: contact@Evara.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Userprofile;