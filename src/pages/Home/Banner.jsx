import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1" >
          <motion.img
            src={team1}
            animate={{y:[100,160,100], transition:{duration:10, repeat:Infinity}}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x:[200,100,200], transition:{duration:10, delay:5, repeat:Infinity}}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8  rounded-t-4xl rounded-br-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
          >
            The Easiest Way to Get Your New{" "}
            <motion.span
              animate={{
                color: ["#EB4626", "#EBC026", "#26EB3A", "#26EB51"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Job
            </motion.span>
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
