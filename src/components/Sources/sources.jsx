import "./sources.css";
import Schedule from "../../assets/Schedule.png";
import Source from "../../assets/Source.png";
import AIChat from "../../assets/AIChat.png";
import { BiInjection } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

function Sources() {
  return (
    <div className="container py-5 text-center">
      <div className="head d-flex flex-column align-items-center text-center">
        <span className="d-block mb-4 ps-sm-5 ps-lg-1 fw-semibold color">
          Unleash Your BABY with a crying analyzer (AI)
        </span>
        <p className="d-block mb-4 fs-4 fw-semibold dark rounded-pill px-3">
          Making the experience of motherhood easier and more enjoyable
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
        <div className="col d-flex justify-content-center ">
          <div className="card h-100 shadow-sm" style={{ maxWidth: "360px" }}>
            <img
              src={Schedule}
              className="card-img-top"
              alt="Schedule of vaccinations"
              style={{ height: "260px", objectFit: "cover" }}
            />
            <div className="card-body py-2 px-3">
              <h5 className="card-title mb-3 ">
                Schedule <BiInjection />
              </h5>
              <p className="card-text small ">
                Vaccination schedule for newborns to stay healthy and protected.
              </p>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div className="card h-100 shadow-sm" style={{ maxWidth: "360px" }}>
            <img
              src={Source}
              className="card-img-top"
              alt="Educational Sources"
              style={{ height: "260px", objectFit: "cover" }}
            />
            <div className="card-body py-2 px-3">
              <div className="d-flex justify-content-between align-items-center mb-3 ">
                <h5 className="card-title mb-0 ">
                  Sources <FaYoutube />
                </h5>
                <button className="btn btn-sm rounded-pill bg">More</button>
              </div>
              <p className="card-text small">
                (educational, medical, and scientific content about newborns) To
                become more knowledgeable.
              </p>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div className="card h-100 shadow-sm" style={{ maxWidth: "360px" }}>
            <img
              src={AIChat}
              className="card-img-top"
              alt="AI Chat Assistant"
              style={{ height: "260px", objectFit: "cover" }}
            />
            <div className="card-body py-2 px-3">
              <h5 className="card-title mb-3">
                AI Chat <IoChatbubbleEllipses />
              </h5>
              <p className="card-text small">
                to help you solve any problem and to answer your questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sources;
