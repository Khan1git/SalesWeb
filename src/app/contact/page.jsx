'use client'

import './page.css'

const page = () => {
  return (
    <section id='contact'>
      <div className="main">
        <div className="side">
          Thanks for your interest
        </div>
        <div className="fields">
          <input type="text" placeholder='Enter name...' />
          <input type="text" placeholder='Enter email...' />
          <textarea placeholder='Message' rows={4} cols={25} />
          <button>send</button>
        </div>
      </div>
    </section>
  )
}

export default page
