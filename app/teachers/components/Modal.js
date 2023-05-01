'use client';

import React from 'react';
import { useState } from 'react';
import { IoIosPersonAdd } from 'react-icons/io';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="add add-teacher">
        <h3>Teachers</h3>
        <button className="more-dept" onClick={() => setIsModalOpen(true)}>
          <span>
            <IoIosPersonAdd style={{ fontSize: '1.3rem' }} />
          </span>
          Add Teacher
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
                <label htmlFor="name">Teacher name:</label>
                <input type="text" placeholder="Name" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="degree">Degree:</label>
                <input
                  type="text"
                  placeholder="e.g PHD in Mathematics"
                  name="degree"
                  id="degree"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" placeholder="phone" name="tel" id="tel" />
              </div>
              <div>
                <label htmlFor="courses">Courses:</label>
                <input
                  type="text"
                  placeholder="e.g programming, database"
                  name="courses"
                  id="courses"
                />
              </div>
              <div>
                <label htmlFor="experience">Experience:</label>
                <input
                  type="text"
                  placeholder="e.g 10 Years in university Math"
                  name="experience"
                  id="experience"
                />
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
                <label htmlFor="about">About:</label>
                <textarea
                  name="about"
                  placeholder="About me..."
                  id="about"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="more-dept" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
