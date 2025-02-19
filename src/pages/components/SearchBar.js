import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeedSelection from './SpeedSelection';

const Searchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSpeed, setSelectedSpeed] = useState('casestudy'); // Default to 'Case Study'
    const [inputValue, setInputValue] = useState('');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown if clicked outside
    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            navigate(`/search-results?query=${encodeURIComponent(inputValue.trim())}`);
        }
    };

    // Handle Enter key in input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSearchSubmit(e);
        }
    };

    // Get the label of the selected speed
    const getSelectedLabel = () => {
        const options = [
            { label: 'Case Study', value: 'casestudy' },
            { label: 'Legal Terms', value: 'legalterm' },
            { label: 'Case Summary', value: 'casesummary' },
        ];
        const selectedOption = options.find(option => option.value === selectedSpeed);
        return selectedOption ? selectedOption.label : 'Case Study';
    };
    

    // Placeholder based on selection
    const getPlaceholder = () => {
        switch (selectedSpeed) {
            case 'casestudy':
                return 'Enter details about your case';
            case 'legalterm':
                return 'Enter legal terms for your search';
            case 'casesummary':
                return 'Enter about any past case';
            default:
                return 'Enter details';
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="max-w-4xl w-full px-6 relative z-10">
            <div className="h-12 w-full flex items-center space-x-1 relative border border-gray-900 rounded-full bg-muted focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all">

                {/* Dropdown button inside the search bar */}
                <div className="relative h-full">
                    <button
                        type="button"
                        id="speed-dropdown"
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-center text-sm font-medium px-4 h-full rounded-l-full whitespace-nowrap transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground"
                    >
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-down mr-2 text-foreground/50"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>

                            {getSelectedLabel()}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-fast-forward ml-5 text-green-500"
                            >
                                <polygon points="13 19 22 12 13 5 13 19" />
                                <polygon points="2 19 11 12 2 5 2 19" />
                            </svg>
                        </div>
                    </button>

                    {isOpen && (
                        <div className="absolute w-48 mt-2 bg-white shadow-lg rounded-md animate-slide-down z-10">
                            <SpeedSelection
                                selectedSpeed={selectedSpeed}
                                setSelectedSpeed={(value) => {
                                    setSelectedSpeed(value);
                                    setIsOpen(false); // Close dropdown on selection
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Textarea inside the capsule */}
                <textarea
                    name="input"
                    placeholder={getPlaceholder()} // Dynamic placeholder
                    spellCheck="false"
                    value={inputValue} // Bind value to state
                    onChange={(e) => setInputValue(e.target.value)} // Update state on change
                    onKeyDown={handleKeyDown} // Trigger form submission on Enter key press
                    className="flex-1 h-full px-4 py-3 text-sm placeholder:text-muted-foreground border-none bg-muted rounded-full resize-none ring-1 ring-inset ring-transparent focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none "
                    rows="1"
                    tabIndex="0"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    aria-label="Send message"
                    className="inline-flex items-center justify-center h-10 w-10 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </form>

    );
};

export default Searchbar;
