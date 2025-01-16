import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";

const featureListData = [
  {
    iconSrc: "/images/services_svg/sem.svg",
    title: "Search Engine Marketing (SEM)",
    subTitle:
      "Drive targeted traffic with paid ads across Google and other search engines. Maximize your visibility and capture the right audience.",
  },
  {
    iconSrc: "/images/services_svg/seo.svg",
    title: "Search Engine Optimization (SEO)",
    subTitle:
      "Boost your search rankings and bring in organic traffic with data-driven SEO strategies for long-term success.",
  },
  {
    iconSrc: "/images/services_svg/smm.svg",
    title: "Social Media Marketing (SMM)",
    subTitle:
      "Create engaging campaigns on platforms like Facebook, Instagram, and LinkedIn to build brand awareness and loyalty.",
  },
  {
    iconSrc: "/images/services_svg/cm.svg",
    title: "Content Marketing",
    subTitle:
      "Produce compelling content that resonates with your audience, elevating your brand’s voice and driving conversions.",
  },
  {
    iconSrc: "/images/services_svg/wd.svg",
    title: "Web Development",
    subTitle:
      "We develop and optimize websites to ensure a smooth user experience while enhancing your brand’s digital presence.",
  },
];

const brandData = [
  { imgUrl: "images/hospital1.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital2.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital3.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital4.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital5.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital6.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital7.png", imgAlt: "Brand" },
  { imgUrl: "images/hospital8.png", imgAlt: "Brand" },
];

const faqData = [
  {
    title: "What services does Mediacook provide?",
    content:
      "We provide comprehensive digital marketing solutions for healthcare providers, including patient acquisition, engagement, reputation management, and telehealth integration to boost your business growth.",
  },
  {
    title: "How can you get started with Mediacook?",
    content:
      "Visit our website to contact us. We'll create a tailored digital marketing strategy for your healthcare business using various techniques to drive results.",
  },
  {
    title: "Do we offer customized marketing solutions?",
    content:
      "Yes, we offer customized marketing solutions. Let's discuss your specific needs and develop a tailored strategy.",
  },
  {
    title: "How do we measure campaign success?",
    content:
      "To measure campaign success, we use KPIs like traffic, conversions, engagement, and ROI. ",
  },
  {
    title: "Can we help improve your website’s SEO ranking?",
    content:
      "Yes, our experts will help to improve your website's SEO ranking to enhance search engine visibility and attract more organic traffic.",
  },
];

const blogData = [
  {
    id: "strategies-for-healthcare-digital-marketing-success",
    title: "Digital Marketing Strategies for Healthcare Growth | MediaCook",
    thumbUrl: "images/banner_img.webp",
    date: "October 15",
    btnText: "Learn More",
    href: "/blog/strategies-for-healthcare-digital-marketing-success",
    socialShare: true,
    description:
      "Explore top healthcare digital marketing strategies to increase visibility, engage patients, and improve your practice’s success with SEO, PPC, and more.",
  },
  {
    id: "medical-practice-with-effective-seo",
    title: "Effective Healthcare SEO for Medical Professionals | MediaCook",
    thumbUrl: "images/blog/blog2.png",
    date: "January 16",
    btnText: "Learn More",
    href: "/blog/medical-practice-with-effective-seo",
    socialShare: true,
    description:
      "Boost your medical practice's online visibility with healthcare SEO. Learn essential strategies to attract patients and rank higher on Google.",
  },
];

// const blogData = [
//   {
//     title: "The Power of SEM for Boosting Your Business",
//     thumbUrl:
//       "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     date: "May 1, 2023",
//     btnText: "Learn More",
//     href: "#",
//     socialShare: false,
//   },
//   {
//     title: "Why SEO is Crucial for Your Online Success",
//     thumbUrl:
//       "https://img.freepik.com/free-photo/top-view-tools-marketing_1134-83.jpg?t=st=1725448574~exp=1725452174~hmac=cfebf634f75162d86d8a665b7a419e37968d56487a86094800cc4ff9590a898e&w=740",
//     date: "May 4, 2023",
//     btnText: "Learn More",
//     href: "#",
//     socialShare: false,
//   },
//   {
//     title: "Top Social Media Strategies for Brand Growth",
//     thumbUrl:
//       "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     date: "May 1, 2023",
//     btnText: "Learn More",
//     href: "#",
//     socialShare: false,
//   },
// ];

const awardData = [
  {
    title: "Best Digital Marketing Agency",
    subTitle:
      "Recognized for delivering top-notch digital marketing strategies and exceptional results across SEO, SEM, and SMM campaigns.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Excellence in Content Marketing",
    subTitle:
      "Awarded for creating high-quality, engaging content that drives traffic and enhances brand authority.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Top Social Media Marketer",
    subTitle:
      "Honored for significant growth and engagement through innovative social media marketing strategies.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Innovation in Healthcare Marketing",
    subTitle:
      "Recognized for groundbreaking marketing solutions tailored specifically for the healthcare industry, resulting in increased patient engagement and brand awareness.",
    iconUrl: "images/icons/award.svg",
  },
];

const departmentData = [
  {
    title: "Search Engine Marketing",
    iconUrl: "images/sem.png",
    href: "#",
  },
  {
    title: "Search Engine Optimization",
    iconUrl: "images/seo.png",
    href: "#",
  },
  {
    title: "Social Media Marketing",
    iconUrl: "images/smm.png",
    href: "#",
  },
  {
    title: "Content Marketing",
    iconUrl: "images/cm.png",
    href: "#",
  },
  {
    title: "Web Development",
    iconUrl: "images/webdevelopment.png",
    href: "#",
  },
  {
    title: "Search Engine Marketing",
    iconUrl: "images/sem.png",
    href: "#",
  },
  {
    title: "Search Engine Optimization",
    iconUrl: "images/seo.png",
    href: "#",
  },
  {
    title: "Social Media Marketing",
    iconUrl: "images/smm.png",
    href: "#",
  },
  {
    title: "Content Marketing",
    iconUrl: "images/cm.png",
    href: "#",
  },
  {
    title: "Web Development",
    iconUrl: "images/webdevelopment.png",
    href: "#",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Your Digital Marketing Partner"
        subTitle="We provide tailored digital solutions to help your healthcare business thrive in the online world."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="https://prohealth-react.vercel.app/images/home_1/hero_img.png"
        const
        infoList={[
          {
            number: "12+",
            title: "Years of Experience",
          },
          {
            number: "98%",
            title: "Client Satisfaction",
          },
          {
            number: "50+",
            title: "Trusted Partners",
          },
          {
            number: "100+",
            title: "Projects Completed",
          },
        ]}
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection
          sectionTitle="Our Core Services"
          data={featureListData}
        />
      </Section>
      <Section>
        <AboutSection
          imgUrl="https://prohealth-react.vercel.app/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Mediacook"
          subTitle="Leading Healthcare Digital Marketing Agency"
          featureList={[
            {
              featureListTitle:
                "We are digital marketing professionals specialized in the healthcare sector",
              featureListSubTitle:
                "Delivering top-quality marketing solutions to grow your business online and engage more patients.",
            },
          ]}
        />
      </Section>
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Our Specialized Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Awards & Recognitions" data={awardData} />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="What Clients Are Saying"
          sectionTitleDown="Client Testimonials"
        />
      </Section>
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="https://prohealth-react.vercel.app/images/home_1/cta_img.png"
          title="Ready to Grow Your Healthcare Business?"
          subTitle="Get in touch with us today to discuss your marketing needs and take your online presence to the next level."
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Our Latest Insights"
          sectionTitleUp="From the Blog"
          data={blogData}
        />
      </Section>
      {/* Start Appointment Section */}

      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Common Questions"
          sectionTitleUp="FAQs"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection
          data={brandData}
          sectionTitle="Our Clients"
          className="hospitals_logo"
        />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
