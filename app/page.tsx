
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Match the <span className="text-indigo-600">Perfect Candidate</span> with AI-Powered Resume Analysis
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our advanced AI technology analyzes resumes and job descriptions to find the perfect match. Save time, reduce bias, and find the best candidates faster.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/search" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 text-center">
                  Search Resumes
                </Link>
                <Link href="/candidate-form" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-lg transition-all duration-200 text-center">
                  Submit Resume
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/resume-analysis.svg"
                alt="AI Resume Analysis"
                width={600}
                height={500}
                className="drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our AI Resume Matcher?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Accurate Matching</h3>
              <p className="text-gray-600">Our AI analyzes the content and context of resumes to identify the most suitable candidates.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Time Saving</h3>
              <p className="text-gray-600">Reduce the time spent reviewing resumes by up to 75% with our automated analysis system.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Reduced Bias</h3>
              <p className="text-gray-600">Our AI focuses on skills and experience, helping to eliminate unconscious bias in the hiring process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Upload Resume</h3>
              <p className="text-gray-600">Candidates submit their resumes through our simple form with their details.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes the content and extracts key information from the resume.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Find Matches</h3>
              <p className="text-gray-600">Enter your job description and instantly find the best matching candidates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Candidate?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start using our AI-powered resume matching system today and revolutionize your hiring process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="bg-white text-indigo-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-all duration-200">
              Search Resumes Now
            </Link>
            <Link href="/candidate-form" className="bg-transparent border-2 border-white hover:bg-indigo-800 font-medium px-6 py-3 rounded-lg transition-all duration-200">
              Submit a Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Resume Analyzer</h3>
              <p className="text-gray-400">
                Finding the perfect match between candidates and job openings with advanced AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/search" className="text-gray-400 hover:text-white">Search Resumes</Link></li>
                <li><Link href="/candidate-form" className="text-gray-400 hover:text-white">Submit Resume</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Have questions? Email us at:<br />
                <a href="mailto:info@airesumeanalyzer.com" className="text-indigo-400 hover:text-indigo-300">
                  info@airesumeanalyzer.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AI Resume Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
