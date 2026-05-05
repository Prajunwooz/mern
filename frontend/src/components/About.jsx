import React from 'react'
import PropTypes from 'prop-types'


const About = ({ productname, price, description, features, inStock }) => {
  console.log("ABOUT component rendered");
  
  // JavaScript Concepts List
  const jsConcepts = [
    { name: 'Closures', description: 'Functions with access to outer scope', level: 'Advanced' },
    { name: 'Promises', description: 'Handle async operations', level: 'Intermediate' },
    { name: 'Event Loop', description: 'Manages async execution', level: 'Advanced' },
    { name: 'Prototypal Inheritance', description: 'Object-based inheritance', level: 'Advanced' },
    { name: 'Hoisting', description: 'Variable/function declarations moved to top', level: 'Intermediate' }
  ]

  // JavaScript Features List
  const jsFeatures = [
    'First-class Functions',
    'Dynamic Typing',
    'Prototype-based OOP',
    'Event-driven Programming',
    'Cross-platform Compatibility',
    'Rich Standard Library',
    'JSON Support',
    'Regular Expressions'
  ]

  // Popular JavaScript Frameworks/Libraries
  const jsFrameworks = [
    { name: 'React', rating: '⭐⭐⭐⭐⭐', users: 'Millions', useCase: 'UI Development' },
    { name: 'Vue.js', rating: '⭐⭐⭐⭐⭐', users: 'Millions', useCase: 'Progressive Apps' },
    { name: 'Angular', rating: '⭐⭐⭐⭐', users: 'Widely Used', useCase: 'Enterprise Apps' },
    { name: 'Node.js', rating: '⭐⭐⭐⭐⭐', users: 'Billions', useCase: 'Backend Development' },
    { name: 'Next.js', rating: '⭐⭐⭐⭐⭐', users: 'Rapid Growth', useCase: 'Full-stack React' }
  ]

  // JavaScript Version History
  const jsVersions = [
    { version: 'ES1', year: 1997, features: 'First Edition' },
    { version: 'ES3', year: 1999, features: 'Regex, try/catch' },
    { version: 'ES5', year: 2009, features: 'JSON, strict mode' },
    { version: 'ES6', year: 2015, features: 'Classes, modules, arrow functions' },
    { version: 'ES7', year: 2016, features: 'Exponentiation, Array.includes' },
    { version: 'ES8', year: 2017, features: 'Async/await, Object.values' },
    { version: 'ES9', year: 2018, features: 'Rest/spread, finally()' },
    { version: 'ES10', year: 2019, features: 'Array.flat, Object.fromEntries' }
  ]

  // JavaScript Data Types
  const jsDataTypes = [
    { type: 'Number', example: '42, 3.14', category: 'Primitive' },
    { type: 'String', example: '"Hello"', category: 'Primitive' },
    { type: 'Boolean', example: 'true/false', category: 'Primitive' },
    { type: 'Undefined', example: 'let x;', category: 'Primitive' },
    { type: 'Null', example: 'let y = null', category: 'Primitive' },
    { type: 'Symbol', example: 'Symbol()', category: 'Primitive (ES6)' },
    { type: 'Object', example: '{key: "value"}', category: 'Reference' },
    { type: 'Array', example: '[1, 2, 3]', category: 'Reference' },
    { type: 'Function', example: 'function() {}', category: 'Reference' }
  ]

  // JavaScript Methods List
  const jsMethods = [
    'map() - Transform arrays',
    'filter() - Filter array elements',
    'reduce() - Reduce array to single value',
    'forEach() - Iterate arrays',
    'sort() - Sort arrays',
    'push()/pop() - Add/remove from end',
    'shift()/unshift() - Add/remove from start',
    'concat() - Merge arrays',
    'slice() - Extract portion of array',
    'splice() - Add/remove elements'
  ]

  // Common JavaScript Interview Questions
  const interviewQuestions = [
    'What is event delegation?',
    'Explain "this" keyword',
    'Difference between == and ===',
    'What are promises?',
    'Explain closure with example',
    'What is hoisting?',
    'How does prototypal inheritance work?',
    'What is event loop?'
  ]

  // JavaScript Best Practices
  const bestPractices = [
    'Use const and let instead of var',
    'Use strict equality (===)',
    'Avoid global variables',
    'Use meaningful variable names',
    'Comment complex logic',
    'Handle errors with try/catch',
    'Use arrow functions for callbacks',
    'Implement proper error handling'
  ]

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header Section */}
        <div style={styles.header}>
          <h1 style={styles.title}>{productname}</h1>
          <div style={styles.priceTag}>
            <span style={styles.currency}>Rs</span>
            <span style={styles.price}>{price}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div style={styles.statusContainer}>
          <span style={{
            ...styles.statusBadge,
            backgroundColor: inStock ? '#4CAF50' : '#f44336'
          }}>
            {inStock ? '✓ IN STOCK' : '○ OUT OF STOCK'}
          </span>
        </div>

        {/* Description Section */}
        {description && (
          <div style={styles.descriptionSection}>
            <h3 style={styles.sectionTitle}>About This Product</h3>
            <p style={styles.description}>{description}</p>
          </div>
        )}

        {/* JavaScript Concepts Accordion */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🔧 JavaScript Core Concepts</h3>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Concept</th>
                  <th style={styles.th}>Description</th>
                  <th style={styles.th}>Level</th>
                </tr>
              </thead>
              <tbody>
                {jsConcepts.map((item, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>{item.description}</td>
                    <td style={styles.td}>
                      <span style={{
                        ...styles.levelBadge,
                        backgroundColor: item.level === 'Advanced' ? '#f44336' : '#ff9800'
                      }}>
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* JavaScript Features Grid */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>✨ JavaScript Features</h3>
          <div style={styles.featuresGrid}>
            {jsFeatures.map((feature, index) => (
              <div key={index} style={styles.gridItem}>
                <span style={styles.featureIcon}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Frameworks */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🚀 Popular JavaScript Frameworks</h3>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Framework</th>
                  <th style={styles.th}>Rating</th>
                  <th style={styles.th}>Users</th>
                  <th style={styles.th}>Use Case</th>
                </tr>
              </thead>
              <tbody>
                {jsFrameworks.map((item, index) => (
                  <tr key={index}>
                    <td style={styles.td}><strong>{item.name}</strong></td>
                    <td style={styles.td}>{item.rating}</td>
                    <td style={styles.td}>{item.users}</td>
                    <td style={styles.td}>{item.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* JavaScript Version History */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📅 ECMAScript Version History</h3>
          <div style={styles.timeline}>
            {jsVersions.map((version, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineYear}>{version.year}</div>
                <div style={styles.timelineContent}>
                  <strong>{version.version}:</strong> {version.features}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Types */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📊 JavaScript Data Types</h3>
          <div style={styles.dataTypesGrid}>
            {jsDataTypes.map((item, index) => (
              <div key={index} style={{
                ...styles.dataTypeCard,
                backgroundColor: item.category === 'Primitive' ? '#e3f2fd' : '#f3e5f5'
              }}>
                <h4 style={styles.dataTypeName}>{item.type}</h4>
                <p style={styles.dataTypeExample}>{item.example}</p>
                <span style={styles.dataTypeCategory}>{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Array Methods */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🔄 Essential Array Methods</h3>
          <div style={styles.methodsList}>
            {jsMethods.map((method, index) => (
              <div key={index} style={styles.methodItem}>
                <span style={styles.methodBullet}>•</span>
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Interview Questions */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>💼 Common Interview Questions</h3>
          <div style={styles.questionsContainer}>
            {interviewQuestions.map((question, index) => (
              <div key={index} style={styles.questionItem}>
                <span style={styles.questionIcon}>❓</span>
                {question}
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>✅ JavaScript Best Practices</h3>
          <div style={styles.practicesContainer}>
            {bestPractices.map((practice, index) => (
              <div key={index} style={styles.practiceItem}>
                <span style={styles.practiceIcon}>⭐</span>
                {practice}
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        {features && features.length > 0 && (
          <div style={styles.featuresSection}>
            <h3 style={styles.sectionTitle}>Key Features</h3>
            <ul style={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} style={styles.featureItem}>
                  <span style={styles.featureIcon}>✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <button 
            style={{
              ...styles.ctaButton,
              opacity: inStock ? 1 : 0.5,
              cursor: inStock ? 'pointer' : 'not-allowed'
            }}
            disabled={!inStock}
          >
            {inStock ? '🛒 Add to Cart' : '🚫 Out of Stock'}
          </button>
          <button style={styles.wishlistButton}>
            ♥ Wishlist
          </button>
        </div>

        {/* Trust Badges */}
        <div style={styles.trustSection}>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🚚</span>
            <span>Free Shipping</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>🛡️</span>
            <span>1 Year Warranty</span>
          </div>
          <div style={styles.trustItem}>
            <span style={styles.trustIcon}>↩️</span>
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced styles object with new additions
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
    transition: 'transform 0.3s ease',
    animation: 'slideIn 0.5s ease',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '20px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  priceTag: {
    backgroundColor: '#667eea',
    padding: '10px 20px',
    borderRadius: '50px',
    color: 'white',
    fontWeight: 'bold'
  },
  currency: {
    fontSize: '0.9rem',
    marginRight: '5px'
  },
  price: {
    fontSize: '2rem'
  },
  statusContainer: {
    marginBottom: '20px'
  },
  statusBadge: {
    padding: '8px 16px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    display: 'inline-block'
  },
  descriptionSection: {
    marginBottom: '30px'
  },
  section: {
    marginBottom: '30px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#444',
    marginBottom: '15px',
    borderLeft: '4px solid #667eea',
    paddingLeft: '10px'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
    margin: 0
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  th: {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '12px',
    textAlign: 'left'
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd'
  },
  levelBadge: {
    padding: '4px 8px',
    borderRadius: '4px',
    color: 'white',
    fontSize: '0.8rem'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px'
  },
  gridItem: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  timeline: {
    position: 'relative',
    padding: '20px 0'
  },
  timelineItem: {
    display: 'flex',
    marginBottom: '15px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px'
  },
  timelineYear: {
    minWidth: '60px',
    fontWeight: 'bold',
    color: '#667eea'
  },
  timelineContent: {
    flex: 1
  },
  dataTypesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px'
  },
  dataTypeCard: {
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center'
  },
  dataTypeName: {
    margin: '0 0 5px 0',
    color: '#333'
  },
  dataTypeExample: {
    fontSize: '0.9rem',
    color: '#666',
    margin: '5px 0'
  },
  dataTypeCategory: {
    fontSize: '0.8rem',
    color: '#999'
  },
  methodsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '10px'
  },
  methodItem: {
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '5px'
  },
  methodBullet: {
    color: '#667eea',
    marginRight: '5px'
  },
  questionsContainer: {
    display: 'grid',
    gap: '10px'
  },
  questionItem: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  },
  questionIcon: {
    marginRight: '10px'
  },
  practicesContainer: {
    display: 'grid',
    gap: '8px'
  },
  practiceItem: {
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  },
  practiceIcon: {
    color: '#ffc107',
    marginRight: '8px'
  },
  featuresSection: {
    marginBottom: '30px'
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  featureItem: {
    padding: '10px 0',
    borderBottom: '1px dashed #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    color: '#555'
  },
  featureIcon: {
    color: '#667eea',
    marginRight: '10px',
    fontSize: '1.2rem'
  },
  ctaSection: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px'
  },
  ctaButton: {
    flex: 2,
    padding: '15px 30px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
  },
  wishlistButton: {
    flex: 1,
    padding: '15px 20px',
    backgroundColor: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  trustSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0',
    borderTop: '2px solid #f0f0f0'
  },
  trustItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    color: '#666',
    fontSize: '0.9rem'
  },
  trustIcon: {
    fontSize: '1.5rem'
  }
}

// Add PropTypes
About.propTypes = {
  productname: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  inStock: PropTypes.bool
}

// Add default props
About.defaultProps = {
  description: 'A comprehensive JavaScript learning resource with detailed explanations of core concepts, features, and best practices.',
  features: [
    'Complete JavaScript Reference',
    'Interactive Code Examples',
    'Interview Preparation Guide',
    'Best Practices Handbook',
    'Framework Comparisons',
    'Regular Updates with ES Versions'
  ],
  inStock: true
}

export default About
