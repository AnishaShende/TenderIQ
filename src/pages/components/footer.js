import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black pl-10 mt-12 text-gray-400 py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* References Section */}
                <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                    <h3 className="text-white text-sm font-semibold uppercase mb-4">References</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="https://indiankanoon.org/" className="hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">Indian Kanoon</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.caselaw.in/" className="hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">Case Law India</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.legalcrystal.com/" className="hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">Legal Crystal</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://lawrato.com/" className="hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">LawRato</a>
                        </li>
                    </ul>
                </div>

                {/* Pages Section */}
                <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                    <h3 className="text-white text-sm font-semibold uppercase mb-4">Pages</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="/src/pages/Home.js" className="hover:text-white transition-colors duration-300 text-sm">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="/src/pages/ResearchLaws.js" className="hover:text-white transition-colors duration-300 text-sm">Research Laws</a>
                        </li>
                        <li className="mb-2">
                            <a href="/src/pages/Insights.js" className="hover:text-white transition-colors duration-300 text-sm">Generate Insights</a>
                        </li>
                        <li className="mb-2">
                            <a href="/src/pages/Casesumm.js" className="hover:text-white transition-colors duration-300 text-sm">Case Summary</a>
                        </li>
                        <li className="mb-2">
                            <a href="/src/pages/Briefdraft.js" className="hover:text-white transition-colors duration-300 text-sm">Legal Drafting</a>
                        </li>
                    </ul>
                </div>

                {/* Datasets Section */}
                <div className="w-full sm:w-1/3">
                    <h3 className="text-white text-sm font-semibold uppercase mb-4">Datasets</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="https://docs.google.com/spreadsheets/d/1ywntDYjDobA3sz6uWEl9MtKEYKjG7DnzBeFRdkypPg8/edit?gid=2111050104#gid=2111050104" className="hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">Dataset</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p className="text-xs text-gray-500">&copy; 2024 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
