import {useState} from "react";
import {Component4} from "./Component4";



type Props = {
    callback: (title: string) => void;
};
export const Component3 = ({callback}: Props) => {
    const [isGreen, setIsGreen] = useState(false)
    const callbackHandler = (title: string) => {
        setIsGreen(true)
        callback(title)
    }
    return (
        <div className="container">
            <div className={`circle ${ isGreen ? 'green' : 'red'}`}></div>
            <Component4 callback={callbackHandler}/>
        </div>
    );
};