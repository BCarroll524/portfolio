import { Viewer } from '~/components/Viewer';
import { GlowingIconList } from '~/features/GlowingIcon/GlowingIconList';
import NavBar from '~/features/NavBar/NavBar';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-9">
      <Viewer>
        <NavBar />
      </Viewer>
      <Viewer>
        <GlowingIconList />
      </Viewer>
    </div>
  );
}
