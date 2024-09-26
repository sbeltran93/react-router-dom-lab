// src/components/MailboxDetails.jsx
import React from "react";
import NavBar from "./NavBar";

const MailboxDetails = (props) => {
    
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
);
    
}



export default MailboxDetails;