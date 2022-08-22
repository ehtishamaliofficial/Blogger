const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

const login=document.getElementById('login')

login.addEventListener('click',()=>{

	fetch("http://localhost:8000/api/user/login",{
		method:"get",
		headers:{
              Accept: "application/json"
            },
            body:JSON.stringify({
            	email:email, 
            	password:password
            })
	}).then(res=>res.json()).then(data=>consol.log(data))
})