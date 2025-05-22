"use client";

import Image from "next/image";
import { MotionDiv } from "./motion-div";
import { Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const caregivers = [
  {
    id: 1,
    name: "Eleanor Wilson",
    title: "Senior Care Specialist",
    yearsExperience: 12,
    bio: "Eleanor specializes in dementia care with over a decade of experience working with Alzheimer's patients.",
    specialties: ["Dementia Care", "Medication Management", "Physical Therapy"],
    imageUrl: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.9,
    reviewCount: 142,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Certified Nursing Assistant",
    yearsExperience: 8,
    bio: "Marcus brings compassion and medical expertise to his role, ensuring seniors receive the highest quality care.",
    specialties: ["Mobility Assistance", "Vital Monitoring", "Post-Surgery Care"],
    imageUrl: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.8,
    reviewCount: 98,
  },
  {
    id: 3,
    name: "Sophia Chen",
    title: "Elder Companion & Wellness Coach",
    yearsExperience: 7,
    bio: "Sophia focuses on the emotional wellbeing of seniors, combining companionship with gentle exercise routines.",
    specialties: ["Companionship", "Light Exercise", "Mental Stimulation"],
    imageUrl: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.9,
    reviewCount: 116,
  },
  {
    id: 4,
    name: "Robert James",
    title: "Home Health Aide",
    yearsExperience: 10,
    bio: "Robert specializes in creating safe, accessible home environments and providing personal care assistance.",
    specialties: ["Personal Care", "Home Safety", "Meal Preparation"],
    imageUrl: "https://images.pexels.com/photos/5257544/pexels-photo-5257544.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.7,
    reviewCount: 87,
  },
];

export default function CaregiverShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {caregivers.map((caregiver, index) => (
        <MotionDiv
          key={caregiver.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={caregiver.imageUrl}
                alt={caregiver.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.floor(caregiver.rating) ? "currentColor" : "none"}
                    />
                  ))}
                  <span className="ml-1 text-sm">{caregiver.rating} ({caregiver.reviewCount})</span>
                </div>
                <h3 className="text-lg font-semibold">{caregiver.name}</h3>
                <p className="text-sm text-white/80">{caregiver.title}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{caregiver.bio}</p>
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {caregiver.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{caregiver.yearsExperience}</span> years experience
                </span>
                <Button size="sm" variant="ghost" className="text-primary">
                  <Heart className="h-4 w-4 mr-1" />
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      ))}

      <div className="mt-10 md:mt-12 col-span-1 md:col-span-2 lg:col-span-4 text-center">
        <Button asChild>
          <Link href="/caregivers">
            View All Caregivers
          </Link>
        </Button>
      </div>
    </div>
  );
}