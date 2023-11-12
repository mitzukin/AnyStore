import React from 'react'
import { Link } from 'react-router-dom'

export function PrimaryButton(props) {
    return (
        <Link to={props.to}>
        <button className="bg-[#111111] font-medium font-Poppins border border-black px-8 py-3 rounded-xl text-base tracking-wide text-white hover:bg-transparent hover:border hover:border-black hover:text-black duration-200 ease-linear">
                {props.title}
                </button>
                </Link>
    )
}

export function SecondaryButton(props) {
    return (
        <button className="border border-[#111111] text-black font-medium font-Poppins px-8 py-4 rounded-xl text-base tracking-wide hover:bg-[#252525] hover:text-white duration-200 ease-linear">
            <Link to={props.to}>
                {props.title}
            </Link>
        </button>
    )
}
