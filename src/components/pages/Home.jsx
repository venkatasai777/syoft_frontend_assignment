import { useEffect, useState } from 'react'
import { MdRemoveRedEye } from "react-icons/md";
import logo from '../../../images/fuse.svg'
import '../../App.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userInfo, setUserInfo] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData === null) {
            return navigate('/')
        }
        const userInfo = userData.user_data[0];
        setUserInfo(userInfo)
    },[])
    const onClickLogout = () => {navigate('/'); localStorage.removeItem('userData')}
    return (
        <div className="home-con">
            <nav className='home-navbar'>
                <img src={logo} style={{width: '70px', height: '70px'}} alt='logo' />
                <button type='button' onClick={onClickLogout}>
                    Logout
                </button>
            </nav>
            <div className='home-body-con'>
                <h1>Welcome {userInfo.user_firstname}</h1>
            </div>
        </div>
    )
}
export default Home