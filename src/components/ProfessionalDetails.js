import React, { useState } from "react";
import { FormGroup, Label, Col, Button, Card, CardBody } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field } from "formik";

const arr = [0];

function ProfessionalDetails() {
  const [count, setCount] = useState(1);

  const clickHandler = () => {
    setCount(count + 1);
    arr.push(count);
    // console.log(arr);
  };
  const teachingExperienceOptions = [
    { key: "Select an option", value: "" },
    { key: "1-3 years", value: "1-3 years" },
    { key: "3-5 years", value: "3-5 years" },
    { key: "5-10 years", value: "5-10 years" },
    { key: "10+ years", value: "10+ years" },
  ];
  const schoolLocationOptions = [
    { key: "Select an option", value: "" },
    { key: "Rural", value: "Rural" },
    { key: "Urban", value: "Urban" },
  ];
  const schoolTypeOptions = [
    { key: "Select an option", value: "" },
    { key: "Government", value: "Government" },
    { key: "Foundation", value: "Foundation" },
    { key: "Private", value: "Private" },
  ];
  const schoolJobOptions = [
    { key: "Select an option", value: "" },
    { key: "Full-time", value: "Full-time" },
    { key: "Part-time", value: "Part-time" },
    { key: "Volunteer", value: "Volunteer" },
  ];

  const schoolGradesOptions = [
    { key: "Select an option", value: "" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "other", value: "other" },
  ];

  const participationUSProgramOptions = [
    { key: "Select an option", value: "" },
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const professionalDevelopmentProgramOptions = [
    { key: "Select an option", value: "" },
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const initialValues = {
    teachingExperience: "",
    schoolName: "",
    schoolAddress: "",
    schoolLocation: "",
    schoolType: "",
    schoolTitle: "",
    schoolJob: "",
    dateOfEmployment: "",
    grades: "",
    noOfStudents: "",
    noOfHours: "",
    additionalDuties: "",
    ISRFAttachment: "",
    participationUSProgram: "",
    programStartDate: "",
    programEndDate: "",
    nameOfSponsoring: "",
    certificate: "",
    currentlyParticipationUSProgram: "",
    currentProgramStartDate: "",
    currentProgramEndDate: "",
    currentNameOfSponsoring: "",
    currentCertificate: "",
    professionalDevelopmentProgram: "",
    professionalDevelopmentProgramStartDate: "",
    professionalDevelopmentProgramEndDate: "",
    professionalDevelopmentNameOfSponsoring: "",
    professionalDevelopmentCertificate: "",
    trainingsOrCertifications1: "",
    trainingsOrCertifications2: "",
    trainingsOrCertifications3: "",
    trainingsOrCertifications4: "",
    trainingsOrCertificationsYear1: "",
    trainingsOrCertificationsYear2: "",
    trainingsOrCertificationsYear3: "",
    trainingsOrCertificationsYear4: "",
    trainingsOrCertificationsCertificate1: "",
    trainingsOrCertificationsCertificate2: "",
    trainingsOrCertificationsCertificate3: "",
    trainingsOrCertificationsCertificate4: "",
    formData: [
      {
        previousSchoolName: "",
        previousSchoolAddress: "",
        previousSchoolLocation: "",
        previousSchoolType: "",
        previousSchoolTitle: "",
        previousSchoolJob: "",
        previousDateOfEmployment: "",
        previousGrades: "",
        previousNoOfStudents: "",
        previousNoOfHours: "",
        previousAdditionalDuties: "",
        previousAttachment: "",
      },
    ],
  };

  const onSubmit = (values, submitProps) => {
    console.log("form values ", values);

    submitProps.resetForm({});
  };
  return (
    <Card className="container">
      <CardBody>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <div>
                <h3 className="text-center">Professional Details</h3>
              </div>
              <FormGroup row>
                <Label for="teachingExperience" sm={12}>
                  Number of years you have been teaching English
                </Label>

                <Col sm={6}>
                  <Field
                    as="select"
                    id="teachingExperience"
                    name="teachingExperience"
                  >
                    {teachingExperienceOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label for="teachingExperience" sm={12}>
                  Current Employment Information{" "}
                  <small style={{ color: "red" }}>Required</small>
                </Label>
                <Label for="schoolName" sm={4}>
                  Name of School
                </Label>
                <Label for="schoolAddress" sm={4}>
                  School Address
                </Label>
                <Label for="schoolLocation" sm={4}>
                  School Location
                </Label>
                <Col sm={4}>
                  <Field
                    id="schoolName"
                    name="schoolName"
                    placeholder="Enter school name"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="schoolAddress"
                    name="schoolAddress"
                    placeholder="Enter school address"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field as="select" id="schoolLocation" name="schoolLocation">
                    {schoolLocationOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label for="schoolType" sm={4}>
                  Type of School
                </Label>
                <Label for="schoolTitle" sm={4}>
                  Title/Designation e.g.,(SSR,JST,etc.)
                </Label>
                <Label for="schoolJob" sm={4}>
                  Type of job
                </Label>
                <Col sm={4}>
                  <Field as="select" id="schoolType" name="schoolType">
                    {schoolTypeOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Col sm={4}>
                  <Field
                    id="schoolTitle"
                    name="schoolTitle"
                    placeholder="Enter school title"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field as="select" id="schoolJob" name="schoolJob">
                    {schoolJobOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label for="dateOfEmployment" sm={4}>
                  Date of employment
                </Label>
                <Label for="grades" sm={4}>
                  Grades you teach
                </Label>
                <Label for="noOfStudents" sm={4}>
                  Average no. of students per class
                </Label>
                <Col sm={4}>
                  <Field
                    id="dateOfEmployment"
                    name="dateOfEmployment"
                    placeholder="Enter start date"
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field as="select" id="grades" name="grades">
                    {schoolGradesOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Col sm={4}>
                  <Field
                    id="noOfStudents"
                    name="noOfStudents"
                    placeholder="Enter average no of students per class"
                    type="text"
                    className="mb-3"
                  />
                </Col>

                <Label for="noOfHours" sm={4}>
                  No. of hours specifically dedicated for English language
                  traching
                </Label>
                <Label for="additionalDuties" sm={4}>
                  Any Additional Duties
                </Label>
                <Label for="ISRFAttachment" sm={4}>
                  Add attachment:ISRF Check
                </Label>
                <Col sm={4}>
                  <Field
                    id="noOfHours"
                    name="noOfHours"
                    placeholder="Enter no of hours for english language teaching"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="additionalDuties"
                    name="additionalDuties"
                    placeholder="Enter any additional duties"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="ISRFAttachment"
                    name="ISRFAttachment"
                    placeholder="Add ISRF attachment"
                    type="file"
                    className="mb-3"
                  />
                </Col>
                <Label sm={12}>
                  Previous Employment Information{" "}
                  <small style={{ color: "red" }}>Optional</small>
                </Label>
              </FormGroup>
              {props.values.formData.map((val, index) => (
                <FormGroup key={index} row>
                  <Label for={`formData[${index}].previousSchoolName`} sm={4}>
                    Name of School/Institution
                  </Label>
                  <Label
                    for={`formData[${index}].previousSchoolAddress`}
                    sm={4}
                  >
                    School/Institution Address
                  </Label>
                  <Label
                    for={`formData[${index}].previousSchoolLocation`}
                    sm={4}
                  >
                    School/Institution Location
                  </Label>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousSchoolName`}
                      name={`formData[${index}].previousSchoolName`}
                      placeholder="Enter previous school name"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousSchoolAddress`}
                      name={`formData[${index}].previousSchoolAddress`}
                      placeholder="Enter Previous school address"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].previousSchoolLocation`}
                      name={`formData[${index}].previousSchoolLocation`}
                    >
                      {schoolLocationOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Field>
                  </Col>
                  <Label for={`formData[${index}].previousSchoolType`} sm={4}>
                    Type of School/Institution
                  </Label>
                  <Label for={`formData[${index}].previousSchoolTitle`} sm={4}>
                    Title/Designation e.g.,(SSR,JST,etc.)
                  </Label>
                  <Label for={`formData[${index}].previousSchoolJob`} sm={4}>
                    Type of job
                  </Label>
                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].previousSchoolType`}
                      name={`formData[${index}].previousSchoolType`}
                    >
                      {schoolTypeOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Field>
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousSchoolTitle`}
                      name={`formData[${index}].previousSchoolTitle`}
                      placeholder="Enter previous school title"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].previousSchoolJob`}
                      name={`formData[${index}].previousSchoolJob`}
                    >
                      {schoolJobOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Field>
                  </Col>
                  <Label
                    for={`formData[${index}].previousDateOfEmployment`}
                    sm={4}
                  >
                    Date of employment
                  </Label>
                  <Label for={`formData[${index}].previousGrades`} sm={4}>
                    Grades you taught
                  </Label>
                  <Label for={`formData[${index}].previousNoOfStudents`} sm={4}>
                    Average no. of students per class
                  </Label>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousDateOfEmployment`}
                      name={`formData[${index}].previousDateOfEmployment`}
                      placeholder="Enter previous start date of employment"
                      type="date"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].previousGrades`}
                      name={`formData[${index}].previousGrades`}
                    >
                      {schoolGradesOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Field>
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousNoOfStudents`}
                      name={`formData[${index}].previousNoOfStudents`}
                      placeholder="Enter previous average no of students per class"
                      type="text"
                      className="mb-3"
                    />
                  </Col>

                  <Label for={`formData[${index}].previousNoOfHours`} sm={4}>
                    No. of hours specifically dedicated for English language
                    traching
                  </Label>
                  <Label
                    for={`formData[${index}].previousAdditionalDuties`}
                    sm={4}
                  >
                    Any Additional Duties
                  </Label>
                  <Label for={`formData[${index}].previousAttachment`} sm={4}>
                    Add attachment:Experience Letter
                  </Label>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousNoOfHours`}
                      name={`formData[${index}].previousNoOfHours`}
                      placeholder="Enter previous no of hours for english"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousAdditionalDuties`}
                      name={`formData[${index}].previousAdditionalDuties`}
                      placeholder="Enter previous additional duties"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].previousAttachment`}
                      name={`formData[${index}].previousAttachment`}
                      placeholder="Enter previous attachment"
                      type="file"
                      className="mb-3"
                    />
                  </Col>
                </FormGroup>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Field>
                  {(props) => {
                    const clickHandlers = () => {
                      clickHandler();

                      props.form.values.formData.push(
                        initialValues.formData[0]
                      );
                    };
                    return (
                      <Button type="button" onClick={clickHandlers}>
                        Add another
                      </Button>
                    );
                  }}
                </Field>
              </div>
              <FormGroup row>
                <Label for="" sm={12}>
                  Professional Development Information:{" "}
                  <small style={{ color: "red" }}>Required</small>
                </Label>
                <Label for="participationUSProgram" sm={12}>
                  Have you previously participated in any other U.S. government
                  sponsored program,including online programs?
                </Label>
                <Col sm={12}>
                  <Field
                    as="select"
                    id="participationUSProgram"
                    name="participationUSProgram"
                  >
                    {participationUSProgramOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label sm={12}>Program Dates:</Label>
                <Label for="programStartDate" sm={4}>
                  Start Date
                </Label>
                <Label for="programEndDate" sm={8}>
                  End Date
                </Label>
                <Col sm={4}>
                  <Field
                    id="programStartDate"
                    name="programStartDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Col sm={8}>
                  <Field
                    id="programEndDate"
                    name="programEndDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Label for="nameOfSponsoring" sm={4}>
                  Name of sponsoring organization
                </Label>
                <Label for="certificate" sm={8}>
                  Certificate
                </Label>
                <Col sm={4}>
                  <Field
                    id="nameOfSponsoring"
                    name="nameOfSponsoring"
                    placeholder="Enter name of sponsoring organization"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="certificate"
                    name="certificate"
                    placeholder=""
                    type="file"
                    className="mb-3"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="currentlyParticipationUSProgram" sm={12}>
                  Are you currently applying to any other U.S. government
                  sponsored program including online programs?
                  <small style={{ color: "red" }}>Required</small>
                </Label>
                <Col sm={12}>
                  <Field
                    as="select"
                    id="currentlyParticipationUSProgram"
                    name="currentlyParticipationUSProgram"
                  >
                    {participationUSProgramOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label sm={12}>Program Dates:</Label>
                <Label for="currentProgramStartDate" sm={4}>
                  Start Date
                </Label>
                <Label for="currentProgramEndDate" sm={8}>
                  End Date
                </Label>
                <Col sm={4}>
                  <Field
                    id="currentProgramStartDate"
                    name="currentProgramStartDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Col sm={8}>
                  <Field
                    id="currentProgramEndDate"
                    name="currentProgramEndDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Label for="currentNameOfSponsoring" sm={4}>
                  Name of sponsoring organization
                </Label>
                <Label for="currentCertificate" sm={8}>
                  Certificate
                </Label>
                <Col sm={4}>
                  <Field
                    id="currentNameOfSponsoring"
                    name="currentNameOfSponsoring"
                    placeholder="Enter name of sponsoring organization"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="currentCertificate"
                    name="currentCertificate"
                    placeholder=""
                    type="file"
                    className="mb-3"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="currentlyParticipationUSProgram" sm={12}>
                  Are you currently applying to any other U.S. government
                  sponsored program including online programs?
                  <small style={{ color: "red" }}>Required</small>
                </Label>
                <Col sm={12}>
                  <Field
                    as="select"
                    id="currentlyParticipationUSProgram"
                    name="currentlyParticipationUSProgram"
                  >
                    {participationUSProgramOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label sm={12}>Program Dates:</Label>
                <Label for="currentProgramStartDate" sm={4}>
                  Start Date
                </Label>
                <Label for="currentProgramEndDate" sm={8}>
                  End Date
                </Label>
                <Col sm={4}>
                  <Field
                    id="currentProgramStartDate"
                    name="currentProgramStartDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Col sm={8}>
                  <Field
                    id="currentProgramEndDate"
                    name="currentProgramEndDate"
                    placeholder=""
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Label for="currentNameOfSponsoring" sm={4}>
                  Name of sponsoring organization
                </Label>
                <Label for="currentCertificate" sm={8}>
                  Certificate
                </Label>
                <Col sm={4}>
                  <Field
                    id="currentNameOfSponsoring"
                    name="currentNameOfSponsoring"
                    placeholder="Enter name of sponsoring organization"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="currentCertificate"
                    name="currentCertificate"
                    placeholder=""
                    type="file"
                    className="mb-3"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="professionalDevelopmentProgram" sm={12}>
                  Are you currently applying or planning to apply to any
                  professional development programs in other countries?
                  <small style={{ color: "red" }}>Required</small>
                </Label>
                <Col sm={12}>
                  <Field
                    as="select"
                    id="professionalDevelopmentProgram"
                    name="professionalDevelopmentProgram"
                  >
                    {professionalDevelopmentProgramOptions.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                </Col>
                <Label sm={12}>Program Dates:</Label>
                <Label for="professionalDevelopmentProgramStartDate" sm={4}>
                  Start Date
                </Label>
                <Label for="professionalDevelopmentProgramEndDate" sm={8}>
                  End Date
                </Label>
                <Col sm={4}>
                  <Field
                    id="professionalDevelopmentProgramStartDate"
                    name="professionalDevelopmentProgramStartDate"
                    placeholder="Enter start date"
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Col sm={8}>
                  <Field
                    id="professionalDevelopmentProgramEndDate"
                    name="professionalDevelopmentProgramEndDate"
                    placeholder="Enter end date"
                    type="date"
                    className="mb-3"
                  />
                </Col>
                <Label for="professionalDevelopmentNameOfSponsoring" sm={4}>
                  Name of sponsoring organization
                </Label>
                <Label for="professionalDevelopmentCertificate" sm={8}>
                  Certificate
                </Label>
                <Col sm={4}>
                  <Field
                    id="professionalDevelopmentNameOfSponsoring"
                    name="professionalDevelopmentNameOfSponsoring"
                    placeholder="Enter name of sponsoring organization"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="professionalDevelopmentCertificate"
                    name="professionalDevelopmentCertificate"
                    placeholder=""
                    type="file"
                    className="mb-3"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="professionalDevelopmentProgram" sm={12}>
                  List any certifications,achievements or any extra-curricular
                  activities that highlight your professional experience as an
                  English language teacher outside the classroom.
                  <small style={{ color: "red" }}>optional</small>
                </Label>
                <Label sm={4}>Trainings or certifications</Label>
                <Label sm={4}>Year</Label>
                <Label sm={4}>Add attachments:Certificate(optional)</Label>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertifications1"
                    name="trainingsOrCertifications1"
                    placeholder="Enter trainings or certifications"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsYear1"
                    name="trainingsOrCertificationsYear1"
                    placeholder=""
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsCertificate1"
                    name="trainingsOrCertificationsCertificate1"
                    placeholder="Enter start date"
                    type="file"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertifications2"
                    name="trainingsOrCertifications2"
                    placeholder="Enter trainings or certifications"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsYear2"
                    name="trainingsOrCertificationsYear2"
                    placeholder=""
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsCertificate2"
                    name="trainingsOrCertificationsCertificate2"
                    placeholder="Enter start date"
                    type="file"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertifications3"
                    name="trainingsOrCertifications3"
                    placeholder="Enter trainings or certifications"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsYear3"
                    name="trainingsOrCertificationsYear3"
                    placeholder=""
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsCertificate3"
                    name="trainingsOrCertificationsCertificate3"
                    placeholder="Enter start date"
                    type="file"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertifications4"
                    name="trainingsOrCertifications4"
                    placeholder="Enter trainings or certifications"
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsYear4"
                    name="trainingsOrCertificationsYear4"
                    placeholder=""
                    type="text"
                    className="mb-3"
                  />
                </Col>
                <Col sm={4}>
                  <Field
                    id="trainingsOrCertificationsCertificate4"
                    name="trainingsOrCertificationsCertificate4"
                    placeholder="Enter start date"
                    type="file"
                    className="mb-3"
                  />
                </Col>
              </FormGroup>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

export default ProfessionalDetails;
