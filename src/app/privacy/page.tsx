"use client";

import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <Header />

      <motion.div
        className="max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 1.1,
          ease: "easeOut",
        }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 font-unbounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1.2,
            ease: "easeOut",
          }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-zinc-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1.3,
            ease: "easeOut",
          }}
        >
          Last updated: February 6, 2025
        </motion.p>

        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 1.4,
            ease: "easeOut",
          }}
        >
          <section className="mb-12">
            <p className="text-zinc-300 leading-relaxed">
              gtfol, LLC ("we", "our", "us"), a company registered in Delaware,
              United States at 131 Continental Dr, Suite 305, Newark, DE 19713,
              operates the website <a
                href="https://gtfol.dev"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                gtfol.dev
              </a>{" "}
              (the "Site"). This privacy policy explains how we collect, use,
              and protect the personal information of users who visit our Site
              and use our services. By using the Site, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              1. Information We Collect
            </h2>
            <p className="text-zinc-300 mb-4">
              We collect several types of information to provide and improve our
              service, including:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>
                <strong>Personal Information:</strong> When you register on our
                Site, we may ask for personal information such as your name,
                email address, phone number, and billing details.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect information about
                how the Site is accessed and used. This may include your IP
                address, browser type, pages visited, and the time and date of
                your visit.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and
                similar tracking technologies to track user behavior and store
                certain information to improve your experience on our Site.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              2. How We Use Your Information
            </h2>
            <p className="text-zinc-300 mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you of changes to our services</li>
              <li>To provide customer support</li>
              <li>
                To gather analytics and valuable insights to improve our
                services
              </li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              3. Sharing Your Information
            </h2>
            <p className="text-zinc-300 mb-4">
              We do not sell, rent, or share your personal information with
              third parties except in the following cases:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>To comply with legal obligations</li>
              <li>
                To protect and defend the rights or property of Vly Labs Inc.
              </li>
              <li>
                With service providers who assist in operating the Site, subject
                to confidentiality agreements
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              4. Data Security
            </h2>
            <p className="text-zinc-300">
              We are committed to protecting your personal information. We use a
              variety of security measures, including encryption and secure
              servers, to ensure the safety of your data. However, no method of
              transmission over the internet or method of electronic storage is
              100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              5. Data Retention
            </h2>
            <p className="text-zinc-300">
              We retain your personal data only for as long as necessary for the
              purposes set out in this policy, unless a longer retention period
              is required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              6. Your Rights
            </h2>
            <p className="text-zinc-300 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>
                Request the correction of inaccurate or incomplete information
              </li>
              <li>
                Request the deletion of your personal data, subject to certain
                conditions
              </li>
              <li>
                Object to the processing of your personal data for marketing
                purposes
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              7. Third-Party Links
            </h2>
            <p className="text-zinc-300">
              Our Site may contain links to other websites. We are not
              responsible for the privacy practices of third-party sites. We
              encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              8. Children's Privacy
            </h2>
            <p className="text-zinc-300">
              Our services are not intended for anyone under the age of 13. We
              do not knowingly collect personally identifiable information from
              children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-zinc-300">
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-unbounded">
              Contact Us
            </h2>
            <p className="text-zinc-300 mb-4">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <address className="text-zinc-300 not-italic">
              <p className="mb-1">gtfol, LLC</p>
              <p className="mb-1">1950 Washington St. Apt. 3A</p>
              <p className="mb-1">Boston, MA 02118</p>
              <p className="mb-1">United States</p>
              <p>
                <a
                  href="mailto:team@gtfol.dev"
                  className="text-hype-purple-text hover:text-hype-purple-text-hover"
                >
                  team@gtfol.dev
                </a>
              </p>
            </address>
          </section>
        </motion.div>
      </motion.div>
      <BackToTop />
      <Footer />
    </PageWrapper>
  );
}
