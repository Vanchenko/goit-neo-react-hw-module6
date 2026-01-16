import { FaUser, FaPhone } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({ id, name, number, removeContact }) => {
 return (
   <div className={css.contact_wrapper}>
     <li className={css.list_item}>
       <p>
         <FaUser className={css.contact_svg} size={10} />
         {name}
       </p>
       <p>
         <FaPhone className={css.contact_svg} size={10}/>
        {number}</p>
     </li>
     <button
       className={css.delete_btn}
       type="button"
       onClick={() => removeContact(id)}
     >
       Delete
     </button>
   </div>
 );
}

export default Contact;