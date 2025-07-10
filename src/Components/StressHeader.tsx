const StressHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-purple">دوره صوتی کنترل استرس</h1>
      <div className="flex flex-col gap-2">
        <p>به نام خداوند صلح و آرامش 🌱</p>
        <p>🎧 به دوره ۷ روزه آرامش خوش اومدی</p>
        <p>سلام، من صابر زارعی هستم</p>
        <p>اینجا قراره مغزتو از اون حلقه‌ی لعنتی استرس بکشی بیرون...</p>
        <p>فقط با گوش دادن و تمرین کردن.</p>
        <p>✅ هر روز فقط یک فایل صوتی گوش بده (از پست ۱ تا ۷)</p>
        <p>✅ تمرین همون روز رو انجام بده (توضیح داده شده)</p>
        <p>✅ لازم نیست بی‌نقص باشی — فقط "ادامه بده"</p>
        <span>📌 نکته مهم:</span>
        <p>
          🔁 بهتره فایل‌های صوتی رو شب گوش بدی، چون ذهن در حالت آرامش و پذیرش
          بیشتریه، و تمرین‌ها عمیق‌تر توی ناخودآگاهت ثبت میشن.
        </p>
        <p>اما اگر فقط صبح یا ظهر فرصت داری، همون موقع انجام بده.</p>
        <p>مهم‌تر از زمان، ادامه دادنه.</p>
        <span>📣 برای پشتیبانی: @Saberzarei_support</span>
      </div>
      <p>🔐 لطفاً لینک کانال یا فایل‌ها رو منتشر نکن</p>
      <p>❤️ این مسیر فقط مال توئه…</p>
      <p>حالا شروع کنیم؟</p>
      <audio controls>
        <source
          src="https://s9.uupload.ir/files/saberzarei/Track%2000.mp3?play"
          type="audio/ogg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default StressHeader;
