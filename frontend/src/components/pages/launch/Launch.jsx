import React from "react";
import image from "../../../assetes/Screenshot_2023-12-11_191807-removebg-preview.png";
import "./Launch.css";

export default function Launch() {
  return (
    <div className="launch">
      <div className="contents">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="texts">
          <h4>NEW LAUNCHED</h4>
          <h2>Let's Try Our Latest Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eligendi assumenda fuga dicta, nam perferendis amet natus recusandae
            in, laudantium totam blanditiis officia sequi maiores corporis
            obcaecati unde, quidem ab?
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
