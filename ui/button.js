'use client'
import React from 'react'
import { Button as ButtonUi } from '@nextui-org/react'
export default function Button (props) {
    const { onClick, title, className } = props
    return (
        <ButtonUi className={className} onClick={() => { onClick() }}>
            {title}
        </ButtonUi>
    )
}
