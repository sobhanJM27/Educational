import { Link } from "react-router-dom";
import IconWrapper from "./UI/IconWrapper";
import Pdf from "./UI/Icons/Pdf";
import PhoneIcon from "./UI/Icons/PhoneIcon";

const StressPractices = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">دفترچه تمرین = فایل PDF دوره</h2>
      <p>
        تو این فایل PDF، تمرین‌های هر ۷ روز به‌صورت مرتب، کامل و قابل نوشتن
        جمع‌بندی شدن.
      </p>
      <p>هر بار که مرورش کنی، یه لایه جدید به آرامشت اضافه می‌کنی.</p>
      <p>
        این دفترچه همراه همیشگیته: چه بخوای دوره رو چند بار برای صحبت در جمع
        تکرار کنی یا بخوای آروم‌تر زندگی کنی.
      </p>
      <p>
        اگر برای بداهه صحبت کردن در جمع، کنترل صدا و ترس، یا شنیده‌شدن نیاز به
        آموزش حرفه ای داری:
      </p>
      <span>آکادمی فن بیان صابر زارعی</span>
      <span className="flex items-center gap-2">
        <IconWrapper>
          <PhoneIcon className="w-3" />
        </IconWrapper>
        09330042028
      </span>
      <Link
        to="https://s9.uupload.ir/files/saberzarei/تمرینات_دوره_7_روزه_آرامش_با_صابرزارعی_.pdf?download"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center gap-2 text-blue font-bold"
      >
        <IconWrapper>
          <Pdf className="w-3 h-3" />
        </IconWrapper>
        دانلود فایل
      </Link>
    </div>
  );
};

export default StressPractices;
