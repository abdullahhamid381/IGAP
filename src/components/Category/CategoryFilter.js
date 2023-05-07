import React from 'react'

import './Categoryscss/CategoryFilter.scss'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { brands, gender, sellerscore, size } from '../../Data';
const CategoryFilter = () => {
    return (
        <div className='filter-parent'>
            <div className='brands'>
                <h4>BRANDS</h4>

                <div className='brands-name'>
                    {
                       brands.map((brandsname) => {
                            return (
                                <div className='brands-list'>
                                    <input type="checkbox" />
                                    <span> {brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div>
                        <div className="range">
                            {/* <Box width={300}>

                                <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                            </Box> */}
                        </div>
                        <input type="number" placeholder='Enter Your Range'style={{border:'none',outline:'none',background:'whiteSmoke',padding:'10px'}}/>
                    </div>
                </div>
            </div>
            <div className='brands'>
                <h4>SIZE</h4>

                <div className='brands-name'>
                    {
                        size.map((brandsname) => {
                            return (
                                <div className='brands-list'>
                                    <input type="checkbox" />
                                    <span> {brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        {/* <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box> */}
                    </div>
                    <input type="number" placeholder='Enter Your Range'style={{border:'none',outline:'none',background:'whiteSmoke',padding:'10px'}}/>
                </div>
            </div>
            <div className='brands'>
                <h4>GENDER</h4>

                <div className='brands-name'>
                    {
                        gender.map((brandsname) => {
                            return (
                                <div className='brands-list'>
                                    <input type="checkbox" />
                                    <span> {brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        {/* <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box> */}
                    </div>
                    <input type="number" placeholder='Enter Your Range' style={{border:'none',outline:'none',background:'whiteSmoke',padding:'10px'}} />
                </div>
            </div>
            <div className='brands'>
                <h4>SELLER SCORE</h4>

                <div className='brands-name'>
                    {
                        sellerscore.map((brandsname) => {
                            return (
                                <div className='brands-list'>
                                    <input type="radio" />
                                    <span> {brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        {/* <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box> */}
                    </div>
                    <input type="number" placeholder='Enter Your Range' style={{border:'none',outline:'none',background:'whiteSmoke',padding:'10px'}}/>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter