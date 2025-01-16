import React from "react";
import HeroStyle5 from "../Hero/HeroStyle5";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import AboutSection from "../Section/AboutSection";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle2 from "../Section/BannerSection/BannerSectionStyle2";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";

// Social Media Marketing specific services
const departmentData = [
  {
    title: "Social Media Strategy",
    subTitle:
      "Developing tailored strategies to help businesses maximize their online presence and connect with their target audience.",
    iconUrl: "https://img.icons8.com/color/30/strategy-board.png",
    href: "#",
  },
  {
    title: "Content Creation",
    subTitle:
      "Creating engaging and high-quality content for social platforms to drive engagement and brand awareness.",
    iconUrl:
      "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/30/external-Content-Creation-web-and-software-development-smashingstocks-flat-smashing-stocks-2.png",
    href: "#",
  },
  {
    title: "Paid Social Advertising",
    subTitle:
      "Leveraging social ads on platforms like Facebook, Instagram, and LinkedIn to drive conversions and leads.",
    iconUrl: "https://img.icons8.com/dusk/30/social-network.png",
    href: "#",
  },
  {
    title: "Social Media Analytics",
    subTitle:
      "Tracking key metrics and reporting on campaign performance to ensure continued success.",
    iconUrl: "https://img.icons8.com/dusk/30/marketing.png",
    href: "#",
  },
  {
    title: "Community Management",
    subTitle:
      "Managing customer interactions and conversations to build a strong, loyal social media community.",
    iconUrl: "https://img.icons8.com/doodle/30/community.png",
    href: "#",
  },
];

// FAQs specific to SMM
const faqData = [
  {
    title: "What is Social Media Marketing?",
    content:
      "Social Media Marketing involves using platforms like Facebook, Instagram, and LinkedIn to promote your business, connect with customers, and drive traffic to your website.",
  },
  {
    title: "How can SMM benefit my business?",
    content:
      "SMM can help increase brand awareness, boost engagement, attract new customers, and improve your overall online presence.",
  },
  {
    title: "What platforms do you manage?",
    content:
      "We manage Facebook, Instagram, LinkedIn, Twitter, and more, depending on your business needs and target audience.",
  },
  {
    title: "How much does it cost to run a social media campaign?",
    content:
      "Costs vary depending on the scope and duration of the campaign. We can provide custom pricing after a consultation.",
  },
];

// SMM working process data
const workingProcessData = [
  {
    title: "Consultation & Strategy",
    subTitle:
      "We start with a consultation to understand your business goals and craft a social media strategy tailored to your audience.",
    iconUrl: "https://img.icons8.com/cotton/100/strategy-board.png",
    number: "01",
  },
  {
    title: "Content Planning & Creation",
    subTitle:
      "Based on the strategy, we plan and create high-quality content designed to engage and resonate with your target audience.",
    iconUrl: "https://img.icons8.com/color/100/content.png",
    number: "02",
  },
  {
    title: "Paid Advertising Setup",
    subTitle:
      "We set up and launch paid social media ads to expand your reach and generate conversions.",
    iconUrl:
      "https://img.icons8.com/external-ddara-lineal-color-ddara/100/external-advertisment-business-elements-ddara-lineal-color-ddara.png",
    number: "03",
  },
  {
    title: "Community Engagement",
    subTitle:
      "We manage interactions, respond to queries, and build an engaged social media community for your brand.",
    iconUrl: "https://img.icons8.com/fluency/100/people-working-together.png",
    number: "04",
  },
  {
    title: "Analytics & Reporting",
    subTitle:
      "We track the performance of your campaigns and provide regular reports to ensure success and refine strategies as needed.",
    iconUrl: "https://img.icons8.com/fluency/100/report-card.png",
    number: "05",
  },
];

export default function SocialMediaMarketingPage() {
  pageTitle("Social Media Marketing | Mediacook");

  return (
    <>
      <HeroStyle5
        title="Transform Your Business with <span>Social Media Marketing</span>"
        subTitle="Our team of experts is here to help you craft a winning social media strategy that drives real results for your business."
        imgUrl="https://html.laralink.com/prohealth/assets/img/home_5/hero_img.png"
        btnText="Get Started"
        btnUrl="/contact"
        funfactList={[
          { number: "10K+", title: "Successful Campaigns" },
          { number: "50+", title: "Brands We’ve Worked With" },
          { number: "95%", title: "Customer Satisfaction Rate" },
          { number: "100%", title: "Engagement Rate Boost" },
        ]}
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Our Social Media Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      {/* About Section */}
      <Section topMd={180} topLg={130} topXl={100}>
        <AboutSection
          imgUrl="https://html.laralink.com/prohealth/assets/img/home_1/about.png"
          spiningImgUrl="https://html.laralink.com/prohealth/assets/img/home_1/about_mini.svg"
          title="Why Choose Mediacook for Social Media Marketing?"
          subTitle="MEDIACOOK"
          featureList={[
            {
              featureListTitle:
                "We specialize in helping businesses thrive on social media",
              featureListSubTitle:
                "From strategy development to content creation, we are dedicated to helping your business grow through targeted social media marketing.",
            },
          ]}
        />
      </Section>

      {/* Working Process for Social Media Marketing */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <WorkingProcess
          sectionTitle="How Our Social Media Marketing Process Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>

      {/* Call to Action Banner */}
      <Section>
        <BannerSectionStyle2
          bgUrl="https://html.laralink.com/prohealth/assets/img/home_2/cta_bg.jpeg"
          title="Ready to Boost Your Brand’s Online Presence?"
          subTitle="Contact our team today to get started with a custom social media marketing strategy tailored to your business needs!"
        />
      </Section>

      {/* FAQs */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Frequently Asked Questions"
          sectionTitleUp="FAQs"
        />
      </Section>
    </>
  );
}
