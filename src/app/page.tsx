import HomeHero from "@/components/home/home-hero";
import HomeRatings from "@/components/home/home-ratings";
import HomeTechnologies from "@/components/home/home-technologies";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeTechnologies />
      <HomeRatings />
    </div>
  );
};

export default Home;
