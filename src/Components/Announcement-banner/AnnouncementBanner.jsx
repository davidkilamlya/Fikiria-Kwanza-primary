import "./AnnouncementBanner.scss"
import {images} from "../../Constants"

function AnnouncementBanner() {
  return (
    <div className="announcement-container">
      <a className="announcement-link" href="https://forms.gle/t4rmyjG3obDck3F6A" target="_blank" rel="noopener noreferrer">
        <img
        src={images.announcement_banner}
        alt="announcement"
        className="AnnouncementBanner"
      />
      </a>
      
    </div>
  );
}

export default AnnouncementBanner