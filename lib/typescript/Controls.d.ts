import React from "react";
declare type Props = {
    play: Boolean;
    ready: Boolean;
    showFullScreenButton?: Boolean;
    fullScreen: Boolean;
    showSeekbar: Boolean;
    duration: number;
    currentTime: number;
    playVideo: () => void;
    pauseVideo: () => void;
    seekTo: (t: number) => void;
    toggleFS: () => void;
    topBar?: ({ play, fullScreen }: {
        play?: Boolean;
        fullScreen?: Boolean;
    }) => React.ReactNode;
};
declare const _default: ({ play, topBar, ready, duration, currentTime, playVideo, pauseVideo, seekTo, fullScreen, showSeekbar, }: Props) => JSX.Element;
export default _default;
