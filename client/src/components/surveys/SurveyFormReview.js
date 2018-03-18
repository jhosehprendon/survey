import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Email List</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>
            <button 
            className="red white-text btn-flat"
            onClick={onCancel}
            >
            Back
            </button>
            <button 
            className="teal white-text right btn-flat"
            onClick={() => submitSurvey(formValues, history)}
            >
            Send Survey
            <i className="material-icons right">email</i>
            </button>
        </div>    
    );
};

function mapStateToProps(state){
   return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));