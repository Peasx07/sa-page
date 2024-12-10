import React from 'react';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="flex min-h-screen font-extralight">
    {/* ข้างๆซ้าย */}
          <header className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-6 flex flex-col items-start z-20">
        <img src="/sa.jpg" alt="School Logo" className="w-300 h-200 mb-4" />
        <h1 className="text-lg font-semibold text-center w-full">
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
          <span className="text-md font-semibold">จัดการรายชื่อนักเรียน</span>
        </div>
      </header>



  
    {/* ตรงหลัก*/}
    <div className="flex flex-1 flex-col ml-64">
      {/* nav ด้านบนไม่มีไรเลย */}
      <nav className="w-full text-white px-6 py-10 border-b-2 border-gray-300">
    </nav>
  
      {/* แถบชื่อตรงกลาง */}
      <main className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className='text-blue-900'>จัดการรายชื่อนักเรียน</span>
            <Link href="/add" legacyBehavior>
             <button className="bg-indigo-800 text-white px-6 py-2 rounded-xl ml-auto flex items-center space-x-2">
            <div className="bg-white rounded-full p-1"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
              </svg>
            </div>
              เพิ่มข้อมูล
            </button> 
            </Link>
            
      </h2>


  
        {/*ตารางหัวข้อ*/}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-left">
              <tr>
              <th className="px-4 py-2 border text-gray-600">ลำดับที่</th>
                  <th className="px-4 py-2 border text-gray-600">ชื่อ</th>
                  <th className="px-4 py-2 border text-gray-600">นามสกุล</th>
                  <th className="px-4 py-2 border text-gray-600">เบอร์โทร</th>
                  <th className="px-4 py-2 border text-gray-600">อีเมล</th>
                  <th className="px-4 py-2 border text-gray-600">สถานะ</th>
                  <th className="px-4 py-2 border text-gray-600">action</th>
              </tr>
            </thead>
            {/*ตารางเนื้อหา*/}
            <tbody>
            <tr className="hover:bg-gray-300 even:bg-white">
                  <td className="px-4 py-2 text-gray-500">{1}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 bg-gray-200">
                  <td className="px-4 py-2 text-gray-500">{2}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 even:bg-white">
                  <td className="px-4 py-2 text-gray-500">{3}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 bg-gray-200">
                  <td className="px-4 py-2 text-gray-500">{4}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 even:bg-white">
                  <td className="px-4 py-2 text-gray-500">{5}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 bg-gray-200">
                  <td className="px-4 py-2 text-gray-500">{6}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 even:bg-white">
                  <td className="px-4 py-2 text-gray-500">{7}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 bg-gray-200">
                  <td className="px-4 py-2 text-gray-500">{8}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 even:bg-white">
                  <td className="px-4 py-2 text-gray-500">{9}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-300 bg-gray-200">
                  <td className="px-4 py-2 text-gray-500">{10}</td>
                  <td className="px-4 py-2 text-gray-500">สมชาย</td>
                  <td className="px-4 py-2 text-gray-500">ใจดี</td>
                  <td className="px-4 py-2 text-gray-500">0808001234</td>
                  <td className="px-4 py-2 text-gray-500">somchai@mail.com</td>
                  <td className="px-4 py-2 text-gray-500">
                    <span className="text-green-500">ใช้งาน</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 flex space-x-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
        {/* ปุ่มก่อน กะ ปุ่มถัดไป */}
          <div className="flex justify-end items-center mt-4 space-x-4">
            <button className="text-gray-500 border-b-2 border-gray-300 pb-0 hover:text-gray-700">ก่อนหน้า</button> {/* ปรับให้ pb-0 */}
        <div className="flex items-center space-x-2">
          <span className="bg-blue-800 text-white px-4 py-2 rounded-xl">1</span>
        </div>
        <button className="text-gray-500 border-b-2 border-gray-300 pb-0 hover:text-gray-700">ถัดไป</button> {/* ปรับให้ pb-0 */}
      </div>

      </main>
    </div>
  </div>
  
  

  );

}
