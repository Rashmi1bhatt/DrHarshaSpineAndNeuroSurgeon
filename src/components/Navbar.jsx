import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dr. Harsha</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
      </div>

      <div className="nav-buttons">
        <a href="https://www.kauveryhospitalsbangalore.com/book-an-appointment?hospital_ids=1&speciality_ids=4,27,42&doctor_name=Dr.%20Harsha%20Narayanamurthy">
          Book (Kauvery)
        </a>

        <a href="https://www.apolloclinic.com/find-a-doctor/best-neuro-surgeon-in-bengaluru-karnataka/dr-harsha-narayanamurthy">
          Book (Apollo)
        </a>
      </div>
    </nav>
  );
}
