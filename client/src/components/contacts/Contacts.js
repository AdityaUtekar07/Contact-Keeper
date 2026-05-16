import React, { Fragment, useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
    const contactContext = useContext(ContactContext);


    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    })
    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a Contact.</h4>
    }
    return (
        <Fragment>
            {contacts !== null && !loading ? (<TransitionGroup>
                {(filtered !== null ? filtered : contacts).map(contact => {
                    const nodeRef = React.createRef();
                    return (
                        <CSSTransition
                            key={contact.id}
                            timeout={500}
                            classNames="item"
                            nodeRef={nodeRef}
                        >
                            <div ref={nodeRef}>
                                <ContactItem contact={contact} />
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>) : <Spinner />}

        </Fragment>
    )
}

export default Contacts