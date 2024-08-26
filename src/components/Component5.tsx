import {useState} from "react";



type Props = {
    callback: (title: string) => void;
};
export const Component5 = ({callback}: Props) => {
    const [isGreen, setIsGreen] = useState(false)
    const callbackHandler = () => {
        setIsGreen(true)
        callback("Первый круг ада пройден!")
    }
    return (
        <div className="container">
            <div className={`circle ${ isGreen ? 'green' : 'red'}`}></div>
            <button onClick={callbackHandler}>complete</button>
        </div>
    );
};