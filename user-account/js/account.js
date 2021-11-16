//Existing users
let users = [
    {
        username: "avinesh1906",
        email: "ac2024@live.mdx.ac.uk",
        dob: "2001-06-01",
        gender: "male",
        password: "password@Naagin06"
    }, 
    {
        username: "test2024",
        email: "test1906@live.mdx.ac.uk",
        dob: "2011-01-19",
        gender: "female",
        password: "test2024@Pass"
    }
];

let usrDetails = JSON.stringify(users);
localStorage.user = usrDetails;
console.log(localStorage.length)

