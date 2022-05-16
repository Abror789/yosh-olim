import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Text } from 'recharts';
import { Menu, Dropdown } from 'antd';
import moment from 'moment'
const RepoChart = (data) => {
     const [array, setData] = useState(null)
     const [status, setStatus] = useState('Kunlik')

     const formatter = (date) => {

          const format = new Intl.DateTimeFormat('en', { month: 'long' });

          return format.format(date)
     }

     const date = new Date()

     const before = formatter(new Date(date.getFullYear(), date.getMonth() - 6, 1));

     const now = formatter(new Date());

     const getMonth = (month) => {
          if (month === 'January') {
               return 'Yanvar'
          } else if (month === 'February') {
               return 'Fevral'
          } else if (month === 'December') {
               return 'Dekabr'
          } else if (month === 'November') {
               return 'Noyabr'
          } else if (month === 'October') {
               return 'Oktabr'
          } else if (month === 'September') {
               return 'Sentabr'
          } else if (month === 'August') {
               return 'Avgust'
          } else if (month === 'July') {
               return 'Iyul'
          } else if (month === 'June') {
               return 'Iyun'
          } else if (month === 'May') {
               return 'May'
          } else if (month === 'April') {
               return 'Aprel'
          } else if (month === 'March') {
               return 'Mart'
          }
     }

     const mapData = (data) => {

          const array = data.map((item) => {

               return {
                    month: moment(item?.created_at).format('DD.MM.YYYY'),
                    count: parseInt(item?.count),
                    id: item?._id
               }

          })

          setData(array)
     }

     useEffect(() => {
          mapData(data.data)

     }, [])


     const menuUser = (
          <Menu key={'1'}>
               <Menu.Item key='1' onClick={() => setStatus('Kunlik')}>Kunlik</Menu.Item>
               <Menu.Item key='2' onClick={() => setStatus('Oylik')}>Oylik</Menu.Item>
               <Menu.Item key='3' onClick={() => setStatus('Yillik')}>Yillik</Menu.Item>
          </Menu>
     );


     return (


          <div className="chart border-8">

               {
                    array && <React.Fragment>
                         <div className="chart-header">
                              <div className="left">
                                   <div className='semi-bold-16'>
                                        Xaridorlar statistikasi
                                   </div>
                                   <div className='regular-14'>

                                        <Dropdown overlay={menuUser} trigger={['click']}>
                                             <div className='drop_status'>
                                                  {status}
                                             </div>
                                        </Dropdown>

                                   </div>
                              </div>
                              <div className="right">
                                   <div className="box-1">
                                        <div>
                                             <span className='circule mr-8'> </span>
                                             <span className='medium-12'>
                                                  Oldingi
                                             </span>
                                        </div>
                                        <p className='medium-16 ml-8'>
                                             475 273
                                        </p>
                                   </div>
                                   <div className="box-1">
                                        <div>
                                             <span className='circule-2 mr-8'> </span>
                                             <span className='medium-12'>
                                                  So’ngi 6 oy
                                             </span>
                                        </div>
                                        <p className='medium-16 ml-8'>
                                             782 396
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <ResponsiveContainer width="100%" height={270}>

                              <AreaChart
                                   width={450}
                                   height={400}
                                   data={array}
                                   margin={{
                                        left: 25,
                                        top: 35
                                   }}
                              >
                                   <CartesianGrid horizontal={false} stroke=" #EEEEEE" strokeOpacity="1" strokeDasharray="0" />
                                   <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={10} tick={<CustomXAxisTick />} />
                                   <YAxis dataKey="count"  interval={'preserveStart'} axisLine={false} tickLine={false} tickMargin={15} tickCount={6} tick={<CustomYAxisTick />} />

                                   {/* ticks={[0, ...array.map((item) => item.count)]} */}

                                   {/* <Area type="monotone" dataKey="ss" strokeWidth="2" stroke="rgba(234, 197, 68, 1)" fill="transparent" /> */}
                                   <Area type="monotone" dataKey="count" strokeWidth="2" yAxisId={0} stroke="#2a81dd" fill="transparent" />
                              </AreaChart>
                         </ResponsiveContainer>
                    </React.Fragment>
               }



          </div>


     )
}

const CustomYAxisTick = props => {
     return <Text {...props} className={'tick-y'}>{props.payload.value ? `${props.payload.value}` : 0}</Text>;
};

const CustomXAxisTick = props => {
     return <Text {...props} className={'tick-x'}>{props.payload.value}</Text>;
};


export default RepoChart