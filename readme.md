# Wardrobe Management & Sustainability Platform

### **Project Overview**

This project aims to help users like Ravi manage their wardrobe efficiently, track item usage, and promote sustainability by suggesting mindful practices like recycling, donating, or repurposing unused items. The platform provides personalized outfit suggestions, analytics on item usage, and community-driven features like clothing exchanges, all with the goal of reducing overconsumption and contributing to a greener lifestyle.

---

## **Tech Stack**

- **Frontend**: EJS (Embedded JavaScript), HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## **Features**

![Home Page](https://github.com/prajwaldp223/photos/blob/main/home.jpg?raw=true)

1. **Login and Registration Pages**
   - Secure user authentication with login and registration forms.
   - Password encryption using `bcrypt`.
![login](https://github.com/prajwaldp223/photos/blob/main/register.jpg?raw=true)
![register](https://github.com/prajwaldp223/photos/blob/main/signin.jpg?raw=true)
   
2. **User-Specific Home Page**
   - A personalized dashboard showcasing outfit suggestions, item usage analytics, and sustainability scores.
   - Displays upcoming events and recommends outfits based on the user’s wardrobe.
![](https://github.com/prajwaldp223/photos/blob/main/WhatsApp%20Image%202024-09-29%20at%2010.13.07_35cbc08e.jpg?raw=true)

3. **My Closet - Virtual Wardrobe**
   - A virtual wardrobe where users can add, edit, and organize their clothes by categories.
   - Allows users to upload images of their clothing and track the frequency of usage.
![](https://github.com/prajwaldp223/photos/blob/main/closet.jpg?raw=true)
4. **Sustainability Features**
   - Provides suggestions for recycling, donating, or repurposing underused items.
   - Displays the user's sustainability score and carbon footprint based on their wardrobe habits.
![](https://github.com/prajwaldp223/photos/blob/main/recycle.jpg?raw=true)
![](https://github.com/prajwaldp223/photos/blob/main/pickup.jpg?raw=true)
5. **Community Exchange**
   - A platform where users can trade or donate unused items to others within the community.
   - Includes a donation tracker and nearby donation locations.
![](https://github.com/prajwaldp223/photos/blob/main/community.jpg?raw=true)

6. **Alerts**
   - Notifications for rarely worn items, upcoming recycling events, and community swap events.
   - Outfit reminders and seasonal clothing recommendations.

7. **Style Inspiration**
   - Suggests outfit combinations based on the user’s existing wardrobe.
   - Virtual trial feature allows users to see how different items pair together.
![](https://github.com/prajwaldp223/photos/blob/main/random%20cloths.jpg?raw=true)
   
8. **Usage Analytics Dashboard**
   - Provides data on most/least worn items, wear frequency, and clothing lifecycle.
   - Offers insights on how to better utilize the wardrobe.
![](https://github.com/prajwaldp223/photos/blob/main/stats.jpg?raw=true)

9. **AI Chatbot to Monitor the Community**
   - Chatbot provides instant responses to user queries, including recycling schedules, trade requests, and general wardrobe management tips.

10. **Scheduling for Recycle**
    - Users can schedule item pickups for recycling or donation through the app.
![](https://github.com/prajwaldp223/photos/blob/main/pickup.jpg?raw=true)
---

## **Installation and Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/wardrobe-management-platform.git
    ```

2. Navigate to the project directory:
    ```bash
    cd wardrobe-management-platform
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up your **MongoDB** database:
    - Create a `.env` file and add your MongoDB connection string:
    ```bash
    MONGO_URI=your-mongo-db-connection-string
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Open the browser and visit `http://localhost:3000` to access the application.

---

## **Folder Structure**

```
├── public
│   ├── css
│   ├── images
│   └── js
├── routes
│   ├── auth.js
│   ├── home.js
│   ├── closet.js
│   ├── sustainability.js
│   └── exchange.js
├── views
│   ├── partials
│   ├── login.ejs
│   ├── register.ejs
│   ├── home.ejs
│   ├── closet.ejs
│   └── analytics.ejs

├── models
│   ├── user.js
│   └── wardrobeItem.js
├── controllers
│   ├── authController.js
│   ├── homeController.js
│   ├── closetController.js
│   └── sustainabilityController.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## **Usage**

### 1. **Login & Registration**
   - Users must first create an account using the registration page.
   - Once logged in, they can access their personalized wardrobe management dashboard.

### 2. **Adding Items to the Closet**
   - Users can manually add items to their virtual wardrobe by uploading an image and filling in details (category, color, season, etc.).

### 3. **Sustainability and Community**
   - Users can receive sustainability tips and take part in community-driven exchanges by donating or swapping their clothes.

### 4. **Outfit Suggestions & Alerts**
   - The platform provides outfit combinations and alerts for items that haven’t been worn in a while.

---

## **Contributing**

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the project.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License.

---

