import React, {useEffect, useState} from 'react';
import {Table, Switch, Button} from "antd";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
import Icon from "../../../Components/Icon";
import {useHistory} from "react-router-dom";
import {deleteMasterclass, getAllMasterclasses} from "../../../Redux/ApiCalls/Masterclass";

const Masterclass = () => {
    const history=useHistory()
    const [loading,setLoading]=useState(false)
    const [tableLoad,setTableLoad]=useState(false)
    const [data,setData]=useState(null)
    useEffect(()=>{
       getAllMasterclasses()
           .then((res)=>{
               if (res.data.results==="Invalid token"){
                   localStorage.clear()
                   history.push('/login')
                   window.location.reload()
               }
               else {
                   mapMasterData(res)
               }
       })
    },[])

    const mapMasterData = (res) => {
        const { results } = res.data
        const mapedData = results.map((item, i) => {
            return {
                key: item.id,
                name: item.name,
                action: item.id,
                image:item.image,
                status:item.status,
                limit:item.limit
            }
        })
        setData(mapedData)
    }

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    const deleteFunc = (id) => {
        setTableLoad(true)
        deleteMasterclass(id,setLoading)
            .then((res)=>{
                const newArr=data.filter((item)=>item.action !==id)
                setData(newArr)
                setTableLoad(false)
        })
    }
    const columns = [
        {
            title: 'id',
            dataIndex: 'key',
            sorter: {
                compare: (a, b) => a.key - b.key,
            }
        },
        {
            title: 'Masterklass nomi',
            dataIndex: 'name'
        },
        {
            title: "sanasi",
            dataIndex: 'date',
        },
        {
            title: 'vaqti',
            dataIndex: 'hour',
        },
        {
            title: 'O’quvchilar soni',
            dataIndex: 'limit',
        },
        {
            title: "status",
            dataIndex: 'status',
            render:(status)=>(
                <div className="status">
                    <div className={`color ${status==='active'?'':"kutilmoqda"}`}/>
                    <h6>{status==='active'?"Davom etmoqda":"To'ldi"}</h6>
                </div>
            )
        },
        {
            title: "harakat",
            dataIndex: 'action',
            render:(id)=>(
                <div className="action">
                    <div onClick={()=>{history.push(`/masterclass/update/${id}`)}} className="edit">
                        <EditFilled />
                        <span>Tahrirlash</span>
                    </div>
                    <div onClick={()=>deleteFunc(id)} className="delete">
                        <DeleteFilled />
                        <span>O’chirish</span>
                    </div>
                </div>
            )
        },
        {
            title: "O'chirish",
            dataIndex: 'on',
            render:()=>(<Switch defaultChecked onChange={onChange} />)

        }

    ];

    return (
        <section className="masterclass page">
            <div className="masterclass-body">
                <div className="top">
                    <h6>Search Table</h6>
                    <Button onClick={()=>history.push('/masterclass/create')} type="primary"><Icon icon="plus"/>Masterklass qo’shish</Button>
                </div>
                <Table dataSource={data}
                       columns={columns}
                       loading={tableLoad}
                       scroll={{ x: 'max-content' }}
                       className="action"
                       locale={{
                           emptyText: () => <div className='empty-table'>
                               <img src="/assets/icons/empty-table.svg" alt="" />
                               <span>Ma'lumot mavjud emas</span>
                           </div>,
                           triggerDesc: 'Tushirish',
                           triggerAsc: "Ko'tarish",
                           cancelSort: 'Bekor qilish',
                       }}
                       pagination={false}
                />
            </div>
        </section>
    );
};

export default Masterclass;
