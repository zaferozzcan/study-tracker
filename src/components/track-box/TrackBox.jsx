import React, { useEffect, useState } from "react";
// import { useStateValue } from "../../providers/StateProvider";
import TrackBoxHeaderOne from "../../components/track-box/TrackBoxHeaderOne";
// import TrackBoxHeaderTwo from "../../components/track-box/TrackBoxHeaderTwo";
// import StudyTrack from "../../components/track-box/StudyTrack";
import TrackBoxUp from "../../components/track-box/TrackBoxUp";
import TrackBoxStudy from "../../components/track-box/TrackBoxStudy";
import { db } from "../../firebase";
export default function TrackBox() {
  const [studyData, setStudyData] = useState([]);
  useEffect(() => {
    let myData = [];
    const fetchData = async () => {
      const data = await db
        .collection("studies")
        .where("user_email", "==", "zaferozzcan@gmail.com")
        .get();
      data.docs.forEach((doc) => {
        myData.push(doc.data());
      });
      setStudyData([...myData]);
    };
    fetchData();
  }, []);
  // console.log("studyData", studyData);
  return (
    <div>
      <TrackBoxHeaderOne />
      <TrackBoxUp />
      {studyData.map((item, index) => (
        <TrackBoxStudy key={index} data={item} />
      ))}
    </div>
  );
}
