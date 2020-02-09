import React from "react";

function Loading ({height="24px", width="24px", stroke="rgba(255, 255, 255, 0.2)"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'transparent', display: 'block'}} width={width} height={height} viewBox="0 0 100 100" >
      <circle cx="50" cy="50" fill="none" stroke={stroke} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(31.0205 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export default Loading;