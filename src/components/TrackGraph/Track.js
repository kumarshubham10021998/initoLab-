import React from 'react'

const Track = () => {
  return (
    <div>
      <section className="chart-con">
        <div className="chart-con__text-content">
          <h1 className="text-center text-dtheme">
            Never miss <span className="an-egg">
              <img className="text-image" src="https://cdn.inito.com/inito_website/an_egg.png" alt="Egg icon" />
              a day
              <img className="strike-through" src="https://cdn.inito.com/inito_website/strike_through.png" alt="Strike-through graphic" />
            </span> again with Inito
          </h1>
          <p className="description">
            Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones in just 10 minutes:
          </p>
          <div className="chart-con__text-content__about">
            <ul>
              <li>
                Estrogen, which rises 3-4 days before ovulation
              </li>
              <li>
                LH, which surges 24-36 hours before ovulation
              </li>
              <li>
                PdG, which rises after ovulation
              </li>
              <li>
                FSH, to track follicle growth
              </li>
            </ul>
          </div>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg" />
          <source media="(min-width: 769px)" srcSet="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png" />
          <img className="v2-homepage-chart" src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png" alt="Hormones graph" />
        </picture>
      </section>
    </div>
  )
}

export default Track
