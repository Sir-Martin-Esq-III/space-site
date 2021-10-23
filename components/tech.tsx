import React, { ReactElement } from "react";
import { ImageType } from "../consts/consts";

interface Props {
  data: {
    name: string;
    description: string;
  };
}

const Tech = (props: Props): ReactElement => {
  const { data } = props;
  const { name, description } = data;
  return (
    <div>
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  );
};
export default Tech;
