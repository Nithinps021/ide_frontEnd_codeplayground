import React, { useEffect, useRef, useState } from "react";
import { Terminal as TerminalType } from "xterm";
import{Terminal} from "xterm"
import { FitAddon } from "xterm-addon-fit"; 
import "xterm/css/xterm.css"
import {iTerminalOptions} from "../utils/terminalOptions"
import { SerializeAddon } from "xterm-addon-serialize";
import {AttachAddon} from "xterm-addon-attach"
import { error } from "console";

const WebTerminal: React.FC = () => {
    let term:TerminalType
    let socketURL = 'ws://terminal-backend-noobtopro-t2n7bpl7va-el.a.run.app/term'
    let websocket = new WebSocket(socketURL)
    websocket.binaryType="arraybuffer"
    
    function prompt(){
        let shellprompt="noobtopro$ "
        term.write("\r\n"+shellprompt)
    }
    useEffect(()=>{
        if(websocket){
            let terminalContainer = document.getElementById('terminal-container')
            while(terminalContainer?.children.length){
                terminalContainer.removeChild(terminalContainer.children[0])
            }
            term=new Terminal(iTerminalOptions)
            const fitAddon = new FitAddon()
            const serializeAddon =  new SerializeAddon()
            term.loadAddon(fitAddon)
            term.loadAddon(serializeAddon)
            term.loadAddon(new AttachAddon(websocket))
            if(terminalContainer) term.open(terminalContainer)
            fitAddon.fit()
            prompt()
        }
    },[])
    return (
        <div id="terminal-container">
        </div>
    )
}
export default WebTerminal
