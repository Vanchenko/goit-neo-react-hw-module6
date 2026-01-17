import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'
import { FaUser, FaPhone } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
const dispatch = useDispatch();

const handleDelete = () => dispatch(deleteContact(id))

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
       onClick={handleDelete}
     >
       Delete
     </button>
   </div>
 );
}

export default Contact;