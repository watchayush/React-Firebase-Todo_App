import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Button, ListItemText } from '@material-ui/core';
import { db } from '../firebase_config';

export default function TodoListItem({todo,inprogress,id}) {

    function deleteTodo(){
        db.collection("todo").doc(id).delete();
    }

    function toggleInProgress(){
        db.collection("todo").doc(id).update({inprogress:!inprogress});
    }
    return (
        <div style={{display:"flex",lineSpacing:"1px",flexDirection:"row",alignItems:"center"}}>
            <ListItem>
                <ListItemText primary={todo} size="small" secondary={inprogress?"In Progress":"Completed"} style={{color:"whitesmoke"}}/>
            </ListItem>
            <Button size="small" 
                onClick={toggleInProgress}
                style={{height:"28px",color:"whitesmoke",
                boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 32%)"
                }}>
                    {inprogress?"Done":"UnDone"}
            </Button>
            <Button onClick={deleteTodo} style={{height:"28px",marginLeft:"4px",color:"whitesmoke",
              boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 32%)"
                }}>X
            </Button>
        </div>
    )
}
