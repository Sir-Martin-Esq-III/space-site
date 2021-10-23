import React, { ReactElement, useState } from "react";
import handler from "../api/hello";
import data from "../../public/data.json";
import Destinations from "../../components/destinations";
import Image from "next/image";
import Menu from "../../components/menu";

interface Props {
  data: any;
}

const DestinationPage = (props: Props): ReactElement => {
  const { data } = props;
  console.log([...data]);

  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <div className="destinations-page">
      <Menu />
      <div className="pic">
        <Image
          src={data[currentIndex].images.png}
          height="700px"
          width="700px"
        />
      </div>
      <div className="selection-menu">
        {data.map((member: any, index: number) => (
          <p
            className={`menu-item ${index == currentIndex ? "active" : ""}`}
            key={index}
            onClick={() => {
              setcurrentIndex(index);
            }}
          >
            {member.name}
          </p>
        ))}
      </div>

      <div>
        <Destinations data={data[currentIndex]} />
      </div>
    </div>
  );
};

export default DestinationPage;

export async function getStaticProps(context: any) {
  const { destinations } = data;
  return {
    props: { data: [...destinations] },
  };
}
