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
      <div className='star'>
        <img src="./images/star.png" alt="" />
       
      </div>
      <div>
      <h1>Welcome to Ase Shopping</h1>
      <p>Type your e-mail or phone number and password <br /> to register in a Ase account.</p>
      </div>
    <center>
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <div className='form-group'>
        <label htmlFor='firstName'></label>
        <input
          type='text'
          className='form-input' placeholder='Enter your first name'
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
