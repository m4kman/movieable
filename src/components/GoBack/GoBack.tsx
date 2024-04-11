import * as React from 'react';

function GoBack({ handler }: { handler: () => void }) {
  return (
    <button
      type="button"
      className="flex gap-2 px-8 mb-8 pt-7 cursor-pointer"
      onClick={handler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <title>Back icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <span>Back</span>
    </button>
  );
}

export default GoBack;
