"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';

export default function Add() {
  
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  // ฟังก์ชันจัดการสวิตช์
  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  // ฟังก์ชันจัดการส่งข้อมูล
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการ reload หน้าเว็บ
    console.log("ข้อมูลที่กรอก:", { name, studentId, email });

    // รีเซ็ตข้อมูลในฟอร์ม
    setName("");
    setStudentId("");
    setEmail("");
  };
  

  return (
    <div className="text-black flex min-h-screen font-extralight">
      {/* ข้างๆซ้าย */}
      <header className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-6 flex flex-col items-start z-20">
        <img src="/sa.jpg" alt="School Logo" className="w-300 h-200 mb-4" />
        <h1 className="text-black text-lg font-semibold text-center w-full">
          ระบบจัดเก็บข้อมูล<br />โรงเรียนสตรีอ่างทอง
        </h1>

        {/* จัดการชื่อนร */}
        <div className="flex items-center mt-4 w-full border-t border-gray-300">
          <div className="p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          </div>
          <span className="text-md font-semibold ">จัดการรายชื่อนักเรียน</span>
        </div>
      </header>

      {/* ตรงหลัก */}
      <div className="flex flex-1 flex-col ml-64">
        {/* nav ด้านบน */}
        <nav className="w-full text-white px-6 py-5 border-b-2 border-gray-300 pr-20">
          <img src="/pp.jpg" alt="School Logo" className="  w-30 h-10 float-right rounded-full" />
        </nav>

        {/* แถบชื่อตรงกลาง */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Link href="../" legacyBehavior><span className='text-blue-700 underline'>จัดการรายชื่อนักเรียน</span></Link>
            <span className='ml-4 text-blue-900'> &gt; สร้างรายชื่อนักเรียน</span>
          </h2>
          <div className='text-gray-800 text-1xl'> ข้อมูลเบื้องต้น</div>

        
          {/* ฟอร์มกรอกข้อมูล */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-40"> 
              {/* ข้อมูลซ้าย */}
              <div className="flex-1 space-y-6">
                {/* ชื่อ */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                      placeholder=""
                    />
                    <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                      <span className="block leading-none text-black">ชื่อ</span>
                      <span className="block text-xs leading-none">กรุณากรอกชื่อ</span>
                    </div>
                  </div>
                </div>

                {/* เบอร์โทรศัพท์ */}
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="n"
                      className="w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                      placeholder=""
                    />
                    <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                      <span className="block leading-none text-black">เบอร์โทรศัพท์</span>
                      <span className="block text-xs leading-none">กรุณากรอกเบอร์โทรศัพท์</span>
                    </div>
                  </div>
                </div>

                {/* ที่อยู่ */}
                <div>
                  <label htmlFor="at" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="at"
                      className="w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                      placeholder=""
                    />
                    <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                      <span className="block leading-none text-black">ที่อยู่</span>
                      <span className="block text-xs leading-none">กรุณากรอกที่อยู่</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ข้อมูลขวา */}
              <div className="flex-1 space-y-6 pr-20">
                {/* นามสกุล */}
                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="surname"
                      className="w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                      placeholder=""
                    />
                    <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                      <span className="block leading-none text-black">นามสกุล</span>
                      <span className="block text-xs leading-none">กรุณากรอกนามสกุล</span>
                    </div>
                  </div>
                </div>

                {/* อีเมล */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      className="w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                      placeholder=""
                    />
                    <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                      <span className="block leading-none text-black">อีเมล</span>
                      <span className="block text-xs leading-none">กรุณากรอกอีเมล</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* ชั้นเรียน */}
                  <div className="space-y-4 ">
                    <div className="text-gray-800 text-1xl">ชั้นเรียน</div>
                    <div className="relative">
                      <select
                        id="class"
                        className="max-w-[530px] w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                        defaultValue="" // Set defaultValue here
                      >
                        <option value="" disabled hidden>
                          กรุณาเลือกชั้นปี
                        </option>
                        {Array.from({ length: 6 }, (_, i) => (
                          <option key={i + 1} value={`6/${i + 1}`}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-1 text-black pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-placeholder-shown:opacity-100 peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs">
                        ชั้นปีที่
                      </div>
                    </div>

                    {/* ห้อง */}
                    <div className="relative">
                      <select
                        id="room"
                        className="max-w-[530px] w-full  p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer"
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          กรุณาเลือกห้อง
                        </option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={`Room ${i + 1}`}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-1 text-black pointer-events-none transition-opacity duration-200 peer-focus:opacity-0 peer-placeholder-shown:opacity-100 peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-xs">
                        ห้องที่
                      </div>
                    </div>
                  </div>
                        
                      
                  {/* หมายเหตุ */}
                    <div className="w-full text-white border-2 border-gray-300"> </div>
                    <div className="relative mt-4">
                      <textarea
                        id="het"
                        className="max-w-[530px] w-full p-4 pt-6 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm peer resize-none h-24"
                        placeholder=""
                      ></textarea>
                      <div className="absolute left-3 top-2 text-gray-400 pointer-events-none transition-opacity duration-200 peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                        <span className="block leading-none text-black">หมายเหตุ</span>
                        <span className="block text-xs leading-none">กรุณากรอกหมายเหตุ</span>
                      </div>
                      {/* สถานะ */}
                    <div className="text-gray-900 block mt-2"> 
                      สถานะการใช้งาน
                        {/* ปุ่มเปิดปิด */}
                        <div className="mt-1"> 
                        <label className="relative cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isEnabled}
                            onChange={handleToggle}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition duration-300"></div>
                          <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
                        </label>
                        </div>
                      </div>
                    </div>
                        
                    <div className="w-full text-white border-2 border-gray-300"> </div>
                    
                      {/* ปุ่มบันทึก/ย้อนกลับ] */}
                      <div>
                      <Link href="../" legacyBehavior>
                        <button type="submit" className="px-10 py-1 bg-blue-800 text-white rounded-lg hover:bg-blue-600 ">
                          บันทึก
                        </button>
                        </Link>

                        <Link href="../" legacyBehavior>
                        <button 
                            type="submit" 
                            className="ml-5 px-10 py-1 bg-white text-blue-800 border-2 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white hover:border-blue-600">
                            ย้อนกลับ
                          </button>
                          </Link>
                      </div>
          </form>
        </main>
      </div>
    </div>
  );
}
