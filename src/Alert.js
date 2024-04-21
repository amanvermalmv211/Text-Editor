import React from 'react'

const Alert = (props) => {
    return (
        props.alert && <div class="bg-white">
            <div class={`${props.alert.setColor} flex px-4 py-3 md:px-8`}>
                <div class="mb-2 max-w-screen-sm text-sm md:text-base"> <strong>{props.alert.type}</strong>: {props.alert.msg}</div>
            </div>
        </div>
    )
}

export default Alert
