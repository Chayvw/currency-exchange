import {useState} from 'react'


// a customized hook for my form where we 
export const useList = (initialValues)=>{
    // form values
    const [values, setValues] = useState(initialValues);

    return [values, (e)=>{
        setValues({
            // spread feature to keep the current value while we call our onChange function
            ...values, 
            [e.target.name]: e.target.value

        })
    }]

}