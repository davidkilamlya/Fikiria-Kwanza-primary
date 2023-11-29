import React from "react";
import "./Academics.scss";
import Title from "../../Components/Title/Title";

function Academics() {
  const academicsDetails = [
    {
      image: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0022.jpg?updatedAt=1701187230044",
      title: "English",
      description:
        "Students develop proficiency in reading, writing, listening, and speaking skills, enabling them to communicate effectively in a globalized world.",
    },
    {
      image: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0019.jpg?updatedAt=1701187225485",
      title: "Mathematics",
      description:
        "Students build a strong foundation in fundamental mathematical concepts including numbers, operations, algebra, geometry, and statistics, laying the groundwork for advanced learning in STEM fields.",
    },
    {
      image:
        "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0010.jpg?updatedAt=1701187138390",
      title: "kiswahili",
      description:
        "Students acquire fluency in Kiswahili, the national language of Tanzania, enabling them to connect with their cultural heritage and participate actively in society.",
    },{
      image:
        "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0014.jpg?updatedAt=1701188101703",
      title: "Science",
      description:
        "Students explore the wonders of the natural world through inquiry-based learning, fostering curiosity and critical thinking. They delve into areas like physics, chemistry, and biology, building a foundation for future scientific exploration.",
    },{
      image:
        "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0050.jpg?updatedAt=1701187381934",
      title: "Social Studies",
      description:
        "Students develop a comprehensive understanding of history, geography, economics, and social structures, enabling them to become informed and responsible citizens.",
    },{
      image:
        "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0022.jpg?updatedAt=1701187230044",
      title: "Civic and Moral Education",
      description:
        "Students cultivate values essential for responsible citizenship, promoting ethical decision-making, respect for diversity, and active participation in civic life.",
    },{
      image:
        "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0006.jpg?updatedAt=1701187148232",
      title: "Physical Education",
      description:
        "Students engage in various sports and fitness activities, promoting a healthy lifestyle and developing teamwork and leadership skills.",
    },
    
  ];
  return (
    <>
      <Title visible={true} title={"Subjects/Curriculum"} />
      <div className="academics" id="academics">
        <div className="academics-container">
          <div className="academic-card-container">
            {academicsDetails.map((item, index) => {
              return (
                <div className="academic-card" key={index}>
                  <div className="academic-card-title">
                    <p className="academic-title">{item.title}</p>
                  </div>
                  <div
                    className="academic-card-image"
                    style={{
                      backgroundColor:"#efefef",
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="academic-card-description">
                    <p className="academic-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="academic-button-holder"> */}
          {/* <a href="/departments" className="academic-button-link"> */}
          {/* <button className="academic-button">Read more</button> */}
          {/* </a> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Academics;
