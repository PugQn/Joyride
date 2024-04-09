//Many of the functions repeat, with only ID, name and function name changing. For efficiency, I have included comments on the first function of each type that I wrote. I have also highlighted them so it is easier to see which functions have comments. Functions that are the same have the same name beginning: toggle**, or show**. Generally regpay functions are singular and more complex.

//FAQ functions
// ******************** Comments here ********************
function toggleInsurance() {
  //Store element to variable a
  var a = document.getElementById("faqInsurance");
  //if "a" has display set to "none" (it is hidden)
  if (a.style.display === "block") {
    //change the display to "block" (it appears and pushes remaining divs down) 
    a.style.display = "none";
  }
  //if "a" has display set to "block" (you can see it)
  else {
    //change the display to "none" (it disappears)
    a.style.display = "block";
  }
} 
// *******************************************************
function toggleDelivery() {
  var b = document.getElementById("faqDelivery");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleAssisstance() {
  var b = document.getElementById("faqAssisstance");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleDeposit() {
  var b = document.getElementById("faqDeposit");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleChange() {
  var b = document.getElementById("faqChange");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleDiscount() {
  var b = document.getElementById("faqDiscount");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleAltUser() {
  var b = document.getElementById("faqAltUser");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

function showFaq() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("faq");
  var b = document.getElementById("faqFeedback");
  a.style.display = "block";
  b.style.display = "none";
}
function showFaqFeedback() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("faqFeedback");
  var b = document.getElementById("faq");
  a.style.display = "block";
  b.style.display = "none";
}

// ******************** Comments here ********************
function submitFeedback() {
  //Gather information from form
  var a = document.forms['feedback']['name'].value;
  var b = document.forms['feedback']['address'].value;
  var c = document.forms['feedback']['pNumber'].value;
  var d = document.forms['feedback']['email'].value;
  var e = document.forms['feedback']['type'].value;
  var f = document.forms['feedback']['feedbackText'].value;
  var g = document.forms['feedback']['contact'];
  //Check if customer wants to be contacted
  if (g.checked) {
    var h = "Yes";
  }
  else {
    var h = "No"
  }
  //Create an array for sending to server
  const feedback = {
    "name": "",
    "address": "",
    "pNumber": "",
    "email": "",
    "feedbackText": "",
    "contact": ""
  }
  //Collect data for sending to server
  feedback['name'] = a;
  feedback['address'] = b;
  feedback['pNumber'] = c;
  feedback['email'] = d;
  feedback['type'] = e;
  feedback['feedbackText'] = f;
  //Send feedback as string to server
  console.log("Send feedback to server: " + String(feedback));
  //Give customer alert to let them know feedback has been sent
  if (e == "Compliment") {
    alert("Thanks for your feedback. You make Joyriding Happy!");
  }
  else if (e == "Comment") {
    alert("Thank you for your feedback. We really appreciate you taking the time to let us know how we're doing.");
  }
  else if (e == "Question") {
    alert("Thanks for asking a question! We'll get back to you within one working day. Have a great day. Go happy!");
  }
  else if (e == "Complaint") {
    alert("We are so sorry you've had a bumpy Joyride. We will get back to you within one working day. Thank you for your feedback.")
  }
  //Return user to FAQ main page
  showFaq();
}
// *******************************************************

//Services Nav Functions
// ******************** Comments here ********************
// This is the first show function that I wrote. It changes element styles from 'none' to 'block', and vice versa, dependent where you are going. This specific one shows the Mountain bike details on the Services page.
function showSerNavMBike() {
  //Return window to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  //Store Services Nav choice as variable
  var a = document.getElementById("servicesMBike");
  //Store all other Sevices Nav views as variables
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesBike");
  var d = document.getElementById("servicesEBike");
  var e = document.getElementById("servicesScooter");
  var f = document.getElementById("servicesHelmet");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  //Change Choice view so it is visible
  a.style.display = "block";
  //Change all other services Nav views to invisible
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
// *******************************************************

function showSerNavBike() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesBike");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesEBike");
  var e = document.getElementById("servicesScooter");
  var f = document.getElementById("servicesHelmet");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavEBike() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesEBike");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesScooter");
  var f = document.getElementById("servicesHelmet");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavScoot() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesScooter");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesHelmet");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavHelmet() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesHelmet");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesScooter");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavMonster() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesMonster");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesScooter");
  var g = document.getElementById("servicesMap");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesHelmet");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavMap() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesMap");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesScooter");
  var g = document.getElementById("servicesHelmet");
  var h = document.getElementById("servicesPrices");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showSerNavPrices() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesPrices");
  var b = document.getElementById("servicesHow");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesScooter");
  var g = document.getElementById("servicesHelmet");
  var h = document.getElementById("servicesMap");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}
function showServices() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("servicesHow");
  var b = document.getElementById("servicesPrices");
  var c = document.getElementById("servicesMBike");
  var d = document.getElementById("servicesBike");
  var e = document.getElementById("servicesEBike");
  var f = document.getElementById("servicesScooter");
  var g = document.getElementById("servicesHelmet");
  var h = document.getElementById("servicesMap");
  var i = document.getElementById("servicesMonster");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  i.style.display = "none";
}

//Product Spec functions
function toggleMBikeFrame() {
  var b = document.getElementById("mBikeFrame");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleMBikeDrive() {
  var b = document.getElementById("mBikeDrive");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleMBikeWheels() {
  var b = document.getElementById("mBikeWheels");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleMBikeBreaks() {
  var b = document.getElementById("mBikeBreaks");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleMBikeOther() {
  var b = document.getElementById("mBikeOther");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

function toggleBikeFrame() {
  var b = document.getElementById("bikeFrame");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleBikeDrive() {
  var b = document.getElementById("bikeDrive");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleBikeWheels() {
  var b = document.getElementById("bikeWheels");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleBikeBreaks() {
  var b = document.getElementById("bikeBreaks");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleBikeOther() {
  var b = document.getElementById("bikeOther");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

function toggleEBikeFrame() {
  var b = document.getElementById("eBikeFrame");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleEBikeDrive() {
  var b = document.getElementById("eBikeDrive");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleEBikeWheels() {
  var b = document.getElementById("eBikeWheels");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleEBikeBreaks() {
  var b = document.getElementById("eBikeBreaks");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleEBikeOther() {
  var b = document.getElementById("eBikeOther");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

function toggleEScootSpecs() {
  var b = document.getElementById("eScootSpecs");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

function toggleMountHel() {
  var b = document.getElementById("mountHel");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}
function toggleRoadHel() {
  var b = document.getElementById("roadHel");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  else {
    b.style.display = "block";
  }
}

//Registered user details
// The user details when registering are stored here and used again when feedback is given or at check out. Since we are not using a server this information is not permanent. This is also the reason why the login doesn't work.
const userDetails = {
  "name" : "",
  "address" : "",
  "pNumber" : "",
  "email" : "",
}

//REGPAY functions
function showRPLogin() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("rpLogin");
  var b = document.getElementById("rpRegister");
  var c = document.getElementById("rpConfirmDetails");
  var d = document.getElementById("rpBook");
  var e = document.getElementById("confirmJoyride");
  var f = document.getElementById("pay");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}

// ******************** Comments here ********************
//This function sends an alert to let you know that the login function doesn't work
function loginalert() {
  alert("Thank you for trying to log in. This function doesn't work as we are not using a server to store a database of users. Please try the register function.")
}
// *******************************************************

function showRPRegister() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("rpRegister");
  var b = document.getElementById("rpLogin");
  var c = document.getElementById("rpConfirmDetails");
  var d = document.getElementById("rpBook");
  var e = document.getElementById("confirmJoyride");
  var f = document.getElementById("pay");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}
function showRPRegConfirm() {
  confirmDetails();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("rpConfirmDetails");
  var b = document.getElementById("rpLogin");
  var c = document.getElementById("rpRegister");
  var d = document.getElementById("rpBook");
  var e = document.getElementById("pay");
  var f = document.getElementById("confirmJoyride");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}
function showRPBook() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("rpBook");
  var b = document.getElementById("rpLogin");
  var c = document.getElementById("rpRegister");
  var d = document.getElementById("rpConfirmDetails");
  var e = document.getElementById("confirmJoyride");
  var f = document.getElementById("pay");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}
function showConfirmJoyride() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("confirmJoyride");
  var b = document.getElementById("rpLogin");
  var c = document.getElementById("rpRegister");
  var d = document.getElementById("rpConfirmDetails");
  var e = document.getElementById("rpBook");
  var f = document.getElementById("pay");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}
function showPay() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var a = document.getElementById("pay");
  var b = document.getElementById("rpLogin");
  var c = document.getElementById("rpRegister");
  var d = document.getElementById("rpConfirmDetails");
  var e = document.getElementById("rpBook");
  var f = document.getElementById("confirmJoyride");
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
}

// ******************** Comments here ********************
//This function takes the user given information and returns it for checking
function confirmDetails() {
  //Collect details from register form
  var a = document.forms.register.name.value;
  var b = document.forms.register.address.value;
  var c = document.forms.register.pNum.value;
  var d = document.forms.register.email.value;
  //Show details in table
  document.getElementById("nameConfirm").innerHTML = a;
  document.getElementById("addressConfirm").innerHTML = b;
  document.getElementById("pNumConfirm").innerHTML = c;
  document.getElementById("emailConfirm").innerHTML = d;
}
// *******************************************************

// ******************** Comments here ********************
//This function recieves the information and sends a message to the console (aka server)  and the user gets an alert.
function registerDeets() {
  //Collect details from register form
  var a = document.forms.register.name.value;
  var b = document.forms.register.address.value;
  var c = document.forms.register.pNum.value;
  var d = document.forms.register.email.value;
  //Save user details to constant userDeets
  userDetails['name'] = a;
  userDetails['address'] = b;
  userDetails['pNumber'] = c;
  userDetails['email'] = d;
  //Send feedback as string to server.
  //Prints confirmed details to console. If this site were to have a server, these details would be POSTed to the server for storage.
  console.log("Send details to server: " + String(userDetails));
  //Let user know their details have been saved
  alert("Thank you for registering. We have just sent an email to " + userDetails['email']);
  //Send user to booking view
  showRPBook();
}
// *******************************************************

function showHelmets() {
  //Store different "selects" as variables
  var c = document.forms['riderDetails']['riderRide'].value;
  var d = document.forms['riderDetails']['helmetCheck'];
  var z = document.getElementById("bookHelmetMountain");
  var y = document.getElementById("bookHelmetRoad");
    //Check if customer wants a helmet
  if (d.checked) {
    //If they are riding a mountain bike they need a mountain bike helmet
    if (c == "Mountain bike") {
      z.style.display = "block";
      y.style.display = "none";
    }
    else {
      //Any other ride needs a road bike helmet
      y.style.display = "block";
      z.style.display = "none";
      }
  }
  else {
    z.style.display = "none";
    y.style.display = "none";
  }
}

// ******************** Comments here ********************
//This show function shows the choice of bike sizes based on the selection of vehicle. Initially, I'd forgotten about the monster scooter requirement which meant that the only vehicle which didn't need a bike size choice. This has been amended to include the <div> being hidden when the monster scooter is chosen.
function showBikes() {
  //Gather type of ride information from form
  var c = document.forms['riderDetails']['riderRide'].value;
  //Store hidden DIVs to variables
  var x = document.getElementById("bikeSize");
  //Check height if bike to apply correct size
  if (c != "Electric scooter") {
    x.style.display = "block";
  }
  else if (c != "Monster scooter") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
// *******************************************************

function showMultiday() {
  var a = document.getElementById("dayNumber");
  var b = document.forms["riderDetails"]["multiCheck"].value;
  var c = document.getElementById("dayNumberDiscount");["dayNumberDiscount"].value;
  if (b == "Yes"){
    a.style.display = "block";
    c.style.display = "block";
  }
  else {
    a.style.display = "none";
    c.style.display = "none";
  }
  
}
function showEmailInput() {
  var a = document.getElementById('emailInput');
  var b = document.forms.emailBooking.emailCheck;
  var c = userDetails["email"]
  if (b.checked) {
    if (c.length > 0) {
      a.style.display = "none";
    }
    else {
      a.style.display = "block";
    }
  }
}

// ******************** Comments here ********************
// This one took a bit of working out. It takes the user choices and displays them in a table for confirmation. It's a bit odd without form validation as it's possible to select/skip some options without consequence. But again, this is beyond the scope of this assessment. The most exciting thing about this one is the spliting of time and using milliseconds to figure out the time. More on this in the next function.
function riderConfirm() {
  //Collect details from register form
  var a = document.forms.riderDetails.riderName.value;
  var b = document.forms.riderDetails.riderAge.value;
  var c = document.forms.riderDetails.riderRide.value;
  var d = document.forms.riderDetails.riderBikeSize.value;
  var e = document.forms.riderDetails.helmetCheck;
  var f = document.forms.riderDetails.riderHelMountSize.value;
  var g = document.forms.riderDetails.riderHelRoadSize.value;
  var h, i;
  var j = document.forms.riderDetails.riderDate.value;
  var k = document.forms.riderDetails.riderCollectTime.value;
  var l = document.forms.riderDetails.multiCheck.value;
  var m = document.forms.riderDetails.riderDayNumber.value;
  var n, o, p, q;
  var r = document.forms.riderDetails.riderReturnTime.value;
  var s = document.forms.riderDetails.riderLocation.value;
  var t, u, v, w;
  //Hide bike size if scooter selected
  if (c == "Electric scooter") {
    document.getElementById("riderBikeSizeConfirm").style.display = "none";
  }
  else {
    document.getElementById("riderBikeSizeConfirm").style.display = "block";
  }
  //Check if helmet wanted
  if (e.checked) {
    //Check kind of helmet needed
    if (c == "Mountain bike") {
      h = "Full-face helmet";
      i = f;
      //Show helmet size
      document.getElementById("riderHelSizeConfirm").style.display = "block";
    }
    else {
      h = "Standard helmet";
      i = g;
      //Show helmet size
      document.getElementById("riderHelSizeConfirm").style.display = "block";
    }
  }
  else {
    h = "None";
    //Hide helmet size
    document.getElementById("riderHelSizeConfirm").style.display = "none";
  }
  //Drop off date: 
  //Convert collection date to milliseconds and save as variable
  n = Date.parse(j)
  //Add number of days to collect date as milliseconds
  o = n + m*86400000
  p = new Date(o)
  //Change Collect date to same format
  q = new Date(n)
  //Add "am" or "pm" to return time
  v = r.split(":")
  if (v[0] < 12) {
    w = " am"
  }
  else {
    w = " (pm)"
  }
  //Add "am" or "pm" to collection time.
  //I was a bit concerned about the confusion that 24hr time brings, so I added am and pm. But I'm still not happy with this solution.
  t = k.split(":")
  if (t[0] < 12) {
    u = " am"
  }
  else {
    u = " (pm)"
  }
  //Show details in table
  document.getElementById("riderNameConfirm").innerHTML = a;
  document.getElementById("riderAgeConfirm").innerHTML = b;
  document.getElementById("riderRideConfirm").innerHTML = c;
  document.getElementById("riderBikeSizeConfirm").innerHTML = d;
  document.getElementById("riderHelConfirm").innerHTML = h;
  document.getElementById("riderHelSizeConfirm").innerHTML = i;
  document.getElementById("riderCollectConfirm").innerHTML = q.toDateString() + " at " + k + u;
  document.getElementById("riderReturnConfirm").innerHTML = p.toDateString() + " at " + r + w;
  document.getElementById("riderLocationConfirm").innerHTML = s;
  document.getElementById("confirmJoyride").style.display = "block"
  document.getElementById("rpBook").style.display = "none"
  total()
  //Show confirmation article
  showConfirmJoyride();
}
// *******************************************************

// ******************** Comments here ********************
// This function has all the calculations in it. It also has time splitting, and day, hour, and rounding calculations. I also included a free fifth day (silly me) which ended up being less work to include in the calculations than remove from the text in the other pages. I got to use the remainder operation for this.
function total() {
  //Collect cost contributing inputs
  var a = document.forms.riderDetails.riderAge.value;
  var b = document.forms.riderDetails.riderRide.value;
  var c = document.forms.riderDetails.helmetCheck;
  var d = document.forms.riderDetails.riderDate.value;
  var e = document.forms.riderDetails.riderCollectTime.value;
  var f = document.forms.riderDetails.multiCheck.value;
  var g = document.forms.riderDetails.riderDayNumber.value;
  var h = document.forms.riderDetails.riderReturnTime.value;
  var i; //Hourly rate 
  var j; //Helmet deposit
  var k; //Overnight charge
  var l; //Number of whole days
  var u; //Hours to charge
  var r; //Total hourly cost
  var q; //Total cost
  //Hourly rate for the specific vehicle based on rider and ridertype
  if (a = "Adult") {
    //Check if it is at a higher rate
    if (b == "Mountain bike")  {
      i = 20;
    }
    //Check if it is at other higher rate
    else if (b == "Electric bike") {
      i = 20;
    }
    //Then it must be at the lower adult rate
    else {
      i = 15;
    }
  }
  else {
    if (b == "Mountain bike")  {
      i = 15;
    }
    else if (b == "Electric bike") {
      i = 15;
    }
    else {
      i = 10;
    }
  }
  document.getElementById('hourlyRate1').innerHTML = i;
  document.getElementById('hourlyRate2').innerHTML = i;
  //Is there a helmet?
  if (c.checked) {
    j = 10;
  }
  else {
    j = 0;
  }
  document.getElementById('helmetDeposit').innerHTML = j;
  //Calculate whole day cost
  t = parseInt(g)
  if (f == "Yes") {
    k = (t * 5) + (t * i * 8);
  }
  else {
    k = 0;
  }
  document.getElementById('overnightTotal').innerHTML = k;
  //Total hours outside of overnights
    //Collect time converted to minutes
  z = e.split(":");
  zh = parseInt(z[0]);
  zm = parseInt(z[1]);
  cm = (zh*60) + zm;
    //Return time converted to minutes
  y = h.split(":");
  yh = parseInt(y[0]);
  ym = parseInt(y[1]);
  rm = (yh * 60) + ym;
    //Return less Collect minutes
  x = rm - cm;
  //Remainder gives total hours to charge if greater than 0
  if (x > 0) {
    p = x / 60;
    u = Math.ceil(p);
  }
  else {
    u = 0;
  }
  document.getElementById('hours').innerHTML = u;
  //Calculate total cost of hours outside of 24 hour blocks
  r = u * i
  document.getElementById('hourTotal').innerHTML = r;
  //Discount for 5th day
  m = t / 5
  n = Math.floor(m)
  o = n * 8 * i;
  document.getElementById('discount').innerHTML = o;
  //Total Cost
  q = j + k + r - o;
  document.getElementById('totalCost').innerHTML = q;
  document.getElementById('amountDue').innerHTML = "$ " + q;
  document.getElementById("confirmJoyride").style.display = "none";
  document.getElementById("pay").style.display = "block";
}
// *******************************************************

// ******************** Comments here ********************
//This function has two random number generators, one for the vehicle and one for the helmet. I orignially was going to just set up the alert to say an email had been sent but I think the random function was part of the brief so I have included the generated numbers in an alert.
function paid() {
  var a = document.forms.riderDetails.helmetCheck;
  var b = document.forms.riderDetails.riderRide.value;
  var g = document.forms.emailBooking.email.value;
  var h = userDetails["email"]
  //Add email to userDetails array
  if (h.length == "") {
    i = g;
    console.log("i" + i)
  }
  else {
    i = h;
    console.log("i" + i)
  }
  //Create a random numerical code. Source: https://www.w3schools.com/js/js_random.asp
  c = Math.floor(Math.random() * 1000) + 1000;
  console.log("c" + c)
  d = Math.floor(Math.random() * 1000) + 1000;
  console.log("d" + d)
  //Compile alert message that makes sense
  if (a.checked) {
    e = "s are:";
    f = "\nHelmet code: " + d + "\n\nYou will recieve an email at " + i + " with your code information. No worries!";
  }
  else {
    e = " is:";
    f = " ";
  }
  alert("Thank you for choosing to Joyride with us! Your access code" + e + "\n" + b + " code: " + c + f + "\nGo Happy!")
  window.location.href = "index.html";
}
// *******************************************************



