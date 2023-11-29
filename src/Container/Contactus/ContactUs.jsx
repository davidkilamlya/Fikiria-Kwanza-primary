import { useState } from "react";
// import Title from "../../Components/Title/Title";
import "./ContactUs.scss";
import axios from "axios";
import { toast } from "react-toastify";
function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    // console.log(inputStates);
    const config = {
      headers: {
        Authorization: `Bearer `,
      },
    };
    const axiosInstance = axios.create(config);

    try {
      await axiosInstance.get("/admission").then((res) => {
        console.log(res.data);
        setIsLoading(false);
        toast.error(`Failed, contact primary@fikiriakwanza.ac.tz or call us +255 784679000`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
    } catch (err) {
      toast.error(
        `Failed, contact primary@fikiriakwanza.ac.tz or call us +255 784679000`,
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        }
      );
      console.log(err.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="contactUs" id={`contact`}>
      <div className="contactus-form-title">
        <div className="contact-form-title">
          <div className="contact-form">
            <div className="contact-title">
              <h1 className="contact-title-h1">Contact us</h1>
            </div>
            <input
              type="text"
              name="userName"
              id="userName"
              className="userName input"
              placeholder="your name"
            />
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="userEmail input"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="userPhone"
              id="userPhone"
              className="userEmail input"
              placeholder="Your Phone"
            />

            <textarea
              name="message"
              id="message"
              className="message input"
              placeholder="message"
            ></textarea>
            <div className="contact-btn">
              <button
                className="contact-submit submit-button"
                onClick={(e) => handleFormSubmit(e)}
                disabled={isLoading ? true : false}
                style={
                  isLoading ? { backgroundColor: "#ddd", color: "#333" } : {}
                }
              >
                {isLoading ? (
                  <>
                    <div className="btn-loader"></div>
                    <span>Sending</span>
                  </>
                ) : (
                  <span>Send</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
