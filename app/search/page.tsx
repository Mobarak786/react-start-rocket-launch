
"use client";

import { useState } from "react";
import PageLoader from "../component/Loader";

interface SearchResult {
  generated: string;
}

export default function SearchPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobDescription.trim()) {
      setError("Please enter a job description");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobDescription }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to search for resumes");
      }
      
      setSearchResults(data.AiResponse || []);
    } catch (err) {
      console.error("Search error:", err);
      setError(err instanceof Error ? err.message : "An error occurred during search");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find the Perfect Candidate
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your job description below and our AI will analyze our database to find the most suitable candidates.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <form onSubmit={handleSearch}>
            <div className="mb-6">
              <label 
                htmlFor="jobDescription" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter the job description, requirements, and qualifications..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 text-red-500 text-sm">{error}</div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Searching..." : "Find Matching Candidates"}
            </button>
          </form>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <PageLoader />
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Search Results
            </h2>
            {searchResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
                <div className="whitespace-pre-line">
                  {result.generated}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            {error ? (
              <p>An error occurred during your search. Please try again.</p>
            ) : (
              <p>Enter a job description and click "Find Matching Candidates" to see results.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
