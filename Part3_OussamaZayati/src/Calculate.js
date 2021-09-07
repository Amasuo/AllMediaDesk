import React , {useState,useEffect} from 'react'
import './calcul.js'
import { calculate } from './calcul.js'
import ApexChart from './LineChart'

function Calculate() {
    const [expression,setExpression] = useState('')
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    useEffect(() => {
        console.log("y",y)
    }, [y])

    const testValidity = (e) => {
        e.preventDefault()
        console.log("x = ",x)
        let ch = ''
        if(x==0||expression==''){
            alert("Please complete all the fields")
        }else{
            for(let i=0 ; i<expression.length;i++){
                if(expression.charAt(i)=='x'){
                    console.log("true at ",i)
                    ch=expression.replace('x',x.toString())
                }
            }
        }
        console.log("after modification ",ch)

        console.log(calculate(ch))

        setY(calculate(ch))
        console.log("y ",y)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("onsubmiut ",e.target.value)
    }
    const handleChangeExpression = (e) => {
        e.preventDefault();
        console.log("expression ",e.target.value)
        setExpression(e.target.value)
    }
    const handleChangeX = (e) => {
        e.preventDefault();
        if(isNaN(e.target.value)){
            console.log("is not a number")
            alert("Please insert a valid Number")
            setX('')
        }else{
            setX(e.target.value)
        }
        
    }

    return (
        <div>
            <form>
            Expression : <input name="calcul"
                         style={{'marginBottom':"10px"}} 
                         onChange={handleChangeExpression}/> 
             Example 2*x+5             <br/>
            X : <input name="x"
                         style={{'marginBottom':"10px"}} 
                         onChange={handleChangeX}/><br/>
            <button type='submit' onClick={testValidity}> Calculate Y</button>
            </form>
            <ApexChart x={x} y={y}/>

        </div>
    )
}

export default Calculate
