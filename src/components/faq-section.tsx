"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What services are included in each care package?",
    answer:
      "Our care packages are tiered to meet different needs. The Essential Care package includes weekly wellness checks, medication reminders, light housekeeping, meal preparation, and transportation to appointments. The Comprehensive Care package adds daily wellness checks, medication management, full housekeeping, personal care assistance, 24/7 on-call support, and social engagement activities. The Premium Care package includes all of the above plus specialized medical care, overnight assistance, care coordination, and family updates.",
  },
  {
    question: "How are your caregivers screened and trained?",
    answer:
      "All our caregivers undergo a rigorous screening process that includes background checks, reference verification, and skills assessment. They receive comprehensive training in elder care, emergency response, and dementia care. Additionally, our caregivers participate in ongoing education to stay current with best practices in senior care.",
  },
  {
    question: "Can we change our service plan if our needs change?",
    answer:
      "Absolutely. We understand that care needs can evolve over time. You can upgrade or modify your service plan at any time. Our care coordinators will work with you to reassess needs and adjust services accordingly, ensuring your loved one always receives the appropriate level of care.",
  },
  {
    question: "What happens if our regular caregiver is unavailable?",
    answer:
      "We maintain a consistent care team for each client. If your regular caregiver is unavailable, we'll arrange for another qualified team member who is familiar with your care plan to step in. We ensure a smooth transition and maintain detailed care notes to provide continuity of care.",
  },
  {
    question: "How do you handle emergency situations?",
    answer:
      "All our caregivers are trained in emergency response protocols. For clients with our Comprehensive and Premium packages, we provide 24/7 on-call support. In case of a medical emergency, caregivers will contact emergency services immediately, then notify designated family members. We also maintain detailed medical information and emergency contacts for quick access.",
  },
  {
    question: "Is there a minimum commitment period for your services?",
    answer:
      "We offer flexible service agreements to accommodate your needs. While we don't require long-term contracts, we do recommend a minimum two-week trial period to allow time for your loved one to adjust to the caregiver and services. After this period, you can continue services on a month-to-month basis.",
  },
];

export default function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Still have questions? We're here to help.
        </p>
        <Button asChild>
          <Link href="/contact">
            Contact Our Team
          </Link>
        </Button>
      </div>
    </div>
  );
}