import React from 'react';
import { connect } from 'react-redux';
import { closeDisplayMenu } from '../actions/headerActions';
import { triggerGetItems } from '../actions/filterActions';
import {
    selectFilter,
    selectGender,
    selectCategory
} from '../actions/filterActions';
import DisplayItem from '../components/DisplayItem';

class Display extends React.Component {
    state = {
        categories: [
            'Tees',
            'Jumpers',
            'Hoddies',
            'Shorts',
            'Pants'
        ]
    }

    componentDidMount () {
        window.scrollTo(0,0);
        this.props.triggerGetItems(true);
    }

    onFilterChange = (e) => {
        this.props.selectFilter(e.target.value);
        this.props.closeDisplayMenu();
    }

    checkHasItems = () => {
        let items = [];
        if (this.props.filter === 'low-high') {
            items = [].concat(this.props.data).sort((a, b) => a.price > b.price ? 1 : -1).map((item, index) => 
                <DisplayItem index={index} item={item} closeDisplayMenu={this.props.closeDisplayMenu}/>
            );
        } else if (this.props.filter === 'high-low') {
            items = [].concat(this.props.data).sort((a, b) => a.price < b.price ? 1 : -1).map((item, index) => 
                <DisplayItem index={index} item={item} closeDisplayMenu={this.props.closeDisplayMenu}/>
            );
        } else if (this.props.filter === 'a-z') {
            items = [].concat(this.props.data).sort((a, b) => a.name > b.name ? 1 : -1).map((item, index) => 
                <DisplayItem index={index} item={item} closeDisplayMenu={this.props.closeDisplayMenu}/>
            );
        } else if (this.props.filter === 'z-a') {
            items = [].concat(this.props.data).sort((a, b) => a.name < b.name ? 1 : -1).map((item, index) => 
                <DisplayItem index={index} item={item} closeDisplayMenu={this.props.closeDisplayMenu}/>
            );
        } else {
            items = this.props.data.map((item, index) => {
                return (
                    <DisplayItem key={index} index={index} item={item} closeDisplayMenu={this.props.closeDisplayMenu}/>
                )
            });
        }
        if (this.props.data.length > 0) {
            return (
                <div id='display' style={{padding: this.props.displayMenu ? '100px 80px 40px 450px':'100px 80px 40px 80px'}}>
                    <h2>{`${this.props.gender.toUpperCase()} / ${this.props.category.toUpperCase()}  [ ${this.props.filter.toUpperCase()} ] : ${this.props.q.toUpperCase()}`}</h2>
                    <div className='items-container'>
                        {items}
                    </div>
                </div>
            )
        } else {
            return <div className='filler' style={{padding: this.props.displayMenu ? '100px 80px 40px 450px':'100px 80px 40px 80px'}}><h2>{`NO ITEMS FOUND FOR QUERY: ${this.props.gender.toUpperCase()} / ${this.props.category.toUpperCase()}  [ ${this.props.filter.toUpperCase()} ] : ${this.props.q.toUpperCase()}`}</h2></div>
        }
    }

    render () {
        if (this.props.itemsFeatched) {
            const filterCategories = this.state.categories.map((category, index) => {
                return (
                    <button key={index} value={category} style={{backgroundColor: this.props.category === category ? '#ddd':'#F8F9FB'}} onClick={() => {this.props.selectCategory(category); this.props.closeDisplayMenu();this.props.triggerGetItems(true)}}>{category.toUpperCase()}</button>
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
                            <button value='women' onClick={() => {this.props.selectGender('women'); this.props.closeDisplayMenu();this.props.triggerGetItems(true)}} style={{backgroundColor: this.props.gender === 'women' ? '#ddd':'#F8F9FB'}}>WOMEN</button>
                            <button value='men' onClick={() => {this.props.selectGender('men'); this.props.closeDisplayMenu();this.props.triggerGetItems(true)}} style={{backgroundColor: this.props.gender === 'men' ? '#ddd':'#F8F9FB'}}>MEN</button>
                        </div>
                        <div className='category-container'>
                            <p>CATEGORIES</p>
                            {filterCategories}
                        </div>
                    </div>
                    {this.checkHasItems()}
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
        q: state.search.q,
        itemsFeatched: state.filter.featched,
        data: state.filter.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeDisplayMenu: () => dispatch(closeDisplayMenu()),
        selectFilter: (filter) => dispatch(selectFilter(filter)),
        selectGender: (gender) => dispatch(selectGender(gender)),
        selectCategory: (category) => dispatch(selectCategory(category)),
        triggerGetItems: (bol) => dispatch(triggerGetItems(bol))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);