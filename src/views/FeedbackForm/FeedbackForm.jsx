import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";

const FeedbackForm = () => {

    const [fields, setFields] = useState({
        email: '',
        name: '',
        message: '',
        agreement: true,
    })

    return (
        <form className="feedback-form">
            <div className="feedback-form__item">
                <Input
                    label="Email"
                    isLabelHidden={true}
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={fields.email}
                    // onChange={() => }
                />
            </div>

            <div className="feedback-form__item">
                <Input
                    label="Name"
                    name="name"
                    placeholder="Vladimir Filippov"
                    value={fields.name}
                />
            </div>

            <div className="feedback-form__item">
                <Input
                    label="Message"
                    type="textarea"
                    name="message"
                    placeholder="Your message"
                    value={fields.message}
                />
            </div>

            <div className="feedback-form__item">
                <Checkbox
                    label="I agree with terms"
                    name="agreement"
                    isChecked={fields.agreement}
                />
            </div>

        </form>
    );
};

export default FeedbackForm;