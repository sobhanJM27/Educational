import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import StressHeader from '../../Components/StressHeader';
import StressPractices from '../../Components/StressPractices';
import ImageSlide from '../../Components/UI/ImageSlide';
import { usePersianNums } from '../../hooks/usePersianNums';
import { stressItems } from '../../Items/stressItems';
import { getPurchasedOnline } from '../../api/getters/userAPI';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import useAuth from '../../hooks/useAuth';

const Stress = () => {
    const navigate = useNavigate();
    const { token } = useAuth();
    const auth = useAuthHooks();

    const onlineQuery = useQuery({
        queryKey: ['onlineCourses', 'user'],
        queryFn: () => getPurchasedOnline({ token, ...auth }, 5),
    });

    const STRESS_COURSE_ID = '686f6e0578b992a9aba3dda5';
    const stressCourse = onlineQuery.data?.find((course) => course?._id === STRESS_COURSE_ID);

    useEffect(() => {
        if (!stressCourse) {
            navigate(
                '/Course/686f6e0578b992a9aba3dda5/%D8%AF%D9%88%D8%B1%D9%87-%D8%B5%D9%88%D8%AA%DB%8C-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D8%A7%D8%B3%D8%AA%D8%B1%D8%B3'
            );
        }
    }, [navigate, stressCourse]);
    return (
        <>
            <section className='flex flex-col gap-6'>
                <StressHeader />
                <div className='flex flex-col gap-4'>
                    {stressItems &&
                        stressItems.map((item) => (
                            <div
                                key={item.id}
                                className='flex flex-col justify-center gap-3 w-2/4 min-h-[460px] tips:w-11/12 p-4 border border-gray-500 rounded-lg shadow-card'>
                                <ImageSlide image={item.image} />
                                <span>
                                    📅 {item.day} — {item.title}
                                </span>
                                <div className='flex flex-col gap-2'>
                                    <span>📝 تمرین ها :</span>
                                    {[
                                        item.practices?.practice1,
                                        item.practices?.practice2,
                                        item.practices?.practice3,
                                        item.practices?.practice4,
                                    ].map(
                                        (practice, index) =>
                                            practice && (
                                                <p key={index} className='whitespace-pre-line'>
                                                    {usePersianNums(index + 1) + '. ' + practice}
                                                </p>
                                            )
                                    )}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span>✅ جمله لنگر امشب :</span>
                                    <p>{item.anchor}</p>
                                </div>
                                <audio controls className='w-full' aria-label={`پخش فایل صوتی مربوط به ${item.day}`}>
                                    <source src={item.audioUrl} type='audio/ogg' />
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
