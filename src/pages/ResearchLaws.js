import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Import the ThreeDots loader
import Navbar from './components/Navbar';

const ResearchLaws = () => {
    const [formData, setFormData] = useState({
        jurisdiction: '',
        lawTopic: '',
        query: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call with a delay
        setTimeout(() => {
            const fakeResults = {
                status: "Success",
                data: [
                    {
                        case: "Section 3 of the Competition Act, 2002",
                        summary: "This section prohibits anti-competitive agreements that adversely affect competition in India, including practices such as price fixing, bid rigging, and production control.",
                        details: [
                            "The main prohibited practices include:",
                            "- Price fixing: Agreements that determine the purchase or sale prices.",
                            "- Bid rigging: Collusion to manipulate bidding processes.",
                            "- Production control: Agreements that limit production, supply, or technical development.",
                            "In the case of Oriental Rubber Industries, the company was investigated for bid rigging, which is presumed to have a significant negative impact on competition."
                        ]
                    },
                    {
                        case: "Section 26(1) of the Competition Act, 2002",
                        summary: "This section initiates an inquiry by the Competition Commission of India (CCI) if there is a prima facie case of violation of Section 3 or 4.",
                        details: [
                            "The CCI directs the Director General (DG) to investigate suspected violations.",
                            "The inquiry against Oriental Rubber Industries was prompted by potential bid rigging in the conveyor belt sector."
                        ]
                    },
                    {
                        case: "Section 30 of the Advocates Act, 1961",
                        summary: "This section grants advocates the right to practice across India before any tribunal or authority.",
                        details: [
                            "Oriental Rubber Industries argued for their right to legal representation during the DG's investigation, which became a contentious issue with the CCI."
                        ]
                    },
                    {
                        case: "Section 41(2) of the Competition Act, 2002",
                        summary: "This section empowers the DG to summon individuals and examine witnesses under oath.",
                        details: [
                            "The DG has the authority to demand documents and conduct investigations, but the question arose regarding the right to legal counsel for summoned individuals."
                        ]
                    },
                    {
                        case: "Section 27 of the Competition Act, 2002",
                        summary: "This section provides the CCI with the power to issue orders if it identifies violations of Sections 3 or 4.",
                        details: [
                            "After inquiries, the CCI can direct the cessation of agreements, impose penalties, or modify agreements if violations are proven."
                        ]
                    },
                    {
                        case: "Section 36(2) of the Competition Act, 2002",
                        summary: "This section allows the CCI to regulate its own procedures, with powers similar to those of a civil court.",
                        details: [
                            "It includes the ability to summon witnesses and order document production, but does not explicitly mention legal representation during investigations."
                        ]
                    },
                    {
                        case: "Regulation 41, 43, and 50 of the Competition Commission of India (General) Regulations, 2009",
                        summary: "These regulations outline the procedures for summoning witnesses and legal representation.",
                        details: [
                            "- Regulation 41: Details the procedure for summoning witnesses by the DG.",
                            "- Regulation 43: Authorizes the DG to secure the attendance of individuals necessary for investigations.",
                            "- Regulation 50: States that parties can have legal representation in proceedings, but it does not specify if this applies to investigations conducted by the DG."
                        ]
                    }
                ]


            };
            setResults(fakeResults);
            setIsLoading(false);
        }, 2000); // 2 seconds delay for loading animation
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">

            {/* Navbar */}
            <div className="mb-1 z-10 sticky top-0 w-full ">
                <Navbar />
            </div>


            {/* Main Content */}
            <div className="container mx-auto pb-3 px-4">
                <h1 className="ml-10 text-xl font-semibold mb-6 text-gray-700">Research Laws</h1>

                {/* Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mx-10 mb-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Jurisdiction Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Jurisdiction</label>
                            <input
                                type="text"
                                name="jurisdiction"
                                value={formData.jurisdiction}
                                onChange={handleChange}
                                className="mt-1 px-2 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="Enter jurisdiction"
                                required
                            />
                        </div>

                        {/* Law Topic Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Specific Law/Topic</label>
                            <input
                                type="text"
                                name="lawTopic"
                                value={formData.lawTopic}
                                onChange={handleChange}
                                className="mt-1 px-2 py-1  w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="Enter specific law or topic"
                                required
                            />
                        </div>

                        {/* Query Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Query regarding the law</label>
                            <textarea
                                name="query"
                                value={formData.query}
                                onChange={handleChange}
                                className="mt-1 px-2 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="Write your query"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Loader Section */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center mt-10">
                        <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="black"  // Set color of dots to black
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                        <p className="text-gray-600 mt-2">Generating results...</p>
                    </div>
                )}

                {/* Results Section */}
                {results && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Results</h2>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                            {results.data.map((result, index) => (
                                <li key={index} className="mb-2">
                                    <strong>{result.case}</strong>: {result.summary}
                                    <ul className="list-decimal pl-5">
                                        {result.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ResearchLaws;
