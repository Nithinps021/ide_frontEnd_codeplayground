import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css"
import {iTerminalOptions} from "../utils/terminalOptions"

const WebTerminal: React.FC = () => {
    const xtermRef:any = useRef(null)
    let term:Terminal
    function sendData(str:String){

    }
    function prompt(){
        let shellprompt="noobtopro$ "
        term.write("\r\n"+shellprompt)
    }

    useEffect(()=>{
        term=new Terminal(iTerminalOptions)
        term.open(xtermRef.current)
        term.onKey((event: { key: string; domEvent: KeyboardEvent })=>{
            console.log(event.key)
            if(event.domEvent.key==="Backspace"){
                term.write("\b \b")
            }
            else{
                term.write(event.domEvent.key)
            }
        })
        prompt()
    },[])
    return (
        <div ref={xtermRef} style={{maxHeight:200,maxWidth:1000}}>
        </div>
    )
}
export default WebTerminal
