import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const FeatureCard = ({ title, description, link, image }) => {
    return (
        <Link
            to={link}
            className="w-80 h-24 p-4 flex items-center bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out m-4"
        >
            {/* Image on the left */}
            <div className="mr-4">
                <img src={image} alt={title} className="w-8 h-8 object-contain" />
            </div>

            {/* Text content */}
            <div>
                <h3 className="text-md font-medium mb-1">{title}</h3>
                <p className="text-xs text-gray-600">{description}</p>
            </div>
        </Link>
    );
};

export default FeatureCard;
