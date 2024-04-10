import Image from "next/image";
import OurEquipment from "../components/OurEquipment";
import UnlockImage from "../public/unlock.jpg";
import Slider from "../components/Slider";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import MembershipCard from "../components/MembershipCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LevelUp Gym - Elevate Your Fitness Journey",
  description:
    "LevelUp Gym offers a state-of-the-art facility and personalized fitness programs to help you achieve your health goals. Elevate your fitness journey with us today!",
  keywords:
    "gym, fitness center, health and wellness, personal training, group fitness classes, strength training, cardio workouts, nutrition guidance, exercise routines, gym membership, workout facility, fitness community, wellness programs, exercise equipment, fitness goals, fitness motivation, fitness journey, LevelUp Gym.",
};

export default function Home() {
  return (
    <>
      <header className="h-screen w-full bg-[url('/image1.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <div className="h-full w-full backdrop-brightness-[0.35]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-center  md:gap-8">
            <h1 className="max-w-[72%] text-4xl font-bold leading-10 md:max-w-[35%] lg:max-w-[27%]">
              RICH YOUR LIMITS AND GET TO THE NEXT LEVEL
            </h1>
            <p className="max-w-[85%] text-white md:max-w-[55%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, placeat quisquam! Doloribus et atque accusantium ab ut
              nam voluptatem odit ratione commodi reiciendis quam reprehenderit
              at beatae autem, tenetur enim fugiat! Quibusdam consequuntur
              facilis quos
            </p>
            <div className="mt-8 flex flex-row gap-4 [&_button]:w-32 [&_button]:py-2">
              <button className="ring-2 ring-white duration-150 active:translate-y-1">
                Learn More
              </button>
              <button className="bg-yellow-500 outline-none ring-2 ring-yellow-500 duration-150 active:translate-y-1">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <section className="flex w-full flex-col gap-5 bg-slate-900 px-9 pt-7 md:flex-row">
          <div className="flex flex-col justify-center gap-5 md:w-1/2">
            <h2 className="font-mono text-4xl">Who we are?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              dignissimos ratione quasi? Atque quod voluptatum minus ea facere
              deserunt soluta aspernatur voluptatem harum ratione numquam itaque
              amet distinctio nulla pariatur quam, ducimus, voluptates totam
              nihil nisi ipsa quisquam libero? Quae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              dignissimos ratione quasi? Atque quod voluptatum minus ea facere
              deserunt soluta aspernatur voluptatem harum ratione numquam itaque
              amet distinctio nulla pariatur quam, ducimus, voluptates totam
              nihil nisi ipsa quisquam libero? Quae!
            </p>
            <button className="w-32 self-center bg-yellow-500 px-3 py-2 ring-1 ring-yellow-500 duration-150 active:translate-y-1">
              Start Today
            </button>
          </div>
          <div className="flex w-full flex-row gap-2 bg-[url('/blob.svg')] bg-contain bg-top bg-no-repeat sm:flex-col md:max-w-[50%] md:flex-row">
            <div className="hidden self-center md:block">
              <img className="rounded" src="./gym1.jpg" />
            </div>
            <div className="flex flex-col gap-2">
              <img className="rounded" src="./gym2.jpg" />
              <img className="rounded" src="./gym3.jpg" />
            </div>
          </div>
        </section>
        <OurEquipment />
        <section className="flex w-full flex-col gap-10 px-9 md:flex-row md:items-center">
          <figure className="mt-4 md:w-[40%]">
            <Image
              className="rounded"
              src={UnlockImage}
              alt="a man lifting weight"
            />
          </figure>

          <div className="flex flex-col justify-center md:w-[50%]">
            <h2 className="mt-6 text-center text-4xl capitalize">
              Unlock your best self
            </h2>
            <ul className="ml-5 mt-5 flex list-disc flex-col gap-y-2 marker:text-xl marker:text-yellow-500 [&>li]:text-justify">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                eum!
              </li>
            </ul>
            <p className="mt-5 capitalize text-yellow-500">
              Ignite your fitness journey at here; <strong>today</strong>
            </p>
          </div>
        </section>
        <section className="mt-5 flex flex-col gap-y-4 px-9 md:gap-y-0 odd:[&_div]:border-x-2">
          <h2 className="text-center text-4xl">Awards</h2>
          <article className="mt-5 flex flex-col md:flex-row md:gap-x-5">
            <div className="flex min-w-[40%] flex-col gap-y-2 border-2 border-yellow-500 bg-amber-900 pb-4 pt-4 text-center capitalize ">
              <span className="block">2022</span>
              <span className="block">fitness innovation award</span>
            </div>
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              delectus voluptate quas accusantium aut expedita deserunt
              obcaecati nobis tempore laudantium.
            </p>
          </article>
          <article className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex min-w-[40%] flex-col gap-y-2 border-2 border-yellow-500 bg-amber-900 pb-4 pt-4 text-center capitalize md:border-0 ">
              <span className="block">2022</span>
              <span className="block">fitness innovation award</span>
            </div>
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              delectus voluptate quas accusantium aut expedita deserunt
              obcaecati nobis tempore laudantium.
            </p>
          </article>
          <article className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex min-w-[40%] flex-col gap-y-2 border-2 border-yellow-500 bg-amber-900 pb-4 pt-4 text-center capitalize ">
              <span className="block">2022</span>
              <span className="block">fitness innovation award</span>
            </div>
            <p className="mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              delectus voluptate quas accusantium aut expedita deserunt
              obcaecati nobis tempore laudantium.
            </p>
          </article>
        </section>
        <section className="mt-5 px-9">
          <h2 className="text-center text-4xl">Testemonials</h2>
          <Slider />
        </section>

        <section className="mt-5 px-9">
          <h2 className="text-center text-4xl">Membership</h2>
          <article className="mt-6 flex flex-col justify-center gap-y-7 md:flex-row md:gap-x-5">
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
          </article>
        </section>
        <section className="my-20  flex justify-center">
          <p className="max-w-[40%] text-center text-xl">
            LEVELUP studio is not just a place to exercise, its a commitment to
            improving lives.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center gap-y-5 px-9 pb-5">
          <div className="flex flex-col items-center justify-center gap-y-1">
            <p className="text-slate-300">E-mail</p>
            <address className="font-mono text-3xl not-italic">
              hi@levelup.com
            </address>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <p className="text-slate-300">Phone</p>
            <address className="font-mono text-3xl not-italic ">
              +98 1144223355
            </address>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <p className="text-slate-300">Socials</p>
            <div className="flex max-w-md gap-x-5 text-2xl [&_*]:duration-150">
              <FaInstagram className="cursor-pointer active:translate-y-1 active:text-[#8a3ab9]" />
              <FaTwitter className="cursor-pointer active:translate-y-1 active:text-[#1DA1F2]" />
              <FaFacebookSquare className="cursor-pointer active:translate-y-1 active:text-[#1877F2]" />
              <FaPinterest className="cursor-pointer active:translate-y-1 active:text-[#E60023]" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
