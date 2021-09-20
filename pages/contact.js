import React from 'react'
import PageWrapper from '@/components/PageWrapper'
import { PageSeo } from '@/components/SEO'

import SvgIcon from '@/components/svgs'

import siteMetadata from '@/config/siteMetadata'

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
        <PageWrapper>
          <PageSeo
            title={`Contact - ${siteMetadata.author}`}
            description={`Contact - ${siteMetadata.author}`}
            url={`${siteMetadata.siteUrl}/contact`}
          />
          <section className='divide-y'>
            <h1 className='pageTitle'>
              Contact
            </h1>
            <div className='main'>
              <p className='info'>You can use the form to contact me with any queries you have or reach out on social media.</p>
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
                    <button id='contactSubmit' className='inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500'>Submit</button>
                    {this.state.submitting &&
                      <span id='image-loader'>
                        <SvgIcon id='spinner' kind='spinner' size='1' />
                      </span>}
                    {this.state.error &&
                      <div id='message-warning'>{this.state.error}</div>}
                    {this.state.submitted &&
                      <div id='message-success'>
                        <SvgIcon kind='check' size='1' /> Your message was sent, thank you.
                        <br />
                      </div>}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </PageWrapper>
      </>
    )
  }
}
