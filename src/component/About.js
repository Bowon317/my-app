import React from 'react'

export const About = () => {
  return (
    <section className="about-section " id="about"> 
    <div className="d-flex justify-content-center my-4">
  <img
    className="rounded-circle img-fluid"
    style={{ maxWidth: '200px', height: 'auto' }}
    src="assets/img/pon.jpg"
    alt="..."
  />
</div>


                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 ">
                            <h1 className="text-warning mb-4">ข้อมูลส่วนบุคคล</h1>
                            <h2 className="text-white mb-3">นาย บวร เหลียวพัฒนพงศ์</h2>
                            <h2 className="text-white mb-3">Bowon Liaophatthanaphong</h2>
                            <h2 className="text-white mb-3">เกิดวันที่ 7 เดือน เพฤศจิกายน พ.ศ. 2545 </h2>
                            <h2 className="text-white mb-3">เพศ : ชาย</h2>
                            <h2 className="text-white mb-3">เลขประจำบัตรประชาชน : 1459900941556</h2>
                            <h2 className="text-white mb-3">สัญชาติ : ไทย  </h2>
                            <h2 className="text-white mb-3"> ศาสนา : พุทธ</h2>
                            
                        </div>
                    </div >
                   <div className="d-flex justify-content-end mt-4">
          <img className="img-fluid" src="assets/img/system.png" alt="..." />
        </div>
                </div>
            </section>
  )
}
export default About