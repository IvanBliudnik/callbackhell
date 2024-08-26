import {useState} from "react";
import {Component2} from "./Component2";


type Props = {
    callback: (title: string) => void;
};
export const Component1 = ({callback}: Props) => {
    const [isGreen, setIsGreen] = useState(false)
    const callbackHandler = (title: string) => {
        setIsGreen(true)
        callback(title)
    }
    return (
        <div className="container">
            <div className={`circle ${ isGreen ? 'green' : 'red'}`}></div>
          <Component2 callback={callbackHandler}/>
        </div>
    );
};