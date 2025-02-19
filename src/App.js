import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import ResearchLaws from './pages/ResearchLaws'
import CaseSummaries from './pages/Casesumm';
import Insights from './pages/Insights';
import LegalBriefDrafting from './pages/Briefdraft';







function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    
      <div className="font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults searchQuery={searchQuery} />} />
          <Route path="/ResearchLaws" element={<ResearchLaws />} />
          <Route path="/CaseSummaries" element={<CaseSummaries />} />
          <Route path="/Insights" element={<Insights />} />
        <Route path="/Briefdraft" element={<LegalBriefDrafting />} />
        <Route path="/"
        </Routes>
      </div>
    
  );
}

export default App;
