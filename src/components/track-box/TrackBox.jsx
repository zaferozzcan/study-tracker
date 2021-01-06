import React from "react";
import { useStateValue } from "../../providers/StateProvider";

export default function TrackBox() {
  const [{ study }] = useStateValue();
  console.log(study);
  return <div></div>;
}
