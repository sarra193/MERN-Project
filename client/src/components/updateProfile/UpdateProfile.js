import React, { useEffect, useState } from 'react'
import './UpdateProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form } from 'react-bootstrap';
import {editProfile} from '../../JS/action/index'

function UpdateProfile() {

  
  const user = useSelector(state => state.userReducer.user);
  const [updateProfile, setUpdateProfile] = useState({});
  const dispatch = useDispatch();

  const formData = new FormData();
  


  useEffect(() => {
    setUpdateProfile(user)
  }, [user]);

   
    formData.append('image', updateProfile.image);
     
  

   const handleChange = (e) => {
    setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
  };
   const handleImage = (e) => {
        setUpdateProfile({...updateProfile, image: e.target.files[0]});
    }

      return (
            <div>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h5 className="modal-title text-center" id="exampleModalLabel">UpdateProfile</h5> <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                                    </div>
                                    <div className="modal-body">
                                          <Card.Body>
          <Card.Text>
            <Form encType='multipart/form-data'>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>name :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={updateProfile.name}
/*                   onChange={e=>setUpdateProfile({ ...updateProfile, name: e.target.value })}
 */

                             onChange={handleChange} 
                          />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                            value={updateProfile.email}
/*                             onChange={e=>setUpdateProfile({ ...updateProfile, email: e.target.value })}
 */
                             onChange={handleChange}                        />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>phone :</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="Enter your phone"
                            value={UpdateProfile.phoneNumber}
                             onChange={handleChange}
/*                     onChange={e=>setUpdateProfile({ ...updateProfile, phoneNumber: e.target.value })}
 */                />
                        </Form.Group>
                        
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Job/Hobbies :</Form.Label>
                <Form.Control
                  type="text"
                  name="Job"
                  placeholder="Job/Hobbies"
                            value={UpdateProfile.job}
onChange={handleChange}
             /*                                onChange={e=>setUpdateProfile({ ...updateProfile, job: e.target.value })}*/ 
               />
              </Form.Group>

               <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>image :</Form.Label>
                <input
                  type="file"
                  name="image"
                  value={UpdateProfile.image}
                   onChange={handleImage}
/*                    onChange={e=>setUpdateProfile({ ...updateProfile, image: e.target.files[0] })}
 */               />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
                  <button type="button" className="btn btn-custom" data-dismiss="modal" aria-label="Close"
                    onClick={() => dispatch(editProfile(updateProfile._id, formData, updateProfile))}>Update</button>
                                   </div>
                              </div>
                        </div>
                  </div>
            </div>
      
      )
};

export default UpdateProfile
