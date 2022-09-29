// import "../App.css";
import { useState, useEffect } from "react";
import "../Work.css";
const Work = () => {
  const [isHovering, setIsHovering] = useState(false);

  function crossClass() {
    return `${isHovering ? "notHidden" : "hidden"}`;
  }
  function handleMouseEnter(e) {
    console.log(e);
    setIsHovering(true);
  }
  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div>
      <h1 className="Exp">Experience</h1>

      <div className="WorkDiv">
        <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          E-Commerce Site{" "}
        </h2>
        <p>
          {" "}
          Developed a fully functional, full CRUD E-commerce site using React,
          Express, Sequelize, and Node.
        </p>
        <img
          className={crossClass()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Doppeladler_russland.JPG/800px-Doppeladler_russland.JPG"
        ></img>
      </div>
      <div className="WorkDiv">
        <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Coach's Corner{" "}
        </h2>
        <p>
          {" "}
          Assisted in building a full CRUD team management site, built to assist
          coaches in assigning training and tracking player progression.
        </p>
        <img
          className={crossClass()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Doppeladler_russland.JPG/800px-Doppeladler_russland.JPG"
        ></img>
      </div>
      <div>
        <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Warhammer Damage Calculator
        </h2>
        <p>
          A full CRUD, MERN project, designed to calculate the odds of any given
          attack wounding in the tabletop game Warhammer 40,000. Also has a
          Warhammer Fantasy variation.
        </p>
        <img
          className={crossClass()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Doppeladler_russland.JPG/800px-Doppeladler_russland.JPG"
        ></img>
      </div>
      <div>
        <h2>A Song of Ice and Fire API</h2>
        <p>
          A simple, early API project, allowing users to search through a
          existing Game of Thrones API.
        </p>
        <img
          className={crossClass()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Doppeladler_russland.JPG/800px-Doppeladler_russland.JPG"
        ></img>
      </div>
    </div>
  );
};
export default Work;
