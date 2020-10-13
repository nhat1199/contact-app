import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "@material-ui/core";
import { Input, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isCheckedIcon: PropTypes.bool,
  isShowCheckIcon: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  onChange: null,
  isCheckedIcon: false,
  isShowCheckIcon: false,
};

function InputField(props) {
  const {
    field,
    form,
    type,
    placeholder,
    disabled,
    label,
    isCheckedIcon,
    isShowCheckIcon,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && (
        <Label for={name} className="d-flex align-items-center">
          {label}{" "}
          {isShowCheckIcon && !isCheckedIcon && (
            <CloseCircleTwoTone twoToneColor="red" className="pl-2" />
          )}{" "}
          {isShowCheckIcon && isCheckedIcon && (
            <CheckCircleTwoTone twoToneColor="#52c41a" className="pl-2" />
          )}{" "}
        </Label>
      )}

      <Input
        className="border border-primary"
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default InputField;
