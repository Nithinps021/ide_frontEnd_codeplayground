import { Terminal } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { FitAddon } from "xterm-addon-fit";
import {XTerm} from "xterm-for-react"
import "../../node_modules/xterm/css/xterm.css"
import {iTerminalOptions} from "../utils/terminalOptions"




const WebTerminal: React.FC = () => {
    const xtermRef:any = useRef(null)
    var fitAddon = new FitAddon()
    function sendData(str:String){
        console.log(str)
    }
    useEffect(()=>{
        xtermRef.current.terminal.write("noobtopro$")
        xtermRef.current.terminal.cursorBlink=false
        xtermRef.current.terminal._initialized=true
        xtermRef.current.terminal.focus()
        xtermRef.current.terminal.prompt=()=>{
            xtermRef.current.terminal.write("\r\n$")
        }
    },[])
    return (
        <div>
            <XTerm ref={xtermRef} options={iTerminalOptions} onData={(str:String)=>sendData(str)} />
        </div>
    )
}
export default WebTerminal
