import {useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/Error'
import Spinner from '../Spinner'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { registerUser } from '../../features/auth/authActions'

import './Create.scss'
const Create = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
      <h1>Welcome to job create page</h1>
      <p>Create your job <br /> </p>
      </div>
    <center>
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <div className='form-group'>
        <label htmlFor='title'></label>
        <input
          type='text'
          className='form-input' placeholder='Enter your title'
          {...register('title')}
          required
        />
      </div>
      <div>
      <label htmlFor='description'></label>
        <input placeholder='Enter your description' style={{background:'none'}}
          type='textarea'
          className='form-input'
          {...register('description')}
          required
        />
      </div>
      <div>
      <label htmlFor='budget'></label>
        <input placeholder='Enter your budget' style={{background:'none'}}
          type='number'
          className='form-input'
          {...register('budget')}
          required
        />
      </div>
      <div>
      <label htmlFor='numberdays'></label>
        <input placeholder='Enter your number of days' style={{background:'none'}}
          type='number'
          className='form-input'
          {...register('numberdays')}
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
      <div>
      <label htmlFor='number'></label>
        <input  style={{background:'none'}}
          type='file'
          className='form-input'
          {...register('photo')}
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
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>first</MenuItem>
          <MenuItem value={20}>second</MenuItem>
          <MenuItem value={30}>third</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <span>Sub Category</span>
          </MenuItem>
          <MenuItem value={10}>first</MenuItem>
          <MenuItem value={20}>second</MenuItem>
          <MenuItem value={30}>third</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
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

export default Create