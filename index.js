// Write your solution in this file!
window.customerName = "bob";

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "some customer";
    leastFavoriteCustomer = "another customer";
}