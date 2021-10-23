import Link from "next/link";
import React, { ReactElement } from "react";
import logo from "../public/assets/shared/logo.svg";

interface Props {}

const Menu = (props: Props): ReactElement => {
  return (
    <div>
      <ul>
        <Link href="/destinations">
          <a>Destinations</a>
        </Link>
        <Link href="/technology">
          <a>Tech</a>
        </Link>
        <Link href="/crew">
          <a>Crew</a>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
