import { Image } from "@chakra-ui/react";
import React from "react";
import img from "./assets/virus.png";

function BannerComponent() {
  return (
    <div>
      <Image src={img} w="md" mr={{ md: "16", xl: "0" }} />
    </div>
  );
}

export default BannerComponent;
