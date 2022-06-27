// import PropTypes from 'prop-types';
// import style from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">xcv</h2>}
        <ul className="stat-list">
          {stats.map(stat => {
            return (
              <li key={stat.id} className="item">
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
