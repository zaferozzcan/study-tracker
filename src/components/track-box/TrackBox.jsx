import React from "react";
import { useStateValue } from "../../providers/StateProvider";
import TrackBoxHeaderOne from "../../components/track-box/TrackBoxHeaderOne";
import TrackBoxHeaderTwo from "../../components/track-box/TrackBoxHeaderTwo";
export default function TrackBox() {
  const [{ study }] = useStateValue();
  console.log(study);
  return (
    <div>
      <TrackBoxHeaderOne />
      <TrackBoxHeaderTwo />
    </div>
  );
}
