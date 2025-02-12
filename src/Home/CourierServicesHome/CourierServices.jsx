import styles from "./courierservices.module.css";
import { FaTruck, FaRocket, FaClock, FaBoxOpen } from "react-icons/fa"; // Importing React Icons

const services = [
  {
    id: 1,
    icon: <FaTruck size={40} color="#0E1E78" />,
    title: "Standard Delivery",
    description: "Reliable and cost-effective delivery for all your needs.",
  },
  {
    id: 2,
    icon: <FaRocket size={40} color="#0E1E78" />,
    title: "Express Delivery",
    description: "Fast and secure delivery for urgent shipments.",
  },
  {
    id: 3,
    icon: <FaClock size={40} color="#0E1E78" />,
    title: "On-Time Delivery",
    description: "Guaranteed delivery within the promised time frame.",
  },
  {
    id: 4,
    icon: <FaBoxOpen size={40} color="#0E1E78" />,
    title: "Specialist Delivery",
    description: "Handling of sensitive and specialized items with care.",
  },
];

const CourierServices = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Introducing Our Courier Services</h1>
      <p className={styles.description}>
        Vocations is now offering reliable and efficient domestic courier
        services to meet all your delivery needs. Whether it’s a small package
        or a large shipment, we’ve got you covered with our comprehensive
        courier solutions.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <span className={styles.iconWrapper}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.contactSection}>
        <p>
          Contact us today to learn more about our courier services and how we
          can help you with your delivery needs.
        </p>
      </div>

      <div className={styles.vosoSection}>
        <h2>Seamless Shipping and Growth with Voso Courier</h2>
        <p>
          Voso Courier is designed to streamline your logistics and enhance
          delivery efficiency, making it the perfect partner for your business.
          Our advanced platform seamlessly integrates with your mobile through
          custom APIs, ensuring a hassle-free shipping experience while helping
          you scale efficiently.
        </p>
        <button className={styles.btn}>
          <a href="#">Learn More</a>
        </button>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <h3>29,000</h3>
          <p>Phoenix</p>
        </div>
        <div className={styles.statItem}>
          <h3>20+</h3>
          <p>Courier Partners</p>
        </div>
        <div className={styles.statItem}>
          <h3>10,000+</h3>
          <p>Total Packages Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default CourierServices;
