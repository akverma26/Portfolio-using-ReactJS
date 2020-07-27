import React from "react";

import "./../assets/css/contact-form.css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="contact-form" id="contact">
                <div className="title">
                    Contact <span>Let's connect</span>
                </div>

                {status === "" && (
                    <React.StrictMode>
                        <div className="email">
                            Drop me a mail @{" "}
                            <a href="mailto:akverma0026@google.com?Subject=Portfolio Mail Contact Request">
                                akverma0026@gmail.com
                            </a>
                            <span>or Submit the following form...</span>
                        </div>
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/mbjzqwdw"
                            method="POST"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email ID"
                            />
                            <input
                                type="text"
                                name="message"
                                placeholder="Your Message"
                            />
                            <div className="button-and-status">
                                <button>Submit</button>
                            </div>
                        </form>
                    </React.StrictMode>
                )}

                {status === "SUCCESS" && <p>Thanks!</p>}
                {status === "ERROR" && (
                    <p>
                        Ooops! There was an error.{" "}
                        <span onClick={this.retry}>Click to Retry.</span>
                    </p>
                )}
            </div>
        );
    }

    retry = () => {
        this.setState({ status: "" });
    };

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
