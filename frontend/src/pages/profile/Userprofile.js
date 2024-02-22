import './Profile.css';
import banner from '../../assets/userprofilebanner.png';
import profile from '../../assets/candidate-profile.png';
function Userprofile() {
    return(
        <div className="userprofile">
            <div className="container">
                <div className="img-container">
                    <img className="w-full h-full rounded-s-2xl" src={banner} alt="userprofile banner"/>
                </div>
                <div className="relative m-auto">
                    <div className="absolute -top-[80px] left-0"><img className="rounded-2xl"src={profile} alt="candidate profile"/></div>
                    <div className="title-container mt-10 ">
                        <div>
                            <h5 className="text-[18px]">Steven Jobs </h5>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userprofile;