import { useState } from "react";
import NavBar from "./NavBar";

function MailboxForm() {
    const [boxSize, setBoxSize] = useState('');
    const [boxholder, setBoxholder] = useState('');

const onCreateMailbox = (newMailbox) => {
    console.log('New Mailbox Created', newMailbox)
}    

const handleSubmit = (event) => {
    event.preventDefault();
    const newMailbox = {
        _id: Date.now(),
        boxholder,
        boxSize,
    };
    onCreateMailbox(newMailbox);
    setBoxholder('');
    setBoxSize('Small');
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