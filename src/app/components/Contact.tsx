import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section className="contact text-capitalize text-center py-5">
      <ul className="list-unstyled">
        <li>
          <p>dammam , saudi arabia</p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#A6BAB9", width: "20px", marginRight: "10px" }}
          />
          <span>0138486888</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#A6BAB9", width: "20px", marginRight: "10px" }}
          />

          <span>info@bin-hind.com</span>
        </li>
      </ul>
    </section>
  );
}
