import React from 'react'

function Form({name, value, onChange, form_num, autofocus}) {
    return (
        <div className='text-input'>
            <label htmlFor="one">{form_num}:</label>
            <input
                className='form_input'
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                // required
                autoFocus={autofocus}
            />
        </div>
    )
}

export default Form