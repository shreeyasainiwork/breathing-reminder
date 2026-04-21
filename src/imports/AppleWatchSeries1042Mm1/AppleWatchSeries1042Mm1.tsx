function Group1() {
  return (
    <div className="absolute h-[127px] left-[30.11px] top-[23px] w-[126.759px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.759 127">
        <g id="Group 5">
          <ellipse cx="63.3794" cy="63.5" fill="url(#paint0_radial_1_394)" fillOpacity="0.34" id="Ellipse 2" rx="63.3794" ry="63.5" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(63.3794 63.5) rotate(90) scale(63.5 63.3794)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_394" r="1">
            <stop stopColor="#0F6190" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[19px] top-[74px]">
      <div className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[25px] leading-[0] left-[94.15px] not-italic text-[#0f437b] text-[12px] text-center top-[74px] w-[150.298px] whitespace-pre-wrap">
        <p className="leading-[14px] mb-0">{`Your heart rate `}</p>
        <p className="leading-[14px]">is shooting up</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[19px] top-[23px]">
      <Group1 />
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[19px] top-[23px]">
      <Group3 />
    </div>
  );
}

export default function AppleWatchSeries1042Mm() {
  return (
    <div className="bg-[#d8e8f2] relative size-full" data-name="Apple Watch Series 10 42mm - 1">
      <Group2 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[9px] left-[94px] not-italic text-[#041d47] text-[8px] text-center top-[173px] w-[150px]">Let’s take a 90 sec Breathing break?</p>
      <div className="absolute bg-[#0f437b] h-[33px] left-0 rounded-tl-[14px] rounded-tr-[14px] top-[190px] w-[187px]" />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[9px] left-[93.5px] not-italic text-[10px] text-center text-white top-[203px] w-[103px]">Start now</p>
    </div>
  );
}