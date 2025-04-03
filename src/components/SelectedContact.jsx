import { useEffect,useState } from "react";

function SelectedContact({selectedContactId, setSelectedContactId}){

const [contact, setContact] = useState(null)

    useEffect(()=>{
        async function fetchContact() {
            try{
            const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const data = await res.json();
                setContact(data);
            }
            catch(err){
                console.error(err);
            }
        }
            fetchContact();
    },[]);

    console.log(contact)

    return(
        <>
        {
            contact && (
                <div>
                    <h1>{contact.name}</h1>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <button onClick={()=>
                        setSelectedContactId(null)
                    }>Go Back</button>
                </div>
            )
        }
        </>
    );

}






export default SelectedContact