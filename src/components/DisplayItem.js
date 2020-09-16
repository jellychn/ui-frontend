import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateQ } from '../actions/searchActions';

class DisplayItems extends React.Component {
    state = {
        colors: [
            'black',
            'white',
            'gray',
            'blue',
            'dark blue',
            'light blue',
            'red',
            'dark red',
            'pink',
            'green',
            'dark green',
            'purple',
            'orange',
            'yellow',
            'brown',
        ]
    }

    checkSearchColor = () => {
        if (Object.keys(this.props.item.colors).includes(this.props.q.toLowerCase())) {
            return <img src={this.props.item.colors[this.props.q]} alt={this.props.item.name}/>
        } else {
            return <img src={this.props.item.images[0]} alt={this.props.item.name}/>
        }
    }

    render () {
        return (
            <div key={this.props.index} className='item'>
                <Link to={`/item/${this.props.item.id}`} onClick={() => {this.props.closeDisplayMenu();this.props.updateQ('')}}>
                    <div className='item-inner'>
                        <div className='img-container'>
                            {this.checkSearchColor()}
                        </div>
                        <p style={{margin: '5px 0 0 0', fontSize: '15px', height: '60px'}}>{this.props.item.name.toUpperCase()}</p>
                        <p style={{margin: '3px 0 0 0', fontSize: '12px'}}>{this.props.item.category.toLocaleUpperCase()}</p>
                        <p style={{margin: '10px 0 0 0', fontSize: '20px'}}>{`$${this.props.item.price}`}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        q: state.search.q
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQ: (q) => dispatch(updateQ(q))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayItems);