import React from "react";
import { useStateValue } from "../../providers/StateProvider";
import TrackBoxHeaderOne from "../../components/track-box/TrackBoxHeaderOne";
// import TrackBoxHeaderTwo from "../../components/track-box/TrackBoxHeaderTwo";
// import StudyTrack from "../../components/track-box/StudyTrack";
import TrackBoxUp from "../../components/track-box/TrackBoxUp";
export default function TrackBox() {
  const [{ study }] = useStateValue();
  console.log(study);
  return (
    <div>
      <TrackBoxHeaderOne />
      <TrackBoxUp />
    </div>
  );
}
