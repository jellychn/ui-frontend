import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSearch, updateQ } from '../actions/searchActions';

class Search extends React.Component {
    render () {
        return (
            <div id='search' style={{display: this.props.search ? 'block':'none'}}>
                <div className='search-container'>
                    <div className='search-header'>
                        <div style={{display:'flex'}}>
                            <div className='search-icon'/>
                            <div className='search-close-icon' onClick={this.props.closeSearch}/>
                        </div>
                        <input id='search-input' type='text' onChange={(e) => {this.props.updateQ(e)}}/>
                    </div>
                    <div className='search-content'>
                        <Link to='/item' className='item' onClick={this.props.closeSearch}>
                                <div className='img-container'>
                                    <img src='https://ae01.alicdn.com/kf/HTB1gFwFO3TqK1RjSZPhq6xfOFXa6/Dropshipping-Men-Harajuku-Harem-Pants-2020-Mens-Summer-Cotton-Linen-Joggers-Pants-Male-Vintage-Chinese-Style.jpg' alt=''/>
                                    <p style={{height: '50px'}}>Men Harajuku Harem Pants</p>
                                    <p style={{margin: '10px 0 0 0'}}>PANTS</p>
                                    <p>$60</p>
                                </div>
                        </Link>
                        <Link to='/item' className='item' onClick={this.props.closeSearch}>
                            <div className='img-container'>
                                <img src='https://ae01.alicdn.com/kf/HTB1lWWEVQvoK1RjSZFNq6AxMVXaN/Spring-and-Autumn-New-men-s-printed-long-sleeved-T-shirt-teen-round-neck-bottom-top.jpg' alt=''/>
                                <p style={{height: '50px'}}>Waterproof Spring Hooded</p>
                                <p style={{margin: '10px 0 0 0'}}>TEE</p>
                                <p>$80</p>
                            </div>
                        </Link>
                        <Link to='/item' className='item' onClick={this.props.closeSearch}>
                                <div className='img-container'>
                                    <img src='https://ae01.alicdn.com/kf/Hbcaadf06d765406b8aede6b7bb684a6d3/Reflective-T-shirt-Women-Anime-Sailor-Moon-Graphic-T-Shirt-Harajuku-Kawaii-Tshirt-Sailormoon-Clothes-Ulzzang.jpg' alt=''/>
                                    <p style={{height: '50px'}}>Reflective T-shirt Women Anime Sailor Moon Graphic T Shirt</p>
                                    <p style={{margin: '10px 0 0 0'}}>TEE</p>
                                    <p>$60</p>
                                </div>
                        </Link>
                        <Link to='/item' className='item' onClick={this.props.closeSearch}>
                                <div className='img-container'>
                                    <img src='https://ae01.alicdn.com/kf/Hb003c456849644b7b898c1b901fe40eaB/Pants-Men-New-Spring-2020-Cargo-Pants-Slim-Casual-Korean-Version-Hip-Hop-Corset-Pants-Men.jpg' alt=''/>
                                    <p style={{height: '50px'}}>cammo pants</p>
                                    <p style={{margin: '10px 0 0 0'}}>PANTS</p>
                                    <p>$120</p>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSearch: () => dispatch(closeSearch()),
        updateQ: (q) => dispatch(updateQ(q))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);