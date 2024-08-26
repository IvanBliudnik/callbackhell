import {useState} from "react";
import {Component5} from "./Component5";



type Props = {
    callback: (title: string) => void;
};
export const Component4 = ({callback}: Props) => {
    const [isGreen, setIsGreen] = useState(false)
    const callbackHandler = (title: string) => {
        setIsGreen(true)
        callback(title)
    }
    return (
        <div className="container">
            <div className={`circle ${ isGreen ? 'green' : 'red'}`}></div>
            <Component5 callback={callbackHandler}/>
        </div>
    );
};