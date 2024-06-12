import React, { useState } from 'react';
import './teacherRegister.css';
import { FormComp } from "../../pure/form/FormComp.jsx";

export function TeacherRegister(){
    const [formData, setFormData] = useState({
        name: '',
        lastname_1: '',
        lastname_2: '',
        nif: '',
        email: '',
        phone: '',
        password: ''
      })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('/api/teachers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                const newTeacher = await response.json();
            alert('Profesor añadido a la bd:', newTeacher);            
            }else{
                const errorData = await response.json();
                console.error('Error al crear al profesor:', errorData);
            }
        }catch(error){
            console.error('Error:', error);
        }
    }

    return(
        <div className='formRegisterTeacher'>
            <FormComp 
            formRegisterTitle='Alta profesor' 
            showNameDataForm 
            showDocumentDataForm
            showSpecializationForm
            showEmailForm
            showPhoneForm
            showPassField 
            showPassField_2 
            showDropzone
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit} />
        </div>
    )
}