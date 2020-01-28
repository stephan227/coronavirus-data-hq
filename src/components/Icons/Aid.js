import React from "react";

function Aid ({width="24px", height="24px", stroke="#000"}) {
  return (
    <svg height={height} width={width} aria-label="Aid" viewBox="0 0 24 24" ><path fill="none" stroke={stroke} strokeWidth="2" d="M1,22 L23,22 L23,6 L1,6 L1,22 Z M8,6 L16,6 L16,2 L8,2 L8,6 Z M8,14 L16,14 M12,10 L12,18"></path></svg>
  )
}

export default Aid;