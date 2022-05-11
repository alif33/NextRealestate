import React,{useState} from 'react'
import AdminLayout from '../../src/components/admin/AdminLayout/AdminLayout'
import TagTable from '../../src/components/admin/Table/TagTable';
import { postData } from '../../__lib__/helpers/HttpService';
import { getData } from '../../__lib__/helpers/HttpService';
import { useForm } from 'react-hook-form';

const Tag = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
     const [ disable, setDisable ] = useState(false);
     const onError = err => showErr(err);

     const [modal, setModal] = useState(false);
 
     const showModal = () => {
         setModal(true);
       };
 
       const closeModal = () => {
     
         setModal(false);
     
       };

       const onSubmit = data => {
        console.log("data is : ", data)
       // setDisable(true)
       postData('/admin/tag', data, setDisable)
       .then(res=>{
           if(res?.success)
           {  
              console.log(res.message);
              closeModal()
           }
       })
   }

  return (
    <AdminLayout>
        <TagTable  
          modal={modal} showModal={showModal} 
          closeModal={closeModal} 
          handleSubmit={handleSubmit} 
          onSubmit={onSubmit} 
          onError={onError} 
          register={register}
        />
    </AdminLayout>
  )
}

export default Tag