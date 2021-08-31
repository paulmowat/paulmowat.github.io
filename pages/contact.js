import React from 'react'

import siteMetadata from '@/config/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default class Contact extends React.Component {
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

    window.fetch('https://usebasin.com/f/15cd09ff88a6.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
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
      <>
        <PageSeo
          title={`Contact - ${siteMetadata.author}`}
          description={`Contact - ${siteMetadata.author}`}
          url={`${siteMetadata.siteUrl}/contact`}
        />
        <div className='divide-y'>
          <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Contact
            </h1>
          </div>
          <div className='items-start space-y-2 pt-8 pb-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
            <div className=''>
              <div className='w-1/4'>
                {/* <FontAwesomeIcon icon={faEnvelope} className='contact-icon' /> */}
                Envelope Icon
              </div>
              <div className='w-3/4'>
                <p className='lead'>You can use the form to contact me with any queries you have.
                </p>
              </div>
            </div>
            <div className='xl:col-span-2'>
              <form id='contactForm' name='contactForm' onSubmit={this.handleSubmit}>
                <div className='w-full'>
                  <label htmlFor='contactName'>Name <span className='required'>*</span></label>
                  <input type='text' className='rounded-md w-full' size='35' id='contactName' name='contactName' required value={this.state.formData.contactName} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactEmail'>Email <span className='required'>*</span></label>
                  <input type='text' className='rounded-md w-full' size='35' id='contactEmail' name='contactEmail' required value={this.state.formData.contactEmail} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactSubject'>Subject</label>
                  <input type='text' className='rounded-md w-full' size='35' id='contactSubject' name='contactSubject' required value={this.state.formData.contactSubject} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
                  <textarea className='rounded-md w-full' cols='50' rows='15' id='contactMessage' name='contactMessage' required value={this.state.formData.contactMessage} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <div className=''>
                    <button id='contactSubmit' className='block prose dark:prose-dark uppercase border text-lg p-4 rounded'>Submit</button>
                    {this.state.submitting &&
                      <span id='image-loader'>
                        {/* <FontAwesomeIcon icon={faSpinner} spin className='spinner-icon' /> */}
                        Spinner
                      </span>}
                    {this.state.error &&
                      <div id='message-warning'>{this.state.error}</div>}
                    {this.state.submitted &&
                      <div id='message-success'>
                        {/* <FontAwesomeIcon icon={faCheck} className='check-icon' /> Your message was sent, thank you! */}
                        Your message was sent, thank you.
                        <br />
                      </div>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
