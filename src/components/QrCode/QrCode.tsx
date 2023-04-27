import qrcode from "../../assets/images/image-qr-code.png";
import "./QrCode.css";

export default function QrCode() {
  return (
    <div className="container">
      <img src={qrcode} alt="" />
      <h1 className="title">
        Improve your front-end skills by building projects
      </h1>
      <p className="description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
