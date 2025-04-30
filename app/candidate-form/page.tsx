
import CandidateForm from "../component/CandidateForm";

export default function CandidateFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Submit Your Resume
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the form below to add your resume to our AI-powered matching system.
          </p>
        </div>
        
        <CandidateForm />
      </div>
    </div>
  );
}
