import React from "react";
import { Helmet } from "react-helmet";

import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
import { blogData } from "./blogData";

export default function Blog() {
  pageTitle("Blog");
  return (
    <>
      <Helmet>
        <title>{blogData[0].title}</title>
        <meta name="description" content={blogData[0].description} />
      </Helmet>
      <Section className="hidden" topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life Style" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={[...blogData].reverse()} />
      </Section>
    </>
  );
}
