import React from 'react';
import './DropDownMenu.css';
import logo from './police-order.png'

const SpeedSelection = ({ selectedSpeed, setSelectedSpeed }) => {
    const options = [
        {
            label: 'Case Study',
            value: 'casestudy',
            icon: logo,
            description: 'Information related to previously occurred cases',
        },
        {
            label: 'Legal Terms',
            value: 'legalterm',
            icon: '✨',
            description: 'Terminologies as per recent advancements',
            isPro: false,
        },
        {
            label: 'Case Summary',
            value: 'casesummary',
            icon: '✨',
            description: 'Summary of any particular case',
            isPro: false,
        },
    ];

    return (
        <div className="speed-selection">
            {options.map((option) => (
                <div
                    key={option.value}
                    className={`speed-option ${selectedSpeed === option.value ? 'selected' : ''}`}
                    onClick={() => setSelectedSpeed(option.value)}
                >
                    <span className="option-icon"><img src={logo} width={16} height={16} /></span>
                    <span className="option-label">{option.label}</span>
                    {option.isPro && <span className="option-pro">Pro</span>}
                    <div className="option-description ">{option.description}</div>
                </div>
            ))}
        </div>
    );
};

export default SpeedSelection;
