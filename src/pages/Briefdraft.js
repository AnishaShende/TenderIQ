import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { ThreeDots } from 'react-loader-spinner'; // Import ThreeDots loader

// Loader Component
const Loader = () => {
    return (
        <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
        >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
            </span>
        </div>
    );
};

const LegalBriefDrafting = () => {
    const [caseDescription, setCaseDescription] = useState('');
    const [category, setCategory] = useState('');
    const [optionalInfo, setOptionalInfo] = useState('');
    const [loading, setLoading] = useState(false);
    const [generatedBrief, setGeneratedBrief] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate a delay for generating the brief
        setTimeout(() => {
            setGeneratedBrief(`Generated legal brief for case description: ${caseDescription}`);
            setLoading(false);
            setShowResults(true);
        }, 3000); // Simulate a 3-second delay
    };

    const handleNew = () => {
        setCaseDescription('');
        setCategory('');
        setOptionalInfo('');
        setShowResults(false);
    };

    const downloadPdf = () => {
        // Reference the PDF from the public directory
        const pdfUrl = `${process.env.PUBLIC_URL}/components/CaseDraft.pdf`; // Ensure the path is correct

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'CaseDraft.pdf'); // Name the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up after download
    };



    return (
        <div className="mb-0 z-10 sticky top-0 w-full ">
            <Navbar />
            <div className="min-h-screen bg-white px-8 font-sans text-gray-800">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-6 text-center">Legal Brief Drafting</h1>

                    {/* Form */}
                    {!showResults ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Case Description */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Case Description *</label>
                                <textarea
                                    className="w-full px-3 pt-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black text-sm"
                                    rows="5"
                                    placeholder="Enter the case description"
                                    value={caseDescription}
                                    onChange={(e) => setCaseDescription(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Category Dropdown */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Select Category *</label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-black"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Choose category</option>
                                    <option value="Commercial Courts">Breach of Contracts</option>
                                    <option value="Intellectual Property">Intellectual Property Disputes</option>
                                    <option value="Criminal Law">Insurance Fraud</option>
                                    <option value="Civil Law">Insolvency Proceedings</option>
                                </select>
                            </div>

                            {/* Optional Information */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Additional Information (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black text-sm"
                                    placeholder="Enter any additional info"
                                    value={optionalInfo}
                                    onChange={(e) => setOptionalInfo(e.target.value)}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className=" flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all text-sm"
                                >
                                    Generate
                                </button>
                            </div>
                        </form>
                    ) : null}

                    {/* Loader Section */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center mt-5">
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
                    {showResults && !loading && (
                        <div className="mt-8 p-6 bg-gray-100 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Generated Legal Brief:</h2>
                            <div className="container mx-auto p-4">
                                <h1 className="text-2xl font-bold mb-2">Delhi High Court</h1>
                                <h2 className="text-xl font-semibold mb-2">Case: M.C. Luthra vs Ashok Kumar Khanna</h2>
                                <h3 className="text-lg font-medium mb-4">Date of Judgment: 27 February, 2018</h3>

                                <h4 className="text-lg font-semibold mt-4">Summary of Proceedings:</h4>
                                <h5 className="text-md font-medium mt-2">Initial Order (12.9.2017):</h5>
                                <p className="mb-2">
                                    The court considered whether the appellant/defendant (M.C. Luthra) could forfeit Rs. 9 lakhs from the
                                    respondent/plaintiff (Ashok Kumar Khanna) based on the latter’s alleged breach of contract.
                                    The appellant argued for the forfeiture of at least Rs. 3 lakhs, citing similar cases where
                                    forfeiture of 10% of the sale price was deemed reasonable. Notice was issued for further
                                    proceedings, returnable on 22nd January, 2018.
                                </p>

                                <h5 className="text-md font-medium mt-2">Background:</h5>
                                <p className="mb-2">
                                    An agreement to sell was executed between the parties on 15.09.2005. The agreed sale price for
                                    the suit property was Rs. 31.50 lakhs, and Rs. 9 lakhs had already been paid to the appellant.
                                    Disputes arose regarding who was responsible for breaching the agreement.
                                </p>

                                <h5 className="text-md font-medium mt-2">Key Findings:</h5>
                                <p className="mb-2">
                                    The court found the seller entitled to forfeit Rs. 7 lakhs as earnest money. This amount was
                                    deemed a security for ensuring due performance of the contract, justifying forfeiture upon breach.
                                </p>

                                <h5 className="text-md font-medium mt-2">Judgment:</h5>
                                <p className="mb-2">
                                    The court partially allowed the appeal, ruling that the appellant could forfeit Rs. 50,000 as a
                                    nominal sum instead of the claimed Rs. 9 lakhs. It was determined that the appellant had not
                                    demonstrated any substantial loss due to the breach of contract. The respondent/plaintiff was
                                    entitled to recover Rs. 8.5 lakhs along with 12% annual interest from the date of the agreement
                                    (15.09.2005) until the filing of the suit, as well as future interest.
                                </p>

                                <h5 className="text-md font-medium mt-2">Conclusion:</h5>
                                <p className="mb-2">
                                    The High Court modified the judgment of the lower court, ruling that the total amount payable by
                                    the appellant would be Rs. 8.5 lakhs plus interest, while costs were borne by both parties
                                    individually.
                                </p>

                                <h5 className="text-md font-medium mt-2">Decree Sheet:</h5>
                                <p className="mb-2">To be prepared in accordance with the court’s ruling.</p>
                            </div>


                            {/* Download and Navigation Buttons */}
                            <div className="mt-6 flex space-x-4 justify-center">
                                <button
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all text-sm"
                                    onClick={downloadPdf}
                                >
                                    Download as PDF
                                </button>
                                <button
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all text-sm"
                                    onClick={() => setShowResults(false)}
                                >
                                    Back
                                </button>
                                <button
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all text-sm"
                                    onClick={handleNew}
                                >
                                    New
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LegalBriefDrafting;
