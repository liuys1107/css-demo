import React from 'react';
import './index.scss';

export const Button1 = () => {
    return (
        <button
            data-text="Start"
            className="btn btn-primary btn-ghost btn-border-stroke  btn-text-float-up"
        >
            <div className="btn-borders">
                <div className="border-top"/>
                <div className="border-right"/>
                <div className="border-bottom"/>
                <div className="border-left"/>
            </div>
            <span className="btn-text">Start</span>
        </button>
    )
};
