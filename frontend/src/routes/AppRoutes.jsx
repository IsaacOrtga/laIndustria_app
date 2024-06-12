import { Routes, Route } from 'react-router-dom';
import { RegisterTeacherPage } from '../pages/RegisterTeacherPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <>
        <Route exact path="/newTeacher" element={<RegisterTeacherPage />} />
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/bookshelf" element={<Bookshelf/>}/>
        <Route exact path="/library" element={<Library/>} /> */}
      </>
    </Routes>
  );
}
