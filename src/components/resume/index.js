import React from "react";
import { Document } from "react-pdf";
import resumePDF from '../../assets/HUANG_WILSON_RESUME.pdf';

const Resume = () => {
  return (
    <>
      <p>resume</p>
      <Document file={"./HUANG_WILSON_RESUME.pdf"}></Document>
    </>
  );
};

export default Resume;
