import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const MailboxList = ({mailboxes}) => {
        if (!mailboxes) {
            return <p> No mailboxes to show. </p>
        }
    return (
        <div className="mailbox-list">
            <h1>Current Mailboxes</h1>
            {mailboxes.map((mailbox) => (
                <div key={mailbox._id} className="mail-box">
                    <h2>Mailbox Id: {mailbox._id}</h2>
                    <Link to={`/mailboxes/${mailbox._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}


export default MailboxList;