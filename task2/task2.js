/*
Q:
Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
(note: give general solution).

Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].
*/

const emailArray = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'];

emailArray.sort();

function sendmail(email) {
    // send email
    console.log(email);
}

let domains = [];

emailArray.forEach(email => {
    const domain = email.split('@')[1];
    if (!domains.includes(domain)) {
        domains.push(domain);
        sendmail(email);
    }
})

