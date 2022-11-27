import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./FeedbackForm.css"
import Radios from "../../components/Radios/Radios";
import Select from "../../components/Select/Select";

const FeedbackForm = () => {

        const [email, setEmail] = useState('')
        const [emailError, setEmailError] = useState('')

        const [name, setName] = useState('')
        const [nameError, setNameError] = useState('')

        const [message, setMessage] = useState('')
        const [messageError, setMessageError] = useState('')

        const [agreement, setAgreement] = useState('')
        const [agreementError, setAgreementError] = useState('')

        const [country, setCountry] = useState('russia')

    const [sexVariants, setSexVariants] = useState([

            { id: 'male', label: 'Male', isChecked: true, },
            { id: 'female', label: 'Female', },
    ])

    const onSexVariantsChange = (id) => {
       const newSexVariants = sexVariants.map((sexVariant) => ({
           ...sexVariant,
           isChecked: sexVariant.id === id,
       }))

        setSexVariants(newSexVariants)
    }

    const logResult = () => {
        console.log ({
            email,
            name,
            message,
            agreement,
            sex: sexVariants.find(({ isChecked }) => isChecked).id,
            country
        })
    }


    const isEmailValid = () => {
        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegExp.test(email.toLowerCase())
    }

    const validate = () => {

            let hasError = false

            if (isEmailValid(email)) {
                setEmailError('')
        } else {
            setEmailError('Incorrect email')
                hasError = true
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
            hasError = true
        }

        if (agreement) {
            setAgreementError('')
        } else {
            setAgreementError('Required field')
            hasError = true
        }
        return !hasError
    }

    const onSubmit = (event) => {
      event.preventDefault()

            const isValid = validate()
            if (isValid) {
            logResult()
        }
    }

    const onCountrySelectedChange = ({ target }) => {
        setCountry(target.value)
    }

    return (
        <form className="feedback-form" onSubmit={onSubmit}>
            <div className="feedback-form__item">
                <Input
                    label="Email"
                    isLabelHidden={true}
                    name="email"
                    type="text"
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
                    name="agreement"
                    error={agreementError}
                    isChecked={agreement}
                    onChange={({ target }) => setAgreement(target.checked)}
                />
            </div>

            <div className="feedback-form__item">
                <Radios
                name="sex"
                label="Choose your sex:"
                items={sexVariants}
                onChange={onSexVariantsChange}
                />
            </div>

            <div className="feedback-form__item">
                <Select
                    name="Country"
                    value={country}
                    options={[
                {
                    value: 'russia',
                    label: 'Russia',
                    isSelected: true,
                },
                {
                    value: 'poland',
                    label: 'Poland',
                },
                {
                    value: 'china',
                    label: 'China',
                },
            ]}
                    onChange={onCountrySelectedChange}
                    />
            </div>

            <div className="feedback-form__item">
              <button
                  className="feedback-form__item-button"
                  type="submit">
                  Send data
              </button>
            </div>
        </form>
    )
}

export default FeedbackForm;