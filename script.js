const imageData = [
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
  {
    image: "./assets/doctor_2.png",
    name: "Dr. Jonathan Miller",
    specialization: "Cardiologist",
  },
  {
    image: "./assets/doctor_3.png",
    name: "Dr. Sophia Chang",
    specialization: "Dermatologist",
  },
  {
    image: "./assets/doctor_4.png",
    name: "Dr. Nawaz Joharji",
    specialization: "Pediatrician",
  },
  {
    image: "./assets/doctor_1.png",
    name: "Dr. Emily Rodriguez",
    specialization: "Dentist",
  },
];

document.addEventListener("DOMContentLoaded", displayImages);

function displayImages() {
  const container = document.querySelector(".doctor-container");

  imageData.map((item, index) => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("doctor-image-box");

    const imageElement = document.createElement("img");
    imageElement.classList.add("doctor-image");
    imageElement.src = item.image;
    imageElement.alt = `Doctor Image ${index + 1}`;
    imageElement.loading="lazy"
    
    const doctorName = document.createElement("p");
    const doctorSpecialization = document.createElement("p");
    doctorName.textContent = item.name;
    doctorSpecialization.textContent = item.specialization;

    imageItem.appendChild(imageElement);
    imageItem.appendChild(doctorName);
    imageItem.appendChild(doctorSpecialization);
    container.appendChild(imageItem);
  });
}
