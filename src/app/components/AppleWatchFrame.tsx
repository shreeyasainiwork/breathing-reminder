import { ReactNode } from 'react';
import imgAppleWatchFrame from '../../imports/apple-watch-frame-clean.png';

interface AppleWatchFrameProps {
  children: ReactNode;
}

export default function AppleWatchFrame({ children }: AppleWatchFrameProps) {
  return (
    <div className="relative w-[248px] h-[409px]">
      {/* Apple Watch frame overlay  mx-[0px] my-[-21px]*/}
      <div className="absolute inset-0 pointer-events-none z-20">
        <img
          src={imgAppleWatchFrame}
          alt="Apple Watch Frame"
          className="w-full h-full object-cover mx-[0px] my-[-21px]"
        />
      </div>

      {/* Screen content area - positioned to match frame's screen */}
      <div className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-[187px] h-[223px]">
          {children}
        </div>
      </div>
    </div>
  );
}
