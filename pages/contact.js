import React from 'react'
import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

import SvgIcon from '@/components/svgs'

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
        this.setState({
          submitting: false,
          submitted: true,
          error: null
        })
      })
      .catch((error) => {
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
        <PageWrapper>
          <PageSEO
            title='Contact'
            description='You can use the form to contact Paul Mowat with any queries you have or reach out on social media.'
          />
          <main className='divide-y'>
            <h1 className='pageTitle'>
              Contact
            </h1>
            <section className='main'>
              <p className='info'>You can use the form to contact me with any queries you have or reach out on social media.</p>
              <form id='contactForm' name='contactForm' onSubmit={this.handleSubmit}>
                <div className='w-full'>
                  <label htmlFor='contactName'>Name <span className='required'>*</span></label>
                  <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactName' name='contactName' required value={this.state.formData.contactName} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactEmail'>Email <span className='required'>*</span></label>
                  <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactEmail' name='contactEmail' required value={this.state.formData.contactEmail} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactSubject'>Subject</label>
                  <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactSubject' name='contactSubject' required value={this.state.formData.contactSubject} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
                  <textarea className='w-full text-gray-700 rounded-md' cols='50' rows='7' id='contactMessage' name='contactMessage' required value={this.state.formData.contactMessage} onChange={this.handleChange} />
                </div>
                <div className=''>
                  <div className='w-full'>
                    <button id='contactSubmit' className='btn'>Submit</button>
                    {this.state.submitting &&
                      <div id='message-progress' className='flex mt-2 space-x-2'>
                        <SvgIcon id='spinner' kind='spinner' />
                      </div>}
                    {this.state.error &&
                      <div id='message-error' className='flex mt-2 space-x-2'>
                        <SvgIcon id='error' kind='error' /><span>{this.state.error}</span>
                      </div>}
                    {this.state.submitted &&
                      <div id='message-success' className='flex mt-2 space-x-2'>
                        <SvgIcon id='check' kind='check' /><span>Your message was sent, thank you.</span>
                      </div>}
                  </div>
                </div>
              </form>
            </section>
          </main>
        </PageWrapper>
      </>
    )
  }
}
