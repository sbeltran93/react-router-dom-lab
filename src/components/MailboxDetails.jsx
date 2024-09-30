// src/components/MailboxDetails.jsx
import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId));

    console.log(selectedBox);

if (!selectedBox || selectedBox.length === 0) {
    return <h2>No mailbox found.</h2>;
}
    return (
        <div className="selected-box-header">
            <h1>Your current mailbox is:</h1>
            <div className="selected-box">
                <h2>Mailbox Details:</h2>
                <h3>Mailbox Id: {selectedBox._id}</h3>
                <p>Box Holder: {selectedBox.boxholder}</p>
                <p>Box Size: {selectedBox.boxSize}</p>
            </div>
        </div>
    )    
}



export default MailboxDetails;