"use client";

import { ArrowRight, GraduationCap, Briefcase, Camera, ArrowLeft } from 'lucide-react';
import { courses } from '../_data/courses';
import { Course } from '../types';

interface CoursesSectionProps {
  onCourseSelect?: (course: Course) => void;
}

// Map courses to the design layout
const courseMapping = [
  { 
    course: courses[0], 
    level: 'Beginner', 
    icon: GraduationCap, 
    label: 'Akademik', 
    title: 'AI for Akademik',
    description: 'Enhance research capabilities and streamline academic writing.',
    position: 'left' 
  },
  { 
    course: courses[1], 
    level: 'Advanced', 
    icon: Briefcase, 
    label: 'Business', 
    title: 'AI for Bisnis',
    description: 'Strategic implementation for leaders and decision makers.',
    position: 'center' 
  },
  { 
    course: courses[2], 
    level: 'Intermediate', 
    icon: Camera, 
    label: 'Kreator', 
    title: 'AI for Konten Kreator',
    description: 'Automate editing and generate creative assets instantly.',
    position: 'right' 
  },
];

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

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 relative">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mb-6 dark:bg-white/10 dark:border-white/20 dark:text-[var(--color-courses-secondary)]"
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
            Bidang Studi
          </div>
          
          <h1 
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white"
            style={{ color: 'var(--color-courses-primary)' }}
          >
            Tingkatkan karier dan pendidikan Anda melalui{' '}
            <span className="relative inline-block">
              <span 
                className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-[var(--color-courses-secondary)]"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-courses-primary), var(--color-courses-secondary))'
                }}
              >
                pembelajaran inovatif
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
            className="text-lg max-w-2xl mx-auto leading-relaxed dark:text-[var(--color-courses-muted-dark)]"
            style={{ color: 'var(--color-courses-muted-light)' }}
          >
            Pilih jalur Anda. Baik Anda di bidang akademik, bisnis, atau kreatif, kami memiliki kurikulum AI khusus yang dirancang untuk pertumbuhan Anda.
          </p>
        </div>

        {/* Desktop Circular Layout */}
        <div className="relative w-full max-w-6xl h-[800px] lg:h-[600px] mx-auto hidden lg:block">
          {/* Left Circle - Course 1 */}
          <div className="absolute top-0 left-0 lg:left-12 w-[380px] h-[380px] circle-container group z-10 animate-float">
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden border-4 shadow-2xl circle-mask dark:border-gray-800"
                style={{
                  borderColor: 'white',
                  backgroundColor: 'white'
                }}
              >
                <img 
                  src={courseMapping[0].course.image} 
                  alt={courseMapping[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div 
                  className="absolute inset-0 transition-colors duration-500"
                  style={{ backgroundColor: 'rgba(26, 77, 70, 0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0.2)'}
                />
              </div>
              <div 
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 translate-x-4 p-6 rounded-2xl shadow-soft glass-panel border max-w-[220px] transition-all duration-300 group-hover:translate-x-8 group-hover:scale-105 z-20 cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-white/10"
                style={{
                  backgroundColor: 'var(--color-courses-card-light)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
                onClick={() => handleCourseClick(courseMapping[0].course)}
              >
                <div className="flex items-center gap-2 mb-2">
                  {(() => {
                    const Icon = courseMapping[0].icon;
                    return <Icon size={18} style={{ color: 'var(--color-courses-secondary)' }} />;
                  })()}
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-courses-secondary)' }}
                  >
                    {courseMapping[0].level}
                  </span>
                </div>
                <h3 
                  className="text-xl font-bold mb-2 dark:text-white"
                  style={{ color: 'var(--color-courses-primary)' }}
                >
                  {courseMapping[0].title}
                </h3>
                <p 
                  className="text-xs leading-relaxed mb-3 dark:text-[var(--color-courses-muted-dark)]"
                  style={{ color: 'var(--color-courses-muted-light)' }}
                >
                  {courseMapping[0].description}
                </p>
                <a 
                  className="inline-flex items-center text-xs font-semibold transition-colors dark:text-white dark:hover:text-[var(--color-courses-secondary)]"
                  style={{ color: 'var(--color-courses-primary)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCourseClick(courseMapping[0].course);
                  }}
                >
                  Jelajahi Modul{' '}
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Circle - Course 2 */}
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-[420px] h-[420px] circle-container group z-20">
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden border-4 shadow-2xl circle-mask dark:border-gray-800"
                style={{
                  borderColor: 'white',
                  backgroundColor: 'white'
                }}
              >
                <img 
                  src={courseMapping[1].course.image} 
                  alt={courseMapping[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div 
                  className="absolute inset-0 transition-colors duration-500"
                  style={{ backgroundColor: 'rgba(26, 77, 70, 0.1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0.1)'}
                />
              </div>
              <div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-6 rounded-2xl shadow-soft glass-panel border max-w-[240px] text-center transition-all duration-300 group-hover:translate-y-8 group-hover:scale-105 z-30 cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-white/10"
                style={{
                  backgroundColor: 'var(--color-courses-card-light)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
                onClick={() => handleCourseClick(courseMapping[1].course)}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {(() => {
                    const Icon = courseMapping[1].icon;
                    return <Icon size={18} style={{ color: 'var(--color-courses-secondary)' }} />;
                  })()}
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-courses-secondary)' }}
                  >
                    {courseMapping[1].level}
                  </span>
                </div>
                <h3 
                  className="text-xl font-bold mb-2 dark:text-white"
                  style={{ color: 'var(--color-courses-primary)' }}
                >
                  {courseMapping[1].title}
                </h3>
                <p 
                  className="text-xs leading-relaxed mb-3 dark:text-[var(--color-courses-muted-dark)]"
                  style={{ color: 'var(--color-courses-muted-light)' }}
                >
                  {courseMapping[1].description}
                </p>
                <button
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  style={{ backgroundColor: 'var(--color-courses-primary)', color: 'white' }}
                  onClick={() => handleCourseClick(courseMapping[1].course)}
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Circle - Course 3 */}
          <div className="absolute top-12 right-0 lg:right-12 w-[360px] h-[360px] circle-container group z-10 animate-float-delayed">
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden border-4 shadow-2xl circle-mask dark:border-gray-800"
                style={{
                  borderColor: 'white',
                  backgroundColor: 'white'
                }}
              >
                <img 
                  src={courseMapping[2].course.image} 
                  alt={courseMapping[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div 
                  className="absolute inset-0 transition-colors duration-500"
                  style={{ backgroundColor: 'rgba(26, 77, 70, 0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 77, 70, 0.2)'}
                />
              </div>
              <div 
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 -translate-x-4 p-6 rounded-2xl shadow-soft glass-panel border max-w-[220px] transition-all duration-300 group-hover:-translate-x-8 group-hover:scale-105 z-20 text-right cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-white/10"
                style={{
                  backgroundColor: 'var(--color-courses-card-light)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
                onClick={() => handleCourseClick(courseMapping[2].course)}
              >
                <div className="flex items-center justify-end gap-2 mb-2">
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-courses-secondary)' }}
                  >
                    {courseMapping[2].level}
                  </span>
                  {(() => {
                    const Icon = courseMapping[2].icon;
                    return <Icon size={18} style={{ color: 'var(--color-courses-secondary)' }} />;
                  })()}
                </div>
                <h3 
                  className="text-xl font-bold mb-2 dark:text-white"
                  style={{ color: 'var(--color-courses-primary)' }}
                >
                  {courseMapping[2].title}
                </h3>
                <p 
                  className="text-xs leading-relaxed mb-3 dark:text-[var(--color-courses-muted-dark)]"
                  style={{ color: 'var(--color-courses-muted-light)' }}
                >
                  {courseMapping[2].description}
                </p>
                <a 
                  className="inline-flex items-center text-xs font-semibold transition-colors flex-row-reverse dark:text-white dark:hover:text-[var(--color-courses-secondary)]"
                  style={{ color: 'var(--color-courses-primary)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCourseClick(courseMapping[2].course);
                  }}
                >
                  Mulai Membuat{' '}
                  <ArrowLeft size={14} className="mr-1 transform rotate-180" />
                </a>
              </div>
            </div>
          </div>

          {/* Decorative dots */}
          <div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full animate-pulse opacity-20"
            style={{ backgroundColor: 'var(--color-courses-secondary)' }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full animate-bounce opacity-10"
            style={{ backgroundColor: 'var(--color-courses-primary)' }}
          />
          <div 
            className="absolute top-10 left-1/2 w-2 h-2 rounded-full opacity-30"
            style={{ backgroundColor: 'var(--color-courses-primary)' }}
          />
        </div>

        {/* Mobile Stacked Layout */}
        <div className="lg:hidden flex flex-col gap-12 w-full max-w-md">
          {courseMapping.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.course.id} className="group relative">
                <div 
                  className="aspect-square rounded-full overflow-hidden border-4 shadow-xl w-64 h-64 mx-auto mb-6 relative dark:border-gray-800"
                  style={{
                    borderColor: 'white',
                    backgroundColor: 'white'
                  }}
                >
                  <img 
                    src={item.course.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="p-6 rounded-2xl shadow-lg border text-center relative -mt-12 mx-4 z-10 cursor-pointer dark:bg-[var(--color-courses-card-dark)] dark:border-gray-800"
                  style={{
                    backgroundColor: 'var(--color-courses-card-light)',
                    borderColor: 'rgba(229, 231, 235, 1)'
                  }}
                  onClick={() => handleCourseClick(item.course)}
                >
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase"
                    style={{
                      backgroundColor: 'rgba(212, 180, 131, 0.1)',
                      color: 'var(--color-courses-secondary)'
                    }}
                  >
                    {item.label}
                  </span>
                  <h3 
                    className="text-xl font-bold mb-2 dark:text-white"
                    style={{ color: 'var(--color-courses-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm mb-4 dark:text-[var(--color-courses-muted-dark)]"
                    style={{ color: 'var(--color-courses-muted-light)' }}
                  >
                    {item.description}
                  </p>
                  <a 
                    className="text-sm font-semibold transition-colors dark:text-white dark:hover:text-[var(--color-courses-secondary)]"
                    style={{ color: 'var(--color-courses-primary)' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCourseClick(item.course);
                    }}
                  >
                    Lihat Kurikulum →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center max-w-2xl mx-auto">
          <h2 
            className="text-2xl font-bold mb-6 dark:text-white"
            style={{ color: 'var(--color-courses-primary)' }}
          >
            Tidak yakin jalur mana yang tepat untuk Anda?
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
