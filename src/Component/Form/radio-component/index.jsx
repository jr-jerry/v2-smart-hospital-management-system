import { useState } from "react"

const RadioComponent = ({handleChange}) => {
    const [type, setType] = useState("patient");
    const handleTypeChange = (event) => {
        setType(event.target.value);
        handleChange(event);
    }
    return (
        <>
            <label>
                <input
                    type="radio" name="type"
                    value="doctor" checked={type === "doctor"}
                    onChange={(event) => handleTypeChange(event)}
                />
                doctor
            </label>
            <label>
                <input type="radio" name="type"
                    value="patient" checked={type === "patient"}
                    onChange={(event) => handleTypeChange(event)}
                />
                patient
            </label>
        </>
    )
}

export default RadioComponent