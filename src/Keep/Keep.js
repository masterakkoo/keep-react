import React, { useState } from "react";
import imgi from './keep.png'
import TextField from '@mui/material/TextField';
import Form from "./Form";
import KeepNote from "./KeepNote";


const Keep = () => {
    const [Data, setData] = useState([]);
    const arra = (arr) => {
        setData((prev) => {
            return [...prev, arr];
        })

    }
    const ondelete = (id) => {
        setData((prev) => {
            return prev.filter((arrval, ind) => { return ind != id })
        })
    }
    console.log(Data);
    return (
        <>
            <div className="box">
                <div className="head">
                    <img src={imgi} alt="not" />
                </div>
                <Form
                    call={arra}
                />
                <div className="boxes">
                    {Data.map((val, index) => {
                        return (<KeepNote
                            title={val.title}
                            info={val.info}
                            id={index}
                            deleteitems={ondelete}
                        />);
                    })}
                </div>
            </div>
        </>
    );
}

export default Keep;