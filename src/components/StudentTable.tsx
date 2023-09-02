import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  useDisclosure,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import StudentDetailsModal from "./StudentDetailsModal";
import StudentTableRow from "./StudentTableRow";
import useStudentTable from "../services/useStudentTable";

const StudentTable = () => {
  const { studentInfo, isLoading, updateStudentInfo } = useStudentTable();

  const [selectedStudent, setSelectedStudent] = useState<StudentInfo>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRowClick = (student: StudentInfo) => {
    setSelectedStudent(student);
    onOpen();
  };

  return isLoading ? (
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
  ) : (
    <TableContainer>
      <VStack>
        <Table variant="simple" color="white">
          <TableCaption>View and update student details by clicking the row</TableCaption>
          <Thead>
            <Tr>
              <Th>Student No</Th>
              <Th>Full Name</Th>
              <Th>Date of Birth</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentInfo.map((student) => (
              <StudentTableRow
                key={student.id}
                student={student}
                onRowClick={() => handleRowClick(student)}
              />
            ))}
          </Tbody>
        </Table>

        {selectedStudent && (
          <StudentDetailsModal
            student={selectedStudent}
            isOpen={isOpen}
            onClose={onClose}
            onSaveEdit={updateStudentInfo}
          />
        )}
      </VStack>
    </TableContainer>
  );
};

export default StudentTable;
