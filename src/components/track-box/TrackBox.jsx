import React, { useEffect, useState } from "react";
import "../../style/trackBox.css";
// import { useStateValue } from "../../providers/StateProvider";
import TrackBoxHeaderOne from "../../components/track-box/TrackBoxHeaderOne";
// import TrackBoxHeaderTwo from "../../components/track-box/TrackBoxHeaderTwo";
// import StudyTrack from "../../components/track-box/StudyTrack";
import TrackBoxUp from "../../components/track-box/TrackBoxUp";
import TrackBoxStudy from "../../components/track-box/TrackBoxStudy";
import { db } from "../../firebase";
export default function TrackBox() {
  const [studyData, setStudyData] = useState([]);
  const [studyDataIds, setStudyDataIds] = useState([]);
  useEffect(() => {
    let myData = [];
    let myDataIds = [];
    const fetchData = async () => {
      const data = await db
        .collection("studies")
        .where("user_email", "==", "zaferozzcan@gmail.com")
        .get();
      data.docs.forEach((doc) => {
        myDataIds.push(doc.id);
        myData.push(doc.data());
      });
      setStudyData([...myData]);
      setStudyDataIds([...myDataIds]);
    };
    fetchData();
  }, []);

  function deleteStudy(id) {
    let newStudyData = studyData.splice(id, 1);
    console.log(id);
    setStudyData([...newStudyData]);
  }

  console.log("studyData", studyData);

  return (
    <div className="track-box-container">
      <TrackBoxHeaderOne />
      <TrackBoxUp />
      {studyData.map((item, index) => (
        <TrackBoxStudy
          del={deleteStudy}
          key={index}
          index={index}
          id={studyDataIds[index]}
          data={item}
        />
      ))}
    </div>
  );
}
