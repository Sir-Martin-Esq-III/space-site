import React, { ReactElement, useState } from "react";
import handler from "../api/hello";
import data from "../../public/data.json";
import Menu from "../../components/menu";
import Image from "next/image";
import Tech from "../../components/tech";
interface Props {
  data: any;
}

const TechPage = (props: Props): ReactElement => {
  const { data } = props;
  console.log([...data]);

  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <div className="tech-container">
      <Menu />
      <div className="image-container">
        <Image
          src={data[currentIndex].images.portrait}
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
          >
            {`${index + 1}`}
          </div>
        ))}
      </div>
      <Tech data={data[currentIndex]} />
    </div>
  );
};

export default TechPage;

export async function getStaticProps(context: any) {
  const { technology } = data;
  return {
    props: { data: [...technology] },
  };
}
