export default function Contact({

}) {
    function validateForm(frm) {
        if (frm.Name.value == "") {alert('Name is required.');frm.Name.focus();return false;}
        if (frm.FromEmailAddress.value == "") {alert('Email address is required.');frm.FromEmailAddress.focus();return false;}
        if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.FromEmailAddress.focus();return false;}
        if (frm.Comments.value == "") {alert('Please enter comments or questions.');frm.Comments.focus();return false;}
        if (frm.skip_CaptchaCode.value == "") {alert('Enter web form code.');frm.skip_CaptchaCode.focus();return false;}
        return true; 
    }
    
    function reloadCaptchaImage() {
        var obj = document.getElementById("captcha-image");
        var src = '' + obj.src;
        obj.src = '';
        var date = new Date();
        var pos = src.indexOf('&rad=');
        if (pos >= 0) { src = src.substr(0, pos); }
        obj.src = src + '&rad=' + date.getTime();
        return false; 
    }

    var thankYouUrl = window.location.href.split('#/contact')[0] + 'thank-you.html';

    return (
        <>
            <div className="section-title">
                I'd like to hear from you
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p>
                        Want me to play at your venue? Check out my <a href="#repertoire">repertoire</a> and
                        give me a shout!
                    </p>
                    
                    <p>
                        Fancy doing music or a jam together? I'm up for that 🤘
                    </p>

                    <p>
                        Want me to support your good cause? Let's discuss that.
                    </p>
                    
                    <p>
                        Best way to contact me is at my email address 
                        <a href="mailto:ferohajnovic@gmail.com">ferohajnovic@gmail.com</a> or via the 
                        form on this page
                    </p>
                    
                    <p>
                        You can also find me on social media:
                    </p>
                    
                    <a href="https://www.facebook.com/feromusician" className="fa fa-facebook"></a>
                    <a href="https://www.facebook.com/feromusician">@feromusician</a>

                    <br/>
                    
                    <a href="https://www.instagram.com/fero.hajnovic" className="fa fa-instagram"></a>
                    <a href="https://www.instagram.com/fero.hajnovic">@fero.hajnovic</a>

                    <br/>

                    <a href="https://soundcloud.com/ferohajnovic" className="fa fa-soundcloud"></a>
                    <a href="https://soundcloud.com/ferohajnovic">ferohajnovic</a>

                    <br/>

                    <a href="https://www.youtube.com/channel/UCbFZJZ1bf8nMcLPJie5-mTA" className="fa fa-youtube"></a>
                    <a href="https://www.youtube.com/channel/UCbFZJZ1bf8nMcLPJie5-mTA">Fero Hajnovic</a>

                    <br/>
                </div>

                <div className="col-sm-6">
                    <form 
                        action="https://www.SnapHost.com/captcha/send.aspx" 
                        id="contact-us-form" 
                        method="post" 
                        onSubmit={validateForm} 
                        target="_top"
                    >
                        <input name="skip_WhereToSend" type="hidden" value="ferohajnovic@gmail.com" />
                        <input name="skip_SnapHostID" type="hidden" value="DK73LGGU9GJC" />
                        <input name="skip_WhereToReturn" type="hidden" value={thankYouUrl} />
                        <input name="skip_Subject" type="hidden" value="Contact Us Form" />
                        <input name="skip_ShowUsersIp" type="hidden" value="1" />
                        <input name="skip_SendCopyToUser" type="hidden" value="1" />

                        <b>Name*:</b><br/>
                        <input name="Name" type="text" maxLength="60" style={{"width":"100%", "maxWidth": "350px"}} /> <br/>
                        
                        <b>Phone number:</b><br/>
                        <input name="PhoneNumber" type="text" maxLength="43" style={{"width":"100%", "maxWidth": "350px"}} /><br/>
                        
                        <b>Email address*:</b><br/>
                        <input name="FromEmailAddress" type="text" maxLength="60" style={{"width":"100%", "maxWidth": "350px"}} /><br/>

                        <b>Text*:</b><br/>
                        <textarea name="Comments" rows="7" cols="40" style={{"width":"100%", "maxWidth": "350px"}} maxLength="2000"></textarea><br/>

                        <div className="row">
                            <div className="col no-flex-grow">
                                <a href="#" onClick={reloadCaptchaImage}>
                                    <span>(reload image)</span>
                                </a> <br/>
                                <a href="https://www.snaphost.com/captcha/ReadyForms/ContactUsForm.aspx">
                                    <img 
                                        id="captcha-image" 
                                        alt="Contact Us form" 
                                        title="HTML code for Contact Us form"
                                        src="https://www.SnapHost.com/captcha/CaptchaImage.aspx?id=DK73LGGU9GJC&ImgType=2" 
                                    />
                                </a>
                            </div>
                            <div className="col">
                                <i>Enter the code*:</i><br/>
                                <input name="skip_CaptchaCode" type="text" style={{"width":"80px"}} maxLength="6" />
                            </div>
                        </div>
                        * -> required fields. 
                        <br/>
                        <input name="skip_Submit" type="submit" value="Submit" />
                        <br />
                        <span id="powered-by-snap">
                            Powered by <a href="http://www.snaphost.com/captcha/CaptchaGuestbook.aspx" alt="guestbook html" title="guestbook html">
                                SnapHost
                            </a>
                        </span>
                    </form>
                </div>
            </div> 
        </>
    );
}