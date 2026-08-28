import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AparatHomeItem } from '../../Items/aparatItems';

export interface AparatCarouselProps {
  items: AparatHomeItem[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const getAparatEmbedUrl = (videoUrl: string): string => {
  const match = videoUrl.match(/\/v\/([^/?]+)/);
  const hash = match ? match[1] : '';
  return `https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`;
};

const AparatCarousel: FC<AparatCarouselProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold md:text-2xl">
        نتایج شگفت انگیز هنرجویان اکادمی صابر زارعی
      </h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={false}
        arrows
        swipeable
        draggable
        containerClass="pb-2"
        itemClass="px-2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="aspect-video w-full overflow-hidden rounded-xl shadow"
          >
            <iframe
              src={getAparatEmbedUrl(item.audioUrl)}
              className="h-full w-full"
              allowFullScreen
              title="aparat-video"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AparatCarousel;
