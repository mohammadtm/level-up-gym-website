import MembershipCard from "@/components/MembershipCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing | Explore Membership Options at LevelUp Gym",
  description:
    "Discover the various membership options and pricing plans available at LevelUp Gym. Find the perfect fitness package to suit your goals and budget.",
  keywords:
    "gym, fitness center, health and wellness, personal training, group fitness classes, strength training, cardio workouts, nutrition guidance, exercise routines, gym membership, workout facility, fitness community, wellness programs, exercise equipment, fitness goals, fitness motivation, fitness journey, LevelUp Gym, plans",
};

export default function PricingPage() {
  return (
    <main className=" px-9 pb-10 pt-20">
      <h1 className="py-4 text-center text-4xl">Pricings</h1>
      <p className="pb-5 text-center">
        Take a next step and become the best version of yourself.
      </p>
      <section className="flex flex-col  gap-y-5 md:flex-row md:justify-center md:gap-x-5">
        <MembershipCard
          isThisBestOffer={false}
          membershipType="FlexEssentials"
          price={150}
          includes={[
            "Unlimited access to gym facilities",
            "Basic fitness classes",
            "Monthly fitness assessments",
          ]}
        />
        <MembershipCard
          isThisBestOffer={true}
          membershipType="FlexPremium"
          price={150}
          includes={[
            "All of FlexEssentials option",
            "Premium fitness classes",
            "Personalized workout plans",
            "Access to exclusive workshops and events",
          ]}
        />
        <MembershipCard
          isThisBestOffer={false}
          membershipType="FlexEssentials"
          price={350}
          includes={[
            "All of FlexPremium option",
            "Priority booking for classes",
            "One-on-one sessions with elite trainers",
            "Nutrtional guidance and meal planning",
          ]}
        />
      </section>
    </main>
  );
}
