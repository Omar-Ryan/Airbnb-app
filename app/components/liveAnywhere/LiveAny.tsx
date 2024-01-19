import { getLive } from "@/app/utils/api";
import LiveCard from "./LiveCard";
import { LiveData } from "@/app/types/app";

const LiveAnywhere = async () => {
  const liveData: LiveData = await getLive();
  console.log(liveData);
  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex space-x-3 overflow-scroll p-3 no-scrollbar">
          {liveData.map((item, index) => (
            <LiveCard key={index} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAnywhere;
