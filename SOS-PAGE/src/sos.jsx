import React, { useState, useRef } from "react";
import './sos.css';
import Head from './Header';

const Name = () => {
    const [count, setCount] = useState('Double click');
    const [sosActive, setSosActive] = useState(false);
    const [countdownStarted, setCountdownStarted] = useState(false);
    const audioRef = useRef(null);
    const countdownRef = useRef(null);  // Ref to keep track of countdown interval

    const handleDoubleClick = () => {
        let i = 5;
        setCountdownStarted(true);
        countdownRef.current = setInterval(() => {
            if (i >= 0) {
                setCount(i);
                i--;
            } else {
                clearInterval(countdownRef.current);
                setCount('SOS Activated');
                setSosActive(true);
                playMusic();
                setCountdownStarted(false);  // Ensure countdown state is reset
            }
        }, 1000); // Decrease count every 1 second
    };

    const playMusic = () => {
        audioRef.current = new Audio('./emergency-alarm-69780.mp3'); // Ensure the path to your music file is correct
        audioRef.current.loop = true; // Loop the audio
        audioRef.current.play();
    };

    const stopSos = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset audio to the beginning
        }
        clearInterval(countdownRef.current);  // Clear countdown interval
        setSosActive(false);
        setCountdownStarted(false);
        setCount('Double click');
    };

    return (
        <>
            <Head />
            <div className="div1">
                <button className="div1_btn" onDoubleClick={handleDoubleClick}>
                    {count}
                </button>
            </div>
            <h2 className="div1-h2">SOS EMERGENCY</h2>
            {(sosActive || countdownStarted) && (
                <>
                    <button className="stop_btn" onClick={stopSos}>
                        X
                    </button>
                </>
            )}
        </>
    );
};

export default Name;
