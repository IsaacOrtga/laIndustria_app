import './teacherRegister.css';
import { FormComp } from "../../pure/form/FormComp.jsx";

export function TeacherRegister(){
    return(
        <div className='formRegisterTeacher'>
            <FormComp formRegisterTitle='Alta profesor' showPassField showDropzone/>
        </div>
    )
}