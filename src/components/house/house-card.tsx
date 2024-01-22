type HouseCardProps = {
  name: string;
  animal: string;
  founder: string;
  colors: string;
};

const HouseCard: React.FC<HouseCardProps> = ({
  name,
  animal,
  founder,
  colors,
}) => {
  const [fromColor, toColor] = colors.toLowerCase().split(' and ');

  return (
    <div className="shadow border border-gray-300 p-3 grid gap-2 rounded-md">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-xs">{animal}</span>
      </div>
      <div
        className="bg-gradient-to-r from-white to-black h-4 rounded"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        }}
      />
      <p className="text-xs">
        Founder: <span className="font-bold">{founder}</span>
      </p>
    </div>
  );
};

export { HouseCard };
