"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./page2.module.css";
import {
  FaArrowRight,
  FaSearch,
  FaMapMarkerAlt,
  FaFacebook,
  FaGlobe,
  FaUsers,
  FaTrophy,
  FaMedal,
  FaBullhorn,
  FaEnvelope,
  FaPencilAlt,
  FaShoppingCart,
  FaObjectGroup,
  FaLightbulb,
  FaMailBulk,
  FaBullseye,
  FaHandshake,
  FaChartPie,
  FaSyncAlt,
} from "react-icons/fa";

import { FcCustomerSupport } from "react-icons/fc";

import {
  FaChartLine,
  FaPenNib,
  FaLaptopCode,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";

const Page2 = () => {
  const cardData = [
    {
      icon: <FcCustomerSupport />, // Represents being present online
      title: "Be Where Your Customers Are",
      description:
        "Be where your customers spend most of their time, on the web. Digital marketing allows you to present on social media, website forums, or you can be the first thing that your potential customers see when they type in something that resembles something that you have to offer.",
    },
    {
      icon: <FaBullseye />, // Represents targeting
      title: "Unmatched Targeting Options",
      description:
        "With the power of digital marketing, target those that have the highest potential for conversion. Target your potential customers and achieve the highest ROI on your marketing spending with the expertise of VOSO DMS.",
    },
    {
      icon: <FaHandshake />, // Represents personal connections
      title: "Establish Personal Connections With Your Customers",
      description:
        "Conduct surveys of what your target audiences like and get the insights that turn ideas into revenue. Conduct polls and learn what your customers think about your services and where they want you to improve so that you can always be a step ahead of your competition.",
    },
    {
      icon: <FaChartPie />, // Represents data and analytics
      title: "Harness The Power Of Data",
      description:
        "Digital marketing not only grows your business but also understands why your business is growing. Use data insights such as average conversion rate, which demographics work best for you, and how the customers actually behave on your site.",
    },
    {
      icon: <FaSyncAlt />, // Represents omnichannel integration
      title: "Unleash The Power Of Omnichannel Integration",
      description:
        "With the power of digital marketing, use omnichannel technology to seamlessly merge online as well as offline customer touchpoints that allow you to seamlessly find, convert, and sell to the customers in both the virtual and real world.",
    },
    {
      icon: <FaGlobe />, // Represents the future and online presence
      title: "Online Is The Future",
      description:
        "With the rise of e-commerce as well as online transactions, it is safe to say that online marketing is the future, a future whose glimpses were shown by the global pandemic. In this dynamic market, the scenario augments your business strategy with digital marketing to see the growth that is unprecedented.",
    },
  ];

  const servicesData = [
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      description:
        "Optimise your web presence with the VOSO DMS SEO services. Harness the power of content that sells with VOSO DMS content marketing services. AT VOSO DMS we create and optimise the site on your content that allows you to rank first on the SERP (Search engine result page) when users search for the services that you provide. Harness the power of keyword optimization inbound-outbound link building as well as optimise your website with on-site link building.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local SEO Service",
      description:
        "Get yourself listed on google my business, so that customers close to you know about you. Increase your store visits, schedule appointments with prospective clients, and sell products or services to the whole wide world as well as to the ones near you. Increase your visibility by ranking on Google my business and generating leads, conversions as well as footfall of your business.",
    },
    {
      icon: <FaChartLine />,
      title: "Conversion Rate Optimization",
      description:
        "We specialise in creating and deploying ads that are focused on not only increasing traffic but also on generating leads, increasing reach, and converting website visitors into paying customers. Our CRO experts specifically design conversion campaigns that focus on improving your return on ads investment by creating the digital marketing strategy optimised for the conversions as well as focused on achieving your business goals.",
    },
    {
      icon: <FaFacebook />,
      title: "Social Media Marketing",
      description:
        "Meet with the prospecting clients where they spend their time the most, on social media. Target the prospecting customers who are best suited for your business goals. Generate leads, boost your brand presence, let people know that you are in business. VOSO DMS helps you to create and serve well targeted and optimised PPC (Pay per click) campaigns, PPM (Pay per 1000 views) campaigns, PPL (Pay per lead) campaigns on social media platforms such as Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      icon: <FaMailBulk />,
      title: "Email Marketing",
      description:
        "Generate interest and unleash the power of retargeted marketing with E-mail marketing campaigns that are optimised for high customer retention. VOSO DMS specialises in creating and deploying email campaigns that help you to boost your customer retention. VOSO DMS accomplishes this by turning the user data into a well-crafted personalised notification and email messages that turn your customers into your fans.Content Marketing",
    },
    {
      icon: <FaEnvelope />,
      title: "Content Marketing",
      description:
        "In digital marketing, content is the king, and we at VOSO DMS are focused on creating and implementing content that sells. We do extensive keyword research before creating any piece of content, ensuring that the content is as unique as the business you have. A well-put-together and bespoke content marketing strategy ensures that you succeed on the web. Get #tags that trend, blog posts that are well researched, and website copy that sells.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Graphic And Web Design",
      description:
        "Get a beautiful, reactive, and SEO-optimised website at a price that doesn't break the bank, but packs a punch. VOSO DMS specialises in creating websites that are SEO optimised as well as soothing to the eyes. VOSO DMS provides world-class web design and development services that focus on developing websites with fast and intuitive user interfaces and content that gets you ranked on the SERP.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Marketing",
      description:
        "Get your products on major e-commerce platforms and achieve your business goals and objectives. Get your products professionally photographed and ranked on the major e-commerce platforms such as Amazon, Flipkart, Snapdeal, or wherever you are. Get your products ranked on the google shopping network with a product description that sells.",
    },
    {
      icon: <FaCogs />,
      title: "End-to-End Solutions",
      description:
        "Get all your digital marketing, social media marketing, and branding needs satiated with VOSO DMS, from SEO optimization, PPC, PPM, PPL campaigns to content marketing, graphic and web designing all at one place.",
    },
    {
      icon: <FaUserTie />,
      title: "You Are In Focus",
      description:
        "Every strategy is as unique as you are. At VOSO you are in focus and in control of how the campaigns portray your brand image and voice. Each marketing campaign at VOSO is tailor-made to fit your business needs and is executed by our experts to meet your business goals and objectives.",
    },
    {
      icon: <FaGlobe />,
      title: "End-to-End Solutions",
      description:
        "Get all your digital marketing, social media marketing, and branding needs satiated with VOSO DMS, from SEO optimization, PPC, PPM, PPL campaigns to content marketing, graphic and web designing all at one place.",
    },
    {
      icon: <FaUsers />,
      title: "Dedicated Team Of Experts",
      description:
        "We are a team of like-minded people with years of experience in the domain of digital marketing, SEO optimization, paid SEM campaigns, social media optimization and social media marketing, content writing, graphic designing, web development, and branding. Each expert with their years of experience works only for you to make each marketing campaign successful and one of a kind.",
    },
    {
      icon: <FaChartLine />,
      title: "Progressive Approach",
      description:
        "With the approach of continuous and comprehensive evolution, each campaign is carefully crafted for excellence. Each strategy is as unique as you are and tells your story the way you like. Each campaign is thoroughly revised, and each data trail is carefully employed to set each campaign up for success.",
    },
    {
      icon: <FaTrophy />,
      title: "Process For Success",
      description:
        "We at VOSO strategize every aspect of the strategy to set you up for success. From analysing your store traffic to accurately pinpoint the audiences that can be the best convertible into customers to creating and implementing social media strategy that makes you the next big thing on social media, each strategy is tailor-made for success.",
    },
    {
      icon: <FaMedal />,
      title: "Unmatched Experience",
      description:
        "With more than a decade of experience in digital marketing and branding, we are best suited to handle your digital marketing and branding efforts and offer you an all-rounded solution to your digital marketing needs.",
    },
    {
      icon: <FaUsers />,
      title: "Dedicated Team Of Experts",
      description:
        "We are a team of like-minded people with years of experience in the domain of digital marketing, SEO optimization, paid SEM campaigns, social media optimization and social media marketing, content writing, graphic designing, web development, and branding. Each expert with their years of experience works only for you to make each marketing campaign successful and one of the kind",
    },
    {
      icon: <FaLightbulb />,
      title: "Progressive Approach",
      description:
        "With the approach of continuous and comprehensive evolution, each campaign is carefully crafted for excellence. Each strategy is as unique as you are and tells your story the way you like. Each campaign I thoroughly revised, each data trail is carefully employed to set each campaign up for success.",
    },
    {
      icon: <FaChartLine />,
      title: "Process For Success",
      description:
        "We at VOSO strategize every aspect of the strategy to set you up for success. From analysing your store traffic to accurately pinpoint the audiences that can be the best convertible into customers to creating and implementing social media strategy that makes you the next big thing on social media, each strategy is tailor-made for success.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>
        Internet Marketing Service for your business
      </h1>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <h1 className={styles.header}>
        Why Digital Marketing Is The Next Big Thing For You
      </h1>
      <p className={styles.serviceDescription}>
        Digital marketing is an internet marketing service that allows you to
        meet and convert potential customers online. With the power of digital
        marketing increase your sales, boost your business and create an online
        presence that attracts potential prospecting customers to your online
        business. With VOSO Digital marketing services, deploy the power of
        Search engine optimization, Google, Facebook and Instagram ads, Linkedin
        ads, Twitter paid campaigns and more. Unlock unlimited opportunities
        with VOSO digital marketing. Excited aren’t we, so let's scroll down to
        know more.
      </p>
      <Slider {...settings} className={styles.slider}>
        {cardData.map((data, index) => (
          <div className={styles.cardWrapper}>
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{data.icon}</div>
              <h2 className={styles.heading}>{data.title}</h2>
              <p className={styles.paragraph}>{data.description}</p>
              {/* <button className={styles.bt}>
              {data.button} <FaArrowRight />
            </button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page2;
