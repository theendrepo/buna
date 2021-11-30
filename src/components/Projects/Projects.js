import React from 'react'
import {Link} from 'gatsby'
import useHomeQuery from '../hooks/useHomeQuery'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {Navigation, Pagination, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/secondary.css';

const Projects = () => {
    const homeData = useHomeQuery();
    let projects = [];

    if(homeData.wpPage.projects) projects = homeData.wpPage.projects.projects;
    if(!projects.length) return <></>;

    return (
        <section className="projects-wrap">
          {projects && 
            <div className="projects">
              <h2 className="gray-title">Projects</h2>
              <div className="" style={{marginTop:'150px'}} >
              <Swiper className="swiper-desktop"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} >
                    {projects.map((project)=>
                      <SwiperSlide>
                        <div className="project">
                          <div className="project__image">
                            <GatsbyImage image={getImage(project.image.localFile)} alt={project.title} />
                            {/* <img
                              src={project.image.localFile.url}
                            /> */}
                          </div>
                          <div className="project__title title-lg">{project.title}</div>
                          <div className="project__category">{project.category}</div>
                        </div>
                      </SwiperSlide>
                    )}
              </Swiper>
              <Swiper className="swiper-mobile"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} >
                    {projects.map((project)=>
                      <SwiperSlide>
                        <div className="project">
                          <div className="project__image">
                            <GatsbyImage image={getImage(project.image.localFile)} alt={project.title} />
                          </div>
                          <div className="project__title title-lg">{project.title}</div>
                          <div className="project__category">{project.category}</div>
                        </div>
                      </SwiperSlide>
                    )}
              </Swiper>
              </div>
              <div className="projects__btn flex-j-c">
                <Link
                  to="/collection"
                  className="button button--gray" >
                    All Projects
                </Link>
              </div>
            </div>
          }
        </section>
    )
}

export default Projects
