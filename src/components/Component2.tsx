import {useState} from "react";
import {Component3} from "./Component3";


type Props = {
    callback: (title: string) => void;
};
export const Component2 = ({callback}: Props) => {
    const [isGreen, setIsGreen] = useState(false)
    const callbackHandler = (title: string) => {
        setIsGreen(true)
        callback(title)
    }
    return (
        <div className="container">
            <div className={`circle ${ isGreen ? 'green' : 'red'}`}></div>
            <Component3 callback={callbackHandler}/>
        </div>
    );
};