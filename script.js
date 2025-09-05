// Job data for different job types
const jobData = {
    dotnet: [
        {
            id: 1,
            title: "Senior .NET Developer",
            company: "TechCorp Solutions",
            location: "New York, NY",
            description: "We are looking for an experienced .NET developer to join our backend team. You will work on building scalable web applications and APIs.",
            skills: ["C#", ".NET Core", "ASP.NET", "Entity Framework", "SQL Server", "Azure"],
            requirements: [
                "5+ years of experience with .NET development",
                "Strong knowledge of C# and .NET Core",
                "Experience with ASP.NET MVC and Web API",
                "Proficiency in Entity Framework and LINQ",
                "Experience with SQL Server and database design",
                "Knowledge of cloud platforms (Azure preferred)",
                "Experience with Git version control"
            ],
            responsibilities: [
                "Design and develop scalable web applications using .NET technologies",
                "Create and maintain RESTful APIs",
                "Work with databases and data access layers",
                "Collaborate with frontend developers and other team members",
                "Write clean, maintainable, and well-documented code",
                "Participate in code reviews and technical discussions"
            ],
            benefits: [
                "Competitive salary and benefits package",
                "Flexible working hours and remote work options",
                "Professional development opportunities",
                "Health insurance and retirement plans",
                "Modern development tools and equipment"
            ]
        },
        {
            id: 2,
            title: "Full Stack .NET Developer",
            company: "InnovateTech",
            location: "San Francisco, CA",
            description: "Join our dynamic team as a Full Stack .NET Developer. You'll work on both frontend and backend development using modern .NET technologies.",
            skills: ["C#", ".NET 6", "Blazor", "React", "TypeScript", "PostgreSQL", "Docker"],
            requirements: [
                "3+ years of full-stack development experience",
                "Proficiency in C# and .NET 6",
                "Experience with Blazor or React",
                "Knowledge of TypeScript and modern JavaScript",
                "Experience with PostgreSQL or similar databases",
                "Familiarity with Docker and containerization",
                "Strong problem-solving and communication skills"
            ],
            responsibilities: [
                "Develop both frontend and backend components",
                "Build responsive web applications using Blazor",
                "Create and maintain database schemas",
                "Implement authentication and authorization",
                "Write unit tests and integration tests",
                "Deploy applications to cloud platforms"
            ],
            benefits: [
                "Competitive salary with equity options",
                "Comprehensive health and dental coverage",
                "Flexible PTO and work-from-home policy",
                "Learning and development budget",
                "Team building events and activities"
            ]
        },
        {
            id: 3,
            title: ".NET Core API Developer",
            company: "DataFlow Systems",
            location: "Austin, TX",
            description: "We need a skilled .NET Core developer to build high-performance APIs for our data processing platform. Experience with microservices architecture preferred.",
            skills: ["C#", ".NET Core", "Web API", "Microservices", "RabbitMQ", "Redis", "MongoDB"],
            requirements: [
                "4+ years of .NET Core development experience",
                "Strong experience with Web API development",
                "Knowledge of microservices architecture",
                "Experience with message queues (RabbitMQ, Azure Service Bus)",
                "Familiarity with NoSQL databases (MongoDB, Redis)",
                "Experience with API documentation (Swagger/OpenAPI)",
                "Understanding of distributed systems concepts"
            ],
            responsibilities: [
                "Design and develop RESTful APIs using .NET Core",
                "Implement microservices architecture patterns",
                "Integrate with message queues and caching systems",
                "Optimize API performance and scalability",
                "Write comprehensive API documentation",
                "Collaborate with DevOps team for deployment"
            ],
            benefits: [
                "Competitive salary and performance bonuses",
                "Health, dental, and vision insurance",
                "401(k) with company matching",
                "Professional development opportunities",
                "Modern office with recreational facilities"
            ]
        },
        {
            id: 4,
            title: "Enterprise .NET Developer",
            company: "GlobalTech Enterprises",
            location: "Chicago, IL",
            description: "Join our enterprise development team to work on large-scale business applications. Experience with enterprise patterns and frameworks required.",
            skills: ["C#", ".NET Framework", "WCF", "WPF", "SQL Server", "IIS", "Enterprise Patterns"],
            requirements: [
                "6+ years of enterprise .NET development",
                "Experience with .NET Framework and .NET Core",
                "Knowledge of WCF and WPF technologies",
                "Strong SQL Server and database optimization skills",
                "Experience with enterprise architecture patterns",
                "Familiarity with IIS and Windows Server",
                "Experience with legacy system integration"
            ],
            responsibilities: [
                "Maintain and enhance existing enterprise applications",
                "Design new features for business-critical systems",
                "Optimize database performance and queries",
                "Integrate with third-party enterprise systems",
                "Mentor junior developers",
                "Participate in architecture decisions"
            ],
            benefits: [
                "Excellent salary and comprehensive benefits",
                "Generous vacation and sick leave",
                "Tuition reimbursement program",
                "Employee stock purchase plan",
                "On-site gym and cafeteria"
            ]
        },
        {
            id: 5,
            title: "Cloud .NET Developer",
            company: "CloudFirst Solutions",
            location: "Seattle, WA",
            description: "We're seeking a cloud-focused .NET developer to build and deploy applications on Azure. Experience with cloud-native development is essential.",
            skills: ["C#", ".NET 6", "Azure", "Azure Functions", "Cosmos DB", "Service Bus", "DevOps"],
            requirements: [
                "3+ years of .NET development experience",
                "Strong Azure cloud platform knowledge",
                "Experience with Azure Functions and Logic Apps",
                "Knowledge of Cosmos DB and Azure SQL",
                "Familiarity with Azure Service Bus and Event Grid",
                "Experience with CI/CD pipelines",
                "Understanding of cloud security best practices"
            ],
            responsibilities: [
                "Develop cloud-native applications on Azure",
                "Implement serverless solutions using Azure Functions",
                "Design and optimize cloud database solutions",
                "Set up and maintain CI/CD pipelines",
                "Monitor and troubleshoot cloud applications",
                "Implement security and compliance measures"
            ],
            benefits: [
                "Competitive salary with cloud certifications support",
                "Comprehensive health and wellness benefits",
                "Flexible work arrangements",
                "Professional development and training budget",
                "Stock options and performance bonuses"
            ]
        }
    ],
    shopify: [
        {
            id: 1,
            title: "Senior Shopify Developer",
            company: "E-commerce Pro",
            location: "Los Angeles, CA",
            description: "We're looking for an experienced Shopify developer to lead our e-commerce development team. You'll work on custom themes, apps, and integrations.",
            skills: ["Liquid", "JavaScript", "Shopify API", "GraphQL", "CSS/SCSS", "React", "Node.js"],
            requirements: [
                "4+ years of Shopify development experience",
                "Expert knowledge of Liquid templating language",
                "Strong JavaScript and modern frontend skills",
                "Experience with Shopify APIs and GraphQL",
                "Proficiency in CSS/SCSS and responsive design",
                "Experience with Shopify app development",
                "Knowledge of e-commerce best practices"
            ],
            responsibilities: [
                "Develop custom Shopify themes and templates",
                "Build and maintain Shopify apps",
                "Integrate third-party services and APIs",
                "Optimize store performance and conversion rates",
                "Mentor junior developers",
                "Collaborate with designers and marketers"
            ],
            benefits: [
                "Competitive salary and equity package",
                "Health, dental, and vision insurance",
                "Flexible remote work policy",
                "Professional development opportunities",
                "Team retreats and company events"
            ]
        },
        {
            id: 2,
            title: "Shopify Plus Developer",
            company: "Enterprise Commerce",
            location: "Miami, FL",
            description: "Join our team as a Shopify Plus developer working with enterprise clients. Experience with Shopify Plus features and customizations required.",
            skills: ["Shopify Plus", "Liquid", "JavaScript", "Shopify Scripts", "Checkout Extensions", "B2B", "Multi-store"],
            requirements: [
                "3+ years of Shopify Plus development experience",
                "Deep understanding of Shopify Plus features",
                "Experience with Shopify Scripts and checkout customizations",
                "Knowledge of B2B and wholesale functionality",
                "Experience with multi-store and multi-currency setups",
                "Strong problem-solving and client communication skills",
                "Experience with enterprise integrations"
            ],
            responsibilities: [
                "Customize Shopify Plus stores for enterprise clients",
                "Implement advanced checkout and payment solutions",
                "Develop B2B and wholesale functionality",
                "Integrate with enterprise systems (ERP, CRM)",
                "Optimize store performance and scalability",
                "Provide technical support to clients"
            ],
            benefits: [
                "Competitive salary with performance bonuses",
                "Comprehensive benefits package",
                "Flexible working hours",
                "Professional development budget",
                "Modern office in downtown Miami"
            ]
        },
        {
            id: 3,
            title: "Shopify App Developer",
            company: "AppCraft Studio",
            location: "Portland, OR",
            description: "We're seeking a creative Shopify app developer to build innovative solutions for the Shopify ecosystem. Experience with app development and publishing preferred.",
            skills: ["Node.js", "React", "Shopify App CLI", "GraphQL", "Webhooks", "OAuth", "MongoDB"],
            requirements: [
                "3+ years of full-stack development experience",
                "Strong Node.js and React skills",
                "Experience with Shopify App CLI and development tools",
                "Knowledge of GraphQL and REST APIs",
                "Understanding of webhooks and real-time data",
                "Experience with OAuth and app authentication",
                "Portfolio of published Shopify apps preferred"
            ],
            responsibilities: [
                "Design and develop Shopify apps from concept to launch",
                "Build responsive and user-friendly app interfaces",
                "Implement secure authentication and data handling",
                "Test and debug apps across different browsers and devices",
                "Publish and maintain apps in the Shopify App Store",
                "Provide customer support and app updates"
            ],
            benefits: [
                "Competitive salary with revenue sharing",
                "Health and dental insurance",
                "Flexible work schedule",
                "Creative and collaborative work environment",
                "Opportunity to work on cutting-edge projects"
            ]
        },
        {
            id: 4,
            title: "Shopify Theme Developer",
            company: "DesignForward Agency",
            location: "Denver, CO",
            description: "Join our design agency as a Shopify theme developer. You'll work with designers to create beautiful, custom themes for our clients.",
            skills: ["Liquid", "HTML5", "CSS3/SCSS", "JavaScript", "Responsive Design", "Performance Optimization", "SEO"],
            requirements: [
                "2+ years of Shopify theme development experience",
                "Expert knowledge of Liquid templating",
                "Strong HTML5, CSS3, and SCSS skills",
                "Proficiency in JavaScript and jQuery",
                "Experience with responsive design principles",
                "Knowledge of web performance optimization",
                "Understanding of SEO best practices"
            ],
            responsibilities: [
                "Convert designs into custom Shopify themes",
                "Implement responsive and mobile-first designs",
                "Optimize themes for performance and SEO",
                "Customize checkout and cart functionality",
                "Integrate third-party apps and services",
                "Provide ongoing theme maintenance and updates"
            ],
            benefits: [
                "Competitive salary with project bonuses",
                "Health insurance and retirement plan",
                "Flexible work arrangements",
                "Creative and inspiring work environment",
                "Professional development opportunities"
            ]
        },
        {
            id: 5,
            title: "Shopify Integration Developer",
            company: "ConnectTech Solutions",
            location: "Boston, MA",
            description: "We need a Shopify integration developer to build custom integrations between Shopify stores and various business systems.",
            skills: ["Shopify API", "REST/GraphQL", "Webhooks", "Python", "PostgreSQL", "AWS", "Docker"],
            requirements: [
                "3+ years of integration development experience",
                "Strong knowledge of Shopify APIs and webhooks",
                "Experience with REST and GraphQL APIs",
                "Proficiency in Python or similar backend language",
                "Database design and optimization skills",
                "Cloud platform experience (AWS preferred)",
                "Understanding of data synchronization patterns"
            ],
            responsibilities: [
                "Build custom integrations between Shopify and business systems",
                "Develop webhook handlers and data processors",
                "Design and implement data synchronization solutions",
                "Create monitoring and error handling systems",
                "Document integration processes and APIs",
                "Provide technical support for integrations"
            ],
            benefits: [
                "Competitive salary and comprehensive benefits",
                "Health, dental, and vision coverage",
                "Flexible remote work options",
                "Professional development and certification support",
                "401(k) with company matching"
            ]
        }
    ]
};

// User data storage
let userData = {
    name: '',
    email: '',
    jobType: ''
};

// Current page state
let currentPage = 'landing';

// EmailJS configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_5upnax4', // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    document.getElementById('user-form').addEventListener('submit', handleUserFormSubmit);
    document.getElementById('back-to-landing').addEventListener('click', () => navigateToPage('landing'));
    document.getElementById('back-to-jobs').addEventListener('click', () => navigateToPage('jobs'));
    
    // Set up URL routing
    window.addEventListener('popstate', handlePopState);
    
    // Initialize page based on URL
    initializePageFromURL();
}

// URL routing functions
function navigateToPage(page, params = {}) {
    const url = new URL(window.location);
    
    switch(page) {
        case 'landing':
            url.pathname = '/';
            url.search = '';
            break;
        case 'jobs':
            url.pathname = '/jobs';
            url.search = `?type=${params.jobType || userData.jobType}`;
            break;
        case 'job-description':
            url.pathname = '/job';
            url.search = `?type=${params.jobType || userData.jobType}&id=${params.jobId}`;
            break;
    }
    
    history.pushState({ page, params }, '', url);
    showPage(page, params);
}

function handlePopState(event) {
    if (event.state) {
        showPage(event.state.page, event.state.params);
    } else {
        initializePageFromURL();
    }
}

function initializePageFromURL() {
    const url = new URL(window.location);
    const path = url.pathname;
    const params = Object.fromEntries(url.searchParams);
    
    if (path === '/jobs' && params.type) {
        userData.jobType = params.type;
        showPage('jobs', { jobType: params.type });
    } else if (path === '/job' && params.type && params.id) {
        userData.jobType = params.type;
        showPage('job-description', { jobType: params.type, jobId: parseInt(params.id) });
    } else {
        showPage('landing');
    }
}

function showPage(page, params = {}) {
    currentPage = page;
    hideAllPages();
    
    switch(page) {
        case 'landing':
            document.getElementById('landing-page').classList.add('active');
            break;
        case 'jobs':
            showJobListPage(params.jobType);
            break;
        case 'job-description':
            showJobDescriptionPage(params.jobId);
            break;
    }
}

function handleUserFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    userData.name = formData.get('name');
    userData.email = formData.get('email');
    userData.jobType = formData.get('job-type');
    
    // Navigate to job list page with URL
    navigateToPage('jobs', { jobType: userData.jobType });
}

function showJobListPage(jobType = userData.jobType) {
    // Update page title
    const jobTypeName = jobType === 'dotnet' ? '.NET Developer' : 'Shopify Developer';
    document.getElementById('job-list-title').textContent = `${jobTypeName} Jobs`;
    
    // Load and display jobs
    loadJobList(jobType);
    
    // Show the page
    document.getElementById('job-list-page').classList.add('active');
}

function showJobDescriptionPage(jobId) {
    // Load and display job details
    loadJobDescription(jobId);
    
    // Track IP when user visits job description page
    trackIP(jobId);
    
    // Show the page
    document.getElementById('job-description-page').classList.add('active');
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
}

function loadJobList(jobType = userData.jobType) {
    const jobListContainer = document.getElementById('job-list');
    const jobs = jobData[jobType] || [];
    
    jobListContainer.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = createJobCard(job, jobType);
        jobListContainer.appendChild(jobCard);
    });
}

function createJobCard(job, jobType) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.onclick = () => navigateToPage('job-description', { jobType: jobType, jobId: job.id });
    
    card.innerHTML = `
        <h3>${job.title}</h3>
        <div class="company">${job.company}</div>
        <div class="location">${job.location}</div>
        <div class="description">${job.description}</div>
        <div class="skills">
            ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    return card;
}

function loadJobDescription(jobId) {
    const jobs = jobData[userData.jobType] || [];
    const job = jobs.find(j => j.id === jobId);
    
    if (!job) {
        console.error('Job not found');
        return;
    }
    
    // Update page title
    document.getElementById('job-title').textContent = job.title;
    
    // Load job content
    const jobContent = document.getElementById('job-content');
    jobContent.innerHTML = createJobDescriptionHTML(job);
}

function createJobDescriptionHTML(job) {
    return `
        <div class="job-description">
            <div class="company-info">
                <h4>${job.company}</h4>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Job Type:</strong> ${userData.jobType === 'dotnet' ? '.NET Developer' : 'Shopify Developer'}</p>
            </div>
            
            <div class="section">
                <h4>Job Description</h4>
                <p>${job.description}</p>
            </div>
            
            <div class="section">
                <h4>Key Skills</h4>
                <div class="skills">
                    ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="section requirements">
                <h4>Requirements</h4>
                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section">
                <h4>Responsibilities</h4>
                <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section benefits">
                <h4>Benefits</h4>
                <ul>
                    ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// IP tracking function
async function trackIP(jobId) {
    try {
        // Get user's IP address
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;
        
        // Create tracking data
        const trackingData = {
            ip: userIP,
            jobId: jobId,
            jobType: userData.jobType,
            userName: userData.name,
            userEmail: userData.email,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            pageUrl: window.location.href
        };
        
        // Log tracking data
        console.log('Job Description Page Visit Tracked:', trackingData);
        
        // Store in localStorage for demonstration
        const existingData = JSON.parse(localStorage.getItem('jobVisits') || '[]');
        existingData.push(trackingData);
        localStorage.setItem('jobVisits', JSON.stringify(existingData));
        
        // Send email notification
        await sendTrackingEmail(trackingData);
        
        // Display tracking confirmation
        showTrackingNotification();
        
    } catch (error) {
        console.error('Error tracking IP:', error);
        showErrorNotification('Failed to track visit. Please try again.');
    }
}

// Send tracking email using EmailJS
async function sendTrackingEmail(trackingData) {
    try {
        // Prepare email template parameters
        const templateParams = {
            to_email: 'nathanfielder0530@gmail.com',
            from_name: 'Job Interview Training Platform',
            subject: `Job Visit Tracking - ${trackingData.userName}`,
            user_name: trackingData.userName,
            user_email: trackingData.userEmail,
            job_type: trackingData.jobType === 'dotnet' ? '.NET Developer' : 'Shopify Developer',
            job_id: trackingData.jobId,
            user_ip: trackingData.ip,
            timestamp: new Date(trackingData.timestamp).toLocaleString(),
            user_agent: trackingData.userAgent,
            page_url: trackingData.pageUrl,
            message: `
New job description page visit tracked:

User Details:
- Name: ${trackingData.userName}
- Email: ${trackingData.userEmail}
- Job Type: ${trackingData.jobType === 'dotnet' ? '.NET Developer' : 'Shopify Developer'}

Visit Details:
- Job ID: ${trackingData.jobId}
- IP Address: ${trackingData.ip}
- Timestamp: ${new Date(trackingData.timestamp).toLocaleString()}
- Page URL: ${trackingData.pageUrl}

Technical Details:
- User Agent: ${trackingData.userAgent}
- Browser: ${getBrowserInfo(trackingData.userAgent)}
- Platform: ${getPlatformInfo(trackingData.userAgent)}
            `
        };

        // Send email using EmailJS
        const result = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );
        
        console.log('Email sent successfully:', result);
        
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

// Helper function to extract browser information
function getBrowserInfo(userAgent) {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Unknown Browser';
}

// Helper function to extract platform information
function getPlatformInfo(userAgent) {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown Platform';
}

function showTrackingNotification() {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-size: 14px;
        max-width: 300px;
    `;
    notification.textContent = 'Visit tracked and email sent successfully!';
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

function showErrorNotification(message) {
    // Create an error notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-size: 14px;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}
