import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    stars: 5,
    title: "Simple, Straight-forward Expenses!",
    quote: "I've never met someone that enjoys doing their expenses. Following business trips or even a few weeks in the office, the last thing that someone wants to do is take time out of their day/week to sort through, and enter receipts. Expense App makes the process easier by prompting you to auto-import expenses as you go, and their straight-forward, simple interface makes the task in the office easier than any system that I've used in the past.",
    author: "Weston M.",
    avatar: "/api/placeholder/40/40"
  },
  {
    stars: 5,
    title: "Makes expense submission easy!",
    quote: "Expense App has a really easy user interface for uploading receipts and getting expense reports submitted in a timely manner. I'm also getting reimbursed in quick order as well. The best part is that their internal team checks all receipts against the log and so our CFO doesn't have to get his hands dirty to make sure the receipts line up with what I've submitted.",
    author: "Dean M.",
    avatar: "/api/placeholder/40/40"
  },
  // Add more reviews as needed...
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (count: number) => {
    return Array(count).fill('★').join('');
  };

  return (
    <div className="bg-emerald-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* G2 Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <img 
            src="/api/placeholder/32/32" 
            alt="G2 Logo" 
            className="w-8 h-8"
          />
          <div className="text-yellow-400 text-xl">
            {renderStars(5)}
          </div>
          <p className="text-white">
            <strong>4.5</strong> (4,889 reviews)
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div className="transition-transform duration-300 ease-in-out">
              <div className="bg-white rounded-lg p-8 max-w-xl mx-auto">
                <div className="text-yellow-400 text-xl mb-4">
                  {renderStars(reviews[currentIndex].stars)}
                </div>
                <h2 className="text-xl font-bold mb-4">
                  {reviews[currentIndex].title}
                </h2>
                <blockquote className="text-gray-600 mb-8">
                  {reviews[currentIndex].quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].author}
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="font-medium">
                    {reviews[currentIndex].author}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;