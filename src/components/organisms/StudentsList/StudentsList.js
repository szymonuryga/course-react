import React, { useState, useEffect } from 'react';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {students.map((student) => (
          <StudentsListItem
            onClick={() => handleOpenStudentDetails(student.id)}
            key={student.id}
            studentData={student}
          />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
