import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import MainInput from '../../Components/UI/MainInput';
import MainButton from '../../Components/UI/MainButton';
import useInputValidator from '../../hooks/useInputValidator';
import { useEnglishNums } from '../../hooks/usePersianNums';
import { addConsultingLead } from '../../api/setters/leadsAPI';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import useAuth from '../../hooks/useAuth';

const ConsultingLanding = () => {
  const navigate = useNavigate();
  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
    const { token } = useAuth();
  const auth = useAuthHooks();

  const submitHandler = async () => {
    const fullName = fullNameRef.current!.value;
    const phone = useEnglishNums(phoneRef.current!.value);

    const fullNameMsg = useInputValidator(fullName);
    if (fullNameMsg) {
      toast.error(fullNameMsg);
      return;
    }
    const phoneMsg = useInputValidator(phone, 'phone');
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }

    setLoading(true);
    const loader = toast.loading('در حال ثبت اطلاعات شما');
    try {
      await addConsultingLead({ token, ...auth }, { fullName, phone });
      toast.success('اطلاعات شما با موفقیت ثبت شد');
      navigate('/User/Free');
    } catch (error) {
      console.log(error);
      toast.error('خطا در برقراری ارتباط');
    } finally {
      toast.dismiss(loader);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md flex flex-col gap-4 p-8 shadow-contactForm rounded-2xl">
        <h1 className="text-xl font-bold text-center">
          برای دریافت دوره رایگان، اطلاعات خود را وارد کنید
        </h1>
        <MainInput
          label="نام و نام خانوادگی"
          id="fullName"
          intent="login"
          inputSize="base"
          ref={fullNameRef}
        />
        <MainInput
          label="شماره همراه"
          id="phone"
          intent="login"
          inputSize="base"
          ref={phoneRef}
        />
        <MainButton
          intent="purple"
          size="login"
          text="ثبت و دریافت دوره رایگان"
          onClick={submitHandler}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default ConsultingLanding;