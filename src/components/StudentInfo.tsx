import React, { useState } from 'react';

export function StudentInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-400 rounded-md px-2 py-1 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
      >
        Ananda Nantana
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white rounded-xl shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-start border-b pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-800">ข้อมูลนักศึกษา</h2>
              <p className="text-sm text-gray-500">Student information</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center py-2">
                <div className="w-67 h-67 rounded-md overflow-hidden border-2 border-gray-200 shadow-sm bg-gray-50">
                  <img 
                    src="\src\assets\pic1.JPG" 
                    alt="Ananda Nantana Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block">description</label>
                <p className="text-base font-medium text-gray-900">นักศึกษาชั้นปีที่ 2 คณะวิศวกรรมศาสตร์คอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่</p>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block">Full Name</label>
                <p className="text-base font-medium text-gray-900">Ananda Nantana</p>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block">Student ID</label>
                <p className="text-base font-medium text-gray-900">680610731</p>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block">Email</label>
                <p className="text-base font-medium text-gray-900">ananda_nantana@cmu.ac.th</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-md transition-colors focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
