/**
 * Glowing icons that pulses when hovered
 */

type Props = {
  Icon: JSX.Element;
};

const GlowingIcon = ({ Icon }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-0 scale-105 blur-md opacity-50 hover:scale-125 transition-transform will-change-transform">
        {Icon}
      </div>
      <div className="relative pointer-events-none">{Icon}</div>
    </div>
  );
};

export { GlowingIcon };
