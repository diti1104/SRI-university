import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Campus Life at VIT',
        description: 'Life at VIT is a perfect mix of academics, culture, and fun. From high-energy cultural fests to late-night coding marathons, students enjoy a vibrant, collaborative atmosphere every day.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Academic Excellence',
        description: 'VIT is known for its strong academic foundation, with experienced faculty, innovative teaching methods, and an emphasis on practical learning that prepares students for real-world challenges.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Hostel & Accommodation',
        description: 'Our hostels are designed to make students feel at home — clean rooms, reliable Wi-Fi, healthy meals, and a safe, supportive environment for studying and relaxing.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'International Collaborations',
        description: 'VIT partners with top universities worldwide, giving students access to exchange programs, joint research projects, and global learning opportunities.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Sports & Recreation',
        description: 'With state-of-the-art sports facilities, dedicated trainers, and active student clubs, VIT ensures that students stay fit, competitive, and balanced alongside their academics.'
    },
    // Blogs 6 to 9 remain unchanged
    {
        id: 6,
        img: [Blog6Img],
        title: 'Placements & Career Opportunities',
        description: 'VIT has an excellent placement record, with top companies recruiting students every year across various domains.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Student Achievements',
        description: 'Read about the inspiring achievements of VIT students in academics, entrepreneurship, innovation, and community service.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Research & Innovation',
        description: 'VIT promotes a strong research culture, encouraging students and faculty to work on innovative projects and patents.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Events & Festivals',
        description: 'From Riviera to Gravitas, VIT hosts some of India’s biggest college festivals, blending cultural diversity with technical brilliance.'
    },
];
;

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>"VIT offers a dynamic environment where students can explore their passions, build lifelong friendships, and develop essential skills. With a perfect balance of academics, extracurricular activities, and state-of-the-art facilities, every day brings new opportunities to learn, innovate, and grow."</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;