// import { Button } from 'antd';
import React from 'react';

export default function CustomButton(props) {
  const { text, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: 10,
        backgroundColor: '#f5f5f5',
        height: 36,
        width: 78,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0px solid #f5f5f5',
      }}
    >
      {text}
    </button>
  );
}
