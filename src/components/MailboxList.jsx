import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function MailboxList(props) {
        if (!props.mailboxes) {
            return <p> No mailboxes to show. </p>
        }
    return (
        <ul>
            {props.mailboxes.map((mailbox) => (
                <div key={mailbox._id} className="mail-box">
                    <h2>Box {mailbox._id}</h2>
                    <p>Box Size {mailbox.boxholder}</p>
                    <Link to={`/mailboxes/${mailbox._id}`}>View Details</Link>
                </div>
            ))}
        </ul>
    )
}


export default MailboxList;