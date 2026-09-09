// import ContactForm from "../../Components/ContactForm";

const Free = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-purple">دوره های هدیه گرفته شده</h1>
        <div className="flex flex-col gap-4">
          <h2>مینی دوره فن بیان و اعتماد به نفس</h2>
          <video width={'100%'} height={'auto'} controls autoPlay>
            <source
              src="https://s5.uupload.ir/files/cyberplaystore/0831(1).mp4?play"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <span className="text-red-700 text-lg">نکته: برای مشاهده، فیلتر شکن خاموش شود ✅</span>
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto leading-8">
            <p>
              وبینار رو دیدی؟ حالا یک سؤال مهم:{' '}
              <span className="font-bold text-purple">
                قراره فقط چند تکنیک بدونی؟ یا واقعاً حرفه‌ای‌تر صحبت کنی؟
              </span>
            </p>
            <p>
              چون بین{' '}
              <span className="font-bold">«دونستن فن بیان»</span> و{' '}
              <span className="font-bold">
                «توانایی استفاده از اون در لحظه‌ای که باید حرف بزنی»
              </span>{' '}
              تفاوت بزرگی وجود داره.
            </p>
            <p>
              خیلی‌ها می‌دونن باید چطور صحبت کنن… اما وقتی وارد یک جلسه، جمع
              یا موقعیت مهم میشن، نمی‌تونن از چیزی که یاد گرفتن استفاده کنن.
            </p>
            <p className="font-bold">
              مهارت با دونستن ساخته نمی‌شه؛ با آموزش، تمرین و اصلاح ساخته
              میشه.
            </p>
            <p>
              اگر تصمیم داری روی فن بیانت جدی و حرفه‌ای کار کنی، فرم مشاوره رو
              پر کن.
            </p>
            <p className="font-bold text-purple">
              بررسی می‌کنیم چالش اصلیت چیه و مسیر مناسب برای حرفه‌ای‌تر صحبت
              کردنت کدومه.
            </p>
          </div>
        </div>
      </section>
      <div className="subHero:w-full w-2/3 mx-auto h-[450px] p-2 overflow-hidden rounded-xl shadow">
        <iframe
          src="https://myrasad.com/l/akademizarei/consulting-homepage?embed=1" 
          className="h-full w-full"
          allowFullScreen
          title="aparat-video"
        />
      </div>
      {/* <ContactForm type="home" /> */}
    </div>
  );
};

export default Free;