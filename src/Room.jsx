import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const currentLocation = window.location.href;
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    const appID = 1401870445;
    const serverSecret = "f222630c7b6f7a93bc08b9f567f047c9";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      " "
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${currentLocation}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      turnOnMicrophoneWhenJoining: true,
      showScreenSharingButton: true,
      useFrontFacingCamera: true,
      enableStereo: true,
      showRoomTimer: true,
      enableUserSearch: true,
    });
  };
  return <div ref={myMeeting} />;
}

export default Room;
