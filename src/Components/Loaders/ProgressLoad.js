import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from 'antd';
import Icon from '../Icon';

const ProgressLoad = ({ bg = '#fff', index = 11, loading, effect = true, progress, cancel }) => {

     return (
          <AnimatePresence exitBeforeEnter={effect}>
               {loading &&
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.2 }}
                         exit={{ opacity: 0 }}
                         className='progress-loader' style={{ backgroundColor: bg, zIndex: index }}>
                         <Icon icon="cancel" onClick={cancel} />
                         <Progress
                              type="circle"
                              strokeColor={{
                                   '0%': '#0086FF',
                                   '100%': '#00BC96',
                              }}
                              percent={progress}
                              width={180}
                              strokeWidth={5}
                         />
                    </motion.div>
               }
          </AnimatePresence>

     )
};

export default ProgressLoad;
