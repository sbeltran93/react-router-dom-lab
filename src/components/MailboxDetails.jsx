// src/components/MailboxDetails.jsx
import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
);
if (!selectedBox) {
    return <h2>No mailbox found.</h2>;
}
    return (
        <div>
            <h2>Mailbox Details:</h2>
            <p>Box Holder: {selectedBox.boxholder}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </div>
    )    
}



export default MailboxDetails;