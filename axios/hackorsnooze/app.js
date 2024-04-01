// async function getUsers(){
//   const res=  await axios.get('https://hack-or-snooze.herokuapp.com/users')
//   console.log(res)
//   }

async function getAuth(){
  const res = await axios.post('https://hack-or-snooze.herokuapp.com/auth')
  console.log(res);
}
getAuth();
async function createUser(username, password, name){
  const res =  await axios.post('https://hack-or-snooze.herokuapp.com/users',{user:{name,username,password}});
  console.log(res);
}

