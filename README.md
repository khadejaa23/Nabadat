# نبضات Nabadat
## موقع لمساعدة الشباب العربي على الاتزام بالرياضة ومراعاة حق بدنه وكسر المعوقات لضمان الاستمرارية و الحفاظ على الصحة
# Nabadat - نبضات

Nabadat is a web application designed to help Arabic-speaking youth maintain a healthy lifestyle by breaking barriers to consistency and promoting physical and mental well-being. The platform leverages AI to provide personalized fitness and meal plans tailored to individual needs.

## Features

- **AI-Powered Fitness Plans**: Generate customized workout plans based on user preferences, health status, and available time.
- **Meal Planning**: Create and manage meal plans with shopping lists for missing ingredients.
- **Multilingual Support**: Supports Arabic and English languages.
- **Responsive Design**: A user-friendly interface optimized for both desktop and mobile devices.


## Installation

### Backend Setup

1. Navigate to the `fitness-plan-backend` directory:
   ``` bash
   cd fitness-plan-backend
   ```
2. Install dependencies:
``` npm install ```

3. Create a .env file and configure the following variables:
```
PORT=3000
MONGO_URI=<your-mongodb-uri>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
SESSION_SECRET=<your-session-secret>
GEMINI_API_KEY=<your-gemini-api-key>
```
4. Start the backend server:
``` npm start
```
#### Usage
Fitness Plans: Use the AI-powered feature to generate workout plans based on your input.
Meal Plans: Create meal plans and manage shopping lists for missing ingredients.
Language Support: Switch between Arabic and English for a localized experience.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Google OAuth 2.0
AI Integration: Google Generative AI (Gemini)

#### License
This project is licensed under the MIT License.

#### Acknowledgments
The Nabadat team: خديجة, زياد, أنيس, إيناس
Special thanks to the open-source community for their tools and libraries.