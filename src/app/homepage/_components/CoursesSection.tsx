"use client";

import { ArrowRight, GraduationCap } from 'lucide-react';
import { courses } from '../_data/courses';
import { Course } from '../types';

interface CoursesSectionProps {
  onCourseSelect?: (course: Course) => void;
}

// Get only the academic course
const academicCourse = courses[0];

export function CoursesSection({ onCourseSelect }: CoursesSectionProps) {
  const handleCourseClick = (course: Course) => {
    if (onCourseSelect) {
      onCourseSelect(course);
    }
  };

  return (
    <section 
      id="pages" 
      className="relative py-12 lg:py-20 overflow-x-hidden dark:bg-[var(--color-courses-bg-dark)]"
      style={{ 
        backgroundColor: 'var(--color-courses-bg-light)',
        color: 'var(--color-courses-text-light)'
      }}
    >
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-30 dark:opacity-20" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 900" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            className="path-glow" 
            d="M200,300 C400,100 600,500 720,450 C840,400 1000,700 1200,600" 
            stroke="url(#gradient-line)" 
            strokeLinecap="round" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#1A4D46" stopOpacity="0" className="dark:stop-color-white" />
              <stop offset="50%" stopColor="#D4B483" />
              <stop offset="100%" stopColor="#1A4D46" stopOpacity="0" className="dark:stop-color-white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4 lg:py-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 relative">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mb-4 dark:bg-white/10 dark:border-white/20 dark:text-[var(--color-courses-secondary)]"
            style={{
              backgroundColor: 'rgba(26, 77, 70, 0.05)',
              borderColor: 'rgba(26, 77, 70, 0.1)',
              color: 'var(--color-courses-primary)'
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse-slow"
              style={{ backgroundColor: 'var(--color-courses-secondary)' }}
            />
            Jalur Belajar
          </div>
          
          <h1 
            className="text-4xl lg:text-6xl font-bold mb-4 leading-none dark:text-white"
            style={{ color: 'var(--color-courses-primary)' }}
          >
            Tingkatkan karir dan pendidikan Anda melalui{' '}
            <span className="relative inline-block">
              <span 
                className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-[var(--color-courses-secondary)]"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-courses-primary), var(--color-courses-secondary))'
                }}
              >
                pembelajaran AI yang inovatif
              </span>
              <svg 
                className="absolute w-full h-3 -bottom-1 left-0 opacity-40" 
                fill="none" 
                viewBox="0 0 200 9" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'var(--color-courses-secondary)' }}
              >
                <path 
                  d="M2.00025 6.99997C25.7501 2.49994 132.5 -1.50005 197.999 4.49996" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>
          
          <p 
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed dark:text-[var(--color-courses-muted-dark)]"
            style={{ color: 'var(--color-courses-muted-light)' }}
          >
            Selesaikan studi dan riset lebih mudah dengan AI. Dapatkan dukungan, ide, dan solusi praktis untuk skripsi, tesis, atau disertasi Anda.
          </p>
        </div>

        {/* Desktop Centered Layout - Single Course */}
        <div className="relative w-full max-w-4xl mx-auto hidden lg:block mb-32">
          <div className="flex flex-col items-center">
            {/* Main Circle */}
            <div className="w-[500px] h-[500px] circle-container group z-10 animate-float mb-8">
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 rounded-full overflow-hidden border-4 shadow-2xl circle-mask dark:border-gray-800"
                  style={{
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }}
                >
                  <img 
                    src="/images/course-section/ai for academic.avif" 
                    alt="AI untuk Akademik"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div 
                    className="absolute inset-0 transition-colors duration-500"
                    style={{ backgroundColor: 'rgba(26, 77, 70, 0.2)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0.2)'}
                  />
                </div>
              </div>
            </div>

            {/* Course Card Below */}
            <div 
              className="p-8 rounded-2xl shadow-soft glass-panel border max-w-[500px] mx-auto text-center transition-all duration-300 group-hover:scale-105 cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-white/10"
              style={{
                backgroundColor: 'var(--color-courses-card-light)',
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }}
              onClick={() => handleCourseClick(academicCourse)}
            >
              <h3 
                className="text-3xl font-bold mb-4 dark:text-white"
                style={{ color: 'var(--color-courses-primary)' }}
              >
                AI untuk Akademik
              </h3>
              <p 
                className="text-base leading-relaxed mb-6 dark:text-[var(--color-courses-muted-dark)]"
                style={{ color: 'var(--color-courses-muted-light)' }}
              >
                Capai studi dan riset lebih mudah bersama komunitas AI. Dapatkan dukungan, ide, dan solusi praktis untuk skripsi, tesis, atau disertasi Anda.
              </p>
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors text-white"
                style={{ backgroundColor: 'var(--color-courses-primary)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCourseClick(academicCourse);
                }}
              >
                Jelajahi Kurikulum{' '}
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="lg:hidden flex flex-col gap-12 w-full max-w-md">
          <div className="group relative">
            <div 
              className="aspect-square rounded-full overflow-hidden border-4 shadow-xl w-64 h-64 mx-auto mb-6 relative dark:border-gray-800"
              style={{
                borderColor: 'white',
                backgroundColor: 'white'
              }}
            >
              <img 
                src={academicCourse.image} 
                alt="AI untuk Akademik"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="p-6 rounded-2xl shadow-lg border text-center relative -mt-12 mx-4 z-10 cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-gray-800"
              style={{
                backgroundColor: 'var(--color-courses-card-light)',
                borderColor: 'rgba(229, 231, 235, 1)'
              }}
              onClick={() => handleCourseClick(academicCourse)}
            >
              <h3 
                className="text-2xl font-bold mb-2 dark:text-white"
                style={{ color: 'var(--color-courses-primary)' }}
              >
                AI untuk Akademik
              </h3>
              <p 
                className="text-base mb-4 dark:text-[var(--color-courses-muted-dark)]"
                style={{ color: 'var(--color-courses-muted-light)' }}
              >
                Capai studi dan riset lebih mudah bersama komunitas AI. Dapatkan dukungan, ide, dan solusi praktis untuk skripsi, tesis, atau disertasi Anda.
              </p>
              <a 
                className="text-base font-semibold transition-colors dark:text-white dark:hover:text-[var(--color-courses-secondary)]"
                style={{ color: 'var(--color-courses-primary)' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleCourseClick(academicCourse);
                }}
              >
                Lihat Kurikulum →
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 lg:mt-12 text-center max-w-2xl mx-auto">
          <h2 
            className="text-2xl font-bold mb-6 dark:text-white"
            style={{ color: 'var(--color-courses-primary)' }}
          >
            Siap memulai perjalanan akademik Anda dengan AI?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-0.5 dark:border dark:border-white/10"
              style={{
                backgroundColor: 'var(--color-courses-primary)',
                color: 'white'
              }}
            >
              Ikuti Assessment
            </button>
            <button 
              className="bg-transparent border px-8 py-3 rounded-full font-semibold transition-colors dark:border-gray-700 dark:text-white dark:hover:border-white dark:hover:text-white"
              style={{
                borderColor: 'rgba(156, 163, 175, 1)',
                color: 'var(--color-courses-text-light)'
              }}
            >
              Bicara dengan Penasihat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
