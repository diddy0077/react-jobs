import { createServer, Model } from "miragejs";

function saveToLocalStorage(schema) {
  localStorage.setItem("jobs", JSON.stringify(schema.jobs.all().models));
}

createServer({
  models: {
    jobs: Model,
  },

  seeds(server) {
    // Load jobs from localStorage if available
    let savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      JSON.parse(savedJobs).forEach((job) => server.create("job", job));
    } else {
      // Default seeds (your existing jobs)
      server.create("job", {
        id: "1",
        title: "Senior React Developer",
        type: "Full-Time",
        description:
          "We are seeking a talented Front-End Developer to join our team in Boston, MA...",
        location: "Boston, MA",
        salary: "$70K - $80K",
        company: {
          name: "NewTek Solutions",
          description:
            "NewTek Solutions is a leading technology company specializing in web development...",
          contactEmail: "contact@teksolutions.com",
          contactPhone: "555-555-5555",
        },
      });

      server.create("job", {
        id: "2",
        title: "Front-End Engineer (React & Redux)",
        type: "Full-Time",
        description:
          "Join our team as a Front-End Developer in sunny Miami, FL...",
        location: "Miami, FL",
        salary: "$70K - $80K",
        company: {
          name: "Veneer Solutions",
          description:
            "Veneer Solutions is a creative agency specializing in digital design...",
          contactEmail: "contact@loremipsum.com",
          contactPhone: "555-555-5555",
        },
      });

        server.create("job", {
      "id": 3,
      "title": "React.js Dev",
      "type": "Full-Time",
      "description": "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
      "location": "Brooklyn, NY",
      "salary": "$70K - $80K",
      "company": {
        "name": "Dolor Cloud",
        "description": "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
        "contactEmail": "contact@dolorsitamet.com",
        "contactPhone": "555-555-5555"
      }
    });

  server.create("job", {
      "id": "4",
      "title": "React Front-End Developer",
      "type": "Part-Time",
      "description": "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
      "location": "Pheonix, AZ",
      "salary": "$60K - $70K",
      "company": {
        "name": "Alpha Elite",
        "description": "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
        "contactEmail": "contact@adipisicingelit.com",
        "contactPhone": "555-555-5555"
      }
    });

server.create("job", {
      "id": "5",
      "title": "Full Stack React Developer",
      "type": "Full-Time",
      "description": "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
      "location": "Atlanta, GA",
      "salary": "$90K - $100K",
      "company": {
        "name": "Browning Technologies",
        "description": "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
        "contactEmail": "contact@consecteturadipisicing.com",
        "contactPhone": "555-555-5555"
      }
    });

 server.create("job", {
       "id": "6",
      "title": "React Native Developer",
      "type": "Full-Time",
      "description": "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
      "location": "Portland, OR",
      "salary": "$100K - $110K",
      "company": {
        "name": "Port Solutions INC",
        "description": "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
        "contactEmail": "contact@ipsumlorem.com",
        "contactPhone": "555-555-5555"
      }
    });

      // Save initial seeds to localStorage
      saveToLocalStorage(server.schema);
    }
  },

  routes() {
    this.namespace = "api";

    // GET all jobs
    this.get("/jobs", (schema) => {
      return schema.jobs.all();
    });

    // GET single job
    this.get("/jobs/:id", (schema, request) => {
      const id = request.params.id;
      return schema.jobs.find(id);
    });

    // POST new job
    this.post("/jobs", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let job = schema.jobs.create(attrs);
      saveToLocalStorage(schema);
      return job;
    });

    // PUT update job
    this.put("/jobs/:id", (schema, request) => {
      let id = request.params.id;
      let attrs = JSON.parse(request.requestBody);
      let job = schema.jobs.find(id).update(attrs);
      saveToLocalStorage(schema);
      return job;
    });

    // DELETE job
    this.delete("/jobs/:id", (schema, request) => {
      let id = request.params.id;
      schema.jobs.find(id).destroy();
      saveToLocalStorage(schema);
      return { message: "Job deleted" };
    });
  },
});
