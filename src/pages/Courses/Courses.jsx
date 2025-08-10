import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'Explore creativity through painting, sculpture, and design at VIT, where students are encouraged to express themselves and develop unique artistic styles.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Gain a strong foundation in entrepreneurship, marketing, and management to excel in the global business landscape with hands-on learning at VIT.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Master the latest technologies in programming, AI, and data science through innovative projects and expert mentorship at VIT.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Prepare to inspire the next generation with modern teaching methods, classroom strategies, and practical training at VIT.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Learn essential healthcare skills with a focus on patient care, medical ethics, and community health through VIT’s advanced facilities.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'Understand legal systems, constitutional law, and justice principles while building strong analytical and advocacy skills at VIT.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Develop your musical talent through theory, composition, and performance training under skilled faculty at VIT.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Enhance your athletic skills and knowledge in sports science, coaching, and fitness management with VIT’s world-class sports facilities.'
    },
];


function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>VIT University is committed to excellence in education, offering innovative programs that combine strong academic foundations with real-world applications.
                     Our dedication to quality and student success sets us apart as a leader in higher education.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;