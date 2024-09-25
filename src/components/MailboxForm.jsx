import { useState } from "react";
import NavBar from "./NavBar";

function MailboxForm() {
    const [boxSize, setBoxSize] = useState('');
    const [boxholder, setBoxholder] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    const newMailbox = {
        boxholder,
        boxSize,
        id: Date.now(),
    }
    onCreateMailbox(newMailbox);
    boxholder('')
    boxSize('small')
}
return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="boxholder">Box Holder Name:</label>
            <input
                type="text"
                id="boxholder"
                value={boxholder}
                onChange={(e) => setBoxholder(e.target.value)}
                required />
        </div>
        <div>
            <label htmlFor="boxsize">Box Size:</label>
             <select
                id="boxSize"
                value={boxSize}
                onChange={(e) => setBoxSize(e.target.value)}>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
            </select>
        </div>
        <button type="submit">Create a Mailbox</button>
    </form>
    );
};
export default MailboxForm;