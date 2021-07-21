import React from 'react'
import { SButton } from '../Home/styles'
import { GTitle, GSubtitle, GPython, GPythonL, GJavaScript, GJavaScriptL  } from './style'
import { Link } from 'react-router-dom'

const General = () => {
    return(
        <div>
            <GTitle>
                Welcome to General! 
            </GTitle>
            <GSubtitle>
                Here general coding tips and tricks will be posted under each coding language, 
            </GSubtitle>
            <GPython font-style="Bold">
                Python:
            </GPython>
            <GPythonL>
                1. Use contrl + C to stop a program<br/> 
                2. Use contrl + L to clear the terminal<br/> 
                |---- The two tips above work in Python and JavaScript (Or vsCode)<br/> 
            </GPythonL>
            <GJavaScript font-style="Bold">
                JavaScript: 
            </GJavaScript>
            <GJavaScriptL>
                1. If you import default then when importing you don't need to specify it | Ex: "import React from 'react'"
                <br/>1a. If you don't import with defaut then you need to specify the import | Ex: "import uppercase[ Link ]uppercase from 'react-router-dom'"
            </GJavaScriptL>
            <SButton>
            <Link to="/" style={{color: "white"}}>Go to Home Page</Link>
            </SButton>    
        </div>
    )
}

export default General 