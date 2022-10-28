import React, { useEffect, useRef, useState } from "react";
import { Terminal as TerminalType } from "xterm";
import{Terminal} from "xterm"
import "xterm/css/xterm.css"
import {iTerminalOptions} from "../utils/terminalOptions"

const WebTerminal: React.FC = () => {
    let term:TerminalType
    function sendData(str:String){

    }
    function prompt(){
        let shellprompt="noobtopro$ "
        term.write("\r\n"+shellprompt)
    }
    function realTerminal():void{
        

    }
    useEffect(()=>{
        let terminalContainer = document.getElementById('terminal-container')
        while(terminalContainer?.children.length){
            terminalContainer.removeChild(terminalContainer.children[0])
        }
        term=new Terminal(iTerminalOptions)
        if(terminalContainer) term.open(terminalContainer)
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
        if(terminalContainer) console.log(terminalContainer.children.length + "ch ild")
    },[])
    return (
        <div id="terminal-container">
        </div>
    )
}
export default WebTerminal
