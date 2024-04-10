import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | LevelUp Gym - Protecting Your Personal Information",
  description:
    "Learn how LevelUp Gym protects your personal information with our comprehensive Privacy Policy. We are committed to transparency, security, and upholding your privacy rights.",
  keywords:
    "gym, fitness center, health and wellness, personal training, group fitness classes, strength training, cardio workouts, nutrition guidance, exercise routines, gym membership, workout facility, fitness community, wellness programs, exercise equipment, fitness goals, fitness motivation, fitness journey, LevelUp Gym.",
};

export default function PrivacyPage() {
  return (
    <main className="px-9 pt-20">
      <section>
        <h1 className="text-4xl">Terms of Service</h1>
        <p className="mt-2 text-slate-400">Last updated: April 7, 2024</p>
        <p className="mt-6">
          <strong>LEVELUP</strong> operates levelup.com. This page informs you
          of our policies regarding the collection, use, and disclosure of
          Personal Information we receive from users of the Site.
        </p>
      </section>
      <PrivacySection title="Information Collection And Use">
        While using our Site, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you. Personally identifiable information may include, but is
        not limited to, your name, email address, postal address, and phone
        number ("Personal Information").
      </PrivacySection>

      <PrivacySection title="Log Data">
        Like many site operators, we collect information that your browser sends
        whenever you visit our Site ("Log Data"). This Log Data may include
        information such as your computer's Internet Protocol ("IP") address,
        browser type, browser version, the pages of our Site that you visit, the
        time and date of your visit, the time spent on those pages, and other
        statistics.
      </PrivacySection>

      <PrivacySection title="Communications">
        We may use your Personal Information to contact you with newsletters,
        marketing, or promotional materials and other information that may be of
        interest to you. You may opt-out of receiving any, or all, of these
        communications from us by following the unsubscribe instructions
        provided in any email we send.
      </PrivacySection>

      <PrivacySection title="Cookies">
        Cookies are files with a small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a web
        site and stored on your computer's hard drive.{"\n"} Like many sites, we
        use "cookies" to collect information. You can instruct your browser to
        refuse all cookies or to indicate when a cookie is being sent. However,
        if you do not accept cookies, you may not be able to use some portions
        of our Site.
      </PrivacySection>

      <PrivacySection title="Security">
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.
      </PrivacySection>

      <PrivacySection title="Changes To This Privacy Policy">
        This Privacy Policy is effective as of April 7, 2024 and will remain in
        effect except with respect to any changes in its provisions in the
        future, which will be in effect immediately after being posted on this
        page.{"\n"}We reserve the right to update or change our Privacy Policy
        at any time, and you should check this Privacy Policy periodically. Your
        continued use of the Service after we post any modifications to the
        Privacy Policy on this page will constitute your acknowledgment of the
        modifications and your consent to abide and be bound by the modified
        Privacy Policy.{"\n"}If we make any material changes to this Privacy
        Policy, we will notify you either through the email address you have
        provided us or by placing a prominent notice on our website.
      </PrivacySection>

      <PrivacySection title="Contact Us">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <address className="inline text-yellow-500">hello@levelup.com</address>.
      </PrivacySection>
    </main>
  );
}

interface PrivacySectionProps {
  title: string;
}

function PrivacySection({
  title,
  children,
}: PropsWithChildren<PrivacySectionProps>) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
