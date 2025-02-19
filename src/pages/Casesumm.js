


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Upload } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Navbar from './components/Navbar';

const CaseSummaries = () => {
  const [citation, setCitation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setPdfUrl(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const generateSummary = async () => {
    if (!selectedFile) {
      setError('Please upload a PDF file before analyzing.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      const response = await fetch('http://localhost:8000/summarize', { method: 'POST', body: formData });
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || 'Failed to generate summary');
      setSummary(data.final_summary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-3 text-center">Generate Case Summaries Instantly</h1>
        <p className="text-gray-500 mb-8 text-center">Enter a case citation or upload a PDF to generate a summary.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 mb-6">
          <input type="text" className="p-3 border rounded-md w-full md:w-2/4" placeholder="Enter case citation..." value={citation} onChange={(e) => setCitation(e.target.value)} />
          <span>OR</span>
          <label className="flex items-center w-40 h-12 bg-black text-white rounded-md cursor-pointer">
            <Upload className="mr-2" /> Upload PDF
            <input type="file" className="hidden" accept="application/pdf" onChange={handleFileChange} />
          </label>
          <button className="px-3 py-2 bg-gray-500 text-white rounded-full" onClick={generateSummary} disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : 'Submit'}</button>
        </div>
        <AnimatePresence>{error && <motion.div className="text-red-600">{error}</motion.div>}</AnimatePresence>
        {loading ? <Loader2 className="animate-spin mx-auto mt-6" /> : summary && <ReactMarkdown className="bg-white p-6 rounded-md shadow-lg">{summary}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default CaseSummaries;
