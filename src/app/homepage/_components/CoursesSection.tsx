"use client";

import { ArrowRight, GraduationCap, Clock, Users, Star } from 'lucide-react';
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
      className="relative py-16 lg:py-24 overflow-x-hidden dark:bg-[var(--color-courses-bg-dark)]"
      style={{ 
        backgroundColor: 'var(--color-courses-bg-light)',
        color: 'var(--color-courses-text-light)'
      }}
    >
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute w-full h-full opacity-20 dark:opacity-10" 
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

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
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
            Program Unggulan
          </div>
          
          <h1 
            className="text-3xl lg:text-5xl font-bold mb-4 leading-tight dark:text-white"
            style={{ color: 'var(--color-courses-primary)' }}
          >
            Selesaikan Studi Lebih Cepat dengan{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-[var(--color-courses-secondary)]"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--color-courses-primary), var(--color-courses-secondary))'
              }}
            >
              AI untuk Akademik
            </span>
          </h1>
          
          <p 
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed dark:text-[var(--color-courses-muted-dark)]"
            style={{ color: 'var(--color-courses-muted-light)' }}
          >
            Dapatkan dukungan, ide, dan solusi praktis untuk skripsi, tesis, atau disertasi Anda.
          </p>
        </div>

        {/* Main Course Card - Split Layout */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            className="group relative overflow-hidden rounded-3xl shadow-2xl border cursor-pointer transition-all duration-500 hover:shadow-3xl dark:bg-[var(--color-courses-card-dark)] dark:border-white/10"
            style={{
              backgroundColor: 'var(--color-courses-card-light)',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
            onClick={() => handleCourseClick(academicCourse)}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={academicCourse.image} 
                  alt={academicCourse.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-black/20 transition-opacity duration-500 group-hover:opacity-0"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap 
                      size={20} 
                      style={{ color: 'var(--color-courses-primary)' }}
                      className="dark:text-[var(--color-courses-secondary)]"
                    />
                    <span 
                      className="text-sm font-semibold uppercase tracking-wider dark:text-[var(--color-courses-secondary)]"
                      style={{ color: 'var(--color-courses-primary)' }}
                    >
                      {academicCourse.category}
                    </span>
                  </div>

                  <h2 
                    className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white"
                    style={{ color: 'var(--color-courses-primary)' }}
                  >
                    {academicCourse.title}
                  </h2>

                  <p 
                    className="text-base lg:text-lg leading-relaxed mb-6 dark:text-[var(--color-courses-muted-dark)]"
                    style={{ color: 'var(--color-courses-muted-light)' }}
                  >
                    {academicCourse.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-gray-400" />
                      <span className="text-sm dark:text-gray-300" style={{ color: 'var(--color-courses-muted-light)' }}>
                        {academicCourse.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-gray-400" />
                      <span className="text-sm dark:text-gray-300" style={{ color: 'var(--color-courses-muted-light)' }}>
                        {academicCourse.students?.toLocaleString()}+ Peserta
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold dark:text-gray-300" style={{ color: 'var(--color-courses-muted-light)' }}>
                        {academicCourse.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full lg:w-auto"
                  style={{ backgroundColor: 'var(--color-courses-primary)' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(academicCourse);
                  }}
                >
                  Jelajahi Kurikulum
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 lg:mt-12 text-center max-w-2xl mx-auto">
          <h2 
            className="text-xl lg:text-2xl font-bold mb-6 dark:text-white"
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
