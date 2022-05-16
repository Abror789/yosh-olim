import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react-web';
import data from './data.json'

const Loader = ({ size = 24, bg = 'transparent', index = 11, loading, effect = true }) => {

     const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />

     return (
          <AnimatePresence exitBeforeEnter={effect}>
               {loading &&
                    <motion.div
                         initial={{ opacity: 1 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.2 }}
                         exit={{ opacity: 0 }}
                         className='loader' style={{ backgroundColor: bg, zIndex: index }}>
                         <div className="lottie-wrapper">
                              <Lottie
                                   options={{
                                        animationData: data,
                                   }}
                              />
                         </div>

                         {/* <Spin indicator={antIcon} /> */}
                    </motion.div>
               }
          </AnimatePresence>

     )
};

export default Loader;
