import * as React from "react";
import Wrapper from "./Wrapper";
import { IconProps } from "./interface";

function SvgBarChartHorizontalOutlined(wrapperProps: IconProps) {
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
      viewBox="0 0 78 78"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      fill="currentColor"
      {...props}
    >
      <path
        d="M2.778.007l.144.005.14.011L3.2.04l.139.022.133.034.134.033.127.044.128.05.122.056L4.1.34l.117.067.116.072.106.078.105.083.1.089.1.089.09.1.088.1.084.105.077.106.073.117.066.116.061.117.056.122.05.128.044.128.034.133.033.133.022.14.017.138.011.139.006.144v72.223l-.006.144-.011.139-.017.139-.022.139-.033.133-.034.133-.044.128-.05.128-.056.122-.06.117-.067.117-.073.116-.077.106-.084.105-.089.1-.089.1-.1.09-.1.088-.105.083-.106.078-.116.072-.117.067-.117.061-.122.056-.128.05-.127.044-.134.034-.133.033-.139.022-.139.017-.139.01-.144.006-.145-.005-.139-.011-.138-.017-.14-.022-.133-.033-.133-.034-.128-.044-.128-.05-.122-.056-.116-.06-.117-.068-.117-.072-.105-.078-.106-.083-.1-.089-.1-.089-.089-.1-.089-.1-.083-.105-.078-.106-.072-.116-.067-.117-.06-.117-.056-.122-.05-.128-.045-.128-.033-.133-.033-.133-.023-.14-.016-.138-.011-.139L0 75.007V2.784l.006-.144.01-.139.017-.139.023-.139.033-.133.033-.133.045-.128.05-.128.055-.122.061-.117.067-.116.072-.117.078-.106.083-.105.09-.1.088-.1.1-.09.1-.088.106-.083.105-.078.117-.072.117-.067.116-.061.122-.056.128-.05L1.95.13l.133-.033.134-.034.139-.022.138-.017.14-.01.144-.006zm39.028 61.116l.133.006.139.017.133.027.134.028.127.039.134.039.122.05.128.055.116.062.123.066.11.072.112.078.11.084.106.088.1.095.095.1.089.105.083.112.078.11.072.112.067.122.06.117.056.127.05.123.04.133.038.128.028.133.028.133.016.14.006.133.006.139-.006.138-.006.134-.016.139-.028.133-.028.133-.039.128-.039.133-.05.123-.055.127-.061.117-.067.122-.072.111-.078.112-.083.11-.09.106-.094.1-.1.095-.105.089-.111.083-.111.078-.111.072-.123.067-.116.06-.128.056-.122.05-.134.04-.127.038-.134.028-.133.028-.139.016-.133.006-.14.005H13.89l-.139-.005-.133-.006-.14-.016-.133-.028-.133-.028-.128-.039-.133-.039-.122-.05-.128-.055-.117-.061-.122-.067-.111-.072-.111-.078-.111-.083-.106-.09-.1-.094-.094-.1-.09-.105-.082-.111-.078-.112-.072-.11-.067-.123-.061-.117-.056-.127-.05-.123-.039-.133-.039-.128-.027-.133-.028-.133-.017-.14-.005-.133-.006-.138.006-.14.005-.133.017-.139.028-.133.027-.133.04-.128.038-.133.05-.123.056-.127.06-.117.068-.122.072-.111.078-.111.083-.112.089-.105.094-.1.1-.095.106-.088.11-.084.112-.078.111-.072.122-.066.117-.062.128-.055.122-.05.133-.039.128-.039.133-.028.134-.027.139-.017.133-.006.139-.005h27.778l.139.005zm22.222-16.666l.133.005.14.017.132.028.134.027.128.04.133.038.122.05.128.056.117.06.122.068.11.072.112.078.111.083.106.089.1.094.094.1.089.106.083.11.078.112.072.111.067.122.061.117.056.128.05.122.039.133.038.128.028.133.028.134.017.139.005.133.006.139-.006.139-.005.133-.017.139-.028.133-.028.134-.038.127-.04.134-.05.122-.055.128-.061.116-.067.123-.072.11-.078.112-.083.111-.089.106-.094.1-.1.094-.106.089-.111.083-.111.078-.111.072-.122.067-.117.061-.128.056-.122.05-.133.038-.128.04-.134.027-.133.028-.139.017-.133.005-.139.006h-50L13.75 50l-.133-.005-.14-.017-.133-.028-.133-.028-.128-.039-.133-.038-.122-.05-.128-.056-.117-.061-.122-.067-.111-.072-.111-.078-.111-.083-.106-.089-.1-.094-.094-.1-.09-.106-.082-.111-.078-.111-.072-.111-.067-.123-.061-.116-.056-.128-.05-.122-.039-.134-.039-.127-.027-.134-.028-.133-.017-.139-.005-.133-.006-.14.006-.138.005-.133.017-.14.028-.133.027-.133.04-.128.038-.133.05-.122.056-.128.06-.117.068-.122.072-.111.078-.111.083-.111.089-.106.094-.1.1-.094.106-.09.11-.082.112-.078.111-.072.122-.067.117-.061.128-.056.122-.05.133-.039.128-.039.133-.027.134-.028.139-.017.133-.005.139-.006h50l.139.006zM52.922 27.79l.14.011.138.017.139.022.133.033.134.034.127.044.128.05.122.056.117.06.117.067.116.073.106.077.106.084.1.089.1.089.088.1.09.1.083.105.077.106.073.116.066.117.061.117.056.122.05.128.044.127.034.134.033.133.022.139.017.139.011.139.006.144-.006.145-.011.139-.017.138-.022.14-.033.133-.034.133-.044.128-.05.128-.056.122-.06.116-.067.117-.073.117-.077.105-.084.106-.089.1-.088.1-.1.089-.1.089-.106.083-.106.078-.116.072-.117.067-.117.06-.122.056-.128.05-.127.045-.134.033-.133.033-.139.023-.139.016-.139.011-.144.006h-38.89l-.144-.006-.138-.01-.14-.017-.138-.023-.134-.033-.133-.033-.128-.045-.127-.05-.123-.055-.116-.061-.117-.067-.117-.072-.105-.078-.106-.083-.1-.09-.1-.088-.089-.1-.089-.1-.083-.106-.078-.105-.072-.117-.067-.117-.06-.116-.056-.122-.05-.128-.045-.128-.033-.133-.033-.134-.023-.139-.016-.138-.011-.14-.006-.144.006-.144.01-.14.017-.138.023-.139.033-.133.033-.134.045-.127.05-.128.055-.122.061-.117.067-.117.072-.116.078-.106.083-.105.09-.1.088-.1.1-.09.1-.088.106-.084.105-.077.117-.073.117-.066.116-.061.123-.056.127-.05.128-.044.133-.034.134-.033.139-.022.139-.017.138-.011.145-.006h38.889l.144.006zM75 11.118l.139.005.133.006.14.017.133.027.133.028.128.039.133.039.122.05.128.055.117.062.122.066.111.072.111.078.111.084.106.088.1.095.094.1.09.105.082.112.078.11.072.112.067.122.061.117.056.127.05.123.039.133.039.128.027.133.028.133.017.14.005.133.006.139-.006.144-.01.139-.017.139-.023.139-.033.133-.033.133-.045.128-.05.128-.055.122-.061.117-.067.116-.072.117-.078.106-.083.105-.09.1-.088.1-.1.09-.1.088-.106.083-.105.078-.117.072-.117.067-.116.061-.123.056-.127.05-.128.044-.133.033-.134.034-.139.022-.139.017-.138.01-.145.006H13.89l-.139-.005-.133-.006-.14-.016-.133-.028-.133-.028-.128-.039-.133-.039-.122-.05-.128-.055-.117-.061-.122-.067-.111-.072-.111-.078-.111-.083-.106-.09-.1-.094-.094-.1-.09-.105-.082-.111-.078-.112-.072-.11-.067-.123-.061-.117-.056-.127-.05-.123-.039-.133-.039-.128-.027-.133-.028-.133-.017-.14-.005-.133-.006-.138.006-.145.01-.139.017-.139.023-.139.033-.133.033-.133.045-.128.05-.128.055-.122.061-.117.067-.116.072-.117.078-.106.083-.105.09-.1.088-.1.1-.089.1-.089.106-.083.105-.078.117-.072.117-.067.116-.061.123-.056.127-.05.128-.044.133-.033.134-.034.139-.022.139-.017.138-.01.145-.006H75z"
        fill="currentColor"
      />
    </svg>
  );
  return <Wrapper {...restProps} icon={file} />;
}

export default SvgBarChartHorizontalOutlined;
