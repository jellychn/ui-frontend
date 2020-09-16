import React from 'react';
import axios from 'axios';
import config from '../config';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { closeSearch, updateQ } from '../actions/searchActions';
import { triggerGetItems } from '../actions/filterActions';

class Search extends React.Component {
    state = {
        items: [],
        q: ''
    }

    componentDidUpdate () {
        if (this.props.search) {
            document.getElementById('search-input').focus();
            document.getElementById('search-input').value = this.props.q;
        }
    }

    // getItems = () => {
    //     axios.post(config.url + '/items', {gender:'all', category:'', q:this.state.q}).then(res => {
    //         console.log(res.data)
    //         this.setState({items:res.data});
    //     }).catch(err => console.log(err));
    // }

    onChange = (e) => {
        this.setState({q:e.target.value});
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.triggerGetItems(true);
            this.props.updateQ(this.state.q);
            this.props.closeSearch();
            this.props.history.push('/display');
        }
    };

    onSearch = () => {
        this.props.triggerGetItems(true);
        this.props.updateQ(this.state.q);
        this.props.closeSearch();
        this.props.history.push('/display');
    }

    // checkSearchColor = (item) => {
    //     if (Object.keys(item.colors).includes(this.props.q.toLowerCase())) {
    //         return <img src={item.colors[this.props.q]} alt={item.name}/>
    //     } else {
    //         return <img src={item.images[0]} alt={item.name}/>
    //     }
    // }

    // items = () => {
    //     const items = this.state.items.slice(0,4).map((item, index) => {
    //         return (
    //             <Link key={index} to='/item' className='item' onClick={this.props.closeSearch}>
    //                 <div key={index} className='img-container'>
    //                     {this.checkSearchColor(item)}
    //                     <p style={{height: '50px'}}>{item.name.toUpperCase()}</p>
    //                     <p style={{margin: '10px 0 0 0'}}>{item.category.toUpperCase()}</p>
    //                     <p>{`$${item.price}`}</p>
    //                 </div>
    //             </Link>
    //         )
    //     });

    //     if (this.props.q.length > 0) {
    //         return items;
    //     }
    // }

    render () {
        return (
            <div id='search' style={{display: this.props.search ? 'block':'none'}}>
                <div className='search-container'>
                    <div className='search-header'>
                        <div style={{display:'flex'}}>
                            <p className='search-icon' onClick={() => {this.onSearch()}}>QUERY</p>
                            <p className='search-close-icon' onClick={this.props.closeSearch}>X</p>
                        </div>
                        <input id='search-input' type='text' value={this.state.q} onKeyPress={(e) => {this.onKeyPress(e)}} onChange={(e) => {this.onChange(e)}}/>
                    </div>
                    {/* <div className='search-content'>
                        {this.items()}
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.search,
        q: state.search.q,
        data: state.filter.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSearch: () => dispatch(closeSearch()),
        updateQ: (q) => dispatch(updateQ(q)),
        triggerGetItems: (bol) => dispatch(triggerGetItems(bol))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));