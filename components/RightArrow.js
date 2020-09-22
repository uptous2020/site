import * as React from "react"

function RightArrow({color}) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-right"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default RightArrow;
