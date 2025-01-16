import React from "react";
import Hero from "../Hero";
import Section from "../Section";
import BrandsSection from "../Section/BrandsSection";
import AboutSectionStyle4 from "../Section/AboutSection/AboutSectionStyle4";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";
import TestimonialSectionStyle3 from "../Section/TestimonialSection/TestimonialSectionStyle3";
import BannerSectionStyle8 from "../Section/BannerSection/BannerSectionStyle8";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";

import { pageTitle } from "../../helpers/PageTitle";

const brandData =
  // Safeguard data arras
  [
    { imgUrl: "images/BingAds.png", imgAlt: "Brand 2" },
    { imgUrl: "images/datastudio.png", imgAlt: "Brand 3" },
    { imgUrl: "images/GoogleAds.png", imgAlt: "Brand 4" },

    { imgUrl: "images/Meta.png", imgAlt: "Brand 6" },
  ] || []; // Default to empty array

const featureListData =
  [
    {
      iconUrl:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-targeting-ads-and-announcement-bullhorn-or-megaphone-seo-color-tal-revivo.png",
      title: "Targeted Advertisments",
      subTitle:
        "Our highly targeted SEM campaigns focus on patients searching for specific treatments or healthcare services.",
    },
    {
      iconUrl: "https://img.icons8.com/fluency/100/positive-dynamic.png",
      title: "Increased Visibility",
      subTitle:
        "Our SEM strategies help hospitals rank at the top of search results, increasing their visibility and driving traffic to their website.",
    },
    {
      iconUrl: "https://img.icons8.com/fluency/100/low-price.png",
      title: "Cost-Effective",
      subTitle:
        "We optimize your SEM campaigns to ensure you’re getting the best ROI with cost-effective bidding strategies.",
    },
    {
      iconUrl:
        "https://img.icons8.com/external-flat-geotatah/100/external-analysis-customer-engagement-flat-flat-geotatah-3.png",
      title: "Measurable Results",
      subTitle:
        "Our SEM campaigns provide detailed analytics and reports to track the success of your marketing efforts and optimize it.",
    },
    {
      iconUrl: "https://img.icons8.com/officel/100/triangular-bandage.png",
      title: "Patient Acquisition",
      subTitle:
        "Attract right patients to hospital by leveraging SEM strategies designed to reach those seeking specific medical services.",
    },
    {
      iconUrl:
        "https://img.icons8.com/external-bearicons-flat-bearicons/100/external-reputation-reputation-bearicons-flat-bearicons-1.png",
      title: "Online Reputation",
      subTitle:
        "Increase your hospital’s reputation by showing up for queries and appearing through paid search ads.",
    },
  ] || []; // Default to empty array

const testimonialData =
  [
    {
      text: "Working with this SEM agency has significantly boosted our online visibility. We’re seeing more appointments booked directly from our SEM ads.",
      ratingNumber: "5",
      avatarImgUrl:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_image/azblob/doctors/9078.jpg?itok=2aRcfBc1",
      avatarName: "DR. Prashant kumar",
    },
    {
      text: "The SEM strategies implemented by this team have resulted in a 30% increase in patient inquiries. We couldn’t be more satisfied! I recommend them.",
      ratingNumber: "4.5",
      avatarImgUrl:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_image/azblob/doctors/1032.png?itok=9rNE1SsD",
      avatarName: "DR. Aman Dhillon",
    },
    {
      text: "Their SEM strategies have not only increased our online presence but also brought in more relevant patient inquiries than ever before. Hope to work toghter again soon.",
      ratingNumber: "5",
      avatarImgUrl:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_image/azblob/doctors/2070.jpg?itok=urzGLw-J",
      avatarName: "DR. R Muralidharan",
    },
    {
      text: "Our hospital's visibility has drastically improved thanks to MediaCook targeted SEM campaigns. Highly recommend! Really liked their work.",
      ratingNumber: "4.8",
      avatarImgUrl:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_image/azblob/doctors/8546.jpg?itok=4jo5Hz_H",
      avatarName: "DR. KP Singh",
    },
    {
      text: "Mediacook has been instrumental in increasing our patient bookings through their well-optimized SEM strategies. Truly impressive work! I Liked it.",
      ratingNumber: "5",
      avatarImgUrl:
        "https://www.fortishealthcare.com/drupal-data/styles/doctor_image/azblob/doctors/1253.jpg?itok=EPy3yD66",
      avatarName: "DR. Deepak kalra",
    },
  ] || []; // Default to empty array

const faqData =
  [
    {
      title: "What is SEM, and how does it benefit hospitals?",
      content:
        "SEM (Search Engine Marketing) helps hospitals increase their online presence by placing paid ads on search engines. This leads to higher visibility, more patient inquiries, and improved brand recognition.",
    },
    {
      title: "How much should hospitals invest in SEM?",
      content:
        "The investment in SEM depends on the hospital’s goals and competition. Our experts can guide you through setting a budget that aligns with your patient acquisition goals.",
    },
    {
      title: "How are SEM campaigns optimized for healthcare?",
      content:
        "We optimize SEM campaigns by targeting relevant keywords, crafting compelling ad copy, and focusing on the specific healthcare services your hospital offers to ensure maximum ROI.",
    },
    {
      title: "How can we measure SEM success?",
      content:
        "SEM success can be measured through various KPIs like click-through rates (CTR), conversion rates, cost per acquisition (CPA), and the number of patient inquiries or appointments booked.",
    },
  ] || []; // Default to empty array

// Page Component
export default function SemForHospitals() {
  // Set the page title
  pageTitle("SEM for Hospitals");

  return (
    <>
      <Hero
        title="Your Digital Marketing Partner"
        subTitle="We provide tailored digital solutions to help your healthcare business thrive in the online world."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="https://prohealth-react.vercel.app/images/home_3/hero_img_1.png"
        const
        infoList={[
          {
            number: "70+",
            title: "Successful SEM Campaigns",
          },
          {
            number: "95%",
            title: "Client Retention Rate",
          },
          {
            number: "100+",
            title: "Businesses Optimized",
          },
          {
            number: "50%",
            title: "Average ROI Increase",
          },
        ]}
      />
      {/* Brands Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection
          data={brandData}
          sectionTitle="Paid SEM Tools We Thrive On"
        />
      </Section>

      {/* About SEM Section */}
      <Section>
        <AboutSectionStyle4
          imgUrl="https://prohealth-react.vercel.app/images/home_3/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          titleUp="ABOUT SEM"
          title="How SEM Can Boost Your Hospital's Online Presence"
          subTitle="SEM (Search Engine Marketing) is one of the most effective ways to attract patients who are actively searching for healthcare services. At Mediacook, we specialize in crafting tailored SEM strategies that meet your hospital's specific needs."
        />
      </Section>

      {/* Features Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        style={{ marginBottom: "3rem" }}
      >
        <FeaturesSectionStyle4
          sectionTitle="Why Choose Our SEM Services"
          data={featureListData}
        />
      </Section>

      {/* Testimonial and Banner Section */}
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: "url(/images/home_3/testimonial_bg.svg)" }}
      >
        <Section
          topMd={190}
          topLg={145}
          topXl={105}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <TestimonialSectionStyle3
            sectionTitle="What Our Clients Say <br />About Our SEM Services"
            sectionTitleUp="TESTIMONIALS"
            data={testimonialData}
          />
        </Section>
        <BannerSectionStyle8
          imgUrl="https://prohealth-react.vercel.app/images/home_3/banner_img.png"
          bgUrl="/images/home_3/banner_bg.svg"
          title="Boost Your Hospital’s Online Visibility Today!"
          subTitle="Contact Mediacook to learn how SEM can help you reach more patients and grow your hospital's reputation online."
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
