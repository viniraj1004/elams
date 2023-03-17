function getFormData() {

    console.log("calling funtion");
    let lanId = document.getElementById('lanId').value;
    console.log(lanId);

    let password = document.getElementById('password').value;
    console.log(password);

    let checkValue = "admin"
    console.log("if condition display")
    console.log(lanId + '==' + checkValue + '&&' + password + '==' + checkValue);
    if (lanId == checkValue && password == checkValue) {
        console.log('Yay! its valid');
        window.location.href = "/homePage";
    } else {
        console.log('No its invalid');
        alert('Invalid login details.Please enter LanID and Password to admin!');
    }
}