import React from "react";
import HeroStyle6 from "../Hero/HeroStyle6";
import Section from "../Section";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle2 from "../Section/BannerSection/BannerSectionStyle2";

import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import BrandsSection from "../Section/BrandsSection";
import { pageTitle } from "../../helpers/PageTitle";

const seoServiceData = [
  {
    title: "Keyword Research & Strategy",
    iconUrl: "https://img.icons8.com/clouds/100/search-in-list.png",
    href: "#",
  },
  {
    title: "On-Page SEO",
    iconUrl: "https://img.icons8.com/clouds/100/search.png",
    href: "#",
  },
  {
    title: "Off-Page SEO",
    iconUrl: "https://img.icons8.com/clouds/100/positive-dynamic.png",
    href: "#",
  },
  {
    title: "Technical SEO",
    iconUrl: "https://img.icons8.com/clouds/100/support.png",
    href: "#",
  },
  {
    title: "SEO Audits",
    iconUrl: "https://img.icons8.com/clouds/100/business-report.png",
    href: "#",
  },
  {
    title: "Local SEO",
    iconUrl: "https://img.icons8.com/clouds/100/place-marker.png",
    href: "#",
  },
];

const workingProcessData = [
  {
    title: "SEO Consultation",
    subTitle:
      "We begin with a consultation to understand your hospital’s needs and SEO goals.",
    iconUrl: "https://img.icons8.com/cotton/100/seo-text.png",
    number: "01",
  },
  {
    title: "SEO Audit",
    subTitle:
      "Our experts conduct a thorough SEO audit of your website to identify areas for improvement.",
    iconUrl: "https://img.icons8.com/color/100/assignment-turned-in.png",
    number: "02",
  },
  {
    title: "Strategy Development",
    subTitle:
      "Based on the audit, we create a custom SEO strategy tailored to your hospital’s needs.",
    iconUrl: "https://img.icons8.com/officel/100/strategy-board.png",
    number: "03",
  },
  {
    title: "Implementation",
    subTitle:
      "We implement the SEO strategy, optimizing your website for both on-page and off-page factors.",
    iconUrl:
      "https://img.icons8.com/external-itim2101-flat-itim2101/100/external-implementation-project-management-itim2101-flat-itim2101.png",
    number: "04",
  },
  {
    title: "Ongoing Optimization",
    subTitle:
      "SEO is a continuous process. We provide ongoing optimization and reporting to ensure your site remains competitive.",
    iconUrl:
      "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/100/external-optimization-marketing-seo-flatart-icons-lineal-color-flatarticons.png",
    number: "05",
  },
];

const faqData = [
  {
    title: "What is SEO and how can it benefit my hospital?",
    content:
      "SEO (Search Engine Optimization) improves your hospital’s online visibility in search engines like Google, helping potential patients find your services.",
  },
  {
    title: "How long does it take to see results from SEO?",
    content:
      "Results vary depending on the competitive landscape, but you can expect to see significant improvements within 3-6 months.",
  },
  {
    title: "What SEO services does Mediacook offer?",
    content:
      "We offer a full range of SEO services including keyword research, on-page and off-page optimization, technical SEO, and local SEO.",
  },
  {
    title: "How do I get started with SEO for my hospital?",
    content:
      "Contact us for a consultation, and we’ll perform an SEO audit to create a custom strategy tailored to your hospital’s needs.",
  },
];

// Safeguard data arrays
const brandData =
  [
    { imgUrl: "images/logoseo/screamingfrog.png", imgAlt: "Brand 8" },
    { imgUrl: "images/logoseo/semrush.png", imgAlt: "Brand 9" },
    { imgUrl: "images/logoseo/seooptimer.png", imgAlt: "Brand 10" },

    { imgUrl: "images/logoseo/yoast.png", imgAlt: "Brand 12" },
  ] || []; // Default to empty array

export default function SeoForHospitals() {
  pageTitle("SEO for Hospitals");

  return (
    <>
      <HeroStyle6
        title="Improve Your Hospital’s Online Visibility with SEO"
        subTitle="At Mediacook, we help hospitals boost their rankings on search engines like Google, driving more traffic and patient inquiries."
        bgUrl="https://prohealth-react.vercel.app/images/home_2/hero_bg.jpeg"
        imgUrl="https://prohealth-react.vercel.app/images/home_2/patents.png"
        btnUrl="/contact"
        funfactList={[
          { number: "50+", title: "Successful SEO Campaigns" },
          { number: "80%", title: "Increase in Organic Traffic" },
          { number: "30+", title: "Hospitals Optimized" },
          { number: "12+", title: "Years of SEO Expertise" },
        ]}
      />
      <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT SEO"
          title="How SEO Can Benefit Your Hospital"
          subTitle="Search Engine Optimization (SEO) is one of the most effective ways to increase your hospital’s online presence, attracting more patients and improving your search engine rankings."
          imgUrl="https://prohealth-react.vercel.app/images//home_2/about.jpeg"
        />
      </Section>
      <Section bottomMd={50} bottomLg={50} bottomXl={50}>
        <DepartmentSectionStyle4
          sectionTitle="Our SEO Services"
          sectionTitleUp="SEO OFFERINGS"
          data={seoServiceData}
        />
      </Section>

      <Section
        topMd={50}
        topLg={50}
        topXl={50}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <WorkingProcess
          sectionTitle="How Our SEO Process Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>
      <Section>
        <BannerSectionStyle2
          bgUrl="https://prohealth-react.vercel.app/images/home_2/cta_bg.jpeg"
          title="Don’t Let Your Hospital Go Unnoticed!"
          subTitle="Get in touch with Mediacook to boost your hospital’s online visibility with SEO."
        />
      </Section>

      <Section topMd={150} topLg={145} topXl={105} bottomLg={50} bottomXl={50}>
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Frequently Asked Questions"
          sectionTitleUp="SEO FAQ"
        />
      </Section>

      {/* Brands Section */}
      <Section
        topMd={50}
        topLg={50}
        topXl={50}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection
          data={brandData}
          sectionTitle="Paid SEO Tools We Thrive On"
        />
      </Section>
    </>
  );
}
