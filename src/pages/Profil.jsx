import { useEffect, useState } from "react"

const Profil = () => {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }

    useEffect(() => {
      getUser();
    },[])


return(
    <>
        <section className="d-flex flex-column justify-content-center align-items-center m-3 p-3">
            <h1 className="m-3">Github user</h1>
            <h2 className="m-3">{user.name}</h2>
            <img src={user.avatar_url} alt="Photo de profil du github de John" className="img-fluid"/>
            <p className="m-2">{user.profil}</p>
            <span className="m-2">Abonnés : {user.followers}</span>
            <span className="mb-2">Abonnements : {user.following}</span>
            <span className="mb-2">Crée le : <time datetime="2016-06-09T17:14:00Z">{user.created_at}</time></span>
            <span className="mb-2">Modifié le : <time datetime="2023-11-23T19:48:23Z">{user.updated_at}</time></span>
            <span>URL repositories : <a href="https://api.github.com/users/github-john-doe/repos">{user.repos_url}</a></span>
        </section>
    </>
)
}
export default Profil;