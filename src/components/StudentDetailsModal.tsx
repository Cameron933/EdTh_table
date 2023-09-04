import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Flex,
  Image,
  Text,
  Input,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import useStudentDetailsModal from "../services/useStudentDetailsModal";
import LoadingModal from "./LoadingModal";

type StudentDetailsModalProps = {
  student?: StudentInfo;
  isOpen: boolean;
  onClose: () => void;
  onSaveEdit: (editedStudentInfo: StudentInfo) => void;
};

const StudentDetailsModal = ({
  student,
  isOpen,
  onClose,
  onSaveEdit,
}: StudentDetailsModalProps) => {
  const [studentFirstName, setStudentFirstName] = useState<string>(student?.first_name || "");
  const [studentLastName, setStudentLastName] = useState<string>(student?.last_name || "");
  const { isLoading, studentProfile } = useStudentDetailsModal(student?.id);

  const handleSaveClick = () => {
    if (student) {
      const editedStudentInfo: StudentInfo = {
        ...student,
        first_name: studentFirstName,
        last_name: studentLastName,
      };
      onSaveEdit(editedStudentInfo);
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && student) {
      setStudentFirstName(student.first_name);
      setStudentLastName(student.last_name);
    }
  }, [isOpen, student]);

  if (isLoading) return <LoadingModal isLoading={isLoading} />;

  if (!student) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {student ? `${student.first_name} ${student.last_name}'s profile` : ""}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {studentProfile ? (
              <VStack spacing="0.5rem" w="100%">
                <Flex>
                  <Image
                    boxSize="150px"
                    src={studentProfile.image_url}
                    alt={`student pic of ${student.first_name} ${student.last_name}`}
                  />
                </Flex>
                <Input
                  value={studentFirstName}
                  onChange={(e) => setStudentFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <Input
                  value={studentLastName}
                  onChange={(e) => setStudentLastName(e.target.value)}
                  placeholder="Last Name"
                />
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing="0.5rem"
                  align="stretch"
                  w="100%"
                >
                  <Text>Date of Birth: {student.date_of_birth}</Text>
                  <Text>Street line 1: {student.address.street_line1}</Text>
                  <Text>Street line 2: {student.address.street_line2}</Text>
                  <Text>Country: {student.address.country}</Text>
                  <Text>Postcode: {student.address.postcode}</Text>
                </VStack>
              </VStack>
            ) : null}
          </ModalBody>
          <ModalFooter>
            <Stack spacing={4} direction="row" align="center">
              <Button onClick={handleSaveClick} colorScheme="teal" aria-label="saveBtn">
                Save
              </Button>
              <Button onClick={onClose} aria-label="closeBtn">
                Close
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default StudentDetailsModal;
