import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MailboxForm({addBox}) {
    const navigate = useNavigate();
    const [boxSize, setBoxSize] = useState('Small');
    const [boxholder, setBoxholder] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    const newMailbox = {
        _id: Date.now(),
        boxholder,
        boxSize,
    };
    addBox(newMailbox);
    setBoxholder('');
    setBoxSize('');
    navigate('/mailboxes');
}
return (
    <form onSubmit={handleSubmit}>
        <h2>Create a Mailbox</h2>
        <div className="form-control">
            <label htmlFor="boxholder">Box Holder Name:</label>
            <input
                type="text"
                id="boxholder"
                value={boxholder}
                onChange={(e) => setBoxholder(e.target.value)}
                required />
        </div>
        <div className="form-control">
            <label htmlFor="boxSize">Box Size:</label>
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