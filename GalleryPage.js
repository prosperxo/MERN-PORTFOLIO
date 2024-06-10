import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const images = [
    {
        original: 'images/headshot.jpg',
        thumbnail: 'images/headshot.jpg',
        description: 'Headshot during a photoshoot with Los Angeles skyscraper background',
        originalHeight: '450px',
    },
    {
        original: 'images/snowboarding.jpg',
        thumbnail: 'images/snowboarding.jpg',
        description: 'My new hobby I picked up recently is snowboarding. I hope to snowboard in Japan one day!',
        originalHeight: '450px',
    },
    {
        original: 'images/eating-food.jpg',
        thumbnail: 'images/eating-food.jpg',
        description: 'One of my favorite activities when I am not coding is trying out new restaurants and foods. Here is one of my favorites called 72 and Above known for its good food and gorgeous view. This restaurant is 72 floors high so you can really see the city lights.',
        originalHeight: '450px',
    },
    {
        original: 'images/anime.jpg',
        thumbnail: 'images/anime.jpg',
        description: 'An anime background art using Studio Ghibli inspired artwork I have created with block images. Each square is different and plays a trick on your eyes.',
        originalHeight: '450px',
    },
    {
        original: 'images/coding-snippet.png',
        thumbnail: 'images/coding-snippet.png',
        description: 'This is a coding snippet of my Beaver Detector project using Tensorflow, OpenCV, and Flask.',
        originalHeight: '450px',
    },
    {
        original: 'images/coding-snippet-2.png',
        thumbnail: 'images/coding-snippet-2.png',
        description: 'Another coding snippet of my Beaver Detector project responsible for user data and registration using MySQL and REST APIs.',
        originalHeight: '450px',
    },
    {
        original: 'images/thailand.jpg',
        thumbnail: 'images/thailand.jpg',
        description: 'One of my favorite places to travel is Thailand. This is Phuket beach known for its crystal clear water. The locals here are very friendly and there are people who walk around selling coconuts.',
        originalHeight: '450px',
    },
    {
        original: 'images/vietnam.jpg',
        thumbnail: 'images/vietnam.jpg',
        description: 'My family is Vietnamese so I always love visiting Vietnam. This is the hand bridge in Ba Na Hills. Ba Na Hills is actually an amusement park, water park, and aquarium all in one.',
        originalHeight: '450px',
    },
    {
        original: 'images/moon.jpg',
        thumbnail: 'images/moon.jpg',
        description: 'Beautiful image of the full moon I took with my Canon camera. I like to appreciate the small things in life and was able to capture this photo fully zoomed in on my camera. My favorite photo I have ever took.',
        originalHeight: '450px',
    },
    {
        original: 'images/toast-latte.jpg',
        thumbnail: 'images/toast-latte.jpg',
        description: 'I love coffee! I am always willing to meet up with someone to grab some coffee. This is a coffee I made at home with strawberry, matcha, and oat milk with some strawberry toast on the side.',
        originalHeight: '450px',
    }
];

const GalleryPage = () => {
    return (
        <div>
            <header>
                <img src="android-chrome-192x192.png" alt="This is the favicon logo of my last name Vo" id="favicon-header" />
                <h1>Andy Vo</h1>
                <nav id="global">
                    <a href="index.html">Home</a>
                    <a href="contact.html">Contact</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="order.html">Order</a>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Gallery</h2>
                    <article>
                        <ImageGallery items={images} />
                    </article>
                </section>
            </main>
            <footer>
                <p><cite>&copy; 2024 Andy Vo. All rights reserved.</cite></p>
            </footer>
        </div>
    );
};

export default GalleryPage;
