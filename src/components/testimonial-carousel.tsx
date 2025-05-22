"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MotionDiv } from "./motion-div";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    content:
      "WeHear has been a lifesaver for our family. Their caregivers are compassionate, skilled, and truly care about my father's wellbeing. The peace of mind we've gained is priceless.",
    author: "Sarah Johnson",
    role: "Daughter of client",
    avatarUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    content:
      "After trying several senior care services, WeHear stands out for their personalized approach. They took the time to understand my mother's needs and preferences, creating a care plan that truly works for her.",
    author: "Michael Thompson",
    role: "Son of client",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    content:
      "The comprehensive care package has given my grandmother independence while ensuring she's safe. The caregivers are punctual, professional, and have become like family to us.",
    author: "Emily Rodriguez",
    role: "Granddaughter of client",
    avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 4,
    content:
      "I was hesitant about getting help, but WeHear made the transition so smooth. Their caregiver is respectful of my independence while providing the assistance I need. I'm grateful for their service.",
    author: "Robert Wilson",
    role: "Client",
    avatarUrl: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextTestimonial]);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 bg-primary h-full p-6 md:p-10 flex flex-col justify-center items-center">
            <Quote className="h-12 w-12 text-white/80 mb-4" />
            <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white mb-6">
              <Image 
                src={testimonials[activeIndex].avatarUrl}
                alt={testimonials[activeIndex].author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-white">
              <h4 className="font-semibold text-lg">{testimonials[activeIndex].author}</h4>
              <p className="text-white/80 text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
            <MotionDiv
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                "{testimonials[activeIndex].content}"
              </p>
            </MotionDiv>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-gray-300 dark:bg-gray-600"
                    )}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}