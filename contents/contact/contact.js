import React from 'react'
import { MainInner } from '../../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
      },
      submitting: false,
      submitted: false,
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange (e) {
    const formData = { ...this.state.formData }
    formData[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      formData
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      submitting: true
    }, this.submitForm)
  }

  submitForm () {
    const data = {
      contactName: this.state.formData.contactName,
      contactEmail: this.state.formData.contactEmail,
      contactSubject: this.state.formData.contactSubject,
      contactMessage: this.state.formData.contactMessage
    }

    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    axios.post('https://usebasin.com/f/15cd09ff88a6.json', data, options)
      .then((response) => {
        console.log('Sent:', response)
        this.setState({
          submitting: false,
          submitted: true,
          error: null
        })
      })
      .catch((error) => {
        console.log('Failed:', error)
        this.setState({
          submitting: false,
          submitted: false,
          error: error
        })
      })
  }

  render () {
    return (
      <MainInner id='contact' title='Contact' fluid>
        <div className='row section-head'>
          <div className='width20'>
            <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
          </div>
          <div className='width80'>
            <p className='lead'>You can use the below form to contact me with any queries you have.
            </p>
          </div>
        </div>
        <div className='row'>
          <form id='contactForm' name='contactForm' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='contactName'>Name <span className='required'>*</span></label>
              <input type='text' size='35' id='contactName' name='contactName' required value={this.state.formData.contactName} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='contactEmail'>Email <span className='required'>*</span></label>
              <input type='text' size='35' id='contactEmail' name='contactEmail' required value={this.state.formData.contactEmail} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='contactSubject'>Subject</label>
              <input type='text' size='35' id='contactSubject' name='contactSubject' required value={this.state.formData.contactSubject} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
              <textarea cols='50' rows='15' id='contactMessage' name='contactMessage' required value={this.state.formData.contactMessage} onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <div className='form-group-submit'>
                <button id='contactSubmit' className='btn btn-primary'>Submit</button>
                {this.state.submitting &&
                  <span id='image-loader'>
                    <FontAwesomeIcon icon={faSpinner} spin className='spinner-icon' />
                  </span>}
                {this.state.error &&
                  <div id='message-warning'>{this.state.error}</div>}
                {this.state.submitted &&
                  <div id='message-success'>
                    <FontAwesomeIcon icon={faCheck} className='check-icon' /> Your message was sent, thank you!
                    <br />
                  </div>}
              </div>
            </div>
          </form>
        </div>
      </MainInner>
    )
  }
}

export { Contact }
