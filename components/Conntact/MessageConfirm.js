import React from 'react';
import theme from '../../themes/default';
import { GiConfirmed } from 'react-icons/gi';

const MessageConfirm = () => {
  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: '50vh',
        background: theme.colors.secondary,
        height: 60,
        border: '1px solid white',
        borderRight: 'none',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}
    >
      <GiConfirmed size='3rem' />
      <span style={{ marginLeft: 10 }}>Message Sent</span>
    </div>
  );
};

export default MessageConfirm;
