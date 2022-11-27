import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./FeedbackForm.css"

const FeedbackForm = () => {

        const [email, setEmail] = useState('')
        const [emailError, setEmailError] = useState('')

        const [name, setName] = useState('')
        const [nameError, setNameError] = useState('')

        const [message, setMessage] = useState('')
        const [messageError, setMessageError] = useState('')

        const [agreement, setAgreement] = useState(false)
        const [agreementError, setAgreementError] = useState('')

    const logResult = () => {
        console.log ({
            email,
            name,
            message,
            agreement,
        })
    }

    const isEmailValid = () => {
        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegExp.test(email.toLowerCase())
    }

    const validate = () => {
            if (isEmailValid(email)) {
                setEmailError('')
        } else {
            setEmailError('Incorrect email')
        }

            if (name.length > 0) {
                setNameError('')
        } else {
                setNameError('Required field')
        }

        if (message.length > 0) {
            setMessageError('')
        } else {
            setMessageError('Required field')
        }

        if (agreement) {
            setAgreementError('')
        } else {
            setAgreementError('Required field')
        }
    }

    const onSubmit = (event) => {
      event.preventDefault()

            const isValid = validate()
            if (isValid) {
            logResult()
        }
    }

    return (
        <form className="feedback-form" onSubmit={onSubmit}>
            <div className="feedback-form__item">
                <Input
                    label="Email"
                    isLabelHidden={true}
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    error={emailError}
                    onChange={({ target }) => setEmail(target.value)}
                />
            </div>

            <div className="feedback-form__item">
                <Input
                    label="Name"
                    name="name"
                    placeholder="Vladimir Filippov"
                    value={name}
                    error={nameError}
                    onChange={({ target }) => setName(target.value)}

                />
            </div>

            <div className="feedback-form__item">
                <Input
                    label="Message"
                    type="textarea"
                    name="message"
                    placeholder="Your message"
                    value={message}
                    error={messageError}
                    onChange={({ target }) => setMessage(target.value)}

                />
            </div>

            <div className="feedback-form__item">
                <Checkbox
                    label="I agree with terms"
                    name="agreemen"
                    error={agreementError}
                    isChecked={agreement}
                    onChange={({ target }) => setAgreement(target.checked)}

                />
            </div>

            <div className="feedback-form__item">
              <button
                  className="feedback-form__item-button"
                  type="submit"
              >
                  Send data
              </button>
            </div>
        </form>
    )
}

export default FeedbackForm;