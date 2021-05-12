import { motion } from 'framer-motion';

import LoadProps from './dtos/LoadProps';

import { Container } from './styles';

export function Load({
  duration = 2,
  alignInCenter = true,
  repeat = Infinity,
}: LoadProps) {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: '#E02041',
    },
  };

  const iconSecondary = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: '#41414D',
      stroke: '#41414D',
    },
  };

  return (
    <Container alignInCenter={alignInCenter}>
      <motion.svg
        width="250"
        height="106"
        viewBox="0 0 250 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: 'visible',
          stroke: '#E02041',
          strokeWidth: 2,
          strokeLinejoin: 'round',
          strokeLinecap: 'round',
        }}
      >
        <motion.path
          d="M93.93 94.2987H76.8668L87.1185 59.4013H78.4493L64.2071 106H47.1439L75.3532 11.6325H92.4163L82.7839 44.7403H91.4531L105.145 0H122.208L93.93 94.2987Z"
          fill="#E02041"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M123.584 11.6325H156.128L151.243 26.5H136.45L131.084 44.6714H145.945L141.267 59.3325H126.749L121.038 78.5364H136.863L131.152 94.2299H99.2278L123.584 11.6325Z"
          fill="#E02041"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M151.312 106H134.111L161.563 11.6325H192.8C196.515 11.6325 198.992 12.6649 200.299 14.7987C201.607 16.9325 201.813 19.3416 200.988 22.0948L192.731 50.1779C192.318 51.4169 191.561 52.5182 190.392 53.5507C189.222 54.5831 187.571 55.0649 185.438 55.0649C186.745 55.2714 187.846 56.0974 188.741 57.5429C189.635 58.9883 189.635 61.1909 188.741 64.1507L179.865 94.2987H162.733L172.228 61.8792C172.434 61.1909 172.503 60.5714 172.297 59.952C172.09 59.3325 171.471 59.0571 170.439 59.0571H164.728L151.312 106ZM174.154 46.874C174.98 46.874 175.737 46.6675 176.494 46.2546C177.182 45.8416 177.732 45.0156 178.145 43.7078L182.686 28.3584C183.374 26.087 182.479 24.9169 180.071 24.9169H174.705L168.237 46.874H174.154Z"
          fill="#E02041"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M242.957 11.6325C245.641 11.6325 247.567 12.5961 248.806 14.5234C250.044 16.4507 250.319 18.6533 249.631 21.0623L230.642 85.5572C229.61 88.9987 227.821 91.2701 225.344 92.5091C222.867 93.7481 220.184 94.2987 217.363 94.2987H196.997C195.552 94.2987 194.245 94.0234 193.006 93.5416C191.768 93.0598 190.805 92.3026 189.979 91.339C189.153 90.3753 188.672 89.1364 188.397 87.7598C188.121 86.3831 188.259 84.8 188.809 83.0104L207.455 19.6857C208.074 17.2766 209.313 15.2805 211.17 13.8351C213.028 12.3896 215.367 11.6325 218.188 11.6325H242.957ZM225.069 24.9169C224.243 24.9169 223.624 25.1234 223.28 25.4675C222.867 25.8805 222.661 26.3623 222.454 26.913L207.249 78.3987C206.836 79.7753 207.386 80.4637 208.831 80.4637H213.235C214.679 80.4637 215.574 79.7753 215.987 78.3987L231.123 26.9818C231.467 25.5364 230.917 24.8481 229.403 24.8481H225.069V24.9169Z"
          fill="#E02041"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />

        <motion.path
          d="M31.443 20.6494H42.5203C43.9652 20.6494 44.8596 21.0624 45.2724 21.8195C45.6853 22.5766 45.7541 23.4714 45.4788 24.5727L42.8643 33.5208C42.7267 34.0714 42.3827 34.5533 41.8323 34.9663C41.2819 35.4481 40.4562 35.5857 39.4242 35.5857C39.9746 35.5857 40.3874 35.7234 40.6626 35.9299C41.0067 36.1364 41.2131 36.4117 41.3507 36.7559C41.4883 37.1 41.5571 37.4442 41.5571 37.8572C41.5571 38.2701 41.4883 38.6831 41.4195 39.0273L38.9426 47.2182C38.6673 48.1818 38.1169 48.939 37.4289 49.4896C36.7409 50.0403 35.64 50.3156 34.3328 50.3156H22.705L31.443 20.6494ZM32.5439 45.4286C32.8191 45.4286 33.0943 45.3598 33.3007 45.2909C33.5071 45.1533 33.7135 44.8779 33.8511 44.465L35.64 38.4766C35.7776 38.0637 35.7776 37.7883 35.64 37.513C35.5024 37.2377 35.2272 37.1688 34.8144 37.1688H32.8879L30.411 45.4974H32.5439V45.4286ZM35.9152 33.1766C36.328 33.1766 36.6721 33.1078 36.8785 32.9701C37.0849 32.8325 37.2913 32.5572 37.4289 32.0753L39.0114 26.7065C39.149 26.2935 39.149 26.0182 39.0802 25.8117C38.9426 25.6052 38.6673 25.4675 38.2545 25.4675H36.2592L33.9887 33.1766H35.9152Z"
          fill="#41414D"
          variants={iconSecondary}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M48.7812 20.6494H60.4777L58.8952 26.0182H53.391L51.4645 32.5572H56.8311L55.2487 37.8572H49.882L47.8179 44.7403H53.5286L51.4645 50.3844H40.0432L48.7812 20.6494Z"
          fill="#41414D"
          variants={iconSecondary}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M18.9897 55.5468L17.4072 60.9156H13.2102L6.12347 85.213H0L7.22432 60.8468H2.95853L4.541 55.4779H18.9897V55.5468Z"
          fill="#41414D"
          variants={iconSecondary}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M27.3149 85.213H21.1915L24.838 72.6858H21.7419L18.0265 85.213H11.903L20.641 55.5468H26.7645L23.3244 67.4546H26.4205L29.9295 55.5468H36.0529L27.3149 85.213Z"
          fill="#41414D"
          variants={iconSecondary}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.path
          d="M37.9794 55.5468H49.6759L48.0934 60.9156H42.5892L40.6627 67.4546H46.0293L44.4469 72.7546H39.0802L37.0161 79.6377H42.7268L40.6627 85.2819H29.2414L37.9794 55.5468Z"
          fill="#41414D"
          variants={iconSecondary}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration,
              ease: 'easeInOut',
              repeat,
              repeatType: 'reverse',
            },
            fill: {
              duration,
              ease: [1, 0, 0.8, 1],
              repeat,
              repeatType: 'reverse',
            },
          }}
        />
      </motion.svg>
    </Container>
  );
}
