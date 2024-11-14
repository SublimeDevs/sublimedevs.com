import Image from "next/image";
import { HiStar } from "react-icons/hi";

const Stars = () => (
  <div className="flex items-center gap-1">
    {Array(5)
      .fill(0)
      .map((i) => (
        <HiStar key={i} className="h-6 w-6 text-[#F69E0B]" />
      ))}
  </div>
);

const HomeRatings = () => {
  return (
    <div className="border-b-2 border-primary bg-background">
      <div className="grid-cols-5 lg:grid">
        <div className="flex h-40 flex-col items-center justify-center border-b-2 border-primary px-4 lg:border-b-0 lg:border-r-2 lg:px-6">
          <h4 className="text-center text-3xl font-bold">
            Our ratings say it all!
          </h4>
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-4 border-b-2 border-primary px-4 lg:border-b-0 lg:border-r-2 lg:px-6">
          <Image alt="Clutch" height={60} src="/clutch.svg" width={100} />
          <Stars />
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-4 border-b-2 border-primary px-4 lg:border-b-0 lg:border-r-2 lg:px-6">
          <Image alt="Upwork" height={60} src="/upwork.svg" width={100} />
          <Stars />
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-4 border-b-2 border-primary px-4 lg:border-b-0 lg:border-r-2 lg:px-6">
          <Image alt="Toptal" height={60} src="/glassdoor.svg" width={100} />
          <Stars />
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-4 px-4 lg:px-6">
          <Image alt="Glassdoor" height={60} src="/toptal.avif" width={100} />
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default HomeRatings;
