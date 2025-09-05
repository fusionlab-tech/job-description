# Job Interview Training Platform

A simple job market website for interview training based on job descriptions.

## Features

- **Landing Page**: User registration with name, email, and job type selection
- **Job List Page**: Displays 5 example jobs based on selected job type (.NET Developer or Shopify Developer)
- **Job Description Page**: Detailed job information with requirements, responsibilities, and benefits
- **IP Tracking**: Automatically tracks user visits and sends email notifications via EmailJS

## Setup Instructions

### 1. EmailJS Configuration

To enable email notifications, you need to set up EmailJS:

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{job_type}}`
   - `{{job_id}}`
   - `{{user_ip}}`
   - `{{timestamp}}`
   - `{{user_agent}}`
   - `{{page_url}}`
   - `{{message}}`

4. Update the configuration in `script.js`:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'YOUR_SERVICE_ID',
       templateId: 'YOUR_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   };
   ```

### 2. Email Template

Create an email template in EmailJS with this content:

```
Subject: Job Visit Tracking - {{user_name}}

Hello,

A new job description page visit has been tracked:

User Details:
- Name: {{user_name}}
- Email: {{user_email}}
- Job Type: {{job_type}}

Visit Details:
- Job ID: {{job_id}}
- IP Address: {{user_ip}}
- Timestamp: {{timestamp}}
- Page URL: {{page_url}}

Technical Details:
- User Agent: {{user_agent}}

{{message}}

Best regards,
Job Interview Training Platform
```

## Usage

1. Open `index.html` in a web browser
2. Enter your name and email
3. Select a job type (.NET Developer or Shopify Developer)
4. Browse available jobs
5. Click on any job to view detailed description
6. IP tracking and email notification will be sent automatically

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styling
- `script.js` - JavaScript functionality
- `README.md` - This documentation

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid and Flexbox)
- Vanilla JavaScript
- EmailJS for email notifications
- IPify API for IP address detection

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Notes

- The website stores tracking data in localStorage for demonstration
- Email notifications are sent to nathanfielder0530@gmail.com
- All tracking data includes user information, IP address, and technical details
