import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import { registerUser } from '../features/auth/authActions'
import './Login.scss'
const RegisterScreen = () => {
  const [customError, setCustomError] = useState(null)

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile')
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()

    dispatch(registerUser(data))
  }

  return (


    <div className="login-parent">

    <div className='form-parent'>
      {/* <div className='star'>
        <img src="./images/star.png" alt="" />
       
      </div> */}
      <div>
      <h1>Welcome to Register Page</h1>
      <p>Type your e-mail or phone number and password <br /> </p>
      </div>
    <center>
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <div className='form-group'>
        <label htmlFor='firstName'></label>
        <input
          type='text'
          className='form-input' placeholder='Enter your name'
          {...register('firstName')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'></label>
        <input placeholder='Enter your email'
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'></label>
        <input placeholder='Enter your password'
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'></label>
        <input placeholder='Enter your confirm password'
          type='password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='number'></label>
        <input placeholder='Enter your contact number' style={{background:'none'}}
          type='number'
          className='form-input'
          {...register('conatctnumber')}
          required
        />
      </div>
      <div>
      <label htmlFor='number'></label>
        <input placeholder='Enter your company name' style={{background:'none'}}
          type='text'
          className='form-input'
          {...register('companyname')}
          required
        />
      </div>
      <div>
      <label htmlFor='number'></label>
        <input placeholder='Enter your destination' style={{background:'none'}}
          type='textarea'
          className='form-input'
          {...register('destination')}
          required
        />
      </div>
      <div>
      <label htmlFor='number'></label>
        <input placeholder='Enter your interest seprated by coulmn' style={{background:'none'}}
          type='textarea'
          className='form-input'
          {...register('keywords')}
          required
        />
      </div>
      <div>
      <label htmlFor='number'></label>
        <input  style={{background:'none'}}
          type='file'
          className='form-input'
          {...register('photo')}
          required
        />
      </div>
      <div >
          <input type="radio" name='fist' value={"value1"} style={{width:'40px'}} 
       /> Freelancer
         <input type="radio" name='fist' value={"value1"} style={{width:'40px'}} 
          /> Buyer
          </div>
      <button type='submit' className='login' disabled={loading}>
        {loading ? <Spinner /> : 'Register'}
      </button>
    </form>
    </center>
    </div>
  </div>
  
  )
}

export default RegisterScreen
