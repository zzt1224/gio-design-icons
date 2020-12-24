import * as React from "react";
import Wrapper from "./Wrapper";
import { IconProps } from "./interface";

function SvgSettingOutlined(wrapperProps: IconProps) {
  const { rotating, color, size, ...restProps } = wrapperProps;
  const props = {
    style: {
      color,
    },
    className: rotating ? "gio-icon-svg gio-icon-rotating" : "gio-icon-svg",
    width: !size ? "16px" : size,
    height: !size ? "16px" : size,
  };
  const file = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="currentColor"
      {...props}
    >
      <defs>
        <style />
      </defs>
      <g id="setting-outlined_svg__\u56FE\u5C42_2" data-name="\u56FE\u5C42 2">
        <g
          id="setting-outlined_svg__\u56FE\u5C42_1-2"
          data-name="\u56FE\u5C42 1"
        >
          <path
            d="M7 8.47A1.49 1.49 0 118.5 7 1.5 1.5 0 017 8.47zm0-4a2.49 2.49 0 101.77.73A2.49 2.49 0 007 4.49zm5.91 3.09l-1.15.17a.43.43 0 00-.37.31l-.11.32A3.52 3.52 0 0111 9l-.15.31a.46.46 0 000 .48l.7.94a1.92 1.92 0 01-.84.83l-.94-.69a.44.44 0 00-.48 0L9 11a6.14 6.14 0 01-.64.27l-.31.09a.47.47 0 00-.31.39l-.14 1.12a2 2 0 01-1.2 0l-.16-1.15a.44.44 0 00-.31-.37l-.32-.1c-.21-.08-.41-.18-.61-.25l-.31-.16a.47.47 0 00-.47 0l-.95.7a2 2 0 01-.84-.83l.7-.94a.44.44 0 000-.48L3 9c-.1-.2-.19-.42-.27-.63L2.63 8a.46.46 0 00-.37-.3l-1.17-.12a2 2 0 010-1.19l1.16-.17a.43.43 0 00.37-.31l.1-.32A6.54 6.54 0 013 5l.16-.31a.46.46 0 000-.48l-.72-1a2 2 0 01.84-.84l1 .71a.5.5 0 00.46 0L5 3c.21-.1.42-.19.64-.27l.36-.1a.46.46 0 00.32-.39c.05-.42.13-1.15.13-1.15a2 2 0 011.2 0l.16 1.15a.45.45 0 00.32.37l.31.1A5.67 5.67 0 019 3l.31.16a.48.48 0 00.48 0l.94-.7a2 2 0 01.84.84l-.69.94a.44.44 0 000 .48L11 5a3.85 3.85 0 01.27.63l.11.32a.43.43 0 00.37.31l1.15.17a1.91 1.91 0 01.01 1.15zM13.85 6l-.09-.26a.48.48 0 00-.4-.33l-1-.15a.18.18 0 01-.16-.13 5.38 5.38 0 00-.2-.52.2.2 0 010-.21l.61-.81a.49.49 0 000-.52l-.12-.24a3 3 0 00-1.36-1.33l-.24-.12a.49.49 0 00-.52 0L9.56 2a.18.18 0 01-.2 0c-.19-.09-.37-.16-.56-.23a.21.21 0 01-.13-.16c0-.29-.13-1-.13-1A.5.5 0 008.2.24L8 .15a3.08 3.08 0 00-1.9 0l-.31.09a.51.51 0 00-.34.4l-.14 1a.21.21 0 01-.13.16 5.48 5.48 0 00-.56.2.17.17 0 01-.2 0l-.82-.59a.49.49 0 00-.52 0l-.24.12a3.06 3.06 0 00-1.35 1.29l-.12.24a.53.53 0 000 .52l.63.81a.22.22 0 010 .21 5.55 5.55 0 00-.24.56.22.22 0 01-.15.13l-1 .16a.49.49 0 00-.4.33L.15 6a3.08 3.08 0 000 1.9l.09.26a.49.49 0 00.4.33l1 .15a.18.18 0 01.16.13 5.38 5.38 0 00.24.55.22.22 0 010 .21l-.62.81a.53.53 0 000 .52l.12.24a3 3 0 001.34 1.33l.24.12a.49.49 0 00.52 0l.81-.55a.18.18 0 01.2 0 5.48 5.48 0 00.56.23.21.21 0 01.13.16l.14 1a.51.51 0 00.34.4l.26.09a3.08 3.08 0 001.9 0l.26-.09a.5.5 0 00.34-.4l.15-1a.21.21 0 01.13-.16c.19-.07.37-.14.56-.23a.17.17 0 01.2 0l.81.61a.49.49 0 00.52 0l.24-.12a3 3 0 001.34-1.33l.12-.24a.49.49 0 000-.52L12 9.57a.2.2 0 010-.21 3.76 3.76 0 00.23-.55.21.21 0 01.17-.13l1-.15a.46.46 0 00.4-.33l.09-.26A3 3 0 0013.85 6z"
            fill="currentColor"
            id="setting-outlined_svg__setting-o"
          />
        </g>
      </g>
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgSettingOutlined;