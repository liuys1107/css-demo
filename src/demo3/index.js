import React from 'react';
import {Button1} from './button1';
import {Button2} from './button2';
import './index.scss';

export const Demo3 = () => {
    return (
        <div className="demo3-box">
            <div className="btn-box">
                <Button1 />
                <Button2 />
            </div>
        </div>
    )
};
