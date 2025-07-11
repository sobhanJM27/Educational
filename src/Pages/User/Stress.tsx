import StressHeader from "../../Components/StressHeader";
import StressPractices from "../../Components/StressPractices";
import CircleIcon from "../../Components/UI/Icons/CircleIcon";
import Plus from "../../Components/UI/Icons/Plus";
import Tick from "../../Components/UI/Icons/Tick";
import IconWrapper from "../../Components/UI/IconWrapper";
import ImageSlide from "../../Components/UI/ImageSlide";
import { usePersianNums } from "../../hooks/usePersianNums";
import { stressItems } from "../../Items/stressItems";

const Stress = () => {
  const num1 = usePersianNums(1);
  const num2 = usePersianNums(2);
  const num3 = usePersianNums(3);
  const num4 = usePersianNums(4);

  return (
    <>
      <section className="flex flex-col gap-6">
        <StressHeader />
        <div className="flex flex-wrap gap-4">
          {stressItems &&
            stressItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center gap-3 w-1/3 min-h-[460px] tips:w-11/12  p-4 border border-gray-500 rounded-lg shadow-card"
              >
                <ImageSlide image={item.image} />
                <span className="flex items-start gap-2">
                  <IconWrapper>
                    <Tick className="w-3" />
                  </IconWrapper>
                  {item.day} — {item.title}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <IconWrapper>
                      <CircleIcon className="w-3" />
                    </IconWrapper>
                    تمرین ها :
                  </span>
                  <p>{`${num1}.${item.practices?.practice1}`}</p>
                  <p>{`${num2}.${item.practices?.practice2}`}</p>
                  <p>{`${num3}.${item.practices?.practice3}`}</p>
                  <p>{`${item.practices?.practice4 ? num4 + "." : ""}${
                    item.practices?.practice4
                  }`}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <IconWrapper>
                      <Plus className="w-3" />
                    </IconWrapper>
                    جمله لنگر امشب :
                  </span>
                  <p>{item.anchor}</p>
                </div>
                <audio controls className="w-full">
                  <source src={item.audioUrl} type="audio/ogg" />
                  مرورگر شما از فایل صوتی پشتیبانی نمی کند.
                </audio>
              </div>
            ))}
        </div>
        <StressPractices />
      </section>
    </>
  );
};

export default Stress;
