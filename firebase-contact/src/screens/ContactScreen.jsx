import NameCard from '../components/NameCard'

const ContactScreen = ({contacts}) => {
  console.log(contacts);
  return (
    <div className="">

    {contacts.map((item) => (
      <NameCard id="" contactName={item.name} ContactMail={item.email}/>)
    )}

    </div>
  )
}

export default ContactScreen;