import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Jeffery Williams',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Williams has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc2',
        name: 'Dr. Sophia Anderson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Anderson provides expert gynecological care with a focus on holistic women’s health, ensuring comfort and comprehensive treatment plans.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc3',
        name: 'Dr. Priyank Pawar',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Pawar specializes in clinical and cosmetic dermatology, offering personalized skincare routines and advanced treatments for various skin conditions.',
        fees: 1500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc4',
        name: 'Dr. Ethan Carter',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Carter is dedicated to pediatric health, ensuring the well-being of children through compassionate care and up-to-date medical practices.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc5',
        name: 'Dr. Isabella Scott',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Scott has a strong background in neurology, focusing on the diagnosis and treatment of complex nervous system disorders.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Kapoor',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kapoor brings extensive experience in neurological care, specializing in stroke management and chronic migraine treatments.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc7',
        name: 'Dr. Michael Chen',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chen takes a patient-first approach to general medicine, emphasizing lifestyle adjustments and preventive healthcare measures.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc8',
        name: 'Dr. Lucas Bennett',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Bennett is committed to providing top-tier reproductive health services and prenatal care with a supportive and empathetic approach.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc9',
        name: 'Dr. Olivia Collins',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Collins focuses on modern dermatological solutions, helping patients achieve healthy skin through evidence-based treatments.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc10',
        name: 'Dr. Noah Robinson',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Robinson provides comprehensive pediatric care, from routine check-ups to managing acute illnesses in children of all ages.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc11',
        name: 'Dr. Emma Walker',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Walker is an expert in neurophysiology, dedicated to helping patients manage neurological conditions to improve their quality of life.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc12',
        name: 'Dr. James Wright',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Wright utilizes the latest diagnostic tools to treat neurological disorders, with a specific interest in cognitive health.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        available: true
    },
    {
        _id: 'doc13',
        name: 'Dr. Grace Hall',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Hall believes in a collaborative approach to healthcare, working closely with patients to manage chronic conditions effectively.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Daniel Lewis',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Lewis offers advanced gynecological treatments and is dedicated to educating patients about reproductive health and wellness.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Avani Gupta',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Gupta combines medical expertise with aesthetic precision, providing tailored treatments for acne, pigmentation, and skin aging.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]