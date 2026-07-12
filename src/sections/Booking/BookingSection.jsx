import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
const BookingSection = () => {
  // Booking States
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInTime, setCheckInTime] = useState('11:00 AM');
  const [checkOutTime, setCheckOutTime] = useState('10:00 AM');
  const [guests, setGuests] = useState(1);
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);
  const [activeDateSelector, setActiveDateSelector] = useState('in'); // 'in' or 'out'
  const [hoveredDate, setHoveredDate] = useState(null);
  
  // Custom Calendar Navigation
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Padding days from previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
        disabled: true,
      });
    }
    
    // Current month days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= totalDays; i++) {
      const dayDate = new Date(year, month, i);
      const isPast = dayDate < today;
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        disabled: isPast,
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  // Month navigation
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Date handlers
  const handleDateClick = (dayDate) => {
    if (activeDateSelector === 'in') {
      setCheckInDate(dayDate);
      // Clear checkout if checkin is after checkout
      if (checkOutDate && dayDate >= checkOutDate) {
        setCheckOutDate(null);
      }
      setActiveDateSelector('out');
    } else {
      if (dayDate <= checkInDate) {
        setCheckInDate(dayDate);
        setCheckOutDate(null);
      } else {
        setCheckOutDate(dayDate);
        setShowCalendarPopup(false);
      }
    }
  };

  // Calculate stats
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  // Format Date for Input
  const formatDateString = (date) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Check if date is in range
  const isDateInRange = (date) => {
    if (!checkInDate) return false;
    if (checkOutDate) {
      return date > checkInDate && date < checkOutDate;
    }
    if (hoveredDate && activeDateSelector === 'out') {
      return date > checkInDate && date < hoveredDate;
    }
    return false;
  };

  const isDateSelected = (date) => {
    return (
      (checkInDate && date.toDateString() === checkInDate.toDateString()) ||
      (checkOutDate && date.toDateString() === checkOutDate.toDateString())
    );
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) return;
    handleWhatsAppRedirect();
  };

  const handleWhatsAppRedirect = () => {
    const checkInStr = checkInDate ? formatDateString(checkInDate) : 'Not Selected';
    const checkOutStr = checkOutDate ? formatDateString(checkOutDate) : 'Not Selected';
    const message = `Hi Dreamy Studios 21, I would like to book Galaxy Blue Sapphire.\n\nCheck-in: ${checkInStr} at ${checkInTime}\nCheck-out: ${checkOutStr} at ${checkOutTime}\nTeam Size: ${guests}\n\nVenue: Galaxy Blue Sapphire\n\nPlease share availability, pricing, and further details.`;
    window.open(`https://wa.me/918700961196?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-32 relative bg-theme-bg z-10 transition-colors duration-700">
      {/* Background Ambience (Optimized GPU radial-gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 169, 106, 0.05) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 169, 106, 0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-warm-beige text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Reservations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl text-theme-text"
          >
            Book Your <span className="italic text-warm-beige">Studio Session</span>
          </motion.h2>
        </div>

        {/* Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Left Column: Visual Summary & Details */}
          <div className="space-y-8 h-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 md:p-10 space-y-6 h-full flex flex-col justify-center"
            >
              <h3 className="font-heading text-2xl text-theme-text">Premium Production Space</h3>
              <p className="text-theme-text/80 leading-relaxed font-normal text-sm">
                Experience high-rise modern luxury at Greater Noida West. With day and night customization, premium ambient lighting, and bespoke design perfect for your next shoot.
              </p>

              <div className="space-y-4 pt-4 border-t border-glass-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Flexible Scheduling</h4>
                    <p className="text-xs text-theme-text-secondary">Day-night visual previews & instant WhatsApp reservation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Seamless Check-in</h4>
                    <p className="text-xs text-theme-text-secondary">Early check-in options and dynamic time selectors</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Tailored Hospitality</h4>
                    <p className="text-xs text-theme-text-secondary">Configurable guest counts up to 4 adults</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-full">
            <AnimatePresence mode="wait">

                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-6 md:p-10 relative overflow-hidden"
                >
                  {/* Decorative glowing lines */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-warm-beige/40 to-transparent"></div>

                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-warm-beige font-mono">Plan Your Shoot</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-heading text-theme-text">Request Pricing</span>
                      </div>
                    </div>
                    <div className="glass px-3 py-1 rounded-full text-xs text-warm-beige border-warm-beige/20">
                      ★ 4.98 (64 Reviews)
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Check In / Out Custom Dropdown Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Check-In selector */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveDateSelector('in');
                          setShowCalendarPopup(true);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                          activeDateSelector === 'in' && showCalendarPopup
                            ? 'border-warm-beige bg-warm-beige/5 shadow-[0_0_15px_rgba(200,169,106,0.1)]'
                            : 'border-glass-border hover:border-warm-beige/40'
                        }`}
                      >
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">Preferred Date</span>
                        <span className="block font-heading text-lg mt-1 truncate">
                          {checkInDate ? formatDateString(checkInDate) : 'Select Date'}
                        </span>
                        <div className="absolute top-4 right-4 text-warm-beige/40">
                          <CalendarIcon size={14} />
                        </div>
                      </button>

                      {/* Check-Out selector */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveDateSelector('out');
                          setShowCalendarPopup(true);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                          activeDateSelector === 'out' && showCalendarPopup
                            ? 'border-warm-beige bg-warm-beige/5 shadow-[0_0_15px_rgba(200,169,106,0.1)]'
                            : 'border-glass-border hover:border-warm-beige/40'
                        }`}
                      >
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">End Date</span>
                        <span className="block font-heading text-lg mt-1 truncate">
                          {checkOutDate ? formatDateString(checkOutDate) : 'Select Date'}
                        </span>
                        <div className="absolute top-4 right-4 text-warm-beige/40">
                          <CalendarIcon size={14} />
                        </div>
                      </button>
                    </div>

                    {/* Check-In / Check-Out Time selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-glass-border hover:border-warm-beige/40 relative">
                        <label className="block text-[10px] uppercase tracking-widest text-theme-text-secondary mb-1">Preferred Time Slot</label>
                        <select 
                          value={checkInTime} 
                          onChange={(e) => setCheckInTime(e.target.value)}
                          className="bg-transparent text-theme-text border-none outline-none font-medium w-full cursor-pointer pr-4 appearance-none focus:ring-0"
                        >
                          <option value="09:00 AM" className="bg-theme-bg text-theme-text">09:00 AM</option>
                          <option value="11:00 AM" className="bg-theme-bg text-theme-text">11:00 AM (Default)</option>
                          <option value="01:00 PM" className="bg-theme-bg text-theme-text">01:00 PM</option>
                          <option value="03:00 PM" className="bg-theme-bg text-theme-text">03:00 PM</option>
                        </select>
                        <div className="absolute top-6 right-4 pointer-events-none text-warm-beige/40">
                          <Clock size={14} />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-glass-border hover:border-warm-beige/40 relative">
                        <label className="block text-[10px] uppercase tracking-widest text-theme-text-secondary mb-1">End Time</label>
                        <select 
                          value={checkOutTime} 
                          onChange={(e) => setCheckOutTime(e.target.value)}
                          className="bg-transparent text-theme-text border-none outline-none font-medium w-full cursor-pointer pr-4 appearance-none focus:ring-0"
                        >
                          <option value="08:00 AM" className="bg-theme-bg text-theme-text">08:00 AM</option>
                          <option value="10:00 AM" className="bg-theme-bg text-theme-text">10:00 AM (Default)</option>
                          <option value="12:00 PM" className="bg-theme-bg text-theme-text">12:00 PM</option>
                          <option value="02:00 PM" className="bg-theme-bg text-theme-text">02:00 PM</option>
                        </select>
                        <div className="absolute top-6 right-4 pointer-events-none text-warm-beige/40">
                          <Clock size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Guests selection */}
                    <div className="p-4 rounded-xl border border-glass-border flex justify-between items-center">
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">Team Size</span>
                        <span className="block font-heading text-lg mt-1">{guests} {guests > 1 ? 'People' : 'Person'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                          className="w-10 h-10 rounded-full border border-glass-border hover:border-warm-beige/50 flex items-center justify-center text-theme-text transition-colors"
                        >
                          -
                        </button>
                        <span className="font-heading font-medium text-lg w-4 text-center">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.min(4, prev + 1))}
                          className="w-10 h-10 rounded-full border border-glass-border hover:border-warm-beige/50 flex items-center justify-center text-theme-text transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>



                    {/* CTA Confirmation Button */}
                    <button
                      type="submit"
                      disabled={!checkInDate || !checkOutDate}
                      className={`w-full py-4 rounded-xl font-medium tracking-widest text-xs uppercase flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden ${
                        checkInDate && checkOutDate 
                          ? 'bg-warm-beige text-[#0F1115] hover:shadow-[0_0_30px_rgba(200,169,106,0.3)] cursor-pointer' 
                          : 'bg-glass-white border border-glass-border text-theme-text/40 cursor-not-allowed'
                      }`}
                    >
                      <ArrowRight size={14} />
                      <span>{checkInDate && checkOutDate ? 'Book via WhatsApp' : 'Please select your preferred date'}</span>
                    </button>
                  </form>

                  {/* Datepicker Floating Glass Popup */}
                  <AnimatePresence>
                    {showCalendarPopup && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-x-2 md:inset-x-6 top-20 z-50 bg-theme-bg border border-warm-beige/40 p-4 md:p-6 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                      >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 border-b border-glass-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs tracking-[0.2em] uppercase font-mono text-warm-beige font-semibold">
                              {activeDateSelector === 'in' ? 'Select Preferred Date' : 'Select End Date'}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowCalendarPopup(false)}
                            className="text-theme-text-secondary hover:text-warm-beige transition-colors p-1.5 rounded-full hover:bg-warm-beige/10"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        {/* Month Selector */}
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-heading text-base font-bold text-theme-text tracking-wide">
                            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                          </h4>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="p-1.5 rounded-full border border-warm-beige/30 text-theme-text hover:text-warm-beige hover:border-warm-beige hover:bg-warm-beige/10 transition-colors cursor-pointer"
                            >
                              <ChevronLeft size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-1.5 rounded-full border border-warm-beige/30 text-theme-text hover:text-warm-beige hover:border-warm-beige hover:bg-warm-beige/10 transition-colors cursor-pointer"
                            >
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono mb-3 text-warm-beige font-bold uppercase tracking-widest border-b border-glass-border/30 pb-2">
                          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                          {days.map((day, idx) => {
                            const selected = isDateSelected(day.date);
                            const inRange = isDateInRange(day.date);
                            const isCheckIn = checkInDate && day.date.toDateString() === checkInDate.toDateString();
                            const isCheckOut = checkOutDate && day.date.toDateString() === checkOutDate.toDateString();

                            return (
                              <button
                                key={idx}
                                type="button"
                                disabled={day.disabled}
                                onMouseEnter={() => !day.disabled && setHoveredDate(day.date)}
                                onMouseLeave={() => setHoveredDate(null)}
                                onClick={() => handleDateClick(day.date)}
                                className={`h-9 w-full rounded-lg text-xs font-semibold transition-all flex items-center justify-center relative ${
                                  !day.isCurrentMonth ? 'text-theme-text-secondary/30 font-normal' : 'text-theme-text'
                                } ${
                                  day.disabled 
                                    ? 'text-theme-text-secondary/30 cursor-not-allowed line-through bg-transparent' 
                                    : 'cursor-pointer hover:bg-warm-beige/25 hover:text-theme-text'
                                } ${
                                  inRange ? 'bg-warm-beige/20 text-warm-beige font-bold' : ''
                                } ${
                                  selected 
                                    ? 'bg-warm-beige text-[#0F1115] font-bold shadow-[0_0_20px_rgba(200,169,106,0.65)] scale-105 z-10' 
                                    : ''
                                }`}
                              >
                                {day.date.getDate()}
                                
                                {/* Micro Indicators */}
                                {isCheckIn && (
                                  <span className="absolute bottom-[2px] w-1.5 h-1.5 bg-[#0F1115] rounded-full"></span>
                                )}
                                {isCheckOut && (
                                  <span className="absolute bottom-[2px] w-1.5 h-1.5 bg-[#0F1115] rounded-full"></span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingSection;
