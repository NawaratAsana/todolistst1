import styles from '../styles/Home.module.css'
import { Button, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';


const ButtonComponent = (props:any) => {
    return(
    <>
        {/* <Input placeholder="Basic usage" /> */}
     <Button  style={{background:"#69c0ff" }} onClick={() => props.onClick()} >{props?.name} </Button>
 </>
 )
   
}

export default ButtonComponent