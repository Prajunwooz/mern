import axios from 'axios'
import React, { useState } from 'react'


const Contact = () => {
  const [formData, setFormData] = useState({ //form data initially empty
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    // console.log('Form submitted:', formData)
    // sendMail({
    //   email: formData.email,
    //   subject: formData.subject,
    //   html: `<p><strong>Name:</strong> ${formData.name}</p>
    //          <p><strong>Email:</strong> ${formData.email}</p>
    //          <p><strong>Phone:</strong> ${formData.phone}</p>
    //          <p><strong>Message:</strong><br/> ${formData.message}</p>`
    // }) // Call the sendMail function to send the email
    
    // Show success message
    try {
    const response = await axios.post(`http://localhost:8080/contact/message`,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }  
    )
    console.log(response)
   } // Replace with your backend endpoint
    catch (error) {
      console.error('Error sending message:', error)
    }
  
      
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    })

    // Reset form
    setFormData({
      name: '', //set form data to empty after submit
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      })
    }, 5000)
  }

  // Contact information
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['123 Business Street', 'Tech Park, Silicon Valley', 'CA 94043, USA']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      subtext: 'Mon-Fri 9am to 6pm PST'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@yourcompany.com', 'support@yourcompany.com'],
      subtext: '24/7 Support Available'
    }
  ]

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: '#1877f2' },
    { name: 'Twitter', icon: '🐦', url: '#', color: '#1da1f2' },
    { name: 'LinkedIn', icon: '🔗', url: '#', color: '#0077b5' },
    { name: 'Instagram', icon: '📷', url: '#', color: '#e4405f' },
    { name: 'GitHub', icon: '🐙', url: '#', color: '#333' },
    { name: 'YouTube', icon: '▶️', url: '#', color: '#ff0000' }
  ]

  // FAQ data
  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available Monday through Friday, 9am to 6pm PST. For urgent issues, email support is available 24/7.'
    },
    {
      question: 'How quickly do you respond?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days. Priority support queries are answered within 4 hours.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes! Our technical team is ready to assist with any product-related questions or issues you may encounter.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! Contact us to schedule a personalized demo with our product specialists at your convenience.'
    }
  ]

  // Office locations
  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 100',
      phone: '+1 (415) 555-0123',
      email: 'sf@yourcompany.com'
    },
    {
      city: 'New York',
      address: '456 Broadway, Floor 5',
      phone: '+1 (212) 555-0456',
      email: 'nyc@yourcompany.com'
    },
    {
      city: 'London',
      address: '789 Oxford Street',
      phone: '+44 20 7946 0123',
      email: 'london@yourcompany.com'
    }
  ]

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>📬 Get in Touch</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Whether you have a question about our products, 
          need support, or just want to say hello, we're here to help.
        </p>
      </div>

      <div style={styles.content}>
        {/* Contact Info Cards */}
        <div style={styles.infoGrid}>
          {contactInfo.map((info, index) => (
            <div key={index} style={styles.infoCard}>
              <div style={styles.infoIcon}>{info.icon}</div>
              <h3 style={styles.infoTitle}>{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} style={styles.infoDetail}>{detail}</p>
              ))}
              {info.subtext && (
                <p style={styles.infoSubtext}>{info.subtext}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div style={styles.formMapContainer}>
          {/* Contact Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Send us a Message</h2>
            
            {formStatus.submitted && (
              <div style={{
                ...styles.alert,
                backgroundColor: formStatus.success ? '#d4edda' : '#f8d7da',
                color: formStatus.success ? '#155724' : '#721c24',
                borderColor: formStatus.success ? '#c3e6cb' : '#f5c6cb'
              }}>
                {formStatus.message}
              </div>
            )}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="John Doe"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                />
              </div>

              <button type="submit" style={styles.submitButton}>
                Send Message ✈️
              </button>
          
          </div>

          {/* Map Placeholder / Office Locations */}
          <div style={styles.mapContainer}>
            <h2 style={styles.formTitle}>Our Offices</h2>
            <div style={styles.officesList}>
              {offices.map((office, index) => (
                <div key={index} style={styles.officeCard}>
                  <h3 style={styles.officeCity}>{office.city}</h3>
                  <p style={styles.officeAddress}>📍 {office.address}</p>
                  <p style={styles.officeContact}>📞 {office.phone}</p>
                  <p style={styles .officeContact}>✉️ {office.email}</p>
                </div>
              ))}
            </div>
            
            {/* Simple Map Placeholder */}
            <div style={styles.mapPlaceholder}>
              <div style={styles.mapOverlay}>
                <span style={styles.mapText}>🗺️ Interactive Map Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={styles.faqSection}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>❓ {faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div style={styles.socialSection}>
          <h2 style={styles.sectionTitle}>Connect With Us</h2>
          <div style={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                style={{
                  ...styles.socialLink,
                  backgroundColor: social.color,
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span style={styles.socialIcon}>{social.icon}</span>
                <span style={styles.socialName}>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div style={styles.hoursSection}>
          <h2 style={styles.sectionTitle}>Business Hours</h2>
          <div style={styles.hoursGrid}>
            <div style={styles.hoursCard}>
              <h3 style={styles.hoursDay}>Monday - Friday</h3>
              <p style={styles.hoursTime}>9:00 AM - 6:00 PM</p>
            </div>
            <div style={styles.hoursCard}>
              <h3 style={styles.hoursDay}>Saturday</h3>
              <p style={styles.hoursTime}>10:00 AM - 4:00 PM</p>
            </div>
            <div style={styles.hoursCard}>
              <h3 style={styles.hoursDay}>Sunday</h3>
              <p style={styles.hoursTime}>Closed</p>
            </div>
            <div style={styles.hoursCard}>
              <h3 style={styles.hoursDay}>24/7 Support</h3>
              <p style={styles.hoursTime}>Email & Chat Available</p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

// Styles object
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '40px 20px'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '50px'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    opacity: 0.9
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '50px'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  },
  infoIcon: {
    fontSize: '3rem',
    marginBottom: '15px'
  },
  infoTitle: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '15px'
  },
  infoDetail: {
    color: '#666',
    margin: '5px 0',
    fontSize: '1rem'
  },
  infoSubtext: {
    color: '#999',
    fontSize: '0.9rem',
    marginTop: '10px',
    fontStyle: 'italic'
  },
  formMapContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '30px',
    marginBottom: '50px'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  formTitle: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '30px',
    borderLeft: '4px solid #667eea',
    paddingLeft: '15px'
  },
  alert: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid transparent'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '0.95rem',
    color: '#555',
    fontWeight: '500'
  },
  input: {
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  },
  textarea: {
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit'
  },
  submitButton: {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
  },
  mapContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  officesList: {
    display: 'grid',
    gap: '20px',
    marginBottom: '30px'
  },
  officeCard: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    borderLeft: '4px solid #667eea'
  },
  officeCity: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px'
  },
  officeAddress: {
    color: '#666',
    margin: '5px 0'
  },
  officeContact: {
    color: '#666',
    margin: '5px 0'
  },
  mapPlaceholder: {
    backgroundColor: '#e9ecef',
    height: '200px',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden'
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #667eea20, #764ba220)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapText: {
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '30px',
    color: '#667eea',
    fontWeight: 'bold'
  },
  faqSection: {
    marginBottom: '50px'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: 'white',
    textAlign: 'center',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '20px'
  },
  faqCard: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
  },
  faqQuestion: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '10px'
  },
  faqAnswer: {
    color: '#666',
    lineHeight: '1.6'
  },
  socialSection: {
    marginBottom: '50px'
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '15px',
    borderRadius: '10px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer'
  },
  socialIcon: {
    fontSize: '1.3rem'
  },
  socialName: {
    fontWeight: '500'
  },
  hoursSection: {
    marginBottom: '30px'
  },
  hoursGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  hoursCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  hoursDay: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '10px'
  },
  hoursTime: {
    fontSize: '1rem',
    color: '#667eea',
    fontWeight: 'bold'
  }
}

export default Contact