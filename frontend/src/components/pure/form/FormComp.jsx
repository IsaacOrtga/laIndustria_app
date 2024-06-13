import './form.css';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MyDropzone } from '../dropzone/Dropzone';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function FormComp({
  formRegisterTitle,
  showNameDataForm,
  showDocumentDataForm,
  showSpecializationForm,
  showEmailForm,
  showPhoneForm,
  showPassField,
  showPassField_2,
  showDropzone,
  formData,
  setFormData,
  handleSubmit }) {
  /* ------------****** DEFINICIÓN DE STATES ******------------ */
  const [selectedDocType, setSelectedDocType] = useState('1');
  const [passwordField, setpasswordField] = useState({
    password: {
      visible: false, type: 'password'
    },
    password_2: {
      visible: false, type: 'password'
    },
  });

  const [selectedSpecializations, setSelectedSpecializations] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('');
  /* ------------****** FIN DEFINICIÓN DE STATES ******------------ */

  /* ------------****** FUNCIONES Y EVENTOS ******------------ */
  let docType = selectedDocType === '1' ? 'NIF' : 'NIE';

  const handleSelectDocType = (e) => {
    setSelectedDocType(e.target.value);
  };

  const handleShowPassword = (field) => {
    setpasswordField(prevState => ({
      ...prevState,
      [field]: {
        visible: !prevState[field].visible,
        type: prevState[field].type === 'password' ? 'text' : 'password'
      }
    }));
  }

  const handleDropdownChange = (eventKey, event) => {
    setSelectedSpecializations([...selectedSpecializations, event.target.innerText]);
    setDropdownValue('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* ------------****** FIN DE FUNCIONES Y EVENTOS ******------------ */
  return (
    <div className='formCompRegister'>
      <div className='formCompRegister-titleContent mb-3'>
        <h1 className='formCompRegister-title'>{formRegisterTitle}</h1>
      </div>
      <Form className='formCompRegister-Content' onSubmit={handleSubmit}>
        {showNameDataForm && (
          <>
            <Grid className='formCompRegister-fieldsContent' container columnGap={10} columns={2}>
              <Grid item>
                <TextField
                  id="nameForm"
                  label="*Nombre"
                  variant="standard"
                  className='formCompRegister-field'
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleChange} />
              </Grid>
              <Grid item>
                <TextField
                  id="lastname_1Form"
                  label="*Primer apellido"
                  variant="standard"
                  className='formCompRegister-field'
                  type="text"
                  name='lastname_1'
                  value={formData.lastname_1}
                  onChange={handleChange} />
              </Grid>
            </Grid>
            <Grid className='formCompRegister-fieldsContent' sx={{ mt: 3 }} container columns={3}>
              <Grid item>
                <TextField
                  id="lastname_2Form"
                  label="Segundo apellido"
                  variant="standard"
                  className='formCompRegister-field formCompRegister-field-lasname_2'
                  type="text"
                  name='lastname_2'
                  value={formData.lastname_2}
                  onChange={handleChange} />
              </Grid>
              <Grid item className='doc-selector' sx={{mt:1}}>
                <FormControl variant="standard" aria-label="Choose a type of document" className='formCompRegister-selectDocType'>
                  <InputLabel>*Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="documentSelector"
                    value={selectedDocType}
                    onChange={handleSelectDocType}
                    label={selectedDocType}
                  >
                    <MenuItem value="1">NIF</MenuItem>
                    <MenuItem value="2">NIE</MenuItem>
                  </Select></FormControl>
              </Grid>
              <Grid>
                <TextField
                  id="documentationForm"
                  label={`*${docType}`}
                  variant="standard"
                  className='formCompRegister-field formCompRegister-field-documentation'
                  type="text"
                  name='nif'
                  value={formData.nif}
                  onChange={handleChange} />
              </Grid>
            </Grid>
          </>
        )}
       <Grid className='formCompRegister-fieldsContent formCompRegister-emailPhoneContent' container columnGap={10} columns={2}>
        {showEmailForm && (
          <>
            <TextField
              id="emailForm"
              label="*Email"
              variant="standard"
              className='formCompRegister-field'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange} />
          </>
        )}
        {showPhoneForm && (
          <>
            <TextField
              id="phoneForm"
              label="Teléfono"
              variant="standard"
              className='formCompRegister-field'
              name='phone'
              value={formData.phone}
              onChange={handleChange} />
          </>
        )}</Grid>
        <Grid className='formCompRegister-fieldsContent formCompRegister-emailPhoneContent' container columnGap={10} columns={2}>
        {showPassField && (
          <>
            <TextField
              id="passwordForm"
              label="Contraseña"
              variant="standard"
              className='formCompRegister-field'
              type={passwordField.password.type}
              placeholder="Contraseña"
              name='password'
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleShowPassword('password')}
                      edge="end"
                    >
                      {passwordField.password.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }} />
            {showPassField_2 && (
              <TextField
                id="passwordForm"
                label="Repetir contraseña"
                variant="standard"
                className='formCompRegister-field'
                type={passwordField.password_2.type}
                name='password_2'
                value={formData.password_2}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleShowPassword('password_2')}
                        edge="end"
                      >
                        {passwordField.password_2.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }} />
            )}
          </>
        )}</Grid>
         {showSpecializationForm && (
          <FormControl variant='filled' controlId="specializations" className="formCompRegister-form-floating mb-3 formCompRegister-specializations">
            <div className="dropdown">
              <Dropdown onSelect={handleDropdownChange}>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 dropdownSpecializations">
                  {selectedSpecializations.length > 0 ? selectedSpecializations.join(', ') : 'Selecciona especializaciones'}
                </Dropdown.Toggle>
                <Dropdown.Menu className='menu-specialization'>
                  <MenuItem className='menuList-spec' eventKey="1">Funky</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="2">Aéreo</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="3">Hip-hop</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="4">Jazz</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="5">Breakdance</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="6">Bachata</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="7">Salsa</MenuItem>
                  <MenuItem className='menuList-spec' eventKey="8">Merengue</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </FormControl>
        )}
        {showDropzone && (
          <MyDropzone />
        )}
        <div className='formCompRegister-buttonContent mb-4'>
          <Button variant="secondary" className='formCompRegister-button mt-4' type="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
}