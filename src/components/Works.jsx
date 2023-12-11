import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { MixOperation } from 'three';

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My projects</p>
				<h2 className={styles.heroHeadText}>Projects.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					The following projects showcase my skills and experience through
					real-world examples and passion projects. Each project is briefly
					described with links to code repositories and demos. It reflects my
					ability to solve problems, work with different tech, and manage
					projects successfully.
				</motion.p>
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
