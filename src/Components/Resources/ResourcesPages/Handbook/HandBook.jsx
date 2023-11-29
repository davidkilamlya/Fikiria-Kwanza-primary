import React from "react";
import PdfPreview from "../../../PdfPreview/PdfPreview";
import { documents, images } from "../../../../Constants";
import "./HandBook.scss";

import { motion } from "framer-motion";




function HandBook() {
  return (
    <div className="hand-book">
      <motion.div
        initial={{ x: [0, 100], opacity: 0 }}
        whileInView={{ x: [-300, 0], opacity: 1 }}
        transition={{ ease: "circInOut", duration: 1 }}
        className="holder"
      >
        <PdfPreview
          docUrl={documents.biologySyllabus}
          pdfImageUrl={images.biologySyllabus}
          docTitle={"Biology Syllabus"}
        />
        <PdfPreview
          docUrl={documents.chemistrySyllabus}
          pdfImageUrl={images.chemistrySyllabus}
          docTitle={"Chemistry Syllabus"}
        />
        <PdfPreview
          docUrl={documents.civicsSyllabus}
          pdfImageUrl={images.civicsSyllabus}
          docTitle={"Civics Syllabus"}
        />
        <PdfPreview
          docUrl={documents.kiswahiliSyllabus}
          pdfImageUrl={images.kiswahiliSyllabus}
          docTitle={"Kiswahili Syllabus"}
        />
        <PdfPreview
          docUrl={documents.englishSyllabus}
          pdfImageUrl={images.englishSyllabus}
          docTitle={"English Syllabus"}
        />
        <PdfPreview
          docUrl={documents.geographySyllabus}
          pdfImageUrl={images.geographySyllabus}
          docTitle={"Geography Syllabus"}
        />
        <PdfPreview
          docUrl={documents.historySyllabus}
          pdfImageUrl={images.historySyllabus}
          docTitle={"History Syllabus"}
        />
        <PdfPreview
          docUrl={documents.mathematicsSyllabus}
          pdfImageUrl={images.mathematicsSyllabus}
          docTitle={"Mathematics Syllabus"}
        />
        <PdfPreview
          docUrl={documents.physicsSyllabus}
          pdfImageUrl={images.mathematicsSyllabus}
          docTitle={"physics Syllabus"}
        />
      </motion.div>
    </div>
  );
}

export default HandBook;
