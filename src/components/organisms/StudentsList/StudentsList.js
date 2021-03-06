import React, { useState, useEffect } from 'react';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { getStudents } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {students.map((student) => (
          <StudentsListItem key={student.id} studentData={student} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
