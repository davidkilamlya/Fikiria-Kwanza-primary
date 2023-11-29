
import "./PdfPreview.scss";

import { AiFillFilePdf } from "react-icons/ai";


import { motion } from "framer-motion";


function PdfPreview({ docUrl, docTitle, pdfImageUrl }) {
  return (
    <motion.div
        initial={{ x: [0, 100], opacity: 0 }}
        whileInView={{ x: [-300, 0], opacity: 1 }}
        transition={{ ease: "circInOut", duration: 1 }} className="pdfPreview">
      <div className="pdfPreview-image-container">
        <img
          src={pdfImageUrl}
          alt={docTitle}
          className="pdfPreview-pdf-image"
        />
      </div>
      <div className="pdfPreview-icon-title-container">
        <div className="pdfPreview-icon-container">
          <AiFillFilePdf className="pdfPreview-icon" />
        </div>
        <div className="pdfPreview-title-container">
          <a
            href={docUrl}
            target="_blank"
            referrerPolicy="noreferrer"
            rel="noreferrer noopener"
            className="pdfPreview-link-title"
          >
            <span className="pdfPreview-title">{docTitle}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default PdfPreview;