import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import { closeDisplayMenu } from '../actions/headerActions';
import {
    selectFilter,
    selectGender,
    selectCategory
} from '../actions/filterActions';

class Display extends React.Component {
    state = {
        featched: false,
        data: [],
        categories: [
            'Tee',
            'Jumpers',
            'Hoddies',
            'Shorts',
            'Pants'
        ]
    }

    componentDidMount () {
        window.scrollTo(0,0);
        this.getItems();
    }

    getItems = () => {
        axios.get(config.url + '/items').then(res => {
            this.setState({data: res.data, featched: true});
        }).catch(err => console.log(err));
    }

    onFilterChange = (e) => {
        this.props.selectFilter(e.target.value);
        this.props.closeDisplayMenu();
    }

    render () {
        if (this.state.featched) {
            const items = this.state.data.map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <Link to={`/item/${item.id}`} onClick={this.props.closeDisplayMenu}>
                            <div className='item-inner'>
                                <div className='img-container'>
                                    <img src={item.images[0]} alt={index}/>
                                </div>
                                <p style={{margin: '5px 0 0 0', fontSize: '15px', height: '60px'}}>{item.name.toUpperCase()}</p>
                                <p style={{margin: '3px 0 0 0', fontSize: '12px'}}>{item.category.toLocaleUpperCase()}</p>
                                <p style={{margin: '10px 0 0 0', fontSize: '20px'}}>{`$${item.price}`}</p>
                            </div>
                        </Link>
                    </div>
                )
            });
    
            const filterCategories = this.state.categories.map((category, index) => {
                return (
                    <button key={index} value={category} style={{backgroundColor: this.props.category === category ? '#ddd':'#F8F9FB'}} onClick={() => {this.props.selectCategory(category); this.props.closeDisplayMenu()}}>{category.toUpperCase()}</button>
                )
            });
    
            return (
                <div className='display-outter'>
                    <div className='filter-container' style={{display: this.props.displayMenu ? 'block':'none'}}>
                        <div className='filter'>
                            <div className='filter-logo'/>
                            <select onChange={(e) => {this.onFilterChange(e)}}>
                                <option value='-'>-</option>
                                <option value='low-high'>LOW-HIGH</option>
                                <option value='high-low'>HIGH-LOW</option>
                                <option value='a-z'>A-Z</option>
                                <option value='z-a'>Z-A</option>
                            </select>
                        </div>
                        <div className='gender-container'>
                            <button value='women' onClick={() => {this.props.selectGender('women'); this.props.closeDisplayMenu()}} style={{backgroundColor: this.props.gender === 'women' ? '#ddd':'#F8F9FB'}}>WOMEN</button>
                            <button value='men' onClick={() => {this.props.selectGender('men'); this.props.closeDisplayMenu()}} style={{backgroundColor: this.props.gender === 'men' ? '#ddd':'#F8F9FB'}}>MEN</button>
                        </div>
                        <div className='category-container'>
                            <p>CATEGORIES</p>
                            {filterCategories}
                        </div>
                    </div>
                    <div id='display' style={{padding: this.props.displayMenu ? '100px 80px 40px 450px':'100px 80px 40px 80px'}}>
                        <div>
                            <h2>{`${this.props.gender.toUpperCase()} / ${this.props.category.toUpperCase()}  [ ${this.props.filter.toUpperCase()} ] : ${this.props.q.toUpperCase()}`}</h2>
                            <div className='items-container'>
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div className='loading'><div className='loader-container'><div className='loader'></div></div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        displayMenu: state.header.displayMenu,
        filter: state.filter.filter,
        gender: state.filter.gender,
        category: state.filter.category,
        q: state.search.q
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDisplayMenu: () => dispatch(closeDisplayMenu()),
        selectFilter: (filter) => dispatch(selectFilter(filter)),
        selectGender: (gender) => dispatch(selectGender(gender)),
        selectCategory: (category) => dispatch(selectCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);