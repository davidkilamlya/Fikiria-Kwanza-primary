import React, { useRef, useState } from "react";

import "./Gallery.scss";
// import images from "../../Constants/images";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import { easeInOut, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
// Use the imported images as needed

const image1 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0064.jpg?updatedAt=1701188102962";
const image2 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0014.jpg?updatedAt=1701188101703";
const image3 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0069.jpg?updatedAt=1701187500965";
const image4 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0068.jpg?updatedAt=1701187500667";
const image5 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0070.jpg?updatedAt=1701187500402";
const image6 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0067.jpg?updatedAt=1701187499485";
const image7 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0066.jpg?updatedAt=1701187486457";
const image8 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0065.jpg?updatedAt=1701187457665";
const image9 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0062.jpg?updatedAt=1701187442967";
const image10 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0063.jpg?updatedAt=1701187442610";
const image11 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0061.jpg?updatedAt=1701187440986";
const image12 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0060.jpg?updatedAt=1701187437463";
const image13 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0057.jpg?updatedAt=1701187436178";
const image14 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0056.jpg?updatedAt=1701187424632";
const image15 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0055.jpg?updatedAt=1701187416837";
const image16 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0050.jpg?updatedAt=1701187381934";
const image17 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0054.jpg?updatedAt=1701187381650";
const image18 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0053.jpg?updatedAt=1701187378573";
const image19 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0044.jpg?updatedAt=1701187374524";
const image20 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0046.jpg?updatedAt=1701187373501";
const image21 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0045.jpg?updatedAt=1701187365242";
const image22 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0048.jpg?updatedAt=1701187364405";
const image23 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0041.jpg?updatedAt=1701187317196";
const image24 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0040.jpg?updatedAt=1701187314629";
const image25 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0038.jpg?updatedAt=1701187311842";
const image26 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0035.jpg?updatedAt=1701187311177";
const image27 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0033.jpg?updatedAt=1701187310757";
const image28 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0037.jpg?updatedAt=1701187304006";
const image29 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0034.jpg?updatedAt=1701187303787";
const image30 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0032.jpg?updatedAt=1701187263474";
const image31 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0031.jpg?updatedAt=1701187234132";
const image32 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0025.jpg?updatedAt=1701187233457";
const image33 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0029.jpg?updatedAt=1701187230389";
const image34 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0022.jpg?updatedAt=1701187230044";
const image35 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0021.jpg?updatedAt=1701187229358";
const image36 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0019.jpg?updatedAt=1701187225485";
const image37 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0023.jpg?updatedAt=1701187223975";
const image38 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0015.jpg?updatedAt=1701187156652";
const image39 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0009.jpg?updatedAt=1701187149686";
const image40 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0005.jpg?updatedAt=1701187149346";
const image41 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0003.jpg?updatedAt=1701187149222";
const image42 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0004.jpg?updatedAt=1701187149158";
const image43 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0002.jpg?updatedAt=1701187148342";
const image44 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0006.jpg?updatedAt=1701187148232";
const image45 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0001.jpg?updatedAt=1701187142807";
const image46 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0039.jpg?updatedAt=1701187313496";
const image47 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0012.jpg?updatedAt=1701187148700";

const image48 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0011.jpg?updatedAt=1701187148563";
const image49 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0010.jpg?updatedAt=1701187148451";
const image50 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0039.jpg?updatedAt=1701187313496";
const image51 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0012.jpg?updatedAt=1701187148700";
const image52 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0008.jpg?updatedAt=1701187146241";
const image53 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0036.jpg?updatedAt=1701187307968";
const image54 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0027.jpg?updatedAt=1701187225325";
const image55 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0030.jpg?updatedAt=1701187231322";
const image56 =
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0010.jpg?updatedAt=1701187138390";

// Add more images as needed...

////////////////////////////////
const officialImages = [
  { image: image1, title: "Image 1" },
  { image: image2, title: "Image 2" },
  { image: image3, title: "Image 3" },
  { image: image4, title: "Image 4" },
  { image: image5, title: "Image 5" },
  { image: image6, title: "Image 6" },
  { image: image7, title: "Image 7" },
  { image: image8, title: "Image 8" },
  { image: image9, title: "Image 9" },
  { image: image10, title: "Image 10" },
  { image: image11, title: "Image 11" },
  { image: image12, title: "Image 12" },
  { image: image13, title: "Image 13" },
  { image: image14, title: "Image 14" },
  { image: image15, title: "Image 15" },
  { image: image16, title: "Image 16" },
  { image: image17, title: "Image 17" },
  { image: image18, title: "Image 18" },
  { image: image19, title: "Image 19" },
  { image: image20, title: "Image 20" },
  { image: image21, title: "Image 21" },
  { image: image22, title: "Image 22" },
  { image: image23, title: "Image 23" },
  { image: image24, title: "Image 24" },
  { image: image25, title: "Image 25" },
  { image: image26, title: "Image 26" },
  { image: image27, title: "Image 27" },
  { image: image28, title: "Image 28" },
  { image: image29, title: "Image 29" },
  { image: image30, title: "Image 30" },
  { image: image31, title: "Image 31" },
  { image: image32, title: "Image 32" },
  { image: image33, title: "Image 33" },
  { image: image34, title: "Image 34" },
  { image: image35, title: "Image 35" },
  { image: image36, title: "Image 36" },
  { image: image37, title: "Image 37" },
  { image: image38, title: "Image 38" },
  { image: image39, title: "Image 39" },
  { image: image40, title: "Image 40" },
  { image: image41, title: "Image 41" },
  { image: image42, title: "Image 42" },
  { image: image43, title: "Image 43" },
  { image: image44, title: "Image 44" },
  { image: image45, title: "Image 45" },
  { image: image46, title: "Image 46" },
  { image: image47, title: "Image 47" },
  { image: image48, title: "Image 48" },
  { image: image49, title: "Image 49" },
  { image: image50, title: "Image 50" },
  { image: image51, title: "Image 51" },
  { image: image52, title: "Image 52" },
  { image: image53, title: "Image 53" },
  { image: image54, title: "Image 54" },
  { image: image55, title: "Image 55" },
  { image: image56, title: "Image 56" },
];

function Gallery() {
  // Define a constant for the base URL

  const imageRef = useRef();
  const galleryRef = useRef();
  const [imageHolder, setImageHolder] = useState();
  const { pathname, search } = useLocation();
  console.log("path ", pathname, " search ", search);

  const handleClick = (id) => {
    setImageHolder(officialImages[id].image);
    imageRef.current.style.height = "100%";
    imageRef.current.style.width = "100vw";
    imageRef.current.style.padding = "50px";
  };
  const handleCancel = () => {
    imageRef.current.style.height = "0vh";
    imageRef.current.style.padding = "0px";
  };
  return (
    <div>
      <Helmet>
        <title>
          Fikiria Kwanza Primary School: Capturing Moments of Learning, Joy, and
          Growth
        </title>
        <meta
          name="description"
          content="Immerse yourself in the vibrant tapestry of Fikiria Kwanza Primary School through our captivating gallery. Witness the spark of learning, the joy of camaraderie, and the transformative power of education."
        />
        <meta name="author" content="David Kilamlya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="primary school, Tanzania, gallery, learning, joy, growth, education, students, teachers, classrooms, activities"
        />
        <meta
          property="og:title"
          content=" Fikiria Kwanza Primary School: Capturing Moments of Learning, Joy, and
          Growth"
        />
        <meta
          property="og:description"
          content="Immerse yourself in the vibrant tapestry of Fikiria Kwanza Primary School through our captivating gallery. Witness the spark of learning, the joy of camaraderie, and the transformative power of education."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0009.jpg?updatedAt=1701187149686"
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="/admission" />
      </Helmet>
      <Contact position={"sticky"} />
      <div className="gallery-container">
        <PageHeader title={"Fikiria Kwanza/Gallery"} />
        <motion.div
          initial={{ y: [0, 100] }}
          whileInView={{ y: [-300, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
          className="gallery-card-image"
          ref={galleryRef}
        >
          {officialImages.map((item, index) => {
            console.log(item, index);
            return (
              <div className="gallery-card" key={index}>
                <div className="gallery-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      onClick={() => handleClick(index)}
                      alt="gallery"
                      className="gallery-image-image"
                    />
                  ) : (
                    <h4>loading.....</h4>
                  )}
                </div>
                <div className="gallery-tittle">
                  <span className="gallery-tittle-h2">{item.title}</span>
                  {/* <span className="gallery-tittle-date">{item.date}</span> */}
                </div>
              </div>
            );
          })}
          <div
            className="image-holder"
            ref={imageRef}
            onClick={() => handleCancel()}
          >
            <div className="image-holder-icon">
              <MdCancel
                className="cancel-icon"
                onClick={() => handleCancel()}
              />
            </div>
            <div className="image-holder-container">
              {" "}
              <img
                src={imageHolder}
                alt="gallery"
                className="image-holder-image"
                onClick={() => handleCancel()}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
