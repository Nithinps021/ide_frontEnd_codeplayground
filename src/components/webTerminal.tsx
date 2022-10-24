import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import {XTerm} from "xterm-for-react"
import "../../node_modules/xterm/css/xterm.css"
import {iTerminalOptions} from "../utils/terminalOptions"




const WebTerminal: React.FC = () => {
    const xtermRef:any = useRef(null)
    let term:Terminal
    let [command,setCommand]=useState<string>("")
    function sendData(str:String){

    }
    function prompt(){
        let shellprompt="noobtopro$ "
        term.write("\r\n"+shellprompt)
    }
    function onKeyPress(event: { key: string; domEvent: KeyboardEvent }){
        setCommand(command.concat(event.key))
    }
    useEffect(()=>{
        term=xtermRef.current.terminal
        term.write(command)
        prompt()
    },[command])
    return (
        <div>
            <XTerm ref={xtermRef} options={iTerminalOptions} onData={(str:String)=>sendData(str)} onKey={(key)=>onKeyPress(key)}/>
        </div>
    )
}
export default WebTerminal
