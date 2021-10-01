
const reCaptchaField = (err_msg, fieldName) => {
    if (grecaptcha.getResponse() == "") {
      fieldName.addClass('val-error');
      fieldName.next().text(err_msg);
      fieldName.next().show();
    } else {
      fieldName.removeClass('val-error');
      fieldName.next().hide();
    }
  }


const onSubmitContactUsForm = (e) => {

    let form_gRecaptcha = $('.g-recaptcha');

    reCaptchaField('The recaptcha field is required.', form_gRecaptcha);

    if ($('.form-input-data .g-recaptcha').hasClass('val-error') || $('.form-input-data input').hasClass('val-error') || $('.form-input-data select').hasClass('val-error')) {
      return false;
    }
    return true;
}


$(".contact-us-form-wrapper #contact-form-submit").on("click", onSubmitContactUsForm);
