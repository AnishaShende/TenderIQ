import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Header from './components/Header'; // Import Header component
import Searchbar from './components/SearchBar';
import FeatureCard from './components/Featurebox';

import AiLegalAidImage from '../assets/research.png';
import DocumentAnalysisImage from '../assets/summary.png';
import CaseTrackingImage from '../assets/insight.png';
import LegalInsightsImage from '../assets/contract.png';
import AiChatbotImage from '../assets/case-closed.png';


function Home() {
    
    
    return (

        <div className="font-sans antialiased">

            <div className="mb-1 z-10 sticky top-0 w-full ">
                <Navbar />
            </div>


            <main className="px-8 sm:px-12 pb-5 md:pb-10 max-w-4xl mx-auto flex flex-col justify-center  space-y-9">

                <Header />


                <Searchbar />
            </main>
            
            {/* <div className="mb-10 flex flex-wrap justify-center gap-2">
                <FeatureCard
                    title="Research Laws"
                    description="Ask queries about laws and receive summary report."
                    link="/ResearchLaws"
                    image={AiLegalAidImage}
                />
                <FeatureCard
                    title="Case Summary"
                    description="Quickly analyze legal documents with AI."
                    link="/CaseSummaries"
                    image={DocumentAnalysisImage}
                />
                <FeatureCard
                    title="Generate Insights"
                    description="Get data-driven insights on legal cases."
                    link="/Insights"
                    image={CaseTrackingImage}
                />
                <FeatureCard
                    title="Legal Brief Drafting"
                    description="Draft a legal brief with issue, facts and reasoning"
                    link="/Briefdraft"
                    image={LegalInsightsImage}
                />
                 <FeatureCard
                    title="Find relevant cases/statutes"
                    description="Case law, statutes, regulations, and legal articles."
                    link="/ai-chatbot"
                    image={AiChatbotImage}
                /> 
            </div> */}

            <div className="mb-10 flex flex-wrap justify-center gap-4">
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <FeatureCard
            title="Research Laws"
            description="Ask queries about laws and receive summary report."
            link="/ResearchLaws"
            image={AiLegalAidImage}
        />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <FeatureCard
            title="Case Summary"
            description="Quickly analyze legal documents with AI."
            link="/CaseSummaries"
            image={DocumentAnalysisImage}
        />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <FeatureCard
            title="Generate Insights"
            description="Get data-driven insights on legal cases."
            link="/Insights"
            image={CaseTrackingImage}
        />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <FeatureCard
            title="Legal Brief Drafting"
            description="Draft a legal brief with issue, facts, and reasoning"
            link="/Briefdraft"
            image={LegalInsightsImage}
        />
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <FeatureCard
            title="Chat With Pdf"
            description="Draft a legal brief with issue, facts, and reasoning"
            link="/Briefdraft"
            image={LegalInsightsImage}
        />
    </div>
</div>

            


            <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
                <div className="flex justify-end space-x-2">
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full text-foreground/40"
                        aria-label="Help"
                        type="button"
                        id="radix-:R5ja:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-help"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                        </svg>
                    </button>
                </div>
            </footer>
            </div>
    );
}

export default Home;
