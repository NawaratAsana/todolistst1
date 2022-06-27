import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/me.jpg'
import { Button } from 'antd'
import Link from 'next/link'
import { Content } from 'antd/lib/layout/layout'
import Navbar from '../components/nav'
import React from 'react';
import 'antd/dist/antd.css';

export default function about() {

  return (
    <>
<Navbar/>
      <div className={styles.main}>
        
        <h1 className={styles.h1}>About Me</h1>
        <Image className={styles.img}
          src={profilePic}
          alt="Picture of the author"
          placeholder="empty"
          width={200}
          height={200}
        />
        <h3 >Nawarat Asana</h3>
        <Content style={{ fontFamily: 'sans-serif', color: 'GrayText' }}>
          <p>Valaya Alongkorn Rajabhat University under the Royal Patronage</p>
          <p>Computer Science</p>
          <p>อยากทำงานในตำแหน่ง : Developer</p>
          <p>อยากเรียน:Next.js React MongoDB Sequelize </p>
        </Content>
        {/* <Link href="/" >
          <Button type="primary">Home</Button>
        </Link> */}
      </div>
    </>





  )
}