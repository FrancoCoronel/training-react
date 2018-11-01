import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }