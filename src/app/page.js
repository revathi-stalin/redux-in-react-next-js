import Image from 'next/image'
import Home from './components/Home/Home'

async function getUsers(){
    const response = await fetch('http://localhost:8000/users');
    const users = await response.json();
    return users;
}

//Using Home compoent because page.js is a server component so can't use hooks(useEffect) so we create client component(Home) to bind

export default async function HomePage() {
  const users = await getUsers();
  console.log(users);
  return (
    <main>
       <Home users={users}/>
    </main>
  )
}
