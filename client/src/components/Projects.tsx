import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ProjectCategory {
  title: string;
  description: string;
  placeholder: string;
  image: string;
}

interface ProjectCardProps {
  category: ProjectCategory;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2 + delay }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="relative border border-slate-300/50 rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group shadow-2xl"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <img 
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-purple-600/60"></div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8 z-10">
        <motion.h3 
          className="text-2xl font-bold mb-3 text-blue-600"
          custom={0.3}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {category.title}
        </motion.h3>
        
        <motion.p 
          className="text-slate-700 mb-6 font-medium"
          custom={0.4}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {category.description}
        </motion.p>
        
        {/* Placeholder Content */}
        <motion.div 
          className="relative bg-slate-200/60 backdrop-blur-sm rounded-lg p-12 text-center border-2 border-dashed border-slate-400/50 group-hover:border-blue-500/50 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {/* Sliding Animation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
          <p className="text-slate-600 text-lg relative z-10 font-medium">{category.placeholder}</p>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        >
          <button className="flex items-center space-x-2 bg-blue-600/70 text-white px-4 py-2 rounded-lg transition-colors duration-300 opacity-50 cursor-not-allowed backdrop-blur-sm font-semibold">
            <ExternalLink size={16} />
            <span>View Project</span>
          </button>
          <button className="flex items-center space-x-2 border-2 border-slate-400/50 text-slate-700 px-4 py-2 rounded-lg transition-colors duration-300 opacity-50 cursor-not-allowed backdrop-blur-sm font-semibold">
            <ExternalLink size={16} />
            <span>Learn More</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  
  // Parallax scroll effects for Projects section
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2500], [0, -800]);
  const y2 = useTransform(scrollY, [0, 2500], [0, -1000]);
  const y3 = useTransform(scrollY, [0, 2500], [0, -600]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 720]);
  const parallaxOpacity = useTransform(scrollY, [600, 1800], [0.8, 0]);

  // Additional digital elements for the Projects section
  const projectDigitalElements = [
    { text: "console.log()", size: "text-lg", x: "8%", y: "10%", delay: 0 },
    { text: "Express.js", size: "text-xl", x: "82%", y: "15%", delay: 0.3 },
    { text: "fetch()", size: "text-md", x: "12%", y: "25%", delay: 0.6 },
    { text: "PostgreSQL", size: "text-lg", x: "88%", y: "35%", delay: 0.9 },
    { text: "useState", size: "text-md", x: "18%", y: "45%", delay: 1.2 },
    { text: "Flask", size: "text-xl", x: "78%", y: "55%", delay: 1.5 },
    { text: "Redux", size: "text-lg", x: "15%", y: "65%", delay: 1.8 },
    { text: "JSON", size: "text-md", x: "85%", y: "75%", delay: 2.1 },
    { text: "Webpack", size: "text-lg", x: "20%", y: "85%", delay: 2.4 },
  ];

  const projectShapes = [
    { type: "circle", size: "w-3 h-3", x: "30%", y: "20%", duration: 5 },
    { type: "square", size: "w-2 h-2", x: "70%", y: "30%", duration: 4 },
    { type: "triangle", size: "w-4 h-4", x: "50%", y: "50%", duration: 6 },
    { type: "circle", size: "w-2 h-2", x: "25%", y: "70%", duration: 4 },
    { type: "square", size: "w-3 h-3", x: "75%", y: "80%", duration: 5 },
  ];

  const projectCategories: ProjectCategory[] = [
    {
      title: "Workflow Automation",
      description: "Automation systems and workflow implementations",
      placeholder: "Workflow automation projects will be showcased here",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },

    {
      title: "Websites",
      description: "Responsive websites",
      placeholder: "Website projects will be featured here",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Mobile & Desktop Apps",
      description: "Custom-built applications across platforms",
      placeholder: "Mobile and desktop applications will be shown here",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  const floatingElements = [
    { top: "10", left: "1/4", size: "2", duration: 3, delay: 0 },
    { top: "32", right: "1/3", size: "1", duration: 4, delay: 1 },
    { bottom: "20", left: "1/2", size: "3", duration: 5, delay: 2 }
  ];

  const geometricShapes = [
    { top: "40", right: "10", size: "20", duration: 20 },
    { bottom: "32", left: "20", size: "16", duration: 15 }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">
      {/* Extended Digital Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        style={{ opacity: parallaxOpacity }}
      >
        {/* Floating Digital Elements for Projects */}
        {projectDigitalElements.map((element, index) => (
          <motion.div
            key={`project-digital-${index}`}
            className={`absolute ${element.size} text-blue-500/50 font-mono font-bold`}
            style={{
              left: element.x,
              top: element.y,
              y: index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0.4, 0.7],
              scale: [0, 1.2, 0.8, 1],
              rotate: [0, 6, -6, 0]
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {element.text}
          </motion.div>
        ))}

        {/* Geometric Shapes for Projects */}
        {projectShapes.map((shape, index) => (
          <motion.div
            key={`project-geo-${index}`}
            className={`absolute ${shape.size} bg-cyan-400/35 ${
              shape.type === "circle" ? "rounded-full" : 
              shape.type === "triangle" ? "rotate-45" : ""
            }`}
            style={{
              left: shape.x,
              top: shape.y,
              y: y3,
              rotate: shape.type === "square" ? rotate : 0,
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Extended Binary Rain */}
        <motion.div
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          {[...Array(20)].map((_, i) => {
            const randomLeft = Math.random() * 92 + 4; // Random 4-96%
            const randomDelay = Math.random() * 12; // Random 0-12s delay
            const randomDuration = 25 + Math.random() * 20; // Random 25-45s duration
            const randomTop = -15 - (Math.random() * 15); // Random -15% to -30%
            
            return (
              <motion.div
                key={`project-binary-${i}`}
                className="absolute text-xs font-mono text-green-500/45"
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                }}
                animate={{
                  y: ["0vh", "300vh"],
                  opacity: [0, 0.6, 0.5, 0.45, 0.35, 0.2, 0],
                }}
                transition={{
                  duration: randomDuration,
                  delay: randomDelay,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 20 }, () => Math.random() > 0.5 ? "1" : "0").join("")}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extended Floating Lines */}
        <motion.div
          className="absolute inset-0"
          style={{ y: y2 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`project-line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
              style={{
                width: `${30 + i * 6}%`,
                left: `${i * 10}%`,
                top: `${15 + i * 10}%`,
                transform: `rotate(${i * 18}deg)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>
        
        {/* Animated Particles */}
        {floatingElements.map((element, index) => (
          <motion.div 
            key={`particle-${index}`}
            className={`absolute w-${element.size} h-${element.size} bg-blue-600/70 rounded-full ${element.top ? `top-${element.top}` : `bottom-${element.bottom}`} ${element.left ? `left-${element.left}` : `right-${element.right}`}`}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          />
        ))}
        
        {/* Floating Geometric Elements */}
        {geometricShapes.map((shape, index) => (
          <motion.div 
            key={`shape-${index}`}
            className={`absolute w-${shape.size} h-${shape.size} border border-${index === 0 ? 'blue' : 'purple'}-600/30 ${index === 0 ? 'rounded-full' : 'rounded-lg'} ${shape.top ? `top-${shape.top}` : `bottom-${shape.bottom}`} ${shape.left ? `left-${shape.left}` : `right-${shape.right}`}`}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: shape.duration,
              repeat: Infinity,
              ease: index === 0 ? "linear" : "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="text-slate-600 text-lg max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A selection of projects showcasing technical capabilities and problem-solving approaches
            </motion.p>
          </motion.div>
          
          {/* Project Cards */}
          <div className="grid gap-12">
            {projectCategories.map((category, index) => (
              <ProjectCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;