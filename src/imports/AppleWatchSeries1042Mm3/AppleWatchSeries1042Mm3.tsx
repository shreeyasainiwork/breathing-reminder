import svgPaths from "./svg-vp24jst4aw";

function Group2() {
  return (
    <div className="absolute h-[139.405px] left-[23.68px] top-[41.27px] w-[139.745px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.745 139.405">
        <g id="Group 21">
          <ellipse cx="70.2046" cy="70.0249" fill="url(#paint0_radial_1_14)" fillOpacity="0.34" id="Ellipse 3" rx="59.88" ry="58.2955" />
          <path d={svgPaths.p7a3c6c0} fill="url(#paint1_radial_1_14)" fillOpacity="0.34" id="Ellipse 2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(70.2046 70.0249) rotate(90) scale(58.2955 59.88)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_14" r="1">
            <stop stopColor="#0F6190" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(69.7766 74.0168) rotate(-150.487) scale(56.2351 57.7637)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_14" r="1">
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
    <div className="absolute contents left-[23.68px] top-[41.27px]">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-[70px] not-italic text-[8px] text-center top-[24px]">
      <p className="-translate-x-1/2 absolute h-[12px] left-[74.5px] text-[#041d47] top-[24px] w-[9px]">1</p>
      <p className="-translate-x-1/2 absolute h-[12px] left-[93.5px] text-[rgba(4,29,71,0.28)] top-[24px] w-[9px]">2</p>
      <p className="-translate-x-1/2 absolute h-[12px] left-[112.5px] text-[rgba(4,29,71,0.28)] top-[24px] w-[9px]">3</p>
    </div>
  );
}

export default function AppleWatchSeries1042Mm() {
  return (
    <div className="bg-[#d8e8f2] relative size-full" data-name="Apple Watch Series 10 42mm - 3">
      <Group />
      <Group1 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] h-[12px] leading-[normal] left-[93.5px] not-italic text-[#041d47] text-[8px] text-center top-[190px] w-[95px]">...Hold it...</p>
    </div>
  );
}