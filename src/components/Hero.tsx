
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              Build Amazing React Apps Faster
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              This starter template gives you everything you need to create beautiful, 
              responsive React applications with minimal setup and maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-sm text-gray-500 ml-2">App.tsx</div>
              </div>
              <pre className="text-xs md:text-sm bg-gray-50 p-4 rounded overflow-x-auto">
                <code className="text-gray-800">
{`import React from 'react';

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Starter!</h1>
      <p>Start building amazing apps today.</p>
    </div>
  );
};

export default App;`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
