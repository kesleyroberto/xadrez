import React, { useEffect, useState } from 'react'
import './Casa.css'

export default function Casa({ casa, props }) {
    useEffect(() => {
        console.log(props)
    }, [])

    return <div className={cor(casa) ? 'casa preta' : 'casa branca'}>{casa}</div>
}

const cor = (n) => {
    if (n < 8) {
        return n % 2 === 0
    }
    if (n < 16) {
        return !(n % 2 === 0)
    }
    if (n < 24) {
        return n % 2 === 0
    }
    if (n < 32) {
        return !(n % 2 === 0)
    }
    if (n < 40) {
        return n % 2 === 0
    }
    if (n < 48) {
        return !(n % 2 === 0)
    }
    if (n < 56) {
        return n % 2 === 0
    }
    if (n < 64) {
        return !(n % 2 === 0)
    }
}
