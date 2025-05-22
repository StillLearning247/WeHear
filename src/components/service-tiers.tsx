"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MotionDiv } from "./motion-div";

const tiers = [
  {
    name: "Essential Care",
    id: "tier-essential",
    price: { monthly: "$799", annually: "$719" },
    description: "Basic care services for those who need minimal assistance.",
    features: [
      "Weekly wellness checks",
      "Medication reminders",
      "Light housekeeping",
      "Meal preparation",
      "Transportation to appointments",
    ],
    nonFeatures: [
      "24/7 on-call support",
      "Specialized medical care",
      "Overnight assistance",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Comprehensive Care",
    id: "tier-comprehensive",
    price: { monthly: "$1,299", annually: "$1,169" },
    description: "Complete care solution for those requiring regular assistance.",
    features: [
      "Daily wellness checks",
      "Medication management",
      "Full housekeeping",
      "Meal preparation",
      "Transportation services",
      "Personal care assistance",
      "24/7 on-call support",
      "Social engagement activities",
    ],
    nonFeatures: [
      "Specialized medical care",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "Premium Care",
    id: "tier-premium",
    price: { monthly: "$1,999", annually: "$1,799" },
    description: "Comprehensive care with specialized medical support.",
    features: [
      "Daily wellness checks",
      "Medication management",
      "Full housekeeping",
      "Meal preparation",
      "Transportation services",
      "Personal care assistance",
      "24/7 on-call support",
      "Social engagement activities",
      "Specialized medical care",
      "Overnight assistance",
      "Care coordination",
      "Family updates and reporting",
    ],
    nonFeatures: [],
    cta: "Get Started",
    mostPopular: false,
  },
];

export default function ServiceTiers() {
  const [frequency, setFrequency] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-center mb-8">
        <div className="relative flex w-full max-w-xs rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
          <button
            type="button"
            className={cn(
              "relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none",
              frequency === "monthly"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-700 dark:text-gray-300"
            )}
            onClick={() => setFrequency("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={cn(
              "relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none",
              frequency === "annually"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-700 dark:text-gray-300"
            )}
            onClick={() => setFrequency("annually")}
          >
            Annually <span className="text-primary text-xs">(10% off)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <MotionDiv
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative flex flex-col rounded-2xl border dark:bg-gray-900 overflow-hidden",
              tier.mostPopular
                ? "border-primary ring-2 ring-primary dark:border-primary"
                : "border-gray-200 dark:border-gray-700"
            )}
          >
            {tier.mostPopular && (
              <div className="absolute top-0 right-0 -mr-px -mt-px overflow-hidden rounded-tl bg-primary py-1 px-4 text-xs font-medium text-white">
                Most popular
              </div>
            )}
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {tier.price[frequency]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                  /month
                </span>
              </div>
              <Link href="/contact">
                <Button
                  variant={tier.mostPopular ? "default" : "outline"}
                  className={cn(
                    "mt-6 w-full",
                    tier.mostPopular
                      ? ""
                      : ""
                  )}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8 bg-gray-50 dark:bg-gray-800/50">
              <div className="space-y-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-x-3">
                    <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
                {tier.nonFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-x-3">
                    <X className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-400 dark:text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}