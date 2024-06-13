import './teacherImg.css';
import TeacherImg from '../../../assets/img/unsplash_img/teacher_img.avif';

export function TeacherImgComp(){
    return(
        <>
        <img className='teacherImg' src={TeacherImg} alt="teacher_img"></img>
        </>
    )
}