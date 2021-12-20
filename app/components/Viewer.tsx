type Props = {
  children: React.ReactNode;
};

const Viewer = ({ children }: Props) => {
  return (
    <>
      <section className="group w-full rounded-md border border-gray-700 overflow-hidden">
        <div className="flex items-center gap-2 bg-gray-1000 p-4">
          <span className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-red-400 transition-colors duration-200 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-yellow-400 transition-colors duration-200 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-gray-700 group-hover:bg-green-400 transition-colors duration-200 cursor-pointer" />
        </div>
        <div className="radial-gradient flex flex-col flex-1 justify-center items-center h-15">
          {children}
        </div>
      </section>
    </>
  );
};

export { Viewer };
