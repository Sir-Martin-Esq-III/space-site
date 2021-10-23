import React, { ReactElement, useState } from "react";
import handler from "../api/hello";
import data from "../../public/data.json";
import Crew from "../../components/crew";
import Image from "next/image";
import Menu from "../../components/menu";
interface Props {
  data: any;
}

const CrewPage = (props: Props): ReactElement => {
  const { data } = props;
  console.log([...data]);

  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <div className="crew-container">
      <Menu />
      <div className="image-container">
        <Image
          src={data[currentIndex].images.png}
          height="700px"
          width="700px"
        />
      </div>
      <div className="toggles-container">
        {data.map((member: any, index: number) => (
          <div
            className={`toggle ${index == currentIndex ? "active" : ""}`}
            key={index}
            onClick={() => {
              setcurrentIndex(index);
            }}
          ></div>
        ))}
      </div>
      <Crew data={data[currentIndex]} />
    </div>
  );
};

export default CrewPage;

export async function getStaticProps(context: any) {
  const { crew } = data;
  return {
    props: { data: [...crew] },
  };
}
