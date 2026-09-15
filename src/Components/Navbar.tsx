import { useState } from 'react';
import LogoIcon from './UI/Icons/Logo';
import SearchInput from './UI/SearchInput';
import { Link } from 'react-router-dom';
import MainButton from './UI/MainButton';
import Tab from './UI/Tab';
import BuyComp from './UI/BuyComp';
import Hamburger from './UI/Icons/Hamburger';
import User from './UI/Icons/User';
import { tabs } from '../Items/navbarTabs';
import useCurrentUrlTab from '../hooks/useCurrentUrlTab';
import useCurrentTab from '../hooks/useCurrentTab';
import IconWrapper from './UI/IconWrapper';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/lib/Cn';
import { useAppSelector } from '../hooks/useReduxHooks';
import useAuth from '../hooks/useAuth';
import Popup from './Popup';
import HeadTitle from './UI/HeadTitle';

const Navbar = () => {
  const [popUpState] = useState<boolean>(true);
  const currentTabIndex = useCurrentUrlTab(tabs);
  const { activeTab, handleMouseEnter, handleMouseLeave } =
    useCurrentTab(currentTabIndex);

  const [sideBar, setSideBar] = useState<boolean>(false);

  const { Auth, role } = useAuth();
  const { products } = useAppSelector((state) => state.basket);

  const { pathname } = useLocation();
  let isSticky = true;
  let hidden = false;
  if (pathname.includes('Course')) {
    isSticky = false;
  } else if (pathname.includes('Book')) {
    isSticky = false;
  } else if (pathname.includes('Article')) {
    isSticky = false;
  } else if (pathname.includes('Login')) {
    hidden = true;
  }

  return (
    <>
      <header
        className={cn(
          'flex flex-col gap-3 bg-white sticky top-0 p-[.5em] z-50 shadow-main',
          { static: !isSticky, hidden },
        )}
      >
        <div className="flex justify-between h-7 items-center navbar:h-auto">
          <div className="flex items-center gap-4">
            <Hamburger
              className="w-8 h-8 hidden navbar:block cursor-pointer"
              onClick={() => setSideBar((prev) => !prev)}
            />
            <Link to="/">
              <LogoIcon
                id="logo-svg"
                className="w-8 h-8 rounded-lg overflow-hidden"
              />
            </Link>
          </div>
          <div className="flex gap-3">
            <div className="navbar:hidden">
              <SearchInput type="navbar" placeHolder="جستجو ..." />
            </div>
            <Link to="Basket">
              {Auth ? (
                <BuyComp intent="navbar" size="small" qty={products?.length} />
              ) : (
                <BuyComp intent="navbar" size="small" />
              )}
            </Link>
            {Auth ? (
              role === 'USER' ? (
                <>
                  <Link to="User" className="hidden navbar:block">
                    <IconWrapper className="relative">
                      <User className=" w-4 h-4" />
                    </IconWrapper>
                  </Link>
                  <Link to="User" className="navbar:hidden">
                    <MainButton
                      intent="primary"
                      text="پنل کاربری"
                      size="small"
                      className="px-5"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="Admin" className="hidden navbar:block">
                    <IconWrapper className="relative">
                      <User className=" w-4 h-4" />
                    </IconWrapper>
                  </Link>
                  <Link to="Admin" className="navbar:hidden">
                    <MainButton
                      intent="primary"
                      text="پنل ادمین"
                      size="small"
                      className="px-3"
                    />
                  </Link>
                </>
              )
            ) : (
              <>
                <Link to="Login" className="hidden navbar:block">
                  <IconWrapper>
                    <User className=" w-4 h-4" />
                  </IconWrapper>
                </Link>
                <Link to="Login" className="navbar:hidden">
                  <MainButton
                    intent="primary"
                    text="ورود/ثبت نام"
                    size="small"
                  />
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="navbar:hidden">
          <ul className="flex gap-4 items-center">
            {tabs.map((tab, idx) => (
              <Tab
                isActive={idx === activeTab || idx === currentTabIndex}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                key={tab.id}
                url={tab.url}
                isDropdown={tab.isDropdown ? true : false}
                links={tab.links}
              >
                {tab.name}
              </Tab>
            ))}
          </ul>
        </nav>
        <Sidebar show={sideBar} func={() => setSideBar((prev) => !prev)} />
      </header>
      <Popup zIndex={100} parentStateControl={popUpState}>
        <div className="flex w-[min(92vw,25rem)] max-h-[88vh] flex-col items-center gap-3 overflow-hidden text-center">
          <HeadTitle fontSize="1rem">
            🚀 یک تصمیم هوشمندانه برای آینده شما!
          </HeadTitle>
          <p className="text-sm leading-7">
            با تکمیل فرم، مشاوره رایگان + تخفیف ویژه دریافت کن و مسیر رشدت را
            در مهارت‌هایی مثل بیان و ارتباط مؤثر، اعتمادبه‌نفس و مهارت‌های
            آینده شغلی بهتر بشناس.
          </p>
          <iframe
            src="https://myrasad.com/l/akademizarei/consulting-homepage?embed=1"
            style={{
              width: '100%',
              height: 'min(620px, calc(88vh - 120px))',
              minHeight: '430px',
              border: 0,
              display: 'block',
              overflow: 'hidden',
            }}
            loading="lazy"
            scrolling="no"
            title="فرم مشاوره رایگان"
          />
        </div>
      </Popup>
    </>
  );
};

export default Navbar;
