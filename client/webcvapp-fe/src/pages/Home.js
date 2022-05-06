import "../styles/css/Home.css";
import img from "../styles/images/img.jpg";

export function Home() {
  return (
    <div className="main-details">
      <h1>Profile</h1>
      <div className="details-icon">
        <div>
          <img src={img} />
        </div>
        <div>
          <p>Address: Yeroham, Israel</p>
          <p>Phone: 052-7051515</p>
          <p>Email: niravisrur1@gmail.com</p>
        </div>
      </div>
      <p>
        Nir Avisror is a Full-Stack Software Engineer with 3 years of experience
        at IAF (Bamza 108).
        <br />
        Who graduates SCE (Shamoon College of Engineering), Beer Sheva Campus.
        <br />
        Established & certified Agile practitioner.
        <br />
        In Addition, a personal trainer who volunteers in a nursing home.
      </p>
    </div>
  );
}

export default Home;
