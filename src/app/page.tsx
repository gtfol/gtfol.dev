"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCard } from "@/components/portfolio-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeadingBorder } from "@/components/heading-border";
import { PageWrapper } from "@/components/page-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";
import autoScroll from "embla-carousel-auto-scroll";

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [api]);

  return (
    <PageWrapper>
      <Header />

      <main className="flex-grow">
        <div className="mx-8 mb-16">
          <div className="flex">
            <HeadingBorder delay={1}>
              <h3 className="text-xl font-unbounded">what is gtfol?</h3>
            </HeadingBorder>
          </div>
          <motion.div
            className="my-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.1,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 1.2,
                ease: "easeOut",
              }}
            >
              gtfol is an ai product studio. we build software that go from 0 →
              1, scale, and repeat.
            </motion.p>
          </motion.div>
        </div>

        <div className="mx-8 mb-12">
          <div className="flex">
            <HeadingBorder delay={1.4}>
              <h3 className="text-xl font-unbounded">our work</h3>
            </HeadingBorder>
          </div>
          <motion.div
            className="my-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.4,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 1.5,
                ease: "easeOut",
              }}
            >
              our expertise is in building consumer apps, saas, and enterprise
              solutions at 10x speed.
            </motion.p>
          </motion.div>
          <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            <PortfolioCard
              href="https://eddypump.com"
              imageUrl="https://placehold.co/336x448"
              title="EDDY Pump"
              description="pump & dredge equipment recommendation"
              category="enterprise"
              delay={1.6}
            />

            <PortfolioCard
              href="https://textfully.dev"
              imageUrl="https://placehold.co/336x448"
              title="Textfully"
              description="the open source twilio alternative"
              category="saas"
              delay={1.7}
            />

            <PortfolioCard
              href="https://gloskin.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="Glo"
              description="your #1 skincare coach"
              category="consumer"
              delay={1.8}
            />

            <PortfolioCard
              href="http://wakeupclub.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="Wakeup Club"
              description="get the f**k out of bed"
              category="consumer"
              delay={1.9}
            />

            <PortfolioCard
              href="https://flowwork.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="Flow Work"
              description="cowork with friends and get sh*t done"
              category="consumer"
              delay={2.0}
            />
          </div>
        </div>
        <div className="mb-8">
          <div className="mx-8 flex">
            <HeadingBorder delay={2.1}>
              <h3 className="text-xl font-unbounded">rev</h3>
            </HeadingBorder>
          </div>
          <motion.div
            className="mx-8 my-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.1,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 1.2,
                ease: "easeOut",
              }}
            >
              <a
                href="https://rev.school"
                referrerPolicy="no-referrer"
                target="_blank"
                className="border-b hover:border-white/75 hover:text-white/75 focus:outline-void-purple"
              >
                rev
              </a>{" "}
              is our affiliated community of builders, founders, creatives, and
              researchers. we offer free mentorship to cohort fellows.
            </motion.p>
          </motion.div>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                watchFocus: false,
                watchDrag: false,
              }}
              plugins={[
                autoScroll({
                  startDelay: 2000,
                  speed: 1,
                }),
              ]}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="-ml-6">
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://sorce.jobs"
                    imageUrl="https://placehold.co/336x448"
                    title="Sorce"
                    description="apply to jobs by swyping right"
                    category="consumer"
                    delay={1.4}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://www.auribuslabs.com"
                    imageUrl="https://placehold.co/336x448"
                    title="Auribus Labs"
                    description="the world's first platform for hearing health"
                    category="enterprise"
                    delay={1.5}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://usefortitude.com"
                    imageUrl="https://placehold.co/336x448"
                    title="Fortitude"
                    description="payments platform to protect businesses from chargebacks"
                    category="saas"
                    delay={1.6}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://parkwithperch.com"
                    imageUrl="https://placehold.co/336x448"
                    title="Perch"
                    description="stress-free, reserved football parking"
                    category="consumer"
                    delay={1.7}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://edenonearth.ai"
                    imageUrl="https://placehold.co/336x448"
                    title="Eden"
                    description="healthcare software to 10x staff productivity"
                    category="enterprise"
                    delay={1.8}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://intervieweveryone.org"
                    imageUrl="https://placehold.co/336x448"
                    title="Interview Everyone"
                    description="pre-screening interview tool for small businesses"
                    category="saas"
                    delay={1.9}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://edugator.app"
                    imageUrl="https://placehold.co/336x448"
                    title="Edugator"
                    description="the future of computing education"
                    category="enterprise"
                    delay={2.0}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>

      <Footer />
    </PageWrapper>
  );
}
