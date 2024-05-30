import { useState } from 'react'
import './Bmicalculator.css'

const Bmicalculator = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [status, setStatus] = useState("")
    const [error, setError] = useState("")

    const Bmidata = () => {

        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);

        if (isValidHeight && isValidWeight) {
            const heightMeter = height / 100;
            const bmValue = weight / (heightMeter * heightMeter)
            setBmi(bmValue.toFixed(2));
            if (bmValue < 18.5) {
                setStatus("UnderWeight")
            }
            else if (bmValue >= 18.5 && bmValue < 24.9) {
                setStatus("Normal")
            }
            else if (bmValue >= 25 && bmValue < 29.9) {
                setStatus("OverWight")
            }
            else {
                setStatus("Obeses")
            }
            setError("")
        } else {
            setBmi(null)
            setStatus("")
            setError(' ⚠ Please Enter Height & Weight')
        }
    }

    const Cleardata = () => {
        setError("")
        setHeight("")
        setWeight("")
        setBmi(null)
        setStatus("")
    }

    const keyDown = (e) => {
        if (e.key === "Enter") {
            Bmidata()
        }
        
    }
    return (
        <>
            <div className="container">
                <div className="images"></div>
                <div className="data">
                    <h1>BMI Calculator</h1>
                    {error && <p className='error'>{error}</p>}
                    <div className="calculator">
                        <div className="input-container">
                            <label htmlFor="height">Height(Cm)</label>
                            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} id='height' onKeyDown={keyDown}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="weight">Height(Kg)</label>
                            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} id='weight' onKeyDown={keyDown}/>
                        </div>
                        <button onClick={Bmidata}>Caculate BMI</button>
                        <button onClick={Cleardata} className='clrData'>Clear </button>
                        {bmi !== null && (
                            <div className="bmi">
                                <p>Your BMI : {bmi}</p>
                                <p>Status : {status} </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bmicalculator
