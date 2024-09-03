# Airbnb-clone
A fullstack clone of the popular website Airbnb using technologies like Next.js/React and Tailwind in the frontend, and Django with Django rest framework in the backend. 

## Getting Started

1. Clone the Repository

Start by cloning the project repository:

```bash
git clone git@github.com:eliasluimeme/Money-Transfer-App.git
cd yourproject
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

