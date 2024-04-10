import React from "react";

import TechnogymLogo from "../../public/equipment-brands-logo/technogym-logo.png";
import PrecorLogo from "../../public/equipment-brands-logo/precor-logo.png";
import HoistLogo from "../../public/equipment-brands-logo/hoist-logo.png";

import Trainer1 from "../../public/trainers/trainer1.webp";
import Trainer2 from "../../public/trainers/trainer2.jpg";
import Trainer3 from "../../public/trainers/trainer3.jpg";
import Trainer4 from "../../public/trainers/trainer4.png";
import Trainer5 from "../../public/trainers/trainer5.png";
import Trainer6 from "../../public/trainers/trainer6.png";

import OurMission1 from "../../public/our-mission1.jpg";
import OurMission2 from "../../public/our-mission2.jpg";

import Image from "next/image";
import TrainerCard from "../../components/TrainerCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Discover LevelUp Gym - Your Premier Fitness Destination",
  description:
    "Dive into the story behind LevelUp Gym, your premier fitness destination. Learn about our mission, values, and commitment to helping you elevate your fitness journey.",
  keywords:
    "gym, fitness center, health and wellness, personal training, group fitness classes, strength training, cardio workouts, nutrition guidance, exercise routines, gym membership, workout facility, fitness community, wellness programs, exercise equipment, fitness goals, fitness motivation, fitness journey, LevelUp Gym.",
};

export default function AboutPage() {
  return (
    <>
      <header className="h-screen w-full bg-[url('/about-us-header.jpg')] bg-cover bg-center bg-no-repeat text-white ">
        <div className="h-full w-full backdrop-brightness-[0.4]">
          <div className=" flex h-full w-full flex-col items-center justify-center gap-5 text-center  md:gap-8">
            <h1 className="max-w-[72%] text-4xl font-bold leading-10 md:max-w-[35%] lg:max-w-[27%]">
              About Us
            </h1>
            <p className="max-w-[85%] text-white md:max-w-[55%]">
              Welcome to LEVELUP, your ultimate destination for fitness and
              wellness! At our gym, we are committed to helping you achieve your
              fitness goals and lead a healthier lifestyle.
            </p>
          </div>
        </div>
      </header>
      <main className="px-9">
        <section className="flex w-full flex-col items-center justify-evenly gap-y-10 bg-slate-900  py-8 sm:flex-row  [&_figure]:max-w-56">
          <figure>
            <Image
              className="object-cover"
              src={TechnogymLogo}
              alt="Technogym logo"
            />
          </figure>
          <figure>
            <Image
              className="object-cover"
              src={PrecorLogo}
              alt="Precor logo"
            />
          </figure>
          <figure>
            <Image className="object-cover" src={HoistLogo} alt="Hoist logo" />
          </figure>
        </section>

        <section>
          <h2 className="my-3 text-center text-4xl">Team:</h2>
          <article className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <TrainerCard
              trainerImage={Trainer1}
              trainerName="Justin Philips"
              trainerTitle="Trainer"
            />
            <TrainerCard
              trainerImage={Trainer2}
              trainerName="Alex Philips"
              trainerTitle="Trainer"
            />
            <TrainerCard
              trainerImage={Trainer3}
              trainerName="Steve Red"
              trainerTitle="Trainer"
            />
            <TrainerCard
              trainerImage={Trainer4}
              trainerName="Dave Black"
              trainerTitle="Trainer"
            />
            <TrainerCard
              trainerImage={Trainer5}
              trainerName="Dave Black"
              trainerTitle="Trainer"
            />
            <TrainerCard
              trainerImage={Trainer6}
              trainerName="Adam White"
              trainerTitle="Trainer"
            />
          </article>
        </section>
        <section className="py-2">
          <h2 className="text-center text-4xl">Our Mission</h2>
          <article className=" mt-3 flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-3 ">
            <figure className="sm:max-w-[50%]">
              <Image src={OurMission1} alt="a man stading in the gym" />
            </figure>
            <div className="flex flex-col gap-y-4">
              <p className="text-justify">
                We want to inspire and empower individuals to transform their
                lives through fitness. We believe that everyone has the
                potential to reach their fitness goals, regardless of age,
                fitness level, or background. Whether you're a seasoned athlete
                or just starting your fitness journey, we're here to support you
                every step of the way.
              </p>
              <figure className="hidden md:block">
                <Image src={OurMission2} alt="a man stading in the gym" />
              </figure>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
