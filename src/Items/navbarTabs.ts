import { v4 as uuidv4 } from 'uuid';

export type SubLinks = {
    name: string;
    id: string;
    url: string;
};

export const tabs = [
    {
        name: 'صفحه اصلی',
        id: uuidv4(),
        url: '/',
    },
    {
        name: 'مقالات آموزشی',
        id: uuidv4(),
        url: '/Articles/Educational',
    },
    {
        name: 'دوره های آموزشی',
        id: uuidv4(),
        url: '/Courses',
        isDropdown: true,
        links: [
            {
                name: 'آموزش تخصصی فن بیان برای تمام سنین',
                id: uuidv4(),
                url: '/Courses/Fanbayan',
            },
            {
                name: 'آموزش مهارت های رشد و توسعه ی فردی',
                id: uuidv4(),
                url: '/Courses/PersonalDevelopment',
            },
            {
                name: 'دوره رایگان',
                id: uuidv4(),
                url: '/Article/66982119b81fb6d998b0308d/%D9%85%DB%8C%D9%86%DB%8C-%D8%AF%D9%88%D8%B1%D9%87',
            },
        ],
    },
    {
        name: 'آموزش رایگان',
        id: uuidv4(),
        url: '/Courses',
        isDropdown: true,
        links: [
            {
                name: 'دوره رایگان',
                id: uuidv4(),
                url: 'Article/66982119b81fb6d998b0308d/%D9%85%DB%8C%D9%86%DB%8C-%D8%AF%D9%88%D8%B1%D9%87',
            },
            {
                name: 'ابزار رایگان',
                id: uuidv4(),
                url: 'Article/6728a100829a4a13af541fd9/%D8%AC%D8%B9%D8%A8%D9%87%E2%80%8C%D8%A7%D8%A8%D8%B2%D8%A7%D8%B1-%D8%B7%D9%84%D8%A7%DB%8C%DB%8C',
            },
        ],
    },
    {
        name: 'کتاب آموزشی',
        id: uuidv4(),
        url: '/Books',
    },
    {
        name: 'درباره ما',
        id: uuidv4(),
        url: '/About-us',
    },
    {
        name: 'تماس با ما و مشاوره',
        id: uuidv4(),
        url: '/Contact-us',
    },
];
