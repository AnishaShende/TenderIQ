import React, {useState}from 'react';
import { useLocation } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import Card from './components/Card';
import TextResultBox from './components/TextResultBox';
import FilterBar from './components/FilterBar';
import SrcNavbar from './components/srcpgnavbar';
import Footer from './components/footer';
import GoogleTranslate from './components/GoogleTranslate';

const cardData = [
    {
        id: 1,
        title: 'United India Insurance Co. Ltd. v. B. Suresh ',
        description: 'In this case, the Madras High Court dismissed a review petition filed by an insurance company against a claimant who was awarded compensation for an accident.The court found that the insurance company had failed to provide sufficient evidence to substantiate their allegations of fraud.',
        date: '2015',
        caseno : "C.R.P(NPD)Nos.199 to 203 of 2006 & C.M.P.Nos.1573 to 1577 of 2006",
        casename: "M/S.United India Insurance Company Ltd vs Balakrishnan Suresh",
        date: "(24 July, 2015)",
        court : "Madras High Court",
        casestatus: " Disposed off",
        judge: "Ms.Justice P.T.ASHA",
        sect: "Article 227 of the Constitution of India",
        facts: "The accident involved a Premier Padmini Car, initially claimed to be a Maruti Car.\nThe insurance company (petitioner) alleged that the Padmini Car was insured with New India Insurance Company.\nThe claimant (respondent) argued that the vehicle details were correctly provided in the FIR and a separate claim for car damage was filed.\nThe Insurance Company filed a review petition alleging fraud by the claimant after the initial award was passed.",
        petition: "The Insurance Company filed Civil Revision Petitions (C.R.P) under Article 227 of the Constitution of India to challenge the order passed by the Motor Accidents Claims Tribunal (MACT).\nThe review petition aimed to overturn the award passed by the MACT in favor of the claimant.",
        legalissues: "Whether the Insurance Company successfully established fraud by the claimant.\nWhether the Insurance Company had grounds to seek a review of the award.",
        keylegalques: "Whether the Insurance Company's allegations of fraud were substantiated and sufficient to warrant a review of the original award.",
        plaintiffarguments: "The Insurance Company argued that the claimant had deliberately misrepresented the vehicle involved in the accident.\nThey claimed to have discovered the fraud after the initial award was passed.\nThey presented evidence indicating the claimant's involvement in multiple fraudulent claims.",
        defendantarguments: "The claimant argued that the vehicle details were correctly provided in the FIR.\nThey stated that they had filed separate claims for the damage caused to their car.\nThey contended that the Insurance Company had failed to prove fraud during the initial trial.",
        courtsreasoning: "The Court noted the Insurance Company's inability to provide evidence for their allegations of fraud despite lodging a complaint against the claimant.\nThe Court considered the fact that the review petition was filed only after the execution petition was filed, suggesting a delay tactic.\nThe Court found the Insurance Company's allegations of fraud unsubstantiated.",
        decision: "The Court dismissed the Civil Revision Petitions filed by the Insurance Company.\nThe Court refused to interfere with the MACT's decision on the grounds of lack of evidence for fraud allegations.",
        conclusion: "The Court concluded that the Insurance Company failed to establish the fraud allegations against the claimant.\nThe Court upheld the MACT's award in favor of the claimant, dismissing the review petition.",
        casesummary: "This case involved an insurance company (United India Insurance) challenging an award passed by the Motor Accidents Claims Tribunal (MACT) in favor of a claimant. The insurance company alleged fraud by the claimant, claiming that they misrepresented the vehicle involved in the accident. However, the court dismissed the insurance company's petition, finding no evidence to support the allegations of fraud. The court upheld the MACT's original award, ruling in favor of the claimant."
    },
    {
        id: 2,
        title: 'National Insurance Co. Ltd. v. Smt. Savita ',
        description: 'The Delhi High Court upheld an award in favor of a claimant against an insurance company, rejecting their allegations of fraud.The court emphasized that the burden of proof lies with the party making the allegations, and the insurance company had failed to meet this burden.',
        date: '(2018)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."
    

    },
    {

        id: 4,
        title: 'New India Assurance Co. Ltd. v. M/S. Sai Sagar Constructions ',
        description: 'The Kerala High Court dismissed a review petition filed by an insurance company against a claimant who was awarded compensation for property damage.The court found that the insurance company had failed to provide sufficient evidence to substantiate their allegations of fraud and upheld the original award in favor of the claimant.',
        date: '(2020)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."




        

    },
    {
        id: 3,
        title: 'United India Insurance Co. Ltd. v. A. Ramu ',
        description: 'The Madras High Court allowed a writ petition filed by an insurance agent against an insurance company, ordering them to pay commission on policies procured during his time as an agent.The court held that the insurance agents resignation and subsequent joining of a competing company did not automatically disqualify him from receiving commission.',
        date: '(2019)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."


    },
    // Add more card data objects as needed
];

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query') || 'No query provided';

    // useEffect(() => {
    //     // Adding Google Translate script to the page
    //     const addGoogleTranslate = document.createElement('script');
    //     addGoogleTranslate.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     document.body.appendChild(addGoogleTranslate);

    //     window.googleTranslateElementInit = () => {
    //         new window.google.translate.TranslateElement({
    //             pageLanguage: 'en',
    //             includedLanguages: 'en,hi,fr,es,de,zh-CN', // Add the languages you want
    //             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    //             autoDisplay: false
    //         }, 'google_translate_element');
    //     };
    // }, []);

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div className="relative min-h-screen">
            <div className="z-10 sticky top-0 w-full">
                <SrcNavbar />
            </div>
            {/* Fixed Logo and Name */}
            <div className="fixed top-4 left-7 flex items-center space-x-2 z-10">
                {/* <img src="/path/to/logo.png" alt="Nyaylay Logo" className="h-8" /> */}
                {/* <div className="text-xl font-bold text-gray-900">NyayDost</div> */}
            </div>

            {/* Fixed FilterBar */}
            <aside className="absolute z-2 top-16 left-6 w-64 p-1 bg-white  ">
                <FilterBar />
            </aside>

            {/* Main Content */}
            <div className="ml-80 pl-0 pr-4">
                <SearchHeader searchQuery={searchQuery} />

                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold">Predictive Analysis on {searchQuery}</h1>
                    
                </div>
                <div className='relative z-12'>
                    <TextResultBox />
                </div>
                
                <div className="flex items-center justify-between mt-8">
                    <h1 className="text-xl font-bold">Similar cases</h1>
                    <div className="relative inline-block">
                        <select
                            value={selectedOption}
                            onChange={handleChange}
                            className="p-2 w-48 border border-gray-300 rounded-md text-xs bg-white cursor-pointer appearance-none"
                        >
                            <option value="" disabled hidden>
                                Sort
                            </option>
                            <option value="Recent">Recent</option>
                            <option value="Most popular">Most popular</option>
                            <option value="Alphabetical">Alphabetical</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <span className="text-xs text-gray-700">{selectedOption ? "▼" : "▼"}</span>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 mt-4">
                    {cardData.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            date={card.date}
                            description={card.description}
                            link={card.link}
                            caseno={card.caseno}
                            casename={card.casename}
                            court={card.court}
                            casestatus={card.casestatus}
                            judge={card.judge}
                            sect={card.sect}
                            facts={card.facts}
                            petition={card.petition}
                            legalissues={card.legalissues}
                            keylegalques={card.keylegalques}
                            plaintiffarguments={card.plaintiffarguments}
                            defendantarguments={card.defendantarguments}
                            courtsreasoning={card.courtsreasoning}
                            decision={card.decision}
                            conclusion={card.conclusion}
                            casesummary={card.casesummary}
                        />
                    ))}
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchResults;
