import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from "react-pdf";
import resumePDF from "../../assets/HUANG_WILSON_RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import "./resume.css";

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div id="pdf">
        <Document file={resumePDF} renderMode="canvas">
          <Page pageNumber={1} />
        </Document>
      </div>
      <div>
        <a className={"socialButton"} href="https://drive.google.com/uc?export=download&id=1guI4JiD6wrRyU6BeP1MJEKSVx3SbYK8_">
          <AiOutlineDownload />
          <p className={"buttonLabel"}> Download</p>
        </a>
      </div>
    </>
  );
};

export default Resume;
