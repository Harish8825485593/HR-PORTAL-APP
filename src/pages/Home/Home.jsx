import { useNavigate} from 'react-router-dom';
import homeImg from '../../assets/home-gif1.gif';
import { Button } from 'antd';




function Home() {
    
const navigate = useNavigate();

const goToAboutUs = () => navigate('/about');
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between whole-page">
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                       
                            <h1 className="text-center display-4">Human Resource Management </h1>
                            <Button onClick={goToAboutUs} type="primary" className="learn-more-btn">Learn More</Button>
                    

                    </div>
                    <div className="d-flex flex-column align-items-stretch">
                        <img className="home-img" src={homeImg} alt="home-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
