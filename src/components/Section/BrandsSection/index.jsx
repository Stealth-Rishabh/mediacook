import React from "react";
import Spacing from "../../Spacing";

export default function BrandsSection({ data, sectionTitle, className }) {
  return (
    <div>
      {sectionTitle && (
        <>
          <h2 className="cs_fs_40 text-center mb-0 cs_semibold brands_heading">
            {sectionTitle}
          </h2>
          <Spacing md="60" />
        </>
      )}

      <div className="cs_brands cs_style_1">
        {data?.map((item, index) => (
          <div className={`cs_brand cs_center ${className}`} key={index}>
            <img src={item.imgUrl} alt={item.imgAlt} />
          </div>
        ))}
      </div>
    </div>
  );
}
