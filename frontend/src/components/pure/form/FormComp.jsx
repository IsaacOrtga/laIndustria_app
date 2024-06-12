import './form.css';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MyDropzone } from '../dropzone/Dropzone';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  handleSubmit}) {
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
    <div className='formCompRegister mt-4 ms-3 me-3'>
      <div className='formCompRegister-titleContent mb-3'>
        <h1 className='formCompRegister-title'>{formRegisterTitle}</h1>
      </div>
      <Form className='formCompRegister-Content' onSubmit={handleSubmit}>
        {showNameDataForm && (
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Form.Group className="form-floating mb-3 formCompRegister-name" controlId="formBasicName">
                <Form.Label className="small">Nombre</Form.Label>
                <Form.Control
                  className='formCompRegister-field'
                  type="text"
                  placeholder="Nombre"
                  name='name'
                  value={formData.name}
                  onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Form.Group className="form-floating mb-3 formCompRegister-lastname_1" controlId="formBasicLastname_1">
                <Form.Label className="small">Primer apellido</Form.Label>
                <Form.Control
                  className='formCompRegister-field'
                  type="text"
                  placeholder="Primer apellido"
                  name='lastname_1'
                  value={formData.lastname_1}
                  onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Form.Group className="form-floating mb-3 formCompRegister-lastname_2" controlId="formBasicLastname_2">
                <Form.Label className="small">Segundo apellido</Form.Label>
                <Form.Control
                  className='formCompRegister-field'
                  type="text"
                  placeholder="Segundo apellido"
                  name='lastname_2'
                  value={formData.lastname_2}
                  onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
        )}
        <Row>
          {showDocumentDataForm && (
            <>
              <Col xs={3} md={2} lg={2}>
                <Form.Select aria-label="Choose a type of document" className='formCompRegister-selectDocType' value={selectedDocType} onChange={handleSelectDocType}>
                  <option value="1">NIF</option>
                  <option value="2">NIE</option>
                </Form.Select>
              </Col>
              <Col xs={9} md={4} lg={4}>
                <Form.Group className="form-floating mb-3 formCompRegister-document" controlId="formBasicDocument">
                  <Form.Label className="small">{docType}</Form.Label>
                  <Form.Control
                    className='formCompRegister-field'
                    type="text"
                    placeholder={docType}
                    name='nif'
                    value={formData.nif}
                    onChange={handleChange} />
                </Form.Group>
              </Col>
            </>
          )}
          {showSpecializationForm && (
            <Col xs={12} md={6} lg={6}>
              <Form.Group controlId="specializations" className="formCompRegister-form-floating mb-3 formCompRegister-specializations">
                <div className="dropdown">
                  <Dropdown onSelect={handleDropdownChange}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 dropdownSpecializations">
                      {selectedSpecializations.length > 0 ? selectedSpecializations.join(', ') : 'Selecciona especializaciones'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='menu-specialization'>
                      <Dropdown.Item className='menuList-spec' eventKey="1">Funky</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="2">Aéreo</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="3">Hip-hop</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="4">Jazz</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="5">Breakdance</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="6">Bachata</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="7">Salsa</Dropdown.Item>
                      <Dropdown.Item className='menuList-spec' eventKey="8">Merengue</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Form.Group>
            </Col>
          )}
        </Row>
        <Row>
          {showEmailForm && (
            <Col xs={12} md={6} lg={6}>
              <Form.Group className="form-floating mb-3 formCompRegister-email" controlId="formBasicEmail">
                <Form.Label className="small">Email</Form.Label>
                <Form.Control
                  className='formCompRegister-field'
                  type="email"
                  placeholder="example@gmail.com"
                  name='email'
                  value={formData.email}
                  onChange={handleChange} />
              </Form.Group>
            </Col>
          )}
          {showPhoneForm && (
            <Col xs={12} md={6} lg={6}>
              <Form.Group className="form-floating mb-3 formCompRegister-phone" controlId="formBasicPhone">
                <Form.Label className="small">Teléfono</Form.Label>
                <Form.Control
                  className='formCompRegister-field'
                  type="phone"
                  placeholder="616456456"
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange} />
              </Form.Group>
            </Col>
          )}
        </Row>
        {showPassField && (
          <>
            <Row>
              <Col>
                <Form.Group className="form-floating mb-3 formCompRegister-pass" controlId="formBasicPassword_1">
                  <Form.Label className="small">Contraseña</Form.Label>
                  <Form.Control
                    className='formCompRegister-field'
                    type={passwordField.password.type}
                    placeholder="Contraseña"
                    name='password'
                    value={formData.password}
                    onChange={handleChange} />
                  <div className="input-icon" onClick={() => handleShowPassword('password')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      {
                        passwordField.password.visible ?
                          (<>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </>)
                          :
                          (<>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </>)
                      }

                    </svg>
                  </div>
                </Form.Group>
              </Col>
              {showPassField_2 && (
                <Col>
                  <Form.Group className="form-floating mb-3 formCompRegister-pass_2" controlId="formBasicPassword_2">
                    <Form.Label className="small">Repetir contraseña</Form.Label>
                    <Form.Control className='formCompRegister-field' type={passwordField.password_2.type} placeholder="Contraseña" />
                    <div className="input-icon" onClick={() => handleShowPassword('password_2')}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        {
                          passwordField.password_2.visible ?
                            (<>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </>)
                            :
                            (<>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </>)
                        }

                      </svg>
                    </div>
                  </Form.Group>
                </Col>
              )}
            </Row>
          </>
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