import headerimg from '../../asset/thumb.png';
import './Applyjob.css';
function Applyjob() {
    
    return(
        <div className="applyjob">
            <div className="header">
                <div className="img-container">
                    <img src={headerimg} alt="img not found"/>
                </div>
                <div className="title-container">
                    <div className="title">
                        <p>Senior Full Stack Engineer, Creator Success Full Time</p>
                        <div>
                            <span>Fulltime</span>
                            <span>3minsago</span>
                        </div>
                    </div>
                    <div>
                        <button className="apply-btn">Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Applyjob;