import React, { ReactElement } from "react";
import { ImageType } from "../consts/consts";

interface Props {
  data: {
    name: string;
    role: string;
    bio: string;
  };
}

const Crew = (props: Props): ReactElement => {
  const { data } = props;
  const { name, role, bio } = data;
  return (
    <div className="crew-info">
      <h1>{role}</h1>
      <h1>{name}</h1>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default Crew;
