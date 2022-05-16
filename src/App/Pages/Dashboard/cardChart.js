import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';



const CardChart = (item) => {

     const [data, setData] = useState(null)


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
                    month: getMonth(formatter(new Date(item.created_at))),
                    count: item?.count,
                    id: item?._id
               }

          })

          setData(array)

     }

     useEffect(() => {
          mapData(item.data)

     }, [])


     return (

          <div className="card-chart border-8">

               <div className="card-header mb-32">

                    <div>
                         <p className='semi-bold-16'>
                              Yangi xaridorlar
                         </p>
                         <span className='text medium-14'>
                              1 oylik
                         </span>
                    </div>

                    <p className='semi-bold-16'>
                         +{data && data?.reduce((total, item) => { return total += item?.count }, 0)}
                    </p>
               </div>

               <ResponsiveContainer width="100%" height={160} >
                    <AreaChart
                         width="100%"
                         height={160}
                         data={data}
                         margin={{
                              top: 10,
                              right: -10,
                              left: -10,
                         }}
                    >
                         <defs xmlns="http://www.w3.org/2000/svg">
                              <linearGradient id="paint0_linear_4:4509" x1="154.722" y1="1.30078" x2="154.722" y2="159.998" gradientUnits="userSpaceOnUse">
                                   <stop stopColor="white" stopOpacity="0.4" />
                                   <stop offset="1" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                         </defs>
                         <Area type="monotone" dataKey="count" strokeWidth="2.23" stroke="white" fill="url(#paint0_linear_4:4509)" />
                    </AreaChart>
               </ResponsiveContainer>

          </div>

     )
}


export default CardChart