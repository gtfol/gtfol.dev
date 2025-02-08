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
        <div className="mb-16">
          <div className="mx-8 flex">
            <HeadingBorder delay={1}>
              <h3 className="text-xl font-unbounded">what is gtfol?</h3>
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
              gtfol is an ai product studio. we build software that go from 0 →
              1, scale, and repeat.
            </motion.p>
          </motion.div>
        </div>

        <div className="mb-4">
          <div className="mx-8 flex">
            <HeadingBorder delay={1.4}>
              <h3 className="text-xl font-unbounded">our work</h3>
            </HeadingBorder>
          </div>
          <motion.div
            className="mx-8 my-8 space-y-6"
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
                    href="https://eddypump.com"
                    title="EDDY Pump"
                    description="pump & dredge equipment recommendation"
                    front="eddypump-1"
                    back="eddypump-2"
                    bgColor="#09090B"
                    category="enterprise"
                    delay={1.6}
                  />
                </CarouselItem>

                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://textfully.dev"
                    title="Textfully"
                    front="textfully-1"
                    back="textfully-2"
                    bgColor="#09090B"
                    description="the open source twilio alternative"
                    category="saas"
                    delay={1.7}
                  />
                </CarouselItem>

                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://gloskin.vercel.app"
                    title="Glo"
                    front="glo-1"
                    back="glo-2"
                    bgColor="#09090B"
                    description="your #1 skincare coach"
                    category="consumer"
                    delay={1.8}
                  />
                </CarouselItem>

                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="http://wakeupclub.vercel.app"
                    title="Wakeup Club"
                    front="wakeupclub-1"
                    back="wakeupclub-2"
                    bgColor="#6799B3"
                    description="get the f**k out of bed"
                    category="consumer"
                    delay={1.9}
                  />
                </CarouselItem>

                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://flowwork.vercel.app"
                    title="Flow Work"
                    front="flowwork-1"
                    back="flowwork-2"
                    bgColor="#09090B"
                    description="remote team project management tool"
                    category="consumer"
                    delay={2.0}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
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
                    title="Sorce"
                    front="sorce-1"
                    back="sorce-2"
                    bgColor="#09090B"
                    description="apply to jobs by swyping right"
                    category="consumer"
                    delay={1.4}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://www.auribuslabs.com"
                    title="Auribus Labs"
                    front="auribuslabs-1"
                    back="auribuslabs-2"
                    bgColor="#09090B"
                    description="the world's first platform for hearing health"
                    category="enterprise"
                    delay={1.5}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://usefortitude.com"
                    title="Fortitude"
                    front="fortitude-1"
                    back="fortitude-2"
                    bgColor="#09090B"
                    description="payments platform to protect businesses from chargebacks"
                    category="saas"
                    delay={1.6}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://parkwithperch.com"
                    title="Perch"
                    front="perch-1"
                    back="perch-2"
                    bgColor="#09090B"
                    description="stress-free, reserved football parking"
                    category="consumer"
                    delay={1.7}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://edenonearth.ai"
                    title="Eden"
                    front="eden-1"
                    back="eden-2"
                    bgColor="#09090B"
                    description="healthcare software to 10x staff productivity"
                    category="enterprise"
                    delay={1.8}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://intervieweveryone.org"
                    title="Interview Everyone"
                    front="intervieweveryone-1"
                    back="intervieweveryone-2"
                    bgColor="#09090B"
                    description="pre-screening interview tool for small businesses"
                    category="saas"
                    delay={1.9}
                  />
                </CarouselItem>
                <CarouselItem className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PortfolioCard
                    href="https://edugator.app"
                    title="Edugator"
                    front="edugator-1"
                    back="edugator-2"
                    bgColor="#09090B"
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
