function Group1() {
  return (
    <div className="absolute h-[87px] left-[51px] top-[68px] w-[86.835px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.8348 87">
        <g id="Group 5">
          <ellipse cx="43.4174" cy="43.5" fill="url(#paint0_radial_10_22)" fillOpacity="0.34" id="Ellipse 2" rx="43.4174" ry="43.5" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(43.4174 43.5) rotate(90) scale(43.5 43.4174)" gradientUnits="userSpaceOnUse" id="paint0_radial_10_22" r="1">
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
    <div className="absolute contents left-[19px] top-[22px]">
      <div className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[25px] leading-[0] left-[94.15px] not-italic text-[#0f437b] text-[12px] text-center top-[22px] w-[150.298px] whitespace-pre-wrap">
        <p className="leading-[14px] mb-0">{`Your heart rate `}</p>
        <p className="leading-[14px]">is shooting up</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[19px] top-[22px]">
      <Group1 />
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[19px] top-[22px]">
      <Group3 />
    </div>
  );
}

export default function AppleWatchSeries1042Mm() {
  return (
    <div className="bg-[#d8e8f2] relative size-full" data-name="Apple Watch Series 10 42mm - 1">
      <div className="absolute bg-[#0e437b] h-[31px] left-[94px] top-[192px] w-[93px]" />
      <div className="absolute bg-[#b1c8db] h-[31px] left-0 top-[192px] w-[94px]" />
      <Group2 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] h-[9px] leading-[9px] left-[94px] not-italic text-[#041d47] text-[8px] text-center top-[169px] w-[150px]">Let’s take a 90 sec Breathing break?</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[9px] left-[139.5px] not-italic text-[10px] text-center text-white top-[203px] w-[51px]">Start now</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[9px] left-[44.5px] not-italic text-[10px] text-center text-white top-[203px] w-[51px]">Dismiss</p>
    </div>
  );
}