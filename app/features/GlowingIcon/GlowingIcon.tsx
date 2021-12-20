/**
 * Glowing icons that pulses when hovered
 */

type Props = {
  Icon: JSX.Element;
};

const GlowingIcon = ({ Icon }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-0 scale-[130%] blur-md opacity-50">
        {Icon}
      </div>
      <div className="relative">{Icon}</div>
    </div>
  );
};

export { GlowingIcon };
