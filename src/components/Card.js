import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    smallImgSrc: PropTypes.string,
    largeImgSrc: PropTypes.string,
    wide: PropTypes.bool,
  };

  render() {
    const wideCard = this.props.wide ? 'card--wide' : '';

    return (
      <div className={`card ${wideCard}`}>
        <img className='card__image' src={this.props.smallImgSrc} srcSet={`${this.props.largeImgSrc} 1000w`} alt=''/>

        <div className='card__content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;