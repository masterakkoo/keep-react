import React from "react";
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const KeepNote = (props) => {

    const calltodel = () => {
        props.deleteitems(props.id);
    }
    return (


        <>
            <div className="one">
                <h4>{props.title}</h4>
                <p>{props.info}</p>

                <div className="btn1">
                    <IconButton style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: '#bbbbbb', boxShadow: '4px 4px 8px 2px #bbbbbb', backgroundColor: 'yellow' }}
                        onClick={calltodel}
                    ><DeleteIcon
                            style={{
                                border: 'none', outline: 'none', backgroundColor: 'yellow',
                                color: 'black'
                            }}
                        />  </IconButton>
                </div>
            </div>
        </>
    );

};
export default KeepNote;