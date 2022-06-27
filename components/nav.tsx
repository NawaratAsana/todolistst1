import { Avatar, Image, Menu, } from "antd"
import { Header } from "antd/lib/layout/layout"
import Link from "next/link"
import React from "react"
export default function Navbar() {
    return (
        <>
            <div >
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" />
                    <Link href="/" >
                        <a style={{ marginRight: 20, color: 'white' }}>Home</a>
                    </Link>
                    <Link href="/about" >
                        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32, alignItems: 'end' }} />} />
                    </Link>

                </Header>
            </div>
        </>
    )
}

