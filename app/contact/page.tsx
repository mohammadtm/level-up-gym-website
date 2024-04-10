import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us | Reach Out to LevelUp Gym for Inquiries and Assistance",
  description:
    "Need assistance or have questions? Contact LevelUp Gym for personalized support and assistance. Our dedicated team is here to help you with any inquiries regarding memberships, classes, or general information.",
  keywords:
    "gym, fitness center, health and wellness, personal training, group fitness classes, strength training, cardio workouts, nutrition guidance, exercise routines, gym membership, workout facility, fitness community, wellness programs, exercise equipment, fitness goals, fitness motivation, fitness journey, LevelUp Gym, contact us, phone, address, email",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col  gap-y-5 md:flex-row ">
      <section className="static h-[100dvh]  bg-gradient-to-br from-slate-700 to-green-600 px-9 pt-20 md:h-[110dvh]  md:w-1/2 lg:w-1/3">
        <article className="relative flex justify-end pb-5 ">
          <p>Get in touch</p>
        </article>
        <article className="flex h-[80%] flex-col items-center justify-center">
          <div className="flex max-w-44 flex-col justify-start gap-y-8">
            <div>
              <p className="font-bold text-slate-300">Address:</p>
              <p className="max-w-48">
                25 First Street, 2nd Floor Cambridge, MA 02141 US
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-300">Hours:</p>
              <p>Monday - Friday</p>
              <p>10:00am - 7:30pm</p>
            </div>

            <div>
              <p className="font-bold text-slate-300">Contact info:</p>
              <address className="not-italic">hello@levelup.com</address>
              <address className="not-italic">+98 1144335599</address>
            </div>

            <div>
              <p className="font-bold text-slate-300">Contact info:</p>
              <address className="not-italic">hello@levelup.com</address>
              <address className="not-italic">+98 1144335599</address>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-slate-300">Social media:</p>
              <div className="flex flex-row gap-x-3 text-2xl [&_*]:duration-150">
                <FaInstagram className="cursor-pointer active:translate-y-1 active:text-[#8a3ab9]" />
                <FaTwitter className="cursor-pointer active:translate-y-1 active:text-[#1DA1F2]" />
                <FaFacebookSquare className="cursor-pointer active:translate-y-1 active:text-[#1877F2]" />
                <FaPinterest className="cursor-pointer active:translate-y-1 active:text-[#E60023]" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[3%] flex flex-row md:hidden">
            <FaArrowTurnUp className="mt-2 rotate-180 text-2xl" />
            <p>Send direct message</p>
            <FaArrowTurnDown className="mt-2 text-2xl" />
          </div>
        </article>
      </section>
      <section className="self-center px-9 md:order-first md:w-2/3 md:px-5 md:pt-20">
        <article className="flex flex-col gap-y-3">
          <h2 className="text-3xl">Let us hear from you!</h2>
          <p>
            We always want to hear from you! Let us know how we can best help
            you and we'll do our very best.
          </p>
        </article>
        <form className="my-5 flex w-full flex-col gap-y-3">
          <div className="flex flex-col gap-y-3 md:w-full md:flex-row md:gap-x-3">
            <CustomInputField
              fieldName="First name"
              isRequired={true}
              fieldId="firstName"
              fieldType="text"
            />
            <CustomInputField
              fieldName="Last name"
              isRequired={true}
              fieldId="lastName"
              fieldType="text"
            />
          </div>

          <CustomInputField
            fieldName="Email"
            isRequired={false}
            fieldId="email"
            fieldType="email"
          />
          <CustomInputField
            fieldName="Phone number"
            isRequired={true}
            fieldId="phone"
            fieldType="tel"
          />
          <label className="text-slate-300" htmlFor="message">
            Message: <span aria-label="required">*</span>
          </label>
          <textarea
            rows={3}
            name="message"
            id="message"
            className="rounded bg-transparent p-2 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Tell us what we can help you with"
          ></textarea>
          <div className="flex flex-row gap-x-3">
            <input
              className="w-8"
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="yes"
            />
            <label htmlFor="subscribe" className="text-slate-400">
              I'd like to recive more information about gym; I understand and
              agree to the{" "}
              <Link href={"/privacy"}>
                <span className="cursor-pointer text-yellow-500">
                  Privacy Policy
                </span>
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-[80%] self-center bg-yellow-500 py-3 font-bold duration-200 active:translate-y-1"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

interface CustomInputFieldProps {
  fieldName: string;
  fieldId: string;
  fieldType: string;
  isRequired: boolean;
}

function CustomInputField({
  fieldName,
  fieldId,
  fieldType,
  isRequired,
}: CustomInputFieldProps) {
  return (
    <div className="flex w-full flex-col gap-y-2 ">
      <label className="text-slate-300" htmlFor={fieldId}>
        {fieldName}: {isRequired && <span aria-label="required">*</span>}
      </label>
      <input
        id={fieldId}
        className="rounded bg-transparent p-2 caret-yellow-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        type={fieldType}
        name={fieldId}
        required={isRequired}
      />
    </div>
  );
}
