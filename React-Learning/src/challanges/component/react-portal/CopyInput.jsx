import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
    const [text, setMytext] = useState("");
    const [copied, setCopied] = useState(false);
    function handleCopy() {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        })
    }
    return <>
        <input type="text" value={text} onChange={(e) => setMytext(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
        <PopupContent copied={copied} />
    </>
}
export default CopyInput;