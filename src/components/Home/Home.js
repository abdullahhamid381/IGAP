import React from 'react'
import './Home.scss'

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BsCurrencyDollar } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import user from '../../assets/user.jpg'
const Home = () => {
    const [value, setValue] = React.useState(0);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='my-jobdetail-parent'>
            <div>
                <div className='Title-my-job'>
                    <div>
                        <h1>I will design custom landing page for your business website</h1>
                    </div>
                    <div>
                        <p>Please Select the Field</p>
                    </div>
                    <div className='cata'>
                        <div>
                          
                        </div>
                        <div>
                         
                        </div>
                    </div>
                    <div className='review'>
                        <div className='user-icon'>
                            <img src={user} alt="" />
                        </div>
                        <div>
                            <h4>@usernmae</h4>
                            
                        </div>
                        <div>
                        <h4>Level (New) </h4>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                            
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
                <div className='description-section'>
                    <p className='description-title'>About this job</p>
                    <p className='description-detail'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, molestias quos? Optio omnis, obcaecati quam in error beatae nihil quisquam, velit reiciendis magnam odit voluptatum dolor ad earum fugit autem explicabo assumenda qui? Perspiciatis tempora a aspernatur neque magni explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum, in maiores temporibus enim quam eaque omnis cumque quos quae exercitationem quia repellendus repudiandae obcaecati fugiat rem itaque tempore nisi veritatis laudantium doloremque. Obcaecati, quibusdam! Est, enim aliquid? Sit atque, ullam dolorem, in maxime fugit eaque esse quidem consequuntur modi obcaecati repudiandae. Suscipit vel laudantium labore, magni animi fugiat voluptatem consequuntur tempore autem magnam earum dolorum commodi corrupti? Officia veritatis a eveniet maiores dolor culpa minima, sapiente ipsum pariatur iste obcaecati, commodi eos, libero consequatur doloribus vero quibusdam. Dicta assumenda, recusandae iusto nobis id nam neque consectetur deserunt cum perspiciatis. </p>
                </div>


                {/* BUDJEt SECTION START HERE */}

                <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px' }}>
                    <div className='budget-parent' >
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <BsCurrencyDollar />
                            </div>
                            <div>
                                <h3>$5000</h3>
                                <p style={{ margin: '5px 0 0 0' }}>Fixed Price</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <AiOutlineFieldTime />
                            </div>
                            <div>
                                <h3>Less than 30hrs/week</h3>
                                <p style={{ margin: '5px 0 0 0' }}>Hourly</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>




                {/* PROJECT TYPE */}
                <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px', margin: '40px 0' }}>
                    <p>Freelancer Name : Dummy</p>
                    <br />
                    <p>Buyer Name : Dummy</p>
                </div>


                {/* ATTACHMENT SECTION */}

                <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px', margin: '40px 0' }}>
                    <h3>Choose the file (Optional)</h3>
                    <div style={{ margin: '10px 0' }}>
                        <input type="file" multiple={true} />
                    </div>
                </div>
                <div >
                    <button className='apply'>Apply Now</button>
                </div>
            </div>

            <div>
                <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px ' }} s>
                    <div>
                        <h3>About the Client</h3>
                        <p style={{ marginTop: '10px' }}>America</p>
                        <p style={{ color: 'gray', marginTop: '10px' }}>Calofornia</p>
                        <p style={{ marginTop: '10px' }}>4 jobs posted</p>
                        <p style={{ marginTop: '10px' }}>50$ total spents</p>
                        <p style={{ color: 'gray', marginTop: '10px' }}>2 hires, 0 Actives</p>
                        <p style={{ color: 'gray', marginTop: '30px' }}>Member Since 2019</p>

                    </div>
                </div>

                <div >
                    <button className='contact'>Contact</button>
                </div>


            </div>
        </div>
    )
}

export default Home