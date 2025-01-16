import React from "react";
import { Helmet } from "react-helmet";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
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

export default function Blog() {
  pageTitle("Blog");
  return (
    <>
      <Helmet>
        <title>{blogData[0].title}</title>
        <meta name="description" content={blogData[0].description} />
      </Helmet>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life Style" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section>
    </>
  );
}
