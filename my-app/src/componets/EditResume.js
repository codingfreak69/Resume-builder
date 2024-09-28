import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditResume = () => {
  const { id } = useParams();
  const history = useHistory();
  const [resume, setResume] = useState({});

  useEffect(() => {
    // Fetch the specific resume for editing
    axios.get(`/api/resumes/${id}`)
      .then(response => setResume(response.data))
      .catch(error => console.error('Error fetching resume:', error));
  }, [id]);

  const handleSave = () => {
    axios.put(`/api/resumes/${id}`, resume)
      .then(() => history.push('/documents'))
      .catch(error => console.error('Error saving resume:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume({ ...resume, [name]: value });
  };

  return (
    <div>
      <h1>Edit Resume</h1>
      <form>
        <input
          type="text"
          name="title"
          value={resume.title || ''}
          onChange={handleChange}
          placeholder="Title"
        />
        {/* Add more fields as necessary */}
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditResume;
