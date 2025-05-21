import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-screen bg-softWhite px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-accent mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I’m Abhishek Bapna
      </motion.h1>

      <motion.p
        className="max-w-xl text-gray-700 text-lg md:text-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Welcome to my portfolio!
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Download my Resume
      </motion.a>
    </motion.section>
  );
};

export default Hero;
