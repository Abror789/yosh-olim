import React, {useEffect, useState} from 'react';
import TextFeild from "../../../../Components/Inputes/TextFeild";
import {DatePicker, Upload, TimePicker, Button} from "antd";
import moment from "moment";


import {InboxOutlined} from '@ant-design/icons';
import Icon from "../../../../Components/Icon";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {createMasterclass, getOneMasterclass} from "../../../../Redux/ApiCalls/Masterclass";

const ActionMasterclass = () => {
    const {id}=useParams()
    const history=useHistory()
    const [loading,setLoading]=useState(false)
    const {Dragger} = Upload
    const [photo, setPhoto] = useState(null)
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const [img,setImg]=useState(null)
    const changePhoto = (img) => {
        setImg(img)
        setPhoto(URL?.createObjectURL(img))
    }
    const props = {
        name: 'file',
        multiple: false,
        showUploadList: false,
        action: false,
        onChange(e) {
            changePhoto(e.file.originFileObj)
        }

    }
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const onChange = (date, dateString) => {
        setDate(dateString);
    }
    function onChangeTime(time, timeString) {
        setTime( timeString);
    }

    useEffect(()=>{
      if (id){
          setLoading(true)
          getOneMasterclass(id,setLoading)
              .then((res)=>{
                  console.log(res)
                  setLoading(false)
              })
      }
    },[])

    const addMasterClass = (e) => {
      e.preventDefault()
        const data=new FormData()
        data.append('image',img)
     createMasterclass(data,loading,`&name=${name}&date=${date}&time=${time}&limit=${number}&text=Hello&status=active`)
         .then((res)=>{
             console.log(res)
     })
      // console.log(name,date,time,number,img)
    }
    return (
        <section className="actionMasterclass page">
            <h6 className="title"><span onClick={()=>{history.push('/masterclass')}}>Masterklass</span> / <>{id?"Masterklass tahrirlash":"Masterklass qo’shish"}</></h6>
            <div className="main">
                <div className="form">
                    <form id="teacher-create-form" onSubmit={addMasterClass}>
                        <TextFeild
                            value={name}
                            setValue={setName}
                            label="Masterklass nomi :"
                            placeholder="Nomini kiriting"
                        />
                        <div className="date">
                            <p>Masterklass sanasi:</p>
                            <DatePicker placeholder="Sanani tanlang" onChange={onChange}/>
                        </div>
                        <div className="date">
                            <p>Masterklass vaqti:</p>
                            <TimePicker placeholder="Vaqtni tanlang" onChange={onChangeTime} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </div>
                        <TextFeild
                            value={number}
                            setValue={setNumber}
                            placeholder="Qabul qilinadigan o’quvchilar sonini kiriting"
                            label="O’quvchilar soni:"
                        />

                        <div className="upload-action">
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined/>
                                </p>
                                <p className="ant-upload-text">Masterklass bilet rasmini yuklash</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                    band files
                                </p>
                            </Dragger>
                        </div>

                        <div className="gallery">
                            {photo && <div className="img-item border-4">
                                <span onClick={() => setPhoto(null)} className="close-img">
                                  <Icon className='icon' icon='plus'/>
                                </span>
                                <img src={photo} alt=""/>
                            </div>
                            }
                        </div>
                        <div className="buttons">
                            <Button type="button" onClick={()=>history.push('/masterclass')}>Bekor qilish</Button>
                            <Button form='teacher-create-form' htmlType='submit' type="primary">Chop etish</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ActionMasterclass;
