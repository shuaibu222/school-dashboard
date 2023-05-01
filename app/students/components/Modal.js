'use client';

import React from 'react';
import { useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { client } from '@/sanity';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [parentName, setParentName] = useState('');
  const [age, setAge] = useState('');
  const [tel, setTel] = useState('');
  const [image, setImage] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((name, parentName, age, tel, image, department)) {
      const newStudent = {
        _type: 'student',
        name: name,
        parentName: parentName,
        age: age,
        tel: tel,
        image: image,
      };

      try {
        const response = await client.create(newStudent);
        console.log('Create successful: ', response._id);
      } catch (error) {
        console.log('Create failed: ', error.message);
      }

      setName('');
      setParentName('');
      setAge('');
      setTel('');
      setImage('');
      setDepartment('');
      // setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="add add-teacher">
        <h3>Students</h3>
        <button className="more-dept" onClick={() => setIsModalOpen(true)}>
          <span>
            <AiOutlineUsergroupAdd style={{ fontSize: '1.3rem' }} />
          </span>
          Add Student
        </button>
      </div>
      {isModalOpen ? (
        <div className="add-modal">
          <div className="add-modal-content">
            <span className="add-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <form>
              <div>
                <label htmlFor="name">Student name:</label>
                <input type="text" placeholder="Name" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="parent-name">Parent name:</label>
                <input type="text" name="parent-name" id="parent-name" />
              </div>
              <div>
                <label htmlFor="name">Age:</label>
                <input type="number" name="age" id="age" />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" placeholder="phone" name="tel" id="tel" />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                <input
                  type="url"
                  placeholder="paste image link"
                  name="image"
                  id="image"
                />
              </div>
              <div>
                <label htmlFor="department">Department:</label>
                <input type="text" name="department" id="department" />
              </div>
              <button
                className="more-dept"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
