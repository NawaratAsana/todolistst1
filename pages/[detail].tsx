import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import { CaretRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Detail = () => {
  const router = useRouter()
  const data = router.query.keyword
  console.log(data)
  console.log(router)
  return (<>
    <Divider style={{ fontSize: 40, marginTop: 50, color: ' #030852' }} >Detail</Divider>
    <div className={styles.title}>
      <p style={{ fontSize: 30 }}>
        {data}
      </p>
      <Link href="/" >
        <Button type="primary">Home</Button>
      </Link>

    </div>
  </>
  )
}

export default Detail