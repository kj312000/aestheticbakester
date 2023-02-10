import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

const Home = () => {
  return (
    <div class="demo-wrap">
      <img
        class="demo-bg"
        src="https://images.pexels.com/photos/4099128/pexels-photo-4099128.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div class="demo-content">
        <h1 className="demo-header">Aesthetic Bakester</h1>
        <div className="buttons_navigate_grp">
          <Link className="buttons_navigate" to="./cakes">Cakes</Link>
          <Link className="buttons_navigate" to="/cupcakes">Cupcakes</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
