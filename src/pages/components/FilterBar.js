import React, { useState } from 'react';

const FilterBar = () => {
    const [minYear, setMinYear] = useState(2015);
    const [maxYear, setMaxYear] = useState(2024);
    const [selectedCourts, setSelectedCourts] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    const courtOptions = [
        'Madras High Court', 'Delhi High Court', 'Supreme High Court',
        'Gujarat High Court', 'Kerela High Court', 'Assam High Court'
    ];

    const statusOptions = [
        'Judgement', 'Disposed Off', 'Decree', 'Order'
    ];

    // Example array of cases to filter
    const cases = [
        { court: 'Madras High Court', status: 'Judgement', year: 2017 },
        { court: 'Delhi High Court', status: 'Disposed Off', year: 2019 },
        { court: 'Supreme High Court', status: 'Decree', year: 2021 },
        { court: 'Gujarat High Court', status: 'Order', year: 2016 },
        { court: 'Kerela High Court', status: 'Judgement', year: 2023 },
        { court: 'Assam High Court', status: 'Disposed Off', year: 2020 }
    ];

    // Handle min year change
    const handleMinYearChange = (e) => {
        const value = Math.min(parseInt(e.target.value), maxYear - 1);
        setMinYear(value);
    };

    // Handle max year change
    const handleMaxYearChange = (e) => {
        const value = Math.max(parseInt(e.target.value), minYear + 1);
        setMaxYear(value);
    };

    // Handle checkbox change for courts
    const handleCourtChange = (court) => {
        setSelectedCourts((prevSelectedCourts) =>
            prevSelectedCourts.includes(court)
                ? prevSelectedCourts.filter((c) => c !== court)
                : [...prevSelectedCourts, court]
        );
    };

    // Handle checkbox change for status
    const handleStatusChange = (status) => {
        setSelectedStatus((prevSelectedStatus) =>
            prevSelectedStatus.includes(status)
                ? prevSelectedStatus.filter((s) => s !== status)
                : [...prevSelectedStatus, status]
        );
    };

    // Filter cases based on selected criteria
    const filteredCases = cases.filter((caseItem) => {
        const isCourtMatch = selectedCourts.length === 0 || selectedCourts.includes(caseItem.court);
        const isStatusMatch = selectedStatus.length === 0 || selectedStatus.includes(caseItem.status);
        const isYearMatch = caseItem.year >= minYear && caseItem.year <= maxYear;
        return isCourtMatch && isStatusMatch && isYearMatch;
    });

    return (
        <div className="p-4 mt-18 bg-gray-100 text-gray-900 rounded-lg">
            <h1 className="text-xl font-semibold mb-5 border-b border-gray-300 pb-3">
                Filters
            </h1>

            <div className="mb-5">
                <h2 className="font-medium text-sm mb-2">Courts</h2>
                <div className="flex flex-col space-y-1">
                    {courtOptions.map((court) => (
                        <label key={court} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-gray-600 bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                                onChange={() => handleCourtChange(court)}
                                checked={selectedCourts.includes(court)}
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                {court}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <h2 className="font-medium text-sm mb-2">Case Status</h2>
                <div className="flex flex-col space-y-1">
                    {statusOptions.map((status) => (
                        <label key={status} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-gray-600 bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                                onChange={() => handleStatusChange(status)}
                                checked={selectedStatus.includes(status)}
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                {status}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <h2 className="font-medium text-sm mb-2">Year Range</h2>
                <div className="flex justify-between text-gray-600 text-xs mb-1">
                    <span>From</span>
                    <span>To</span>
                </div>
                <div className="flex items-center space-x-1">
                    <input
                        type="range"
                        min="2015"
                        max="2024"
                        value={minYear}
                        onChange={handleMinYearChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <input
                        type="range"
                        min="2015"
                        max="2024"
                        value={maxYear}
                        onChange={handleMaxYearChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <p className="mt-2 text-gray-500 text-sm">
                    {minYear} – {maxYear}
                </p>
            </div>

            <button
                className="ml-auto mt-1 px-4 py-2 bg-gray-500 text-white text-sm rounded-full shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Apply filters
            </button>

            {/* <div className="mt-5">
                <h2 className="font-medium text-sm mb-2">Filtered Results</h2>
                {filteredCases.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {filteredCases.map((caseItem, index) => (
                            <li key={index}>
                                {caseItem.court} - {caseItem.status} - {caseItem.year}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div> */}
        </div>
    );
};

export default FilterBar;
