import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
// import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";

// const departmentData = [
//   {
//     title: "Search Engine Marketing (SEM)",
//     subTitle:
//       "Boost your hospital’s visibility through paid search ads that reach potential patients instantly.",
//     iconUrl: "/images/services_svg/sem.svg",
//     href: "#",
//   },
//   {
//     title: "Social Media Marketing (SMM)",
//     subTitle:
//       "Leverage platforms like Facebook, Instagram, and LinkedIn to build relationships and foster trust with patients.",
//     iconUrl: "/images/services_svg/smm.svg",
//     href: "#",
//   },
//   {
//     title: "Search Engine Optimization (SEO)",
//     subTitle:
//       "Improve your hospital’s online presence and search engine rankings with organic strategies.",
//     iconUrl: "/images/services_svg/seo.svg",
//     href: "#",
//   },
//   {
//     title: "Content Marketing",
//     subTitle:
//       "Provide value through informative content that helps patients make informed decisions about their health.",
//     iconUrl: "/images/services_svg/cm.svg",
//     href: "#",
//   },
//   {
//     title: "Web Development and Design",
//     subTitle:
//       "Create a user-friendly website that educates patients and helps book appointments seamlessly.",
//     iconUrl: "/images/services_svg/wd.svg",
//     href: "#",
//   },
// ];

const featureListData = [
  {
    title: "Expertise in Healthcare Marketing",
    subTitle:
      "Our team consists of experts in hospital marketing,  dedicated to crafting strategies that drive patient engagement  and improve your online presence.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Comprehensive Solutions",
    subTitle:
      "We offer a complete range of digital marketing  services, tailored specifically to healthcare institutions,  ensuring your hospital’s success online.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Patient-centric Approach",
    subTitle:
      "We focus on understanding the needs of patients  and build marketing campaigns that resonate with  their concerns and healthcare decisions.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "Cutting-edge Technology",
    subTitle:
      "We utilize the latest digital tools and platforms to  help your hospital reach more patients effectively  and improve ROI.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const funFactData = [
  { number: "10+", title: "Years in Digital Marketing" },
  { number: "150+", title: "Healthcare Clients Served" },
  { number: "100%", title: "Satisfaction Guarantee" },
  { number: "200+", title: "Successful Campaigns" },
  { number: "20+", title: "Hospital Partners" },
];

const teamData = [
  {
    imgUrl: "/images/rishab.jpg",
    name: "Rishab Rustagi",
    designation: "Co-Founder & CEO",
    description:
      "With over a decade of experience in digital marketing for hospitals, Rishab leads the strategy at Mediacook.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "#" },
      { icon: "fa6-brands:linkedin-in", href: "#" },
      { icon: "fa6-brands:twitter", href: "#" },
    ],
  },
  {
    imgUrl: "/images/sumit.jpg",
    name: "Sumit Gaur",
    designation: "Head of Operations",
    description:
      "Sumit develops effective marketing plans to expand hospitals digital footprint and attract more patients.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "#" },
      { icon: "fa6-brands:linkedin-in", href: "#" },
      { icon: "fa6-brands:twitter", href: "#" },
    ],
  },
  {
    imgUrl: "/images/sameer_three.jpg",
    name: "Sameer Chandna",
    designation: "Performance Marketing",
    description:
      "Sameer ensures your hospital ranks at the top of search engine results, driving organic traffic and patient inquiries.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "#" },
      { icon: "fa6-brands:linkedin-in", href: "#" },
      { icon: "fa6-brands:twitter", href: "#" },
    ],
  },
];

const galleryData = [
  {
    imgUrl:
      "https://img.freepik.com/free-photo/seo-search-engine-optimization-internet-digital-concept_53876-138498.jpg?t=st=1725523762~exp=1725527362~hmac=f79c23967f65a14e9a731511773d051dbea07b60e6cfcd98c6ed06bebcb212dd&w=740",
  },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/online-strategy-media-marketing-icons_53876-167094.jpg?t=st=1725523690~exp=1725527290~hmac=afab86cade71b2214b8a79734a96693baf94c9726cca2441792769973b571b3a&w=740",
  },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?t=st=1725524792~exp=1725528392~hmac=31322475522db6d6b92a991e049ff84090da3fb6b478f82605500f112da3912e&w=360",
  },
  { imgUrl: "https://cdn.stocksnap.io/img-thumbs/960w/sem-seo_CWQ6QKFNHN.jpg" },
  {
    imgUrl:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?t=st=1725524828~exp=1725528428~hmac=a8e8160a9f3409d84770f783f19bca1bde6222ab52b1704f7d97ca435c41ff41&w=740",
  },
];

const awardData = [
  {
    iconUrl: "/images/icons/award.svg",
    title: "Best Hospital Marketing Agency 2023",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Excellence in SEO for Hospitals",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Top Social Media Marketer for Healthcare",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Innovative Digital Solutions in Healthcare",
  },
];

export default function About() {
  pageTitle("About Mediacook");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/about/banner_img.png"
        title="Mediacook - Your Healthcare Marketing Partner"
        subTitle="Empowering Hospitals with Tailored Digital Strategies"
      />
      <Section topMd={200} topLg={150} topXl={110}>
        {/* <DepartmentSectionStyle2
          sectionTitle="Our Marketing Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        /> */}
        <div
          className="bg-white py-6 sm:py-8 lg:py-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div
              className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12"
              style={{ maxWidth: "1080px" }}
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Your Trusted Healthcare Digital Marketing Partner
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                In the rapidly evolving world of healthcare, a robust digital
                presence is more important than ever. We are the leading
                healthcare digital marketing agency in India, we specialize in
                helping healthcare organizations, providers, and practitioners
                connect with their target audiences through innovative digital
                marketing strategies. Whether you are a multi-specialty
                hospital, an IVF centre, or an orthopaedic surgeon, we provide
                comprehensive digital marketing services designed to boost your
                online presence and brand recognition. Our mission is simple: to
                empower healthcare brands with the tools, strategies, and
                insights needed to thrive in a digital-first world.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section topMd={50} topLg={50} topXl={50}>
        <div
          className="bg-white py-6 sm:py-8 lg:py-12"
          style={{
            display: "flex",
            justifyContent: "center",
            textJustify: "auto",
          }}
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div
              className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12"
              style={{ maxWidth: "1080px" }}
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Who We Are
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                We are a dedicated digital marketing agency for healthcare that
                understands the unique challenges and opportunities of the
                healthcare sector. Our team of experts combines deep industry
                knowledge with cutting-edge digital marketing techniques to
                deliver results that matter. Whether you're a hospital, clinic,
                healthcare ad agency, medical practice, healthcare startup, or
                curious about how to start a hospital, we are here to help you
                grow, engage, and connect.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Mediacook"
          imgUrl="https://prohealth-react.vercel.app/images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Meet Our Team"
          sectionTitleUp="EXPERTS"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Service Section Portfolio"
          sectionTitleUp="SHOWCASE"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Awards and Recognition"
          sectionTitleUp="ACHIEVEMENTS"
          sectionSubTitle="Recognized for our commitment to excellence in healthcare marketing."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="https://prohealth-react.vercel.app/images/about/banner_bg_2.jpeg"
          title="Let’s Elevate Your Hospital's Brand!"
          subTitle="Schedule a free consultation with Mediacook and explore how we can help you grow your hospital’s digital presence."
          center
        />
      </Section>
    </>
  );
}
