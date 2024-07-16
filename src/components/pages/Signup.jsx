import { useState } from 'react'
import { MdRemoveRedEye } from "react-icons/md";
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const apiUrl = 'https://syoft.dev/Api/user_registeration/api/user_registeration'
    const [showPassword, setShowPassword] = useState(false)
    const [userRegisterInfo, setuserRegisterInfo] = useState({
        user_firstname: '',
        user_email:"",
        user_phone:"",
        user_password:"",
        user_company: "",
        user_lastname:"Mr./Miss.",  
        user_city:"Hyderabad",
        user_zipcode: "500407"
    
    });

    const onChangeFullName = (e) => {
        setuserRegisterInfo((prevState) => ({...prevState, user_firstname: e.target.value}));
    }

    const onChangeEmail = (e) => {
        setuserRegisterInfo((prevState) => ({...prevState, user_email: e.target.value}));
    }

    const onChangePassword = (e) => {
        setuserRegisterInfo((prevState) => ({...prevState, user_password: e.target.value}));
    }

    const onChangePhone = (e) => {
        setuserRegisterInfo((prevState) => ({...prevState, user_phone: e.target.value}));
    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitUserRegister = async (e) => {
        e.preventDefault()
        console.log(userRegisterInfo);
        if (userRegisterInfo.user_firstname.length < 3) {
            return alert("Name should contains atleast 3 character");
        }

        if (userRegisterInfo.user_phone.length !== 10)  {
            return alert("Please Enter Valid Phone number");
        }

        const method = {
            method: 'POST',
            body: JSON.stringify(userRegisterInfo)
        }
        try {
            const response = await fetch(apiUrl, method);
            const data = await response.json();
            console.log(data)
            alert("user Registered Successfully");
            return navigate('/')
        }catch(err) {
            return alert("Internal server Error");
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
                <h1>Sign up</h1>
                <p>Already Have an account? <Link to='/'>Sign in</Link></p>
                <div className='inputFieldCon'>
                    <label>Full Name *</label>
                    <input type="text" name="name" id="name" className='fullname' onChange={onChangeFullName} value={userRegisterInfo.user_firstname} required/>
                </div>
                <div className='inputFieldCon'>
                    <label>Email Address *</label>
                    <input type="email" name="email" id="email" className='fullname' onChange={onChangeEmail} value={userRegisterInfo.user_email} required/>
                </div>
                <div className='inputFieldCon'>
                    <label>Password *</label>
                    <div className='passwordBox'>
                        { showPassword === true 
                            ? (<input type="text" name="password"  id='passwordInput' onChange={onChangePassword} value={userRegisterInfo.user_password} required/>) 
                            : (<input type="password" name="password" id='passwordInput' onChange={onChangePassword} value={userRegisterInfo.user_password} required/>)
                        }
                        <MdRemoveRedEye size={20} style={{display: 'flex', justifyContent:'center', alignItems: 'center' , height: '100%'}} onClick={onClickShowPassword}/>
                    </div>
                </div>
                <div className='inputFieldCon'>
                    <label>Phone *</label>
                    <input type="tel" name="phone" id="phone" className='fullname' onChange={onChangePhone} required/>
                </div>
                <div className='termsAndCondition'>
                    <input type="checkbox" name="checbox" id="checkbox" className='fullname' required/>
                    <label>I agree to the Terms of Service and Privacy Policy</label>
                </div>
                <button type='submit' className='submitBtn'>
                    Create your free account
                </button>
            </form>
        </div>
    )
}
export default Signup
