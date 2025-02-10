import React from "react";
import styles from "./page2.module.css";

const Page2 = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape1.svg"
                alt="img2"
                className={styles.image3}
              />
            </div>
            <div className={styles.secondaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
                alt="img3"
                className={styles.image4}
              />
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-1.png"
                alt="img4"
                className={styles.image2}
              />
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.paragraph}>
              We are Vosostore, providing a franchise business opportunity in
              India. We help in setting up a business with the most profit
              margin. We are a retail tech company. VOSO Store is a brand new
              way to convert your shop into a digital store. VOSO was founded to
              create a multi-purpose platform for stores to apply as a
              single-point service provider for their customers. Being on a
              virtual platform cannot be simpler, especially in rural and
              suburban areas. We connect stores with brands to serve
              end-consumer offerings through an exclusive portal. <br /> Our
              Store partners are developing their commercial enterprise
              exponentially with VOSO business opportunity. VOSO is on a mission
              to reach an untouched part of the nation to connect them with a
              plethora of services and products through our store partners and
              provide our store partners with one-of-its-kind assistance through
              our facilitator model.
            </p>
          </div>
        </div>
        <h2 className={styles.heading}>Providing One-Stop Solution</h2>
        <p className={styles.paragraph}>
          In today's competitive and fast-growing world, people have less time
          and, sometimes, they forget their essential work and then have to
          stand in queue for their bill payment or buy vital things like
          medicines. Standing in rows can be frustrating and take valuable time.
          To avoid a last-minute rush, VOSO has brought the fastest B2B portal
          with all available payment options to one platform to avoid any
          transaction failure. VOSO is the largest platform for travel and
          utility services solutions in India. Starting in 2018, we have our
          head office in Indore, Madhya Pradesh. We have established 5000+ B2B
          users across India. <br /> Our team is constantly working and adding
          value to the business by giving our partners the best and most
          accessible platform that allows them financial freedom. VOSO was
          founded with a vision to reach every Indian street to take the edge
          off unemployment and develop financial resources. Intending to create
          a platform that enables more employability and breaks the wall between
          rural & suburban areas and digitization, our founders have brought
          VOSO.
        </p>

        {/* continue... */}
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
            </div>
          </div>

          <div className={styles.right}>
            <h1 className={styles.subheading}>Providing One Stop Store</h1>
            <p className={styles.paragraph}>
              We are improving to simplify the process of online services for
              every citizen with the help of our store partners. VOSO is
              becoming the most sought-after platform among retailers and
              merchants for making online payments for various services. Our
              team is constantly working on making the payment system and online
              portal more smooth and extra seamless. By providing VOSO Store
              partnership, we enable our partners to avail of all existing and
              upcoming services. With a team of more than 100 members, our
              single-point customer support offers the fastest-ever solution to
              your problems.
            </p>
          </div>
        </div>

        <div className={styles.tempContainer}>
          <div className={styles.left}>
            <h1 className={styles.subheading}>
              Reaching to Every Indian Citizen
            </h1>
            <p className={styles.paragraph}>
              VOSO has stores in more than 700 cities and 2000 pin codes. Our
              store numbers are constantly increasing. VOSO’s core value is to
              serve a convenient platform for all the utility services to every
              part of the society, Chiefly in rural and suburban areas, to bring
              them into digital literacy.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.primaryImage}>
              <img
                src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
                alt="img1"
                className={styles.image1}
              />
            </div>
          </div>
        </div>
        <hr />
        <h1 className={styles.heading}>Our Values</h1>
        <div className={styles.valuesContainer}>
          <div className={styles.left}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-thumb1-768x861.png"
              alt="img1"
              className={styles.image1}
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.subheading}>Constant Improvement</h2>
            <p className={styles.paragraph}>
              Innovation is what VOSO is known for. We strive to provide the
              perfect delivery of service and support. We never settle with less
              and constantly work on improving our working system.
            </p>
          </div>
        </div>

        <div className={styles.valuesContainer}>
          <div className={styles.left}>
            <h2 className={styles.subheading}>Constant Improvement</h2>
            <p className={styles.paragraph}>
              Innovation is what VOSO is known for. We strive to provide the
              perfect delivery of service and support. We never settle with less
              and constantly work on improving our working system.
            </p>
          </div>
          <div className={styles.right}>
            <img
              src="/images/ourValues.webp"
              alt="img1"
              className={styles.image1}
            />
          </div>
        </div>

        {/* continue... */}
        <div className={styles.valuesContainer}>
          <div className={styles.left}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-thumb1-768x861.png"
              alt="img1"
              className={styles.image1}
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.subheading}>A will to succeed</h2>
            <p className={styles.paragraph}>
              For VOSO, success means reaching every mile of India and
              facilitating people with the best services so every citizen can
              enjoy uninterrupted online services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
