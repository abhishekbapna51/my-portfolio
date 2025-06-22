import React from "react";
import { motion } from "framer-motion";

const projectData = [
    {
        title: "🚕 Cab Sharing Website",
        highlight: "Ride booking, user profiles",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/Cab-booking_project.png",
        code: "https://github.com/abhishekbapna51/Cab_booking",
        demo: "https://abhishekbapna51.github.io/CabBooking/",
    },
    {
        title: "💳 Credit Card Anomaly Detection",
        highlight: "Streamlit ML dashboard for fraud detection",
        tech: ["Python", "Scikit-learn", "Streamlit"],
        image: "/creditcard.png",
        code: "https://github.com/abhishekbapna51/creditcard-anomaly-detection",
        demo: "https://creditcard-anomaly-detection-vebfssgshcanmwt9sefdw7.streamlit.app/",
    },
    {
        title: "📋 TaskX Pro – Task Management App",
        highlight: "Full-stack task manager with login, task stats, and reminders",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        image: "/taskx-pro.jpg",
        code: "https://github.com/abhishekbapna51/taskx-frontend",
        demo: "https://taskx-pro.netlify.app/",
    },
    {
        title: "🏥 Hospital Management System",
        highlight: "Patient portal, billing system",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        image: "/hospital-project.jpg",
        code: "https://github.com/abhishekbapna51/HospitalManagementSystem",
        demo: "https://hospitalmanagementmini.netlify.app/",
    },
    {
        title: "🎮 Simon Says Game",
        highlight: "Interactive gameplay UI",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/simonsays_project.png",
        code: "https://github.com/abhishekbapna51/SimonSaysGAME",
        demo: "https://abhishekbapna51.github.io/SimonSaysGAME/",
    },
    {
        title: "📈 Compound Interest Calculator",
        highlight: "Finance calculator tool",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/compound-interest.png",
        code: "https://github.com/abhishekbapna51/Compound_Interest_Calculator",
        demo: "https://abhishekbapna51.github.io/Compound_Interest_Calculator/",
    },
    {
        title: "🌍 Conservation Economics Quizzes",
        highlight: "Weekly quiz collection",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/conservation-quiz.png",
        code: "https://github.com/abhishekbapna51/Conservation_Economics_weekwise_quizzes",
        demo: "https://abhishekbapna51.github.io/Conservation_Economics_weekwise_quizzes/",
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const Projects = () => {
    return (
        <section className="bg-gray-100 py-10 px-4 md:px-20 scroll-mt-20" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 group">
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 transform
  group-hover:blur-sm group-hover:brightness-75 hover:!blur-none hover:!brightness-100
  hover:scale-110 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_10px_rgba(59,130,246,0.6)] z-10"

                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold mb-1 text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 italic">
                                {project.highlight}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((techItem, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-3">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-green-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-green-600 transition"
                                >
                                    🔗 Live Demo
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md hover:bg-gray-900 transition"
                                >
                                    💻 Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <h3 className="text-xl font-semibold">
                    🔗 Check out more of my projects on my{" "}
                    <a
                        href="https://github.com/abhishekbapna51"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 transition"
                    >
                        GitHub
                    </a>
                </h3>
            </div>
        </section>
    );
};

export default Projects;
