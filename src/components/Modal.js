import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modalActions';

class Modal extends React.Component {
    render () {
        if (this.props.item !== null) {
            return (
                <div id='modal' style={{display: this.props.modal ? 'block':'none'}}>
                    <p>{this.props.msg.toUpperCase()}</p>
                    <p>{this.props.item.name.toUpperCase()}</p>
                    <div className='img-container'>
                        <img src={this.props.item.colors[this.props.item.color]} alt={this.props.item.name}/>
                    </div>
                    <Link to='/cart'>
                        <button onClick={this.props.closeModal}>VIEW CART</button>
                    </Link>
                    <button onClick={this.props.closeModal}>CLOSE</button>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal.modal,
        msg: state.modal.msg,
        item: state.modal.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);