## Wayfarer Travels - Tour Booking Website
## Overview
The Tour Booking Website is a comprehensive platform designed to facilitate the seamless interaction between users, administrators, and super administrators. It offers a wide range of functionalities that cater to different stakeholders, ensuring an intuitive and efficient booking experience.

## User Functionality
* Registration and User Profiles
- Users can easily register with a valid email address, ensuring a straightforward onboarding process.
- Password validation and security measures are implemented to protect user accounts.
- User profiles can be created and managed, allowing customization of personal information and preferences.
- Users have the capability to view and edit their profiles effortlessly.
## Tour Browsing and Booking
- Users can browse available services, making it easy to explore the offerings.
- A powerful search feature enables users to find services by name, location, and category.
- Users can filter services by price range and other relevant criteria for a personalized experience.
- Booking tours are straightforward, with options to select dates and times if applicable.
- A smooth and user-friendly booking process with confirmation enhances the user experience.
## Booking Management and Interaction
- Users can track the status of their bookings, ensuring full transparency.
- The platform supports reviews and ratings for services, providing valuable feedback and promoting transparency.
- Reviews and ratings are displayed on service listings, aiding users in making informed choices.
- A user dashboard showcases booking history and statuses, enhancing user engagement.
- Users have the flexibility to cancel bookings when necessary.
- User-friendly feedback forms are available for users to submit comments and suggestions.
## Admin Functionality
- Admins access a centralized dashboard for effective monitoring and management of website activities.
- User accounts can be added, edited, and managed to ensure a smooth user experience.
- Admins can manage tour listings, including options for pricing, descriptions, and availability.
- A booking management system provides a comprehensive view of booking requests, with options to accept, reject, or adjust schedules as needed.
- Admins have control over website content, including blog posts and FAQs, through a content management system.
- Administrative profiles can be managed for personalized control.
## Super Admin Functional Requirements
- Super admins have the authority to add new admin users to the system, enhancing scalability and delegation of responsibilities.
- Options for managing admin roles allow for customized access and control.
- Super admins can maintain their personal information through a profile management system.
The Tour Booking Website is a feature-rich platform that caters to users, administrators, and super administrators, offering a user-friendly and comprehensive solution for tour booking and management.

## API ENDPOINTS
### Auth Routes
- auth/login (POST)
- auth/refresh-token (POST)
  
### User Routes
- user (GET)
- user/:id (GET)
- user/:id (PATCH)
- user/:id (DELETE)
- user/register (POST)
- user/profile (POST)
- user/profile (GET)
- user/my-booking (GET)
- user//my-enquiry (GET)
- user/my-enquiry/:id (GET)
- user/my-feedback (GET)

### Admin Routes
- admin/create-admin (POST)
- admin (GET)
- admin/:id (PATCH)
- admin/:id (DELETE)
- admin/:id (GET)
- admin/profile (GET)
- admin/profile (PATCH)

### Super Admin Routes
- super-admin/profile (GET)
- super-admin/profile (PATCH)

### Category Routes
- category (POST)
- category (GET)
- category/:id (GET)
- category/:id (PATCH)
- category/:id (DELETE)
  

### Package Routes
- package (POST)
- package (GET)
- package/:id (GET)
- package/:id (PATCH)
- package/:id (DELETE)

### Team Routes
- team (POST)
- team (GET)
- team/:id (GET)
- team/:id (PATCH)
- team/:id (DELETE)

### Booking Routes
- booking/create-booking (POST)
- booking (GET)
- booking/:id (GET)
- booking/:id (PATCH)
- booking/cancel-booking/:id (PATCH)
- booking/:id (DELETE)

### Contact Routes
- contact (POST)
- contact (GET)
- contact/:id (GET)
- contact/:id (PATCH)
- contact/:id (DELETE)

### Review Routes
- review (POST)
- review (GET)
- review/:id (GET)
- review/:id (PATCH)
- review/:id (DELETE)

### News Routes
- news (POST)
- news (GET)
- news/:id (GET)
- news/:id (PATCH)
- news/:id (DELETE)

### FAQ Routes
- faq (POST)
- faq (GET)
- faq/:id (GET)
- faq/:id (PATCH)
- faq/:id (DELETE)

### FAQ Routes
- feedback (POST)
- feedback (GET)
- feedback/:id (GET)
- feedback/:id (PATCH)
- feedback/:id (DELETE)                                                                                                                                                                                                                                                                                                                                                               
### Admin Credential: 
- Email: admin@gmail.com 
- Password:012345

### Super Admin Credential: 
- Email: arfatakter39@gmail.com
- Password:012345

### ER Diagram
![image](https://github.com/arfatbegum/wayfarer-travel-backend/assets/96864183/a0885165-9ae8-434e-b04f-30549c4e50e9)

