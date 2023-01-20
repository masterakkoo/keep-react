import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


let data = [];
const Form = (props) => {

    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState(
        {
            title: "",
            info: '',
        }
    );
    const expandfunction = () => {
        setexpand(true);
    }
    const mainfuction = () => {
        setexpand(false);
    }
    const inputevent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setnote((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        }
        )
    }
    const change = (events) => {
        events.preventDefault();
        props.call(note);
        setnote({
            title: "",
            info: '',
        });

    }
    return (
        <>
            <div className="main"
                onDoubleClick={mainfuction}>

                <form onSubmit={change} >
                    {expand &&
                        <input
                            placeholder='Title'
                            onChange={inputevent}
                            name="title"
                            value={note.title}
                        />}
                    <textarea id="w3review" name="w3review" rows="4" cols="50"
                        placeholder="create a note...."
                        onChange={inputevent}
                        name="info"
                        value={note.info}
                        onClick={expandfunction}
                    />

                    {expand &&
                        <div className="btn1">
                            <IconButton style={{
                                height: '50px', width: '50px', borderRadius: '50%', backgroundColor: '#bbbbbb', backgroundColor: 'yellow',
                                boxShadow: '4px 4px 8px 2px #bbbbbb'
                            }}

                                type="submit"
                            > <AddIcon
                                    style={{
                                        backgroundColor: 'yellow',
                                        color: 'black',

                                    }}
                                /> </IconButton>
                        </div>}
                </form>
            </div>
        </>
    );
};

export default Form;
