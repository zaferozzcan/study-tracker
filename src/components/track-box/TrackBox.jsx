import React from "react";
import { useStateValue } from "../../providers/StateProvider";
import TrackBoxHeaderOne from "../../components/track-box/TrackBoxHeaderOne";
// import TrackBoxHeaderTwo from "../../components/track-box/TrackBoxHeaderTwo";
// import StudyTrack from "../../components/track-box/StudyTrack";
import TrackBoxUp from "../../components/track-box/TrackBoxUp";
import TrackBoxStudy from "../../components/track-box/TrackBoxStudy";
export default function TrackBox() {
  const [{ study }] = useStateValue();

  return (
    <div>
      <TrackBoxHeaderOne />
      <TrackBoxUp />
      <TrackBoxStudy />
    </div>
  );
}
