import React from "react";
import { FormGroup, Label, Col, Button, Card, CardBody } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  firstName: "",
  middleName: "",
  surName: "",
  gender: "",
  religion: "",
  disability: "",
  country: "",
  dateOfBirth: "",
  placeOfBirthCity: "",
  placeOfBirthRegion: "",
  placeOfBirthCountry: "",
  homeAddressCity: "",
  homeAddressRegion: "",
  homeAddressCountry: "",
  cellphone1: "",
  cellphone2: "",
  landlane: "",
  email1: "",
  email2: "",
};
const onSubmit = (values, submitProps) => {
  console.log("form values ", values);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("first name is Required"),
  middleName: Yup.string().required("middle name is Required"),
  surName: Yup.string().required("surname is Required"),
  gender: Yup.string().required("gender is Required"),
  religion: Yup.string().required("religion is Required"),
  disability: Yup.string().required("disability is Required"),
  country: Yup.string().required("country is Required"),
  dateOfBirth: Yup.date().required("Date is required").nullable(),
  placeOfBirthCity: Yup.string().required("birth is Required"),
  placeOfBirthCountry: Yup.string().required("country is Required"),
  placeOfBirthRegion: Yup.string().required("religion is Required"),
  homeAddressCity: Yup.string().required("city is Required"),
  homeAddressRegion: Yup.string().required("region is Required"),
  homeAddressCountry: Yup.string().required("country is Required"),
  cellphone1: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  cellphone2: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8),
  landlane: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8),
  email1: Yup.string().email("Invalid email format").required("Required"),
  email2: Yup.string().email("Invalid email format"),
});

const PersonalDetails = () => {
  const genderOptions = [
    { key: "Select an option", value: "" },
    { key: "male", value: "male" },
    { key: "female", value: "female" },
    { key: "other", value: "other" },
  ];

  const religionOptions = [
    { key: "Select an option", value: "" },
    { key: "Muslim", value: "Muslim" },
    { key: "Hindu", value: "Hindu" },
    { key: "Christian", value: "Christian" },
    { key: "Other", value: "Other" },
  ];

  const disabilityOptions = [
    { key: "Select an option", value: "" },
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const countryOptions = [
    { key: "Select an option", value: "" },
    { key: "Pakistan", value: "Pakistan" },
    { key: "Other", value: "Other" },
  ];

  const placeOfBirthRegionOptions = [
    { key: "Select an option", value: "" },
    { key: "AJK", value: "AJK" },
    { key: "ICT", value: "ICT" },
    { key: "Punjab", value: "Punjab" },
    { key: "Sindh", value: "Sindh" },
    { key: "KP", value: "KP" },
    { key: "Balochistan", value: "Balochistan" },
    { key: "GB", value: "GB" },
  ];
  return (
    <Card className="container">
      <CardBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div>
              <h3 className="text-center">PersonalDetails</h3>
            </div>

            <FormGroup row>
              <Label for="firstName" sm={4}>
                First Name <small className="error">{"*"}</small>
              </Label>
              <Label for="middleName" sm={4}>
                Middle Name <small className="error">{"*"}</small>
              </Label>
              <Label for="surName" sm={4}>
                Family Name/Surname <small className="error">{"*"}</small>
              </Label>
              <Col sm={4}>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first Name"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="firstName" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="middleName"
                  name="middleName"
                  placeholder="Enter your middle Name"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="middleName" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="surName"
                  name="surName"
                  placeholder="Enter your Surname"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="surName" component={TextError} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="gender" sm={4}>
                Gender <small className="error">{"*"}</small>
              </Label>
              <Label for="exampleSelect" sm={4}>
                Religion <small className="error">{"*"}</small>
              </Label>
              <Label for="exampleSelect" sm={4}>
                Disability <small className="error">{"*"}</small>
              </Label>
              <Col sm={4}>
                <Field as="select" id="gender" name="gender">
                  {genderOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="gender" component={TextError} />
              </Col>
              <Col sm={4}>
                <Field as="select" id="religion" name="religion">
                  {religionOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="religion" component={TextError} />
              </Col>
              <Col sm={4}>
                <Field as="select" id="disability" name="disability">
                  {disabilityOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="disability" component={TextError} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="country" sm={4}>
                Country <small className="error">{"*"}</small>
              </Label>
              <Label for="dateOfBirth" sm={8}>
                Date of Birth <small className="error">{"*"}</small>
              </Label>
              <Col sm={4}>
                <Field as="select" id="country" name="country">
                  {countryOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="country" component={TextError} />
              </Col>
              <Col sm={4}>
                <Field
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Select your date of birth"
                  type="date"
                  className="mb-3"
                />

                <ErrorMessage name="dateOfBirth" component={TextError} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="placeOfBirth" sm={12}>
                Place of Birth
              </Label>

              <Label for="placeOfBirthCity" sm={4}>
                City <small className="error">{"*"}</small>
              </Label>

              <Label for="placeOfBirthRegion" sm={4}>
                Region <small className="error">{"*"}</small>
              </Label>

              <Label for="placeOfBirthCountry" sm={4}>
                Country <small className="error">{"*"}</small>
              </Label>
              <Col sm={4}>
                <Field
                  id="placeOfBirthCity"
                  name="placeOfBirthCity"
                  placeholder="Enter your place of birth"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="placeOfBirthCity" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  as="select"
                  id="placeOfBirthRegion"
                  name="placeOfBirthRegion"
                >
                  {placeOfBirthRegionOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="placeOfBirthRegion" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="placeOfBirthCountry"
                  name="placeOfBirthCountry"
                  placeholder="Enter your place of country"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage
                  name="placeOfBirthCountry"
                  component={TextError}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="homeAddress" sm={12}>
                Home Address
              </Label>

              <Label for="homeAddressCity" sm={4}>
                City <small className="error">{"*"}</small>
              </Label>
              <Label for="homeAddressRegion" sm={4}>
                Region <small className="error">{"*"}</small>
              </Label>
              <Label for="homeAddressCountry" sm={4}>
                Country <small className="error">{"*"}</small>
              </Label>

              <Col sm={4}>
                <Field
                  id="homeAddressCity"
                  name="homeAddressCity"
                  placeholder="Enter your city"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="homeAddressCity" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  as="select"
                  id="homeAddressRegion"
                  name="homeAddressRegion"
                >
                  {placeOfBirthRegionOptions.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name="homeAddressRegion" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="homeAddressCountry"
                  name="homeAddressCountry"
                  placeholder="Enter your country"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="homeAddressCountry" component={TextError} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Telephone Number" sm={12}>
                Telephone Number
              </Label>
              <Label for="cellphone1" sm={4}>
                Cellphone 1 <small className="error">{"*"}</small>
              </Label>
              <Label for="exampleEmail" sm={4}>
                Cellphone 2 <small>(if any)</small>
              </Label>
              <Label for="exampleEmail" sm={4}>
                Land line
              </Label>
              <Col sm={4}>
                <Field
                  id="cellphone1"
                  name="cellphone1"
                  placeholder="Enter your phone number"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="cellphone1" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="cellphone2"
                  name="cellphone2"
                  placeholder="Enter your phone number"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="cellphone2" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="landlane"
                  name="landlane"
                  placeholder="Enter your phone number"
                  type="text"
                  className="mb-3"
                />
                <ErrorMessage name="landlane" component={TextError} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="email" sm={12}>
                Email
              </Label>
              <Label for="email1" sm={4}>
                Email 1 <small className="error">{"*"}</small>
              </Label>
              <Label for="email2" sm={8}>
                Email 2
              </Label>
              <Col sm={4}>
                <Field
                  id="email1"
                  name="email1"
                  placeholder="Enter your phone number"
                  type="email"
                  className="mb-3"
                />
                <ErrorMessage name="email1" component={TextError} />
              </Col>

              <Col sm={4}>
                <Field
                  id="email2"
                  name="email2"
                  placeholder="Enter your phone number"
                  type="email"
                  className="mb-3"
                />
                <ErrorMessage name="email2" component={TextError} />
              </Col>
            </FormGroup>

            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </CardBody>
    </Card>
  );
};

export default PersonalDetails;
