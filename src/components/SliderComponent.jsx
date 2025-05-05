import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import styles from './SliderComponent.module.css';

const slides = [
  {
    id: 1,
    bg: '#1a1a2e',
    color: '#4ecca3',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    title: 'Project ',
    subtitle: 'Creative Solution',
    description: 'Innovative approach to modern design challenges',
  },
  {
    id: 2,
    bg: '#2d3436',
    color: '#00b894',
    gradient: 'linear-gradient(135deg, #2d3436 0%, #2c3e50 100%)',
    title: 'Project ',
    subtitle: 'UI/UX Excellence',
    description: 'User-centered design for seamless experiences',
  },
  {
    id: 3,
    bg: '#130f40',
    color: '#00cec9',
    gradient: 'linear-gradient(135deg, #130f40 0%, #000839 100%)',
    title: 'Project ',
    subtitle: 'Technical Innovation',
    description: 'Cutting-edge technology implementation',
  },
];

const SliderComponent = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      const container = document.querySelector(`.${styles.container}`);
      container.style.setProperty('--progress-color', slides[0].color);
      container.style.background = slides[0].bg;
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    const activeSlide = slides[swiper.activeIndex];
    const container = document.querySelector(`.${styles.container}`);
    container.style.setProperty('--slide-background', activeSlide.bg);
    container.style.setProperty('--progress-color', activeSlide.color);
    setTimeLeft(5);
    setProgress(0);
  };

  return (
    <div className={styles.container}>
      <div 
        className={styles.progressCircle}
        onMouseEnter={() => {
          setIsHovered(true);
          swiperInstance?.autoplay?.pause();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          swiperInstance?.autoplay?.resume();
        }}
      >
        <svg viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeWidth="2.5"
            className={styles.progressRing}
            style={{
              strokeDasharray: 125.6,
              strokeDashoffset: 125.6 * (1 - progress),
              transition: isHovered ? 'none' : 'stroke-dashoffset 0.1s linear'
            }}
          />
        </svg>
        <span className={styles.timeLeft}>
          {Math.ceil(timeLeft)}s
        </span>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) =>
            `<span class="${className} ${styles.customBullet}"></span>`,
        }}
        navigation={{
          nextEl: `.${styles.sliderButtonNext}`,
          prevEl: `.${styles.sliderButtonPrev}`,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 80,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={(swiper, timeLeftMs, progress) => {
          setProgress(progress);
          setTimeLeft(timeLeftMs / 1000);
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.card} style={{ background: slide.gradient }}>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <p className={styles.description}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.sliderButtons}>
        <button className={styles.sliderButtonPrev}>
          <span className={styles.buttonIcon}>←</span>
        </button>
        <button className={styles.sliderButtonNext}>
          <span className={styles.buttonIcon}>→</span>
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;