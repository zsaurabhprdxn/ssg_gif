---
layout: "homepage/index.njk"
pageTitle: "Form"
pageStyle: "form/form"
---

<div class="contact-us-form-container">
    <form name="contact-us-form-dev" action="/en-us/contact-us/thank-you" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <div class="contact-us-form-wrapper">
            <div class="form-input-data">
                <label for="subject">Reason for Contact:</label>
                <select class="reason_contact" name="subject" id="subject">
                    <option value="" selected>Select One</option>
                    <option value="Customer Service/Billing">Customer Service/Billing</option>
                    <option value="Online Acct Help">Online Acct Help</option>
                    <option value="Cancellations">Cancellations</option>
                    <option value="Repair/Claims">Repair/Claims</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other</option>
                </select>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-name">Name</label>
                <input  id="contact-form-name" maxlength="40" name="name" size="20" type="text" placeholder="Enter name"/>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-email">Email</label>
                <input  id="contact-form-email" maxlength="80" name="email" size="20" type="email" placeholder="Enter email"/>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-phone">Phone Number</label>
                <input class="contact-us-form-phone" id="contact-form-phone" maxlength="14" name="phone" size="20" placeholder="Enter phone number"/>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-zip">Zip Code</label>
                <input  id="contact-form-zip" maxlength="5" name="zip" size="20" type="hidden" inputmode="decimal" pattern="[0-9]*" placeholder="Enter Zip Code in which you reside" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-address">Address (optional)</label>
                <input type="text" name="address" id="contact-form-address" placeholder="Enter Address">
                <span class="field-error"></span>
            </div>
            <div class="form-input-data">
                <label for="contact-form-message">Message (optional)</label>
                <textarea name="message" id="contact-form-message" cols="30" rows="10" placeholder="Here is where the person can type a message"></textarea>
                <span class="field-error"></span>
            </div>
            <div class="form-input-data" data-netlify-recaptcha="true">
              <span class="field-error"></span>
            </div>
            <div class="form-input-data">
            <button id="contact-form-submit" type="submit" value="Submit">Submit</button>
            </div>
        </div>
    </form>
</div>`;