$(function () {

    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contactus.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);//alert('test');
                        $('#contact-form')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
			//$('#contact-form').form_message.focus();
			
            return false;
        }
    })
});

//#########################################################################################################################################

$(function () {

    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#investform').validator();
    $('#investform').on('submit', function (e) {
		
        if (!e.isDefaultPrevented()) {//alert("Inside loop");
            var url = "investform.php";
//alert(url);
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#investform').find('.messages').html(alertBox);//alert('test');
                        $('#investform')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
			//$('#invest-form').form_message.focus();
			
            return false;
        }
    })
});

//#########################################################################################################################################

$(function () {

    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#investform1').validator();
    $('#investform1').on('submit', function (e) {
		
        if (!e.isDefaultPrevented()) {//alert("Inside loop");
            var url = "agentfeedback1.php";
//alert(url);
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#investform1').find('.messages').html(alertBox);//alert('test');
                        $('#investform1')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
			//$('#invest-form').form_message.focus();
			
            return false;
        }
    })
});

//#########################################################################################################################################



$(function () {

    $('#searchform').validator();

    $('#searchform').on('submit', function (e) {//alert('test');
        if (!e.isDefaultPrevented()) {//alert('test1');
            var url = "properties.php?";
//alert(url);

        }
    })
});

//#########################################################################################################################################

$(function () {

    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#enquiry-form').validator();

    $('#enquiry-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "enquiry.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#enquiry-form').find('.messages').html(alertBox);//alert('test');
                        $('#enquiry-form')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
			//$('#contact-form').form_message.focus();
			
            return false;
        }
    })
});

//##############################################################################################################################################################################################
$(function () {

    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#contact-formSHJ').validator();

    $('#contact-formSHJ').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "vakshjcontactus.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-formSHJ').find('.messages').html(alertBox);//alert('test');
                        $('#contact-formSHJ')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
			//$('#contact-form').form_message.focus();
			
            return false;
        }
    })
});

//#########################################################################################################################################
<!-- ############################################ Search Script For Drop Down List ############################################ -->
function setOptions(o)
{ //alert(o);
var types = document.searchform.form_Ptype;

types.options.length = 0;

if (o == "R") 
{ 
types.options[types.options.length] = new Option('Select Property Type','');
types.options[types.options.length] = new Option('Apartment','Apartment');
types.options[types.options.length] = new Option('Villa','Villa');
types.options[types.options.length] = new Option('Land','Land');
types.options[types.options.length] = new Option('Warehouse','Warehouse');
document.searchform.form_bedroom.disabled=false;
document.searchform.form_bathroom.disabled=false;
} 
if (o == "C") 
{ 
types.options[types.options.length] = new Option('Select Property Type',''); 
types.options[types.options.length] = new Option('Office','Office');
types.options[types.options.length] = new Option('Shop','Shop');
types.options[types.options.length] = new Option('Land','Land');
types.options[types.options.length] = new Option('Warehouse','Warehouse');
types.options[types.options.length] = new Option('Labor Camp','Labor Camp');
document.searchform.form_bedroom.disabled=true;
document.searchform.form_bathroom.disabled=true;
}

if (o == "") 
{ 
types.options[types.options.length] = new Option('Select Property Type','');
} 


if (o == "Sale") 
{ 
types.options[types.options.length] = new Option('Select Property Type','');
} 
if (o == "Rent" ) 
{ 
types.options[types.options.length] = new Option('Select Property Type','');
} 
}
<!--##################################################################################### -->
function setLocations(o)
{ //alert(o);
var types1 = document.searchform.form_Location;

types1.options.length = 0;

if (o == "Dubai") 
{ 
types1.options[types1.options.length] = new Option('Select Location','');
types1.options[types1.options.length] = new Option('Al Aweer','Al Aweer');
types1.options[types1.options.length] = new Option('Al Barsha','Al Barsha');
types1.options[types1.options.length] = new Option('Al Warsan','Al Warsan');
types1.options[types1.options.length] = new Option('Al Ghusais','Al Ghusais');
types1.options[types1.options.length] = new Option('Al Garhoud','Al Garhoud');
types1.options[types1.options.length] = new Option('Al Hamriya','Al Hamriya');
types1.options[types1.options.length] = new Option('Al Jaddaf','Al Jaddaf');
types1.options[types1.options.length] = new Option('Al Nadha','Al Nadha');
types1.options[types1.options.length] = new Option('Al Quoz','Al Quoz');
types1.options[types1.options.length] = new Option('Al Raffa','Al Raffa');
types1.options[types1.options.length] = new Option('Al Satwa','Al Satwa');
types1.options[types1.options.length] = new Option('Al Karama','Al Karama');
types1.options[types1.options.length] = new Option('Bur Dubai','Bur Dubai');
types1.options[types1.options.length] = new Option('Business Bay','Business Bay');
types1.options[types1.options.length] = new Option('Culture Village','Culture Village');
types1.options[types1.options.length] = new Option('Deira','Deira');
types1.options[types1.options.length] = new Option('District One','District One');
types1.options[types1.options.length] = new Option('Dubai Marina','Dubai Marina');
types1.options[types1.options.length] = new Option('Dubai Industrial Park','Dubai Industrial Park');
types1.options[types1.options.length] = new Option('Dubai Investment Park','Dubai Investment Park');
types1.options[types1.options.length] = new Option('Dubai Land','Dubai Land');
types1.options[types1.options.length] = new Option('Dubai Silicon Oasis','Dubai Silicon Oasis');
types1.options[types1.options.length] = new Option('Dubai Sport City','Dubai Sport City');
types1.options[types1.options.length] = new Option('Emirates Hills','Emirates Hills');
types1.options[types1.options.length] = new Option('International City','International City');
types1.options[types1.options.length] = new Option('Jumeirah','Jumeirah');
types1.options[types1.options.length] = new Option('Jebel Ali','Jebel Ali');
types1.options[types1.options.length] = new Option('Jebel Ali Free Zone (Jafza)','Jebel Ali Free Zone');
types1.options[types1.options.length] = new Option('Jumeirah Lake Towers','Jumeirah Lake Towers');
types1.options[types1.options.length] = new Option('Jumeirah Golf Estates','Jumeirah Golf Estates');
types1.options[types1.options.length] = new Option('Jumeirah Village Circle (JVC)','Jumeirah Village Circle');
types1.options[types1.options.length] = new Option('Muhaisnah','Muhaisnah');
types1.options[types1.options.length] = new Option('Palm Jumeirah','Palm Jumeirah');
types1.options[types1.options.length] = new Option('Ras Al Khor Industrial','Ras Al Khor Industrial');
types1.options[types1.options.length] = new Option('Rashidiya','Rashidiya');
types1.options[types1.options.length] = new Option('Sheikh Zayed Road','Sheikh Zayed Road');
types1.options[types1.options.length] = new Option('Umm Al Sheif','Umm Al Sheif');
}

if (o == "Sharjah") 
{ 
types1.options[types1.options.length] = new Option('Select Location','');
types1.options[types1.options.length] = new Option('Abu Shagara','Abu Shagara');
types1.options[types1.options.length] = new Option('Al Bu Daniq','Al Bu Daniq');
types1.options[types1.options.length] = new Option('Al Ghuwair','Al Ghuwair');
types1.options[types1.options.length] = new Option('Al Majaz','Al Majaz');
types1.options[types1.options.length] = new Option('Al Musalla','Al Musalla');
types1.options[types1.options.length] = new Option('Al Nabba','Al Nabba');
types1.options[types1.options.length] = new Option('Al Qasimia','Al Qasimia');
types1.options[types1.options.length] = new Option('Al Qulaya','Al Qulaya');
types1.options[types1.options.length] = new Option('Al Rolla','Al Rolla');
types1.options[types1.options.length] = new Option('Al Shuweiheen','Al Shuweiheen');
types1.options[types1.options.length] = new Option('Al Soor','Al Soor');
types1.options[types1.options.length] = new Option('Al Sharq','Al Sharq');
types1.options[types1.options.length] = new Option('Bu Tina','Bu Tina');
types1.options[types1.options.length] = new Option('Industrial Area','Industrial Area');
types1.options[types1.options.length] = new Option('Muwailih Commercial','Muwailih Commercial');
}

} 

//#####################################################################################################################################
