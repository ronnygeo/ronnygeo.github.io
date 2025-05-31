import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Experience() {
  return (
    <Fade triggerOnce duration={1000}>
      <div className="column small-12 large-6" id="experience">
        <h1>Experience</h1>
        <h3>Rue Gilt Groupe</h3>
      <h4>New York, NY</h4>
      <h5>Sr Manager, Data Science & AI</h5>
      <h6>MAR 2021 - PRESENT</h6>
      <ul className="text-justify">
        <li>Crafting and driving the DS & AI team roadmaps and vision, leveraging data-driven insights from experimentation and analytics, and collaborating with cross-functional team leads and partners to shape innovative solutions.</li>
        <li>Built and led a high-performing team of 8+ members, including data scientists, engineers, and analysts. Successfully rebuilt and managed the team through leadership transitions and shifting business priorities, ensuring consistent delivery, adaptability, and strong team morale.</li>
        <li>Integrated generative AI capabilities into our AI platform, incorporating RAG agents, vector databases, and pre-trained LLMs, while spearheading the adoption of Gen AI use cases at RGG.</li>
        <li>Driving an org-wide initiative to reduce operational costs by decoupling data and compute across warehouses and data lakes using interoperable formats like Iceberg and Delta Lake.</li>
        <li>Architected and led the development of our scalable cloud-based AI platform incorporating concepts like serverless compute, streaming data and inference, accelerating development, slashing model deployment times by more than 50%.</li>
        <li>Designed and developed of a custom scalable deep learning ranking algorithm. Trained on 1TB+ data, it personalizes the homepage for members, enhancing brand and product discovery, generating over than $20M/yr revenue.</li>
        <li>Architecting the transformation of legacy models to state-of-the-art algorithms using fine-tuned CLIP, BERT, and LLMs, shaping next-gen personalization.</li>
        <li>Leading cross functional initiative to enhance search experience on site with semantic and AI search capabilities leveraging LLMs.</li>
      </ul>
      <h5>Senior Data Scientist</h5>
      <h6>JAN 2018 - MAR 2021</h6>
      <ul className="text-justify">
        <li>Led the initiative and owned the development of a custom sequential deep learning recommender (RNNs, TensorFlow), enhancing new member personalization and achieving a 6% activation rate increase and 20% email CTR uplift.</li>
        <li>Spearheaded the engineering and launch of Product Similarity v1 (Spark, NLP), resolving key product discovery issues and generating over $4M in monthly revenue.</li>
        <li>Drove the evolution of product similarity to v2 by integrating computer vision embeddings (ResNet-50), delivering an additional $1.9M in annual incremental revenue.</li>
        <li>Championed the development of a collaborative filtering-based personalization system with advanced logic for pricing and cold-start, achieving a 37% conversion rate increase.</li>
        <li>Innovated an apparel size normalization model, boosting conversion by 5% and significantly reducing returns through a streamlined shopping experience.</li>
        <li>Prototyped and delivered impactful AI solutions including a contextual multi-armed bandits framework (TensorFlow Agents) and a personalized search/sort POC (Elasticsearch with vector embeddings).</li>
      </ul>
      <h3>Rue La La</h3>
      <h4>Boston, MA</h4>
      <h5>Data Scientist (Coop)</h5>
      <h6>Jan 2017 to Aug 2017</h6>
      <ul className="text-justify">
        <li>Developed impactful NLP and computer vision models (Spark, Keras, TensorFlow) and data-driven tools, significantly boosting revenue and operational efficiency.</li>
      </ul>
      <h3>Northeastern University</h3>
      <h4>Boston, MA</h4>
      <h5>Research Assistant</h5>
      <h6>Sep 2016 to Dec 2016</h6>
      <ul className="text-justify">
        <li>Contributed to developing a MEAN stack web application for assessing structural resilience against natural hazards.</li>
      </ul>
      <h3>First Help Financial</h3>
      <h4>Newton, MA</h4>
      <h5>Software Programming Intern</h5>
      <h6>June 2016 to Aug 2016</h6>
      <ul className="text-justify">
        <li>Developed a Django/Jersey web platform, Python data scripts, and an Angular 2 prototype to automate operations and enhance data analytics capabilities.</li>
      </ul>
      <h3>Northeastern University</h3>
      <h4>Boston, MA</h4>
      <h5>Research Assistant</h5>
      <h6>Feb 2016 to Aug 2016</h6>
      <ul className="text-justify">
        <li>Applied machine learning (Python, MongoDB) to analyze social influence dynamics, improving predictive model accuracy through feature engineering.</li>
      </ul>
      <h3>Grey Ocean Analytics</h3>
      <h4>Bengaluru, India</h4>
      <h5>Software Engineer</h5>
      <h6>Feb 2015 to Aug 2015</h6>
      <ul className="text-justify">
        <li>Led a junior team and developed core AI modules (Python, AWS), architected NoSQL databases, and ensured product quality through rigorous testing.</li>
      </ul>
      <h3>Evolvence Capital & Ginza Holdings</h3>
      <h4>Dubai, UAE</h4>
      <h5>DevOps Engineer</h5>
      <h6>Apr 2012 to Dec 2014</h6>
      <ul className="text-justify">
        <li>Managed and deployed diverse IT systems including ERP (MS Dynamics NAV), eCommerce (Magento), CMS, and databases for retail and hospitality.</li>
      </ul>
      </div>
    </Fade>
  );
}

export default Experience;
