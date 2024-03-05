import './Profile.css';
import banner from '../../assets/userprofilebanner.png';
import profile from '../../assets/candidate-profile.png';
import locationicon from '../../assets/location.svg';
import downloadicon from '../../assets/downloadicon.svg';
function Userprofile() {
    return(
        <div className="userprofile">
            <div className="container">
                <div className="img-container">
                    <img className="w-full h-full rounded-s-2xl" src={banner} alt="userprofile banner"/>
                </div>
                <div className="relative w-[90%] m-auto pt-6">
                    <div className="absolute -top-[90px] left-2">
                        <img className="rounded-2xl"src={profile} alt="candidate profile"/>
                    </div>
                    <div className="md:flex items-center justify-between">
                        <div className="md:w-[66.6%]">
                            <div className="flex gap-3">
                                <h5 className="text-[18px]">Steven Jobs </h5>
                                <span style={{ 'background': `url(${locationicon}) no-repeat 0 3px` }} className="inline-block px-4 ">
                                    NewYork, US
                                </span>
                            </div>
                            <p className="mt-2">
                                UI/UX Designer. Front end Developer
                            </p>
                        </div>
                        <div className="md:w-[33.3%] md:text-right text-left">
                            <button  style={{ 'background': `url(${downloadicon}) no-repeat 24px 17px,#3c65f5` }} className="download-btn">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b-[1px] border-[#dee2e6] pt-3 pb-3"></div>
            </div>
        </div>
    );
}

export default Userprofile;