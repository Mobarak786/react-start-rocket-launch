
import { Code, Zap, Palette, Layers } from "lucide-react";

const features = [
  {
    icon: <Code size={24} className="text-primary" />,
    title: "Modern React",
    description:
      "Built with the latest React features and best practices for efficient development."
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: "Lightning Fast",
    description:
      "Optimized for performance with minimal bundle size and quick load times."
  },
  {
    icon: <Palette size={24} className="text-primary" />,
    title: "Beautiful UI",
    description:
      "Customizable components with Tailwind CSS for stunning, responsive designs."
  },
  {
    icon: <Layers size={24} className="text-primary" />,
    title: "Component-Based",
    description:
      "Modular architecture that makes expanding and maintaining your app easy."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern React applications, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 inline-block rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
