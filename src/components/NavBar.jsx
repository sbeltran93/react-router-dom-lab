import { Link } from 'react-router-dom';

export default function NavBar (props) {
    return (
        <header>
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/mailboxes'>Mailboxes</Link>    
                <Link to='/new-mailbox'>New Mailbox</Link>
            </div>
        </header>
        );
};