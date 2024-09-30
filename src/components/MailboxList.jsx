import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const MailboxList = ({mailboxes}) => {
        if (!mailboxes) {
            return <p> No mailboxes to show. </p>
        }
    return (
        <ul>
            {mailboxes.map((mailbox) => (

                <div key={mailbox._id} className="mail-box">
                    <h2>Box {mailbox._id}</h2>
                    <h2>Size: {mailbox.boxSize}</h2>
                    <p>Mailbox holder Name: {mailbox.boxholder}</p>
                    <Link to={`/mailboxes/${mailbox._id}`}>View Details</Link>
                </div>
            ))}
        </ul>
    )
}


export default MailboxList;