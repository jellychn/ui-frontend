import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import woman_img from '../assets/images/woman.webp';
import men_img from '../assets/images/men.jpg';

import {
    selectGender,
    selectCategory
} from '../actions/filterActions';

class Home extends React.Component {
    state = {
        categoriesTop: [
            'Tees',
            'Jumpers',
            'Hoddies',
            'Shorts',
            'Pants'
        ],
    }

    render () {
        const categoriesTop = this.state.categoriesTop.map((category, index) => {
            return (
                <Link to='/display'>
                    <div className='category-list' key={index} onClick={() => {this.props.selectCategory(category)}}>
                        <p>{category.toUpperCase()}</p>
                    </div>
                </Link>
            )
        });

        return (
            <div id='home'>
                <h1>SHOP</h1>
                <div className='home-content'>
                    <div className='left-content'>
                        <div className='women'>
                            <h2>Woman</h2>
                            <div className='img-container female-container'>
                                <Link to='/display'>
                                    <img src={woman_img} alt='women' onClick={() => {this.props.selectGender('women')}}/>
                                </Link>
                            </div>
                        </div>
                        <div className='men'>
                            <h2>Men</h2>
                            <div className='img-container male-container'>
                                <Link to='/display'>
                                    <img src={men_img} alt='men' onClick={() => {this.props.selectGender('men')}}/>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className='right-content'>
                            <h2>TYPE</h2>
                            {categoriesTop}
                        </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectGender: (gender) => dispatch(selectGender(gender)),
        selectCategory: (category) => dispatch(selectCategory(category))
    }
}

export default connect(null, mapDispatchToProps)(Home);