
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    comment: "This React starter saved me hours of setup time. The component structure is so well thought out!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    comment: "I love how clean and customizable this template is. Makes my design process so much smoother.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    comment: "The perfect balance of simplicity and power. Our team was able to get up and running in minutes.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Developers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of developers who are building amazing projects with our React starter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
