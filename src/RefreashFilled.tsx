import * as React from 'react';
import Wrapper from './Wrapper';
import { IconProps } from './interface';

function SvgRefreashFilled(wrapperProps: IconProps) {
  const { rotating, color, size, ...restProps } = wrapperProps;
  const props = {
    color,
    className: rotating ? 'gio-icon-svg gio-icon-rotating' : 'gio-icon-svg',
    width: !size ? '1rem' : size,
    height: !size ? '1rem' : size,
  };
  const file = (
    <svg
      viewBox="0 0 16 16"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h16v16H0z" fill="currentColor" />
      <path
        d="M2.609 8.282a.2.2 0 01-.17.306h-.298a.097.097 0 00-.075.033.101.101 0 00-.025.078c.355 2.99 2.889 5.3 5.959 5.3a5.98 5.98 0 004.94-2.602.494.494 0 01.662-.157c.006-.002.01 0 .014.003a.503.503 0 01.169.708A7.02 7.02 0 018 15a7 7 0 01-6.967-6.322.1.1 0 00-.099-.09H.661a.2.2 0 01-.17-.306l.889-1.423a.202.202 0 01.17-.094c.069 0 .133.036.17.094l.889 1.423zm12.73-.87a.2.2 0 01.17.306L14.62 9.14a.202.202 0 01-.17.094.202.202 0 01-.17-.094l-.889-1.423a.2.2 0 01.17-.306h.298a.097.097 0 00.075-.033.096.096 0 00.025-.078A6.006 6.006 0 008 2a5.98 5.98 0 00-4.94 2.603.494.494 0 01-.662.157c-.006.002-.01 0-.014-.003a.503.503 0 01-.169-.708A7.02 7.02 0 018 .999a7.002 7.002 0 016.967 6.323.1.1 0 00.099.09h.273z"
        fill="currentColor"
      />
      <g>
        <path
          d="M-24.098 11.484c1.326 0 2.597.479 3.535 1.331l7.072 6.429c.938.852 2.209 1.331 3.535 1.331H7.973c1.326 0 2.598.479 3.536 1.331.937.853 1.464 2.009 1.464 3.214v31.819c0 1.205-.527 2.361-1.464 3.214-.938.852-2.21 1.331-3.536 1.331h-50c-2.761 0-5-2.035-5-4.545v-40.91c0-2.51 2.239-4.545 5-4.545h17.929zm32.031 46c.575 0 1.04-.378 1.04-.844V39.328c0-.466-.465-.844-1.04-.844h-49.92c-.575 0-1.04.378-1.04.844V56.64c0 .466.465.844 1.04.844h49.92zm-19.759-33.143c-1.379 0-2.506-.6-3.677-1.59-2.248-1.9-5.373-4.423-7.343-6.48-.976-1.017-2.309-.787-3.688-.787h-15.453c-.575 0-1.04.486-1.04 1.086v16.828c0 .6.465 1.086 1.04 1.086h49.92c.276 0 .54-.115.735-.318.195-.204.305-.48.305-.768v-7.971c0-.288-.11-.564-.305-.768a1.02 1.02 0 00-.735-.318h-19.759z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgRefreashFilled;
