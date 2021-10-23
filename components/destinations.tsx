import image from "next/image";
import React, { ReactElement } from "react";
import { ImageType } from "../consts/consts";
import Image from "next/image";
interface Props {
  data: {
    name: string;
    images: ImageType;
    description: string;
    distance: string;
    travel: string;
  };
}

const Destinations = (props: Props): ReactElement => {
  const { data } = props;
  const { name, images, description, distance, travel } = data;
  return (
    <div className="planet-info">
      <div className="info-section">
        <h1 className="planet">{name}</h1>
        <p className="desc">{description}</p>
        <div className="facts">
          <div className="avg-dist">
            <p>AVG. DISTANCE</p>
            <p>{distance}</p>
          </div>
          <div className="avg-dist">
            <p>EST. TRAVEL TIME</p>
            <p>{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
