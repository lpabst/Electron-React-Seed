var requestify = require('requestify');

module.exports = {

    authenticateUser: (event, arg) => {
        console.log('auth started')
        let { url, userName, password, companyName } = arg;
        requestify.post(url, {
            userName: userName,
            password: password,
            companyName: companyName
        })
        .then(
            function(response){
                var data = response.getBody();
                console.log(data);
                event.sender.send('authenticateUserResult', {data: data});
            },
            function(err){
                console.log(err);
                event.sender.send('authenticateUserResult', 'Error occurred. Please check username and password and try again.');
            }
        );
    }

}