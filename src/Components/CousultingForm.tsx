import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import HeadTitle from './UI/HeadTitle';
import ContactImage from './UI/images/ContactImage';
import MainInput from './UI/MainInput';
import MainButton from './UI/MainButton';
import toast from 'react-hot-toast';
import { useEnglishNums } from '../hooks/usePersianNums';
import useInputValidator from '../hooks/useInputValidator';
import { addConsultingLead } from '../api/setters/leadsAPI';
import useAuth from '../hooks/useAuth';
import { useAuthHooks } from '../hooks/useAuthHooks';

const ConsultingForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { token } = useAuth();
  const auth = useAuthHooks();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { fullName: string; phoneNumber: string }) =>
      addConsultingLead({ token, ...auth }, data),
    onSuccess: () => {
      toast.success('درخواست شما با موفقیت ثبت شد');
      navigate('/User/Free');
    },
    onError: (error) => {
      console.log(error);
      toast.error('خطا در برقراری ارتباط');
    },
  });

  const submitHandler = () => {
    const fullName = nameRef.current!.value;
    const phoneNumber = useEnglishNums(phoneRef.current!.value);

    const nameMsg = useInputValidator(fullName);
    if (nameMsg) {
      toast.error(nameMsg);
      return;
    }
    const phoneMsg = useInputValidator(phoneNumber, 'phone');
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }

    mutate({ fullName, phoneNumber });
  };

  return (
    <section className="flex flex-col gap-4 px-8">
      <HeadTitle>فرم درخواست مشاوره</HeadTitle>
      <div className="flex gap-4 p-4 px-8 shadow-contactForm rounded-2xl tips:flex-col tips:gap-1">
        <ContactImage className="flex-1" id="contact-page-contact" />
        <div className="flex-1 flex flex-col gap-4">
          <MainInput
            label="نام و نام خانوادگی"
            id="name"
            intent="login"
            inputSize="base"
            ref={nameRef}
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
            text={isPending ? 'در حال ارسال...' : 'ثبت درخواست'}
            onClick={submitHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultingForm;