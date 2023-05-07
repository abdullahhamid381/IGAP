import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import './Categoryscss/CategoryItems.scss'
import { productitems } from '../../Data';
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const CategoryItems = () => {
    const [value, setValue] = React.useState(2);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='product-parent-item'>
            <div className='links'>

                

            </div>
            <div className='product-discount-flex'>
                <div className='discount-title'>
                    <h2>Discounts up to 60% Off</h2>
                </div>
                <div>
                    {/* <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box> */}
                </div>
            </div>


            <div className='product-items-list-parent'>
                {
                    productitems.map((items) => {
                        return (
                         
                             <div>
                                <div className='product-img'>
                                    <div>
                                        <img src='./images/iphone.jpg' alt="" />
                                    </div>
                                    <div className='cart-button'>
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                                <div>
                                    <button>Offical Store</button>
                                    <h6 className='product-title'>Freeyond M5,8GB+128GB,6.52", 50MP,4G Smartphone 5000mAh Dual</h6>
                                    <span>PKR 9,590</span>
                                    <br />
                                    <del>PKR 10,590</del>

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
                          
                        )
                    })
                }
            </div>
        </div>

    )
}

export default CategoryItems