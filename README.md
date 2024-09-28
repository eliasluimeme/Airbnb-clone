# Airbnb-clone
A fullstack clone of the popular website Airbnb using technologies like Next.js/React and Tailwind in the frontend, and Django with Django rest framework in the backend. 

## Getting Started

1. Clone the Repository

Start by cloning the project repository:

```bash
git clone git@github.com:eliasluimeme/Airbnb-clone.git
cd Airbnb-clone
```

2. Docker Compose:

The project includes a docker-compose.yml file that defines the services:

To build and start the services, run:

```bash
docker-compose up --build
```

This command will:

Build the Docker images for the frontend and backend.
Start the containers for the frontend, backend, and PostgreSQL database.

3. Running Migrations:

Once the services are up, you need to apply the Django migrations to set up the database schema:

```bash
docker-compose exec backend python3 manage.py migrate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Certainly! I'll create a detailed documentation about the project based on the information provided in the `frontend/app/page.tsx` file. Please note that this documentation is based on the limited information available, and there might be other parts of the project that are not visible in this file.

## Overview

This project is a clone of the Airbnb website. The purpose is to recreate the look and functionality of the official Airbnb site for learning and demonstration purposes. It's important to note that this is not the real Airbnb site and should not be used for actual bookings or sharing personal information.

## Project Structure

The project is using a modern frontend framework, Next.js, given the file structure (`frontend/app/page.tsx`) and the use of TypeScript (`.tsx` extension).

### Main Components

1. **Home Page (`page.tsx`)**
   - This is the main entry point for the application.
   - It renders the primary layout of the home page.

2. **Categories Component**
   - Imported from `./components/categories`
   - Likely displays various categories of properties or experiences.

3. **PropertyList Component**
   - Imported from `./components/properties/propertyList`
   - Renders a list of properties available for booking.

4. **Toast Container**
   - Imported from the `react-toastify` library
   - Used for displaying notifications or messages to the user.

## Detailed Component Breakdown

### Home Component

```typescript
export default function Home() {
  // Component logic
}
```

This is the main page component, likely rendered at the root URL (`/`). It's using the default export, which is common in Next.js for page components.

#### Layout

1. **Warning Banner**
   - A prominent banner at the top of the page informs users that this is a clone website for educational purposes.
   - Styled with Airbnb's brand color and white text.

2. **Main Content Area**
   - Wrapped in a `<main>` tag.
   - Uses a max-width container with horizontal padding for responsive design.

3. **Categories Section**
   - Renders the `<Categories />` component.
   - Likely displays various property types or experiences users can browse.

4. **Property Grid**
   - Uses CSS Grid for responsive layout.
   - Adjusts columns based on screen size:
     - 1 column on small screens
     - 3 columns on medium screens
     - 5 columns on large screens
   - Renders the `<PropertyList />` component within the grid.

5. **Toast Container**
   - While imported, it's not visible in the provided code snippet.
   - Likely used elsewhere in the application for displaying notifications.

## Styling

The project appears to use a utility-first CSS framework, most likely Tailwind CSS, based on the class names used (e.g., `bg-airbnb`, `max-w-[1500px]`, `grid-cols-1`).

## Responsive Design

The layout is responsive, adapting to different screen sizes:
- Uses `max-w-[1500px]` to limit the maximum width on large screens.
- The property grid adjusts from 1 to 3 to 5 columns as the screen size increases.

## Best Practices Observed

1. **Component-based Architecture**: The application is broken down into reusable components (Categories, PropertyList).
2. **Responsive Design**: The layout adapts to different screen sizes.
3. **Semantic HTML**: Uses appropriate tags like `<main>` for better accessibility and SEO.

## Conclusion

This project serves as an educational clone of the Airbnb website, focusing on recreating the home page layout and property listing functionality. It demonstrates the use of modern web development practices, including component-based architecture, and a responsive design. As an educational tool, it provides a practical example of building a complex, real-world web application.
