import React from 'react';
import {
    Formik, Form, Field, FieldArray,
} from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {

            },
            isVisible: true,
        }
    }

    componentDidMount() {
        console.log("- - SimpleForm - Mount");
    }

    componentDidUpdate() {
        console.log("- - SimpleForm - Update");
    }  

    handleSubmit = (values, { setSubmitting }) => {}

    render() {
        return (
            <div
                className="container"
            >
                <div
                    className="row"
                >
                    <div
                        className="col"
                    >
                        <Formik
                            validationSchema={partnerSchema}
                            initialValues={this.state.initialValues}
                            onSubmit={this.handleSubmit}
                            enableReinitialize={true}
                            render={({
                                values,
                                touched,
                                errors,
                                handleSubmit,
                                handleReset,
                                setFieldTouched,
                                setFieldValue,
                                setValues,
                                isSubmitting,
                            }) => (
                                <Form
                                    onSubmit={
                                        handleSubmit
                                    }
                                >
                                    <div
                                        className="form-body"
                                    >
                                        <div
                                            className="row"
                                            >
                                            <div
                                                className="col-md-6"
                                            >
                                                <div
                                                    className="form-group"
                                                >
                                                    <div
                                                        // className="col-md-3"
                                                    >
                                                        <label
                                                            htmlFor="city"
                                                        >
                                                            City:
                                                        </label>

                                                        <Field
                                                            id='city'
                                                            aria-label='city'
                                                            type="text"
                                                            component="input"
                                                            name="city"
                                                            placeholder="City"
                                                            className="form-control"
                                                            value={values.city}
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            autoCapitalize="off"
                                                        />

                                                        {errors.city && touched.city && (
                                                            <span
                                                                aria-label='cityError'
                                                                className="input-feedback"
                                                            >
                                                                {errors.city}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div
                                                        // className="col-md-3"
                                                    >
                                                        <label
                                                            htmlFor="age"
                                                        >
                                                            Age:
                                                        </label>

                                                        <Field
                                                            id='age'
                                                            aria-label='age'
                                                            type="text"
                                                            component="input"
                                                            name="age"
                                                            placeholder="age"
                                                            className="form-control"
                                                            value={values.age}
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            autoCapitalize="off"
                                                        />

                                                        {errors.age && touched.age && (
                                                            <span
                                                                aria-label='input-feedback'
                                                                className="input-feedback"
                                                            >
                                                                {errors.age}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="form-group"
                                                    >
                                                        <label
                                                            htmlFor="notes"
                                                        >
                                                            Notes:
                                                        </label>

                                                        <Field
                                                            aria-label='Notes'
                                                            type="text"
                                                            name="notes"
                                                            placeholder="Notes"
                                                            className="form-control"
                                                            component="textarea"
                                                            value={values.notes}
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            autoCapitalize="off"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SimpleForm
