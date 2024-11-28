import React from 'react';

export const Projects = () => {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-dark">ข้อมูลนักศึกษา</h1>
        </div>

        {/* Featured Project Row */}
        <div className="row gx-5 mb-5 align-items-center">
          <div className="col-xl-5 col-lg-6 mb-4">
            <img className="img-fluid shadow rounded" src="assets/img/rmu.jpg" alt="RMU Logo" />
          </div>
          <div className="col-lg-7">
            <div className="text-lg-left text-white p-4 rounded shadow">
              <h2 className="text-primary">มหาวิทยาลัยราชภัฏมหาสารคาม</h2>
              <h6 className="text-muted mb-4">
                มุ่งสร้างนักศึกษาที่มีคุณภาพและคุณธรรม พร้อมนำความรู้สู่การพัฒนาสังคม
              </h6>
            </div>
          </div>
        </div>

        {/* Project One Row */}
        <div className="row gx-5 mb-5 align-items-center justify-content-center">
          <div className="col-lg-3 mb-4">
            <img
              className="rounded-circle shadow img-fluid"
              src="assets/img/it02.jpg"
              alt="IT Department Logo"
            />
          </div>
          <div className="col-lg-7">
            <div className=" text-white p-4 rounded shadow">
              <h3 className="text-center mb-3 text-primary">คณะ / สาขา</h3>
              <p className="mb-1 text-dark text-center">คณะ: เทคโนโลยีสารสนเทศ</p>
              <p className="mb-1 text-dark text-center">สาขา: เทคโนโลยีสารสนเทศ</p>
              <p className="mb-1 text-dark text-center">ชั้นปีการศึกษา: ปีที่ 3</p>
              <p className="mb-0 text-dark text-center">เกรดเฉลี่ย (GPA): 3.6</p>
            </div>
          </div>
        </div>

        {/* Project Two Row */}
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-6 mb-4">
            <img
              className="img-fluid shadow rounded img-thumbnail"
              src="assets/img/jrp.jpg"
              alt="School Image"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-white p-4 rounded shadow">
              <h3 className="text-center mb-3 text-primary">โรงเรียนมัธยม</h3>
              <p className="text-center mb-0 text-dark">โรงเรียนจุตรพักตรพิมานรัชดาภิเษก</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;