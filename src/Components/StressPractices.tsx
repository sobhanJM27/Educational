import { Link } from "react-router-dom";

const StressPractices = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text--blue">📘 دفترچه تمرین = فایل PDF دوره</h2>
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
        👤 اگر برای بداهه صحبت کردن در جمع، کنترل صدا و ترس، یا شنیده‌شدن نیاز
        به آموزش حرفه ای داری:
      </p>
      <span>آکادمی فن بیان صابر زارعی</span>
      <span>📱 09330042028</span>
      <Link
        to="https://s9.uupload.ir/files/saberzarei/تمرینات_دوره_7_روزه_آرامش_با_صابرزارعی_.pdf?download"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="text-blue font-bold"
      >
        دانلود فایل
      </Link>
    </div>
  );
};

export default StressPractices;
