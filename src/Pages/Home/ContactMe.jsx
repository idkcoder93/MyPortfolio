export default function ContantMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2>Contact Me</h2>
                <p className="text-lg">This is an example form, it is not functional.</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text--md" name="first-name" id="first-name"
                        required/>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text--md" name="last-name" id="last-name"
                        required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text--md" name="email" id="email"
                        required/>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="phone-number" className="contact--input text--md" name="phone-number" id="phone-number"
                        required/>
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contact--input text-md"><option>Select one...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text--md" name="message" id="message"
                        rows="8"
                        placeholder="Type your message..."/>
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label">
                        <input type="checkbox" required name="checkbox"
                        id="checkbox" />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary conact--form--btn">Submit</button>
                    </div>
            </form>
        </section>
    )
}