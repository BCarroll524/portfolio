import { Twitch } from '~/components/Icons/Twitch';
import { Twitter } from '~/components/Icons/Twitter';
import { Figma } from '~/components/Icons/Figma';
import { GlowingIcon } from './GlowingIcon';

const GlowingIconList = () => {
  return (
    <ul>
      <li className="inline-block px-6">
        <GlowingIcon Icon={<Twitch width={41.3333} height={48} />} />
      </li>
      <li className="inline-block px-6">
        <GlowingIcon Icon={<Twitter width={176 / 3} height={48} />} />
      </li>
      <li className="inline-block px-6">
        <GlowingIcon Icon={<Figma />} />
      </li>
    </ul>
  );
};

export { GlowingIconList };
