import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
    student: Student
    onStudentClick?: (student:Student) => void
    
}

export default function StudentCard ({ student, onStudentClick }: StudentCardProps) {
    const {name, isActive}=student
    console.log(student);
    
  return (
    <div onClick={() => onStudentClick?.(student)}>
      Student: {name}
    </div>
  );
}
