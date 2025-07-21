
import { Mail, Code, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "Node.js", "Flask", "REST APIs", "PostgreSQL"] },
    { category: "AI & Automation", items: ["RAG Systems", "OpenAI API", "Workflow Design", "Data Processing"] },
    { category: "Marketing Tech", items: ["SEO Optimization", "CRM Integration", "Email Marketing", "Analytics"] }
  ];

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete applications from frontend UI to backend logic. Python, Flask, Node.js, REST APIs. Concept to launch.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "RAG-powered customer service agents, automated data entry tools, systems for generating/sending email ad creatives and copy, and more.",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: TrendingUp,
      title: "Marketing Tech",
      description: "Digital marketing foundation enables smarter tools, SEO-enhanced web design, and sales process automation.",
      gradient: "from-green-500 to-green-700"
    }
  ];

  const animationVariants = {
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInScale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    staggerContainer: {
      animate: { transition: { staggerChildren: 0.1 } }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-20">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Shapes */}
        {[
          { top: "32", right: "1/4", size: "4", delay: 0 },
          { top: "64", left: "1/4", size: "6", delay: 0.5 },
          { bottom: "40", right: "1/3", size: "3", delay: 1.5 }
        ].map((shape, index) => (
          <motion.div 
            key={index}
            className={`absolute w-${shape.size} h-${shape.size} bg-blue-600/60 ${shape.top ? `top-${shape.top}` : `bottom-${shape.bottom}`} ${shape.left ? `left-${shape.left}` : `right-${shape.right}`} rotate-45`}
            animate={{ 
              y: [0, -30, 0],
              rotate: [45, 135, 45]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <motion.div 
            className="text-center mb-16 pt-20"
            variants={animationVariants.fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              variants={animationVariants.fadeInScale}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Full-Stack Developer
              <br />
              <span className="text-3xl md:text-5xl font-bold">& Automation Specialist</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Versatile developer with marketing background, focused on helping businesses streamline operations, 
              enhance digital experiences, and scale intelligently using custom-built tools.
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.a 
                href="mailto:zacharybenjaminforbes@gmail.com" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="border-2 border-slate-400 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.a 
                href="mailto:zacharybenjaminforbes@gmail.com" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Services & Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start pb-20">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-blue-600">What I Do</h2>
              <motion.div 
                className="space-y-6"
                variants={animationVariants.staggerContainer}
                initial="initial"
                animate="animate"
              >
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 + (index * 0.2) }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                      <p className="text-slate-200">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-blue-600">Technical Stack</h2>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-slate-200 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <h3 className="text-sm font-bold mb-3 text-purple-600 uppercase tracking-wider">{skillGroup.category}</h3>
                    <div className="space-y-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-slate-700 font-medium">{skill}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;