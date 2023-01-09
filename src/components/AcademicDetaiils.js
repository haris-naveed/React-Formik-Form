import React, { useState } from "react";
import { FormGroup, Label, Col, Button, Card, CardBody } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const arr = [0];

function AcademicDetaiils() {
  const [count, setCount] = useState(1);
  const degreeOptions = [
    { key: "Select an option", value: "" },
    { key: "Ph. D", value: "Ph. D" },
    { key: "M. Phill", value: "M. Phill" },
    { key: "Masters", value: "Masters" },
    { key: "Bachelors", value: "Bachelors" },
  ];

  const fieldOfStudyOptions = [
    { key: "Select an option", value: "" },
    { key: "English", value: "English" },
    { key: "Education", value: "Education" },
    { key: "Other", value: "Other" },
  ];

  const clickHandler = () => {
    setCount(count + 1);
    arr.push(count);
  };

  const initialValues = {
    formData: [
      {
        degree: "",
        institute: "",
        fieldOfStudy: "",
        yearStarted: "",
        yearCompleted: "",
        percentage: "",
        degreeFile: "",
        transcriptFile: "",
      },
    ],
  };

  const onSubmit = (values, submitProps) => {
    console.log("form values ", values);

    submitProps.resetForm({});
  };

  const validationSchema = Yup.object({
    formData: Yup.array(
      Yup.object({
        degree: Yup.string().required("Degree is Required"),
        institute: Yup.string().required("Institute is Required"),
        fieldOfStudy: Yup.string().required("Field of study is Required"),
        yearStarted: Yup.date().required("Year Started is required").nullable(),
        yearCompleted: Yup.date()
          .required("Year Completed is required")
          .nullable(),
        percentage: Yup.number("invalid")
          .required("Percentage needed")
          .min(1, "Percentage needs to be at least 1%")
          .max(100, "Percentage can be at most 100%"),
        degreeFile: Yup.string().required("degree  is Required"),
        transcriptFile: Yup.string().required("transcript  is Required"),
      })
    ),
  });
  return (
    <Card className="container">
      <CardBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <div>
                <h3 className="text-center">Academic Details</h3>
              </div>
              <div className="heading1 text-center">
                <h4>Please list your educational background</h4>
                <small>(Starting from your latest degree first)</small>
              </div>
              {console.log(props.errors)}

              {props.values.formData.map((val, index) => (
                <FormGroup key={index} row>
                  {console.log("errors", props.errors)}
                  <Label for={`formData[${index}].degree`} sm={4}>
                    Degree <small className="error">{"*"}</small>{" "}
                    <ErrorMessage
                      name={`formData[${index}].degree`}
                      component={TextError}
                    />
                    {console.log("formData", props.values.formData)}
                  </Label>

                  <Label for={`formData[${index}].institute`} sm={4}>
                    Institute/University <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].institute`}
                      component={TextError}
                    />
                  </Label>

                  <Label for={`formData[${index}].fieldOfStudy`} sm={4}>
                    Field of Study <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].fieldOfStudy`}
                      component={TextError}
                    />
                  </Label>

                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].degree`}
                      name={`formData[${index}].degree`}
                    >
                      {degreeOptions.map((option) => {
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
                      id={`formData[${index}].institute`}
                      name={`formData[${index}].institute`}
                      placeholder="Enter your instutute name"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      as="select"
                      id={`formData[${index}].fieldOfStudy`}
                      name={`formData[${index}].fieldOfStudy`}
                    >
                      {fieldOfStudyOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Field>
                  </Col>
                  <Label for={`formData[${index}].yearStarted`} sm={4}>
                    Year Started <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].yearStarted`}
                      component={TextError}
                    />
                  </Label>

                  <Label for={`formData[${index}].yearCompleted`} sm={4}>
                    Year Completed <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].yearCompleted`}
                      component={TextError}
                    />
                  </Label>

                  <Label for={`formData[${index}].percentage`} sm={4}>
                    Percentage <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].percentage`}
                      component={TextError}
                    />
                  </Label>

                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].yearStarted`}
                      name={`formData[${index}].yearStarted`}
                      placeholder=""
                      type="date"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].yearCompleted`}
                      name={`formData[${index}].yearCompleted`}
                      placeholder=""
                      type="date"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].percentage`}
                      name={`formData[${index}].percentage`}
                      placeholder="Enter your Percentage"
                      type="text"
                      className="mb-3"
                    />
                  </Col>
                  <Label for="attachments" sm={12}>
                    Add attachments <small className="error">{"*"}</small>
                  </Label>

                  <Label for={`formData[${index}].degreeFile`} sm={4}>
                    Degree <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].degreeFile`}
                      component={TextError}
                    />
                  </Label>

                  <Label for={`formData[${index}].transcriptFile`} sm={8}>
                    Transcript <small className="error">{"*"}</small>
                    <ErrorMessage
                      name={`formData[${index}].transcriptFile`}
                      component={TextError}
                    />
                  </Label>

                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].degreeFile`}
                      name={`formData[${index}].degreeFile`}
                      placeholder=""
                      type="file"
                      className="mb-3"
                    />
                  </Col>
                  <Col sm={4}>
                    <Field
                      id={`formData[${index}].transcriptFile`}
                      name={`formData[${index}].transcriptFile`}
                      placeholder=""
                      type="file"
                      className="mb-3"
                    />
                  </Col>
                </FormGroup>
              ))}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit">Submit</Button>

                <Field>
                  {(props) => {
                    const clickHandlers = () => {
                      clickHandler();
                      props.form.values.formData.push({
                        degree: "",
                        institute: "",
                        fieldOfStudy: "",
                        yearStarted: "",
                        yearCompleted: "",
                        percentage: "",
                        degreeFile: "",
                        transcriptFile: "",
                      });
                    };

                    return (
                      <Button type="button" onClick={clickHandlers}>
                        Add another
                      </Button>
                    );
                  }}
                </Field>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

export default AcademicDetaiils;
