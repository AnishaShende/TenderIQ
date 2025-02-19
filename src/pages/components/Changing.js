import React, { useEffect, useState } from 'react';

const ChangingProgressProvider = ({ values, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentValue, setCurrentValue] = useState(values[0]);

    useEffect(() => {
        let animationFrame;

        const animate = () => {
            if (currentIndex < values.length - 1) {
                // Move to the next value
                setCurrentValue((prevValue) => {
                    const newValue =
                        prevValue + (values[currentIndex + 1] - values[currentIndex]) / 10;
                    return newValue < values[currentIndex + 1] ? newValue : values[currentIndex + 1];
                });

                if (currentValue >= values[currentIndex + 1]) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }
            } else {
                cancelAnimationFrame(animationFrame);
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, [currentIndex, currentValue, values]);

    return children(currentValue);
};

export default ChangingProgressProvider;