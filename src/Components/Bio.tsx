import { Link } from 'react-router-dom';
import ImageBox from './UI/images/ImageBox';

const Bio = () => {
  return (
    <section className="relative [@media(max-width:980px)]:h-auto">
      <div className="flex flex-col gap-6 z-10 relative py-8 px-6 text-black bg-yellow border-2 border-black tips:p-8 rounded-xl">
        <div className="flex items-center gap-4 tips:flex-col">
          <div className="relative w-24 h-24 min-w-[6rem] min-h-[6rem] rounded-full">
            <ImageBox id="imagebox-svg" className="absolute inset-0" />
            <img
              className="w-full h-full rounded-full p-1 z-10 relative object-cover"
              src="/images/saber-bio.jpg"
              alt="profile"
            />
          </div>
          <h2 className="text-xl font-bold">صابر زارعی کیست؟</h2>
        </div>
        <div
          dir="rtl"
          className="[column-count:2] [column-gap:2.5rem] [column-rule:2px_solid_black] leading-8 text-justify tips:[column-count:1]"
        >
          <div className="flex flex-col gap-4 [&>*]:break-inside-avoid">
            <p>
              صابر زارعی، مدرس بین‌المللی فن بیان، بنیان‌گذار آکادمی صابر زارعی
              و نویسنده کتاب پرفروش «فیل بیان»، با بیش از{' '}
              <strong>۲۰ سال تجربه</strong> در آموزش مهارت‌های ارتباطی و توسعه
              فردی، یکی از چهره‌های تاثیرگذار این حوزه در ایران و جهان است. او
              دارای مدارک بین‌المللی پداگوژی و مربیگری مهارت‌های ارتباطی و با
              سابقه همکاری با بیش از <strong>۵۰ آموزشگاه و سازمان معتبر</strong>
              ، مسیر یادگیری را برای هزاران فارسی‌زبان در سراسر دنیا هموار کرده
              است.
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-bold">رویکرد و رسالت آموزشی:</p>
              <p>
                صابر زارعی با ابداع متد ادراک، تلاش می‌کند تا چالش‌های ارتباطی
                افراد را از ریشه حل کند. رسالت او آموزش به فارسی‌زبانان جهان است
                تا بتوانند با تسلط بر کلمات، بیان و درک صحیح، در تمام ابعاد
                زندگی خود رشد کنند.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">خدمات و نوآوری‌ها:</p>
              <p>
                • آموزش فن بیان برای کودکان، نوجوانان و بزرگسالان به روش‌های
                آنلاین، آفلاین و حضوری
                <br />
                • مشاوره تخصصی مهارت‌های ارتباطی و سخنرانی برای افراد و
                سازمان‌ها
                <br />• ابداع سیستم باشگاه فن بیان؛ اولین باشگاه تخصصی فن بیان
                در ایران، ویژه فارغ‌التحصیلان دوره‌های فن بیان با هدف تمرین و
                عملگرایی
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">دستاوردها و تاثیر گذاری:</p>
              <p>
                • بیش از <strong>۳۰۰۰ هنرجو</strong> از کشورهای ایران، آمریکا،
                افغانستان، ترکیه، امارات، استرالیا و عمان با آموزش‌های او
                مهارت‌های ارتباطی خود را ارتقا داده‌اند.
                <br />
                • بهبود اعتماد به نفس، مهارت‌های مذاکره و سخنرانی و درخشش در
                محیط‌های اجتماعی و کاری، نتایجی ملموس از دوره‌های آموزشی او
                هستند.
                <br />• راه‌اندازی اولین وب‌سایت تخصصی فن بیان در ایران، فرصتی
                برای دسترسی آسان به آموزش‌های استاندارد برای فارسی‌زبانان سراسر
                جهان.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-bold">کتاب و فلسفه آموزشی:</p>
                <p>
                  📚 «فیل بیان»؛ کتابی کاربردی که راهنمای شما برای تسلط بر فن
                  بیان و ارتباطات مؤثر است.
                  <br />
                  «ادراک صحیح و بیان قدرتمند، می‌تواند زندگی شما را متحول کند.»
                </p>
              </div>
              <div className="max-w-[8rem]">
                <Link to="https://saberzarei.com/Book/65d5e065e47ef690c8408f43/%DA%A9%D8%AA%D8%A7%D8%A8-%D9%81%DB%8C%D9%84-%D9%81%D9%86-%D8%A8%DB%8C%D8%A7%D9%86">
                  <img
                    className="aspect-[3/4] rounded-xl shadow-book-shadow transition duration-300 hover:scale-105"
                    src="/images/book.jpg"
                    alt="book"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
