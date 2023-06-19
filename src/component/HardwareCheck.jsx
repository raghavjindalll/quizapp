import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { ReactMic } from 'react-mic';
import {BsMic, BsMicMute, BsCameraVideoOff, BsCameraVideo} from 'react-icons/bs'
const HardwareComponent = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(true);
  const [stream, setStream] = useState(null);

  const videoConstraints = {
    facingMode: 'user',
  };

  const handleCameraSwitch = () => {
    setIsCameraOn(!isCameraOn);
  };

  useEffect(() => {
    const constraints = { audio: true };

    const getMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        if (audioRef.current) {
          audioRef.current.srcObject = mediaStream;
        }
        setStream(mediaStream);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    getMedia();

    return () => {
      // Stop the media stream when the component unmounts
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [stream]);

  const handleMicrophoneToggle = () => {
    setIsMicrophoneOn(!isMicrophoneOn);
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
    }
  };

  const onStop = (recordedBlob) => {
    // Handle stopped recording and recorded audio data
    console.log('Recorded audio blob:', recordedBlob);
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.stop();
    }
  };

  const clickHandler = () => {
    if(isCameraOn && isMicrophoneOn)
    navigate('/question');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 overflow-hidden">
      <div className="flex-grow">
        {isCameraOn ? (
          <Webcam
            className="w-full h-[400px] mx-auto my-16 rounded-full"
            videoConstraints={videoConstraints}
          />
        ) : (
          <div className="h-[10%] w-[10%] bg-gray-900"></div>
        )}
      </div>
      <div className="flex justify-center gap-5 items-center w-screen bg-white p-4">
        <button
          className="mr-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
          onClick={handleCameraSwitch}
        >
          {isCameraOn ? <BsCameraVideo className='text-3xl'/> : <BsCameraVideoOff className='text-3xl'/>}
        </button>
        <button
          className={`${
            isMicrophoneOn ? 'bg-red-500' : 'bg-red-500'
          } hover:bg-red-600 text-white py-2 px-4 rounded-full`}
          onClick={handleMicrophoneToggle}
        >
          {isMicrophoneOn ? <BsMic className='text-3xl'/> : <BsMicMute className='text-3xl'/>}
        </button>
        <ReactMic
          record={isMicrophoneOn}
          onStop={onStop}
          strokeColor="#000000"
          backgroundColor="#FF4081"
          mimeType="audio/mp3"
          className='h-11'
        />
        <button
          onClick={clickHandler}
          className="flex justify-center items-center rounded-full text-white  bg-red-500 text-xl w-28 h-25 py-2 px-4 ml-80"
        >
          Next 
        </button>
      </div>
    </div>
  );
};

export default HardwareComponent;
