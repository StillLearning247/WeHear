import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ServiceTiers from "@/components/service-tiers";
import { CheckCircle2, Clock, Calendar, Users, HeartPulse, Stethoscope, Home, Utensils, Car, Bath } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Elderly Care Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive care solutions tailored to enhance quality of life and independence for your loved ones.
            </p>
            <Button size="lg" asChild>
              <Link href="#service-tiers">
                View Service Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our range of services designed to support every aspect of elderly wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HeartPulse className="h-8 w-8" />}
              title="Health Monitoring"
              description="Regular vital checks, medication management, and health status reporting to ensure optimal wellbeing."
            />
            <ServiceCard
              icon={<Home className="h-8 w-8" />}
              title="Home Care"
              description="Housekeeping, laundry, and home maintenance to maintain a clean, safe living environment."
            />
            <ServiceCard
              icon={<Utensils className="h-8 w-8" />}
              title="Meal Preparation"
              description="Nutritious meal planning and preparation tailored to dietary requirements and preferences."
            />
            <ServiceCard
              icon={<Bath className="h-8 w-8" />}
              title="Personal Care"
              description="Assistance with bathing, dressing, grooming, and other personal care activities."
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Companionship"
              description="Meaningful social interaction, conversation, and activities to prevent isolation."
            />
            <ServiceCard
              icon={<Car className="h-8 w-8" />}
              title="Transportation"
              description="Safe transportation to medical appointments, social events, and community activities."
            />
            <ServiceCard
              icon={<Stethoscope className="h-8 w-8" />}
              title="Medical Coordination"
              description="Liaison with healthcare providers, appointment scheduling, and medical advocacy."
            />
            <ServiceCard
              icon={<Calendar className="h-8 w-8" />}
              title="Respite Care"
              description="Temporary relief for family caregivers, providing peace of mind when you need a break."
            />
            <ServiceCard
              icon={<Clock className="h-8 w-8" />}
              title="24/7 Support"
              description="Round-the-clock care options and emergency response for complete peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Care Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A thoughtful approach to personalized care delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              number="01"
              title="Initial Consultation"
              description="We begin with a comprehensive assessment to understand your loved one's needs, preferences, and lifestyle."
            />
            <ProcessStep
              number="02"
              title="Personalized Care Plan"
              description="Our team develops a tailored care plan addressing specific requirements and goals for maintaining independence."
            />
            <ProcessStep
              number="03"
              title="Caregiver Matching"
              description="We carefully match your loved one with caregivers who have the right skills, experience, and personality."
            />
            <ProcessStep
              number="04"
              title="Care Implementation"
              description="Services begin with a smooth transition period, allowing time for adjustment and relationship building."
            />
            <ProcessStep
              number="05"
              title="Ongoing Monitoring"
              description="Regular check-ins and assessments ensure the care plan remains effective as needs evolve."
            />
            <ProcessStep
              number="06"
              title="Plan Refinement"
              description="We continuously adapt and refine the care plan based on feedback and changing circumstances."
            />
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="service-tiers" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Tiers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect care package that suits your needs and budget.
            </p>
          </div>
          
          <ServiceTiers />
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Specialized Care Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Additional support for specific health conditions and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecializedServiceCard
              title="Dementia & Alzheimer's Care"
              description="Specialized support for memory care needs, creating safe and comfortable environments with cognitive stimulation."
              imageUrl="https://images.pexels.com/photos/7551741/pexels-photo-7551741.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <SpecializedServiceCard
              title="Post-Hospital Recovery"
              description="Transitional care to support recovery after hospitalization, ensuring proper follow-up and preventing readmission."
              imageUrl="https://images.pexels.com/photos/7659681/pexels-photo-7659681.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <SpecializedServiceCard
              title="Parkinson's Support"
              description="Specialized assistance with mobility, fall prevention, and daily activities for those living with Parkinson's disease."
              imageUrl="https://images.pexels.com/photos/7659752/pexels-photo-7659752.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <SpecializedServiceCard
              title="Palliative Care Support"
              description="Compassionate assistance focused on comfort and quality of life for those with serious illnesses."
              imageUrl="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Take the first step towards compassionate care for your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/faqs">
                  View FAQs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface SpecializedServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const SpecializedServiceCard = ({ title, description, imageUrl }: SpecializedServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md">
      <div className="relative h-64 w-full">
        <div className="relative w-full h-full">
          <Image 
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
        <Button variant="outline" className="mt-4 border-white text-white hover:bg-white/10" size="sm" asChild>
          <Link href="/contact">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
};