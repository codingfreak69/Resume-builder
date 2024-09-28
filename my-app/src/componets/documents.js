import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Documents = () => {
  const [resumes, setResumes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch saved resumes from backend
    axios.get('/api/resumes')
      .then(response => setResumes(response.data))
      .catch(error => console.error('Error fetching resumes:', error));
  }, []);

  const handleEdit = (id) => {
    history.push(`/edit-resume/${id}`);
  };

  return (
    <div>
      <h1>Saved Resumes</h1>
      <ul>
        {resumes.map((resume) => (
          <li key={resume.id}>
            <span>{resume.title}</span>
            <button onClick={() => handleEdit(resume.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
