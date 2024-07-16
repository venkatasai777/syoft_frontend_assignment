import { useEffect, useState } from 'react'
import { MdRemoveRedEye } from "react-icons/md";
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData !== null) {
            return navigate('/dashboard')
        }
    }, [])
    const apiUrl = 'https://syoft.dev/Api/userlogin/api/userlogin'
    const [showPassword, setShowPassword] = useState(false)
    const [userLoginInfo, setuserLoginInfo] = useState({
        user_email:"",
        user_password:""
    });

    const onChangeEmail = (e) => {
        setuserLoginInfo((prevState) => ({...prevState, user_email: e.target.value}));
    }

    const onChangePassword = (e) => {
        setuserLoginInfo((prevState) => ({...prevState, user_password: e.target.value}));
    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitUserRegister = async (e) => {
        e.preventDefault()
        const method = {
            method: 'POST',
            body: JSON.stringify(userLoginInfo)
        }
        try {
            const response = await fetch(apiUrl, method)
            const data = await response.json()
            console.log(data)
            await localStorage.setItem('userData', JSON.stringify(data))
            setuserLoginInfo({user_email:"",user_password:""})
            alert("Sign in successfully, click OK to continue")
            navigate('/dashboard')
        }catch(err) {
            alert("Internal server Error")
            return alert("Incorrect Username and Password")
        }
    }

    return (
        <div className="signup-con">
            <div className='signup-left-con'>
                <div className='signup-left-con-content'>
                    <h1>welcome to <br /> our community</h1>
                    <p>Fuse helps developers to build organized and well coded dashboards full of beautiful rich modules. Join us and start building your application today.</p>
                    <div className='iamges-section-con'>
                        <ul className='images-list'>
                            <li>
                                <img className='image-profile' src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1721067512/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n_he5osy.webp' alt='profile'/>
                            </li>
                            <li>
                                <img className='image-profile' src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1721067511/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n_kgdysb.webp' alt='profile'/>
                            </li>
                            <li>
                                <img className='image-profile' src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1721067512/394-3947019_round-profile-picture-png-transparent-png_utvczv.jpg' alt='profile'/>
                            </li>
                            <li>
                                <img className='image-profile' src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1721067502/442-4426528_round-picture-profile-blond-hd-png-download_pdtugy.png' alt='profile'/>
                            </li>
                        </ul>
                        <p>More than 17% people joined us, it's your turn</p>
                    </div>
                </div>
            </div>
            <form className='signup-right-con' onSubmit={onSubmitUserRegister}>
                <img className='signup-right-con-img' src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1721069407/fuse_company_logo_qvit7j_uiqldw.jpg' alt='fuse' />
                <h1>Sign in</h1>
                <p>Don't Have an account? <Link to='/Api/user_registeration/api/user_registeration'>Sign up</Link></p>
                <div className='inputFieldCon'>
                    <label>Email Address *</label>
                    <input type="email" name="email" id="email" className='fullname' onChange={onChangeEmail} value={userLoginInfo.user_email} required/>
                </div>
                <div className='inputFieldCon'>
                    <label>Password *</label>
                    <div className='passwordBox'>
                        { showPassword === true 
                            ? (<input type="text" name="password"  id='passwordInput' onChange={onChangePassword} value={userLoginInfo.user_password} required/>) 
                            : (<input type="password" name="password" id='passwordInput' onChange={onChangePassword} value={userLoginInfo.user_password} required/>)
                        }
                        <MdRemoveRedEye size={20} style={{display: 'flex', justifyContent:'center', alignItems: 'center' , height: '100%'}} onClick={onClickShowPassword}/>
                    </div>
                </div>
                <button type='submit' className='submitBtn'>
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login