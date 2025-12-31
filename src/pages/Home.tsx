import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';

export const Home: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <main>
            <Hero />
            <Services />
            <Portfolio />
            <TechStack />
            <Testimonials />
            <CallToAction />
        </main>
    );
};
