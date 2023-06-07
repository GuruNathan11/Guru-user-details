// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function JobApplicationForm() {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [experience, setExperience] = useState('');
//   const [ctc, setCtc] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('userName', userName);
//       formData.append('email', email);
//       formData.append('mobile', mobile);
//       formData.append('experience', experience);
//       formData.append('ctc', ctc);
//       formData.append('file', file);
//       await axios.post('https://ens-job-apply.onrender.com/api/upload', formData);
//       toast.success('Successfully applied for the job!', {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000, // 3 seconds
//       });
//       // Reset form fields
//       setUserName('');
//       setEmail('');
//       setMobile('');
//       setExperience('');
//       setCtc('');
//       setFile(null);
//     } catch (error) {
//       toast.error('Failed to apply for the job!', {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000, // 3 seconds
//       });
//     }
//   };

//   return (
//     <div className='form-container'>
//       <h1 className='form-heading'>Elon Native System</h1>
//       <h2 className='form-subheading'>Job Application</h2>
//       <div className='form-box'>
//         <form onSubmit={handleSubmit} className='job-form'>
//           <div className='form-group'>
//             <label className='form-label'>User Name:</label>
//             <input className='form-input' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your Full Name' />
//           </div>
//           <div className='form-group'>
//             <label className='form-label'>Email:</label>
//             <input className='form-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Active Email Address' />
//           </div>
//           <div className='form-group'>
//             <label className='form-label'>Mobile:</label>
//             <input className='form-input' type='tel' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Active Mobile Number' />
//           </div>
//           <div className='form-group'>
//             <label className='form-label'>Experience:</label>
//             <select className='form-input' value={experience} onChange={(e) => setExperience(e.target.value)}>
//               <option value=''>Select Experience</option>
//               <option value='1 Year'>1 Year</option>
//               <option value='2 Years'>2 Years</option>
//               <option value='3 Years'>3 Years</option>
//               {/* Add more options for different experience levels */}
//             </select>
//           </div>
//           <div className='form-group'>
//             <label className='form-label'>CTC:</label>
//             <input className='form-input' type='text' value={ctc} onChange={(e) => setCtc(e.target.value)} placeholder='Expected CTC in Lahks' />
//           </div>
//           <div className='form-group'>
//             <label className='form-label'>Resume:</label>
//             <input className='form-input' type='file' onChange={(e) => setFile(e.target.files[0])} />
//           </div>
//           <button type='submit' className='form-submit'>Submit</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default JobApplicationForm;

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobApplicationForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  // const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [ctc, setCtc] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !mobile || !experience || !ctc || !file) {
      toast.error('Please fill in all the fields!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('userName', userName);
      formData.append('email', email);
      formData.append('mobile', mobile);
      // formData.append('role', role);
      formData.append('experience', experience);
      formData.append('ctc', ctc);
      formData.append('file', file);
      await axios.post('https://ens-job-apply.onrender.com/api/upload', formData);
      toast.success('Successfully applied for the job!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
      // Reset form fields
      setUserName('');
      setEmail('');
      setMobile('');
      // setRole('');
      setExperience('');
      setCtc('');
      setFile('');
    } catch (error) {
      toast.error('Failed to apply for the job!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
      });
    }
  };

  return (
    <div className='form-container'>
      <h1 className='form-heading'>Elon Native System</h1>
      <h2 className='form-subheading'>Job Application</h2>
      <div className='form-box'>
        <form onSubmit={handleSubmit} className='job-form'>
          <div className='form-group'>
            <label className='form-label'>User Name:</label>
            <input className='form-input' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your Full Name' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Email:</label>
            <input className='form-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Active Email Address' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Mobile:</label>
            <input className='form-input' type='tel' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Active Mobile Number' />
          </div>
          {/* <div className='form-group'>
            <label className='form-label'>Role:</label>
            <select className='form-input'  value={role} onChange={(e) => setRole(e.target.value)} >
            <option value=''>Select Role</option>
              <option value='Software Engineer'>Software Engineer</option>
              <option value='Quality Assurance'>Quality Assurance</option>
              <option value='Dev-ops'>Dev-ops</option>
              <option value='Server Engineer'>Server Engineer</option>
              <option value='Business Analyst'>Business Analyst</option>
              </select>
          </div> */}
          <div className='form-group'>
            <label className='form-label'>Experience:</label>
            <select className='form-input' value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value=''>Select Experience</option>
              <option value='Fresher'>Fresher</option>
              <option value='0-1 Year'>0-1 Year</option>
              <option value='1-2 Years'>1-2 Years</option>
              <option value='Above 2-Years'>Above 2-Years</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='form-group'>
            <label className='form-label'>CTC:</label>
            <select className='form-input' type='text' value={ctc} onChange={(e) => setCtc(e.target.value)} >
            <option value=''>Select Expected CTC</option>
              <option value='0-1 Lahks'>0-1 Lahks</option>
              <option value='1-2 Lahks'>1-2 Lahks</option>
              <option value='Above 2-Lahks'>Above 2-Lahks</option>
              </select>
          </div>
          <div className='form-group'>
            <label className='form-label'>Resume:</label>
            <input className='form-input' type='file' onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <button type='submit' className='form-submit'>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default JobApplicationForm;
